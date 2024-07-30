---
sidebar_position: 15
---

# AWS Traffic Mirroring

This article explains how to copy network traffic running through a deployed AWS App to another App. For additional information about traffic mirroring, see AWS Documentation.

This is done by calling two hidden commands on the AWS cloud provider via the CloudShell Automation API:

- `CreateTrafficMirroring`: Deploys traffic mirror sessions, traffic targets and filters, and associates them with the sandbox VPC
    
- `RemoveTrafficMirroring`: Tears down traffic mirroring sessions and related AWS resources.
    

## Prerequisites

- Source EC2 instance must be a Nitro-based instance.
    
- Target EC2 instance must have UDP port 4789 opened for traffic from the source instance. You can do this via the Set `AppSecurityGroups` API method, setting the target instance to accept all sandbox traffic or using the **Inbound Ports** attribute on the App template.
    
- Source and target NICs are required for the `CreateTrafficMirroring` call. Starting with *cloudshell-cp-aws* versions 2.4.3.x, NIC has been added to VM Details, to facilitate calling the resource command.
    

## Limitations

- A source network interface may be tapped up to 3 sessions.
    
- A target may have open sessions with up to 10 different sources (some dedicated instance types can have more).
    

For details, see this AWS Documentation page: [Traffic Mirroring Limits and Considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html).

## Command interface

Mandatory parameters are indicated.

### CreateTrafficMirroring

- **DriverRequest**:
    
    - **Actions**: List containing the following:
        
        - **actionId**: (Str)
            
        - **type**: (Mandatory, Str) Must be "CreateTrafficMirroring”
            
        - **actionParams**: List containing the following:
            
            - **type**: (Mandatory, Str) Must be "CreateTrafficMirroringParams”
                
            - **sourceNicId**: (Mandatory, Str) Network interface ID of the source EC2 instance
                
            - **targetNicId**: (Mandatory, Str) Network interface ID of the target EC2 instance (the traffic mirror target)
                
            - **sessionNumber**: (Str) Traffic mirror session number that determines the order in which sessions are evaluated when an interface is used by multiple sessions (smallest number takes priority). Every traffic mirror session requires one. If left empty, CloudShell will allocate a number.
                
            - **filterRules**: List of the following:
                
                - **type**: (Mandatory, Str) Must be "TrafficFilterRule”
                    
                - **direction**: (Mandatory, Str) Defines the traffic direction on the source NIC. Valid values are **ingress** (inbound) and **egress** (outbound)
                    
                - **sourcePortRange**: (Type) Port range (**fromPort** and **toPort**) of the source EC2 instance (from which the traffic is sent).
                    
                - **destinationPortRange**: (Type) Port range (**fromPort** and **toPort**) of the target EC2 instance (to which the traffic is sent).
                    
                - **protocol**: (Mandatory, Str) Port protocol (tcp, udp, etc.)
                    
                - **sourceCidr**: (Str) CIDR of the source EC2 instance (from which the traffic is sent)
                    
                - **destinationCidr**: (Str) CIDR of the target EC2 instance (to which the traffic is sent)
                    

### RemoveTrafficMirroring

- **DriverRequest**:
    
    - **Actions**: List containing the following:
        
    - **actionId**: (Str)
        
    - **type**: (Mandatory, Str) Must be "RemoveTrafficMirroring”
        
    - **targetNicId**: (Mandatory, Str) Network interface ID of the target EC2 instance (the traffic mirror target)
        
    - **sessionId**: (Mandatory, Str) Traffic mirror session ID (this ID is automatically assigned by AWS and returned in the *CreateTrafficMirroring* output).
        
        :::note Notes:
        - Make sure to include both the `sessionId` and `TargetNicId` parameters, but provide a value only for one of them, as illustrated in the [RemoveTrafficMirroring](https://devguide.quali.com/reference/2020.1.0/aws-traffic-mirroring.html#removetrafficmirroring-1) example.
        - You cannot use the `sourceNic` parameter to remove traffic mirroring sessions.
        :::

## Examples

### Using reservationId to get NICs

If the EC2 instance has a single NIC:

```python
reservation = session.GetReservationDetails('b9818bde-fc86-49f2-beae-74e238a3ad07').ReservationDescription

resource_interface = next(next(p.Value for p in r.VmDetails.NetworkData[0].AdditionalData if p.Name=='nic') for r in reservation.Resources if 'resource_name' in r.Name)
```

If the EC2 instance has more than one NICs:

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession


session = CloudShellAPISession('localhost', "admin", "admin", "Global")
reservation = session.GetReservationDetails('b9818bde-fc86-49f2-beae-74e238a3ad07').ReservationDescription

for resource in reservation.Resources:
    if resource.VmDetails and len(resource.VmDetails.NetworkData)>0:
        for network_data in resource.VmDetails.NetworkData:
            for additional_data in network_data.AdditionalData:
                if additional_data.Name=="nic":
                    nic = additional_data.Value
```

### CreateTrafficMirroring

```python
import cloudshell.api.cloudshell_api as api


session = api.CloudShellAPISession('localhost', 'admin', 'admin', 'Global')

result = session.ExecuteCommand(reservationId='9a8e81ac-5dd1-483a-9937-c17e477f455d',
                                targetName='AWS',
                                targetType='Resource',
                                commandName='CreateTrafficMirroring',
                                commandInputs=[api.InputNameValue(Name='request', Value='''
                                {
                                     "driverRequest": {
                                                         "actions": [
                                                                         {
                                                                             "actionId": "41f206a1-a6c0-4603-90f7-6492cd0fb00d",
                                                                             "type": "CreateTrafficMirroring",
                                                                             "actionParams": {"type": "CreateTrafficMirroringParams",
                                                                                              "sourceNicId": "eni-008322622e675cd80",
                                                                                              "targetNicId": "eni-05fc8d0b34b762305",
                                                                                              "sessionNumber": "5",
                                                                                              "filterRules": [{"type": "TrafficFilterRule",
                                                                                                               "direction": "ingress",
                                                                                                               "protocol": "tcp",
                                                                                                               "sourcePortRange": {"type": "PortRange", "fromPort": "50000", "toPort": "65535"},
                                                                                                               "sourceCidr": "192.168.0.124/24"
                                                                                                             }]
                                                                                              }
                                                                         }
                                                                     ]
                                                      }
                                }
                                ''')]
                                )
print result.Output
```

### RemoveTrafficMirroring

```python
import cloudshell.api.cloudshell_api as api

session = api.CloudShellAPISession('localhost', 'admin', 'admin', 'Global')

result = session.ExecuteCommand(reservationId='514d18dc-cd6c-4725-ac60-9e281d0b8e27',
                                targetName='AWS',
                                targetType='Resource',
                                commandName='RemoveTrafficMirroring',
                                commandInputs=[api.InputNameValue(Name='request', Value='''
                                         {
                                             "driverRequest": {
                                                                 "actions": [
                                                                                 {
                                                                                     "actionId": "514d18dc-cd6c-4725-ac60-9e281d0b8e27",
                                                                                     "type": "RemoveTrafficMirroring",
                                                                                     "sessionId": "",
                                                                                     "targetNicId": "eni-08e44d9a954444e3f"
                                                                                 }
                                                                             ]
                                                               }
                                         }
                                         ''')]
                                )
print result.Output
```
