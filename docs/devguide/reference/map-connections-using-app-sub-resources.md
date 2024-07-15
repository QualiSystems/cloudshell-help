---
sidebar_position: 7
---

# Mapping Connections using App Sub-resources

CloudShell allows developers to map connections between sub-resources residing on deployed Apps. This applies to scenarios where you want to map the port connections between virtual devices residing in App VMs. For example, to map the connection between port 1 residing on a virtual switch and port 2 residing on another virtual switch.

The port mapping is done during the deployment of the App. This requires creating a shell and specifying the port’s vNIC name in an attribute on the `Get_Inventory` command of the deployed App’s shell driver, and associating that shell to the desired App. Then, to map that App’s vNIC, the blueprint designer will need to specify the vNIC name on the App.

This is supported for vCenter, OpenStack and AWS EC2 Apps.

## Configuration

In this procedure, we will guide you on how to enable sub-resource mapping between Apps.

1. Download the driver of the App’s cloud provider from CloudShell Portal’s **Manage>Drivers>Resource** page.
    
2. Edit the `driver.py` file in your preferred editor.
    
3. Modify the `get_inventory` command to include the sub-resources you want to support and the vNIC names.
    
    For example, 2 sub-resources with vNIC names "Port 1” and "Port 2”:
    
    ```python
    def get_inventory(self, context):
            """
            :type context: models.QualiDriverModels.AutoLoadCommandContext
    
            """
            sub_resources = [AutoLoadResource(model='Generic Ethernet Port', name='Port 1', relative_address='port1'),
                             AutoLoadResource(model='Generic Ethernet Port', name='Port 2', relative_address='port2')]
    
            attributes = [AutoLoadAttribute('port1', 'Requested vNIC Name', '0'), AutoLoadAttribute('port2', 'Requested vNIC Name', '1')]
    
            result = AutoLoadDetails(sub_resources, attributes)
    
            return result
            #return AutoLoadDetails([],[])
    ```
    
    Note that for AWS EC2 Apps, the vNICs must be sequential and start with "0”. For example, 0, 1, 2.
    
4. Create a shell model for the App in Resource Manager Client>Resource Families>Generic App Family.
    
5. Create an attribute called Requested vNIC Name and add it to the new shell.
    
6. Associate the port model defined in the command to the new shell in Resource Manager Client>Resource Structure.
    
    In the above example, we used a port model called Generic Ethernet Port.
    
7. Add the driver to CloudShell Portal’s Manage>Drivers>Resource page and associate the new shell model.
    

## Configuring the App

1. In CloudShell Portal’s **Manage>Apps** page, create or edit an App template.
    
2. In the App’s App Resource page, select the shell you created.
    
3. Add the App to a blueprint.
    
4. Create a connector from this App to another endpoint in the blueprint.
    
5. Edit the connector line and in the Requested Source vNIC Name attribute, enter the vNIC name to use.
    :::note
    The vNIC name must be defined in the driver’s `get_inventory` command. In our case, "Port 1” or "Port 2”.
    :::