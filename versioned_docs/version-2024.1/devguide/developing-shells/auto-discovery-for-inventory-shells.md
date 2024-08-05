---
sidebar_position: 9
---

# Auto-discovery for Inventory Shells

Automated discovery makes it easy to import physical inventory devices into CloudShell by using automation to read their internal structure and attributes.

## Inventory Shells in CloudShell

Shells for physical devices are defined with a certain internal structure which can be found in their CloudShell Standard. For example, a basic physical resource can have Resource Port sub-resources, whereas a Switch can have blades and port channels according to the [Networking Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/networking_standard.md).

## The Auto-discovery process

Auto-discovery is triggered when creating resources for Shells that support it. When the administrator creates a resource in CloudShell Portal, CloudShell prompts the administrator to fill out mandatory attributes and then launches the Auto-discovery process, querying the physical device and describing its internal structure and attributes to CloudShell.

**To implement the Auto-discovery process in a Shell:**

1. Optionally update Auto-discovery attributes
    
2. Implement the *get_inventory* function
    
3. Add validations
    
4. To test your code, create a resource with the template
    

### Update Auto-discovery in the shell-definition.yaml file

The `shell-definition.yaml` file includes a basic Auto-discovery template.

```css
  capabilities:
    auto_discovery_capability:
      type: cloudshell.capabilities.AutoDiscovery
      properties:
        enable_auto_discovery:
          type: boolean
          default: true
        auto_discovery_description:
          type: string
          default: <my custom discovery description>
        inventory_description:
          type: string
          default: <my custom inventory discovery description>
```

The Auto-discovery process is described as a TOSCA capability with the following properties. Feel free to optionally modify them.

- **enable_auto_discovery** - This property defines whether the Auto-discovery process is automatically triggered when creating a new resource.
    
- **auto_discovery_description** - This description is presented to the user before the Auto-discovery process begins.
    
- **inventory_description** - This is the description of the Shell template. It is presented to the user when creating a new resource.
    

### Add mandatory attributes to the Auto-discovery process

In many Auto-discovery implementations, we need to ask the administrator for information before communicating with the physical device, for example, to provide the administrator’s credentials. If we add custom attributes to the Auto-discovery definition of the Shell, CloudShell will prompt the administrator to fill out these attributes before running the discovery. This ensures that the information will be available for the discovery process to use.

In the context of this example, we’ll add 3 properties to the Auto-discovery process: **User**, **Password** and **my_custom_attribute**.

The **User** and **Password** attributes are defined in the standard, so we only need to add them to the *auto\_discovery\_capability* section. However, **my\_custom\_attribute** is a specific attribute that we want to add to this Shell, so we need to add the attribute to both the properties section and the *auto\_discovery\_capability* section.

```css
vendor.ImplementingDiscovery:
  derived_from: cloudshell.nodes.Switch
  properties:
    my_custom_attribute:
      type: string          # optional values: string, integer, float, boolean, cloudshell.datatypes.Password
  capabilities:
    auto_discovery_capability:
      type: cloudshell.capabilities.AutoDiscovery
      properties:
        enable_auto_discovery:
          type: boolean
          default: true
        auto_discovery_description:
          type: string
          default: Describe the auto discovery
        inventory_description:
          type: string
          default: Describe the resource shell template
        User:
          type: string
        Password:
          type: cloudshell.datatypes.Password
        my_custom_attribute:
          type: string
```

For example:

![](/Images/Devguide-shells/Auto-discovery-for-Inventory_624x471.png)

### Implement the get\_inventory function

The goal of the *get\_inventory* function in the Shell’s driver is to query the device and return a list of sub-resources and attribute values back to CloudShell. After querying the device, the function should return a specific result to CloudShell to allow creating the right resources. This process is called *discovery* in CloudShell Portal, and *autoload* in Resource Manager Client.

**To implement the get\_inventory function:**

1. Run the `shellfoundry generate` command to generate the Shell’s data model. For more information about the Shell’s data model, see [Managing the Shell’s Data Model](./managing-the-shell-data-mode.md).
2. Uncomment the following import in the shell's `driver.py` file:
    
    ```javascript
    from data_model import *
    ```
    

This is an example of a *get\_inventory* implementation:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

2nd%20gen%20shells%20-%20implementing\_discovery/src/driver.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py)

```python
def get_inventory(self, context):
    """
    Discovers the resource structure and attributes.
    :param AutoLoadCommandContext context: the context the command runs on
    :return Attribute and sub-resource information for the Shell resource you can return an AutoLoadDetails object
    :rtype: AutoLoadDetails
    """

    resource = ImplementingDiscovery.create_from_context(context)
    resource.vendor = 'specify the shell vendor'
    resource.model = 'specify the shell model'

    chassis1 = GenericChassis('Chassis 1')
    chassis1.model = 'WS-X4232-GB-RJ'
    chassis1.serial_number = 'JAE053002JD'
    resource.add_sub_resource('1', chassis1)

    module1 = GenericModule('Module 1')
    module1.model = 'WS-X5561-GB-AB'
    module1.serial_number = 'TGA053972JD'
    chassis1.add_sub_resource('1', module1)

    port1 = GenericPort('Port 1')
    port1.mac_address = 'fe80::e10c:f055:f7f1:bb7t16'
    port1.ipv4_address = '192.168.10.7'
    module1.add_sub_resource('1', port1)

    return resource.create_autoload_details()
```

This *get\_inventory* code creates an instance of the root resource by calling the *create\_from\_context* function. In this particular example, we’re autoloading the root’s sub-resources and their attributes, and populating the Vendor and Model attribute values on the root resource.

Note that *get\_inventory* only creates the sub-resources and configures their attributes as the root resource already exists at this stage. Autoload can also update the attribute values on the root level.

This sample creates *GenericChassis*, *GenericModule* and *GenericPort* resource models and uses the *add\_sub\_resource* function to build the resource hierarchy.

**To create the port:**

1. Create a new *GenericPort* instance.
    
2. Provide a unique name for the port.
    
3. Add it as a sub resource of a specific module: a. Call the *add\_sub\_resource* function on the module. b. Provide both the *relative\_address* of the port and the instance that represents the port.
    
    To return the information back to CloudShell, we need to use a specific data structure that represents the result of the discovery. The data structure is created automatically by calling the *create\_autoload\_details()* function.
    

### Add validations

A common enhancement for discovery functions that greatly improves the usability of the Auto-discovery process is to validate the information provided by the administrator. For example, trying to log in with the address and credentials and reporting back any error, or checking the text for illegal characters.

Any exceptions raised in the *get\_inventory* flow will display an error message to help the administrator correct their input and try again

### Create a resource with the template

To test the code, let’s create a resource based on the Shell template.

**To create a resource with the template:**

1. Import the Shell template using ShellFoundry.
    
2. Open CloudShell Portal’s **Inventory** dashboard and click the **Add New** button. A dialog box is displayed, prompting you to select the template and enter a resource name.
    
3. Select the **ImplementingDiscovery** template, enter a name for the resource, and click **Create**.
    
    The **Resource** dialog box is displayed.
    
    ![](/Images/Devguide-shells/Auto-discovery-for-Inventory_1_624x428.png)
    
4. Enter the **Username** and **Password** and click **Start discovery**. The *get\_inventory* function creates the entire device structure and a system message pops up to indicate the discovery process completed successfully.
    
5. To validate, enter the name of the new resource in the **Inventory** search field. You should see a list of sub-resources with the discovered attributes:
    
    ![](/Images/Devguide-shells/Auto-discovery-for-Inventory_2_624x195.png)
    