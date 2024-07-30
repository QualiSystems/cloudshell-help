---
sidebar_position: 4
hide_table_of_contents: true
---

# SetAppSecurityGroups Code Example

The following code sample uses the `SetAppSecurityGroups` CloudShell Automation API method to open port 22 on two deployed Apps, which belong to a subnet called `management`, from another deployed App in the sandbox.

```python
controllerApp = next(x for x in sandbox.components.apps.values() if x.deployed_app.Name.startswith('Controller'))

VirtualRouterApp_1 = next(x for x in sandbox.components.apps.values() if x.deployed_app.Name.startswith('Virtual Router_1'))

VirtualRouterApp_2 = next(x for x in sandbox.components.apps.values() if x.deployed_app.Name.startswith('Virtual Router_2'))

# Find IP of the controller App and append /32 to be in CIDR format:

controllerAddress = controllerApp.FullAddress + '/32'

# Find the ID of the 'management' subnet. We need this because we always open a port in a deployed App in the context of its network interface:

mngtSubnet = next(x for x in sandbox.components.services.values() if x.Alias.startswith('Management'))

mngtSubnetId = next(att.Value for att in mngtSubnet.Attributes if att.Name == 'Subnet Id')

sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id, message='Management subnet id is {0}'.format(str(mngtSubnetId)))

# Define a rule on the 'management' network interface that enables access to port 22, from the controller App's IP address:

rule = SecurityGroupRule(FromPort='22', ToPort='22', Protocol='TCP', Source=str(controllerAddress))

conf = SecurityGroupsConfiguration(SubnetId=str(mngtSubnetId), Rules=[rule])

# Apply the rule to both Apps:

sg1 = SecurityGroup(Name=VirtualRouterApp_1.deployed_app.Name, SecurityGroupsConfigurations=[conf])

sg2 = SecurityGroup(Name=VirtualRouterApp_2.deployed_app.Name, SecurityGroupsConfigurations=[conf])

#API call:

sandbox.automation_api.SetAppSecurityGroups(
    reservationId=sandbox.id,
    securityGroups=[sg1, sg2]
) 
```