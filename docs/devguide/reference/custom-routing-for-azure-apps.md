---
sidebar_position: 11
---

# Custom Routing for Azure Apps

In this article, we’ll learn how to set up custom routing for Azure VMs deployed in the sandbox.

CloudShell supports the creation of custom routes in Azure sandboxes, allowing you to force communication from any subnet(s) to go through any specific IP(s). For example, to have traffic go through a firewall or VPN connection.

To do this, you need to use a blueprint or custom setup script that will tell the Azure cloud provider resource to define the custom routing (using the resource’s CreateRouteTable hidden command).

The custom routing needs to be supplied in JSON format. Let’s create a JSON file and add the following code, which routes incoming communications from CIDR “10.0.1.0/28” to a VM that has the address “10.0.1.15”.

```javascript
{
  "route_tables": [
    {
      "name": "myRouteTable1",
      "subnets": [
        "subnetId1",
        "subnetId2"
      ],
      "routes": [
        {
          "name": "myRoute1",
          "address_prefix": "10.0.1.0/28",
          "next_hop_type": "VirtualAppliance",
          "next_hop_address": "10.0.1.15"
        }
      ]
    }
  ]
}
```

Next, let’s define the custom routing.

- **route\_tables**: (list)
    
    - **name**: Provide a display name for the route table.
        
    - **subnets**: Specify a comma-separated list of the subnet IDs of the source VMs. This will affect all VMs that have a NIC in that subnet. Note that for VMs connected to more than one subnet, you will need to specify all connected subnets to ensure that all communication from such VMs use the custom routing.
        
    - **routes**: The route’s settings:
        
        - **name**: Provide a display name for the route.
            
        - **address\_prefix**: Specify the target CIDR. Communication to an address in this CIDR will be diverted to our route.
            
        - **next\_hop\_type**: Specify “VirtualAppliance” as the value.
            
        - **next\_hop\_address**: The IP that the traffic will be directed to. For example, to connect VM 1 to VM 2 through VM 5, set VM 5 as the next\_hop.
            

To set additional hops, duplicate the routes section and edit the next\_hop\_address. For example, setting the traffic to hop through 10.0.1.15 and then through 10.23.1.25:

```javascript
{
    "route_tables": [
        {
            "name": "myRouteTable1",
            "subnets": [
                "subnetId1",
                "subnetId2"
            ],
            "routes": [
                {
                    "name": "myRoute1",
                    "address_prefix": "10.0.1.0/28",
                    "next_hop_type": "VirtualAppliance",
                    "next_hop_address": "10.0.1.15"
                }
            ]
        },
        {
            "name": "myRouteTable2",
            "subnets": [
                "subnetId3",
                "subnetId4"
            ],
            "routes": [
                {
                    "name": "myRoute2",
                    "address_prefix": "10.0.1.0/28",
                    "next_hop_type": "VirtualAppliance",
                    "next_hop_address": "10.0.1.15"
                }
            ]
        }
    ]
}
```

Lastly, make sure your script calls the JSON file. Here’s an example script that uses our first JSON example (in this example, we embedded the JSON code in the script):

```python
from cloudshell.api.cloudshell_api import InputNameValue
from cloudshell.workflow.orchestration.sandbox import Sandbox
import json

AZURE_CLOUD_PROVIDER_NAME = 'Azure resource name'

request_obj = {
    "route_tables": [
        {
            "name": "myRouteTable1",
            "subnets": ["subnetId1", "subnetId2"],
            "routes": [{
                "name": "myRoute1",
                "address_prefix": "10.0.1.0/28",  # cidr
                "next_hop_type": "VirtualAppliance",
                "next_hop_address": "10.0.1.15"
            }]
        },
        {
            "name": "myRouteTable2",
            "subnets": ["subnetId3", "subnetId4"],
            "routes": [{
                "name": "myRoute2",
                "address_prefix": "10.0.1.0/28",  # cidr
                "next_hop_type": "VirtualAppliance",
                "next_hop_address": "10.0.1.15",
            }]
        }
    ]
}

request_json = json.dumps(request_obj)

sandbox = Sandbox()
reservation_id = sandbox.id
session = sandbox.automation_api

session.ExecuteCommand(reservationId=reservation_id,
                       targetName="Azure resource",
                       targetType="Resource",
                       commandName="CreateRouteTables",
                       commandInputs=[InputNameValue("request", request_json)],
                       printOutput=False)
```

Add the script as a blueprint script to CloudShell and attach it to your blueprint. If this is a setup script, set the script’s **Script Type** to **Setup** to ensure that CloudShell will execute it automatically when a user reserves the blueprint. For additional information, see CloudShell help’s [Configure Blueprint Orchestration](https://help.quali.com/Online%20Help/9.3/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm).
:::note
You can have only one setup script attached to a blueprint and this will be the default for Azure that provisions and configures the resources. By overriding this script with another of type setup, you will potentially lose this functionality. Alternatively, you could create your own Setup script, which is based on the out-of-the-box one and includes the custom routing code - see [CloudShell’s OOB Orchestration](https://devguide.quali.com/orchestration/2020.1.0/the-oob-orchestration.html)
:::
Future sandboxes based on this blueprint will use the defined custom routing for Azure VMs in the specified IPs/subnets.
