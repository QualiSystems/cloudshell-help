---
sidebar_position: 5
sidebar_label: Migrating 1st Gen Shells to 2nd Gen
---

# Migrating 1<sup>st</sup> Gen Shells to 2<sup>nd</sup> Gen

While CloudShell supports the use of 1st Gen shells, it is strongly recommended to switch to the new and improved 2nd Gen shells. For details, see [Shells Overview](../../intro/features/shells.md).

There are two ways to migrate a 1<sup>st</sup> Gen shell to a 2<sup>nd</sup> Gen shell:

- [Replacing the 1st Gen shell with a 2nd Gen version](../reference/migrate-1st-gen-shell-to-2nd-gen-shell.md#replacing-the-1st-gen-shell-with-a-2nd-gen-version): Applies to scenarios where you have the 2<sup>nd</sup> Gen version of the shell. Note that all Quali-certified 1<sup>st</sup> Gen shells, and some Community-grade shells, have 2<sup>nd</sup> Gen versions, which are available for download from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
    
- [Converting a custom 1st Gen shell to a 2nd Gen shell](../reference/migrate-1st-gen-shell-to-2nd-gen-shell.md#converting-a-custom-1st-gen-shell-to-a-2nd-gen-shell): Applies to scenarios where a 2<sup>nd</sup> Gen version is not available.
    

## Replacing the 1<sup>st</sup> Gen shell with a 2<sup>nd</sup> Gen version

**To replace a 1st Gen shell with a 2<sup>nd</sup> Gen shell:**

1. Import the 2<sup>nd</sup> Gen shell into CloudShell. For details, see [Importing Shells](../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells).
    
2. Do one of the following:
    
    - For resources: Create an inventory resource using the new 2<sup>nd</sup> Gen shell. For details, see [Adding Inventory Resources](../../portal/inventory/managing-resources/adding-inventory-resources/index.md).
        
    - For services: Make sure the service category, which is associated to the service, has access to the relevant domains.
        
    - For cloud provider shells, create the 2<sup>nd</sup> Gen cloud provider resource and set up the deployment path(s) in the relevant App templates, see [Apps in Blueprints](../../portal/blueprints/creating-blueprints/apps/).
        
        :::note Important 
        The new deployment type will include "2G" or "2nd Gen" in the name. For example:  
        ![](/Images/Devguide-reference/DeploymentTypes_586x190.png)  
        :::
        
3. Find any blueprints that use the component to be replaced. For details on how to do this, see [Finding Blueprints Containing a Specific Resource, Service or App](../available-cs-api/useful-cs-api-examples/find-blueprints-with-rsrc-serv-or-app.md).
    
4. In each relevant blueprint and blueprint template, do one of the following:
    
    - For resources and services: Replace all instances of the 1<sup>st</sup> Gen resource or service with the 2<sup>nd</sup> Gen version.
        
    - For cloud provider shells:
        
        1. Refresh the relevant Apps to pull the 2<sup>nd</sup> Gen deployment path from the App template.
            
            ![](/Images/Devguide-reference/RefreshAppTemplate.png)
            
        2. Open the App and select the 2<sup>nd</sup> Gen deployment path.
5. Optionally delete or exclude the 1<sup>st</sup> Gen component from CloudShell.
    
    - To exclude a resource, in the **Inventory** dashboard, click the resource's more info button and select **Exclude**.
        
    - To exclude a service, either remove the service category from the service or remove the category from CloudShell.
        
    - For Apps, either replace the old deployment paths with the 2<sup>nd</sup> Gen ones in the App templates or remove the service categories from the App.
        

## Converting a custom 1<sup>st</sup> Gen shell to a 2<sup>nd</sup> Gen shell

**Prerequisites**

Before we start, it is important to understand the requirements:

- To convert a 1st Gen Shell you need access to the Shell’s source code.
- You can only convert a Shell that implements the latest standard version.
    

It is highly recommended to first learn how to create and model a 2nd Gen Shell before trying to convert from 1st Gen. This is described in detail in previous chapters of this guide.

**To convert a 1st Gen Shell to a 2nd Gen Shell:**

1. Create a 1st Gen Shell
2. Create a 2nd Generation Shell
3. Edit the Shell’s data model
4. Convert the Driver
5. Test the conversion
    

### Create a 1st Gen Shell

In the context of this example, we will create a 1st Gen Shell, enable AutoLoad and add additional custom functions.

**To prepare the 1st Gen Shell for conversion:**

1. Create a 1st Gen switch Shell by running the following command in your Command Line:
    
    ```bash
    shellfoundry new my-switch --template gen1/networking/switch
    cd my-switch
    ```
    
    This Shell implements the networking standard v 4.0.1.
    
2. Enable the autoload by updating the following line in the shellconfig.xml file in the datamodel folder:
    
    ```xml
    <ShellsConfiguration xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.qualisystems.com/ResourceManagement/ShellsConfigurationSchema.xsd">
    ```
    
    ```javascript
    	<AutoLoad Enable="true">
    ```
    
3. Replace the get\_inventory function in the driver.py file with this sample of get\_inventory:
    
    ```python
    def get_inventory(self, context):
        sub_resources = [ AutoLoadResource(model ='Generic Chassis',name= 'Chassis 1', relative_address='1'),
        AutoLoadResource(model='Generic Module',name= 'Module 1',relative_address= '1/1'),
        AutoLoadResource(model='Generic Port',name= 'Port 1', relative_address='1/1/1'),
        AutoLoadResource(model='Generic Port', name='Port 2', relative_address='1/1/2'),
        AutoLoadResource(model='Generic Power Port', name='Power Port', relative_address='1/PP1')]

        attributes = [ AutoLoadAttribute(relative_address='', attribute_name='Location', attribute_value='Santa Clara Lab'),
        AutoLoadAttribute('', 'Model', 'Catalyst 3850'),
        AutoLoadAttribute('', 'Vendor', 'Cisco'),
        AutoLoadAttribute('1', 'Serial Number', 'JAE053002JD'),
        AutoLoadAttribute('1', 'Model', 'WS-X4232-GB-RJ'),
        AutoLoadAttribute('1/1', 'Model', 'WS-X4233-GB-EJ'),
        AutoLoadAttribute('1/1', 'Serial Number', 'RVE056702UD'),
        AutoLoadAttribute('1/1/1', 'MAC Address', 'fe80::e10c:f055:f7f1:bb7t16'),
        AutoLoadAttribute('1/1/1', 'IPv4 Address', '192.168.10.7'),
        AutoLoadAttribute('1/1/2', 'MAC Address', 'te67::e40c:g755:f55y:gh7w36'),
        AutoLoadAttribute('1/1/2', 'IPv4 Address', '192.168.10.9'),
        AutoLoadAttribute('1/PP1', 'Model', 'WS-X4232-GB-RJ'),
        AutoLoadAttribute('1/PP1', 'Port Description', 'Power'),
        AutoLoadAttribute('1/PP1', 'Serial Number', 'RVE056702UD')]

        return AutoLoadDetails(sub_resources,attributes)
    ```
    
4. Add an additional function that prints the ‘vendor’ attribute value:
    
    ```python
    def sample_command(self, context):
        """
        Restores a saved artifact previously saved by this Shell driver using the orchestration_save function
        :param ResourceCommandContext context: The context object for the command with resource and reservation info
        """
        return context.resource.attributes["Vendor"]
    ```
    

### Create a 2nd Gen Shell

To convert the Shell, we will first create a new 2nd Gen Shell that implements the same standard version. Then we can edit the data model and update the driver.

**To prepare the 2nd Gen Shell for conversion:**

- Create a 2nd Gen switch Shell by running the following in your Command Line:
    
    ```bash
    shellfoundry new my-switch-g2 --template gen2/networking/switch
    cd my-switch-g2
    ```
    
    It is recommended to change the name of the Shell to enable the 1st Gen Shell and the 2nd Gen Shell to work side by side on the same CloudShell database.
    

### Edit the Shell’s data model

**To edit the Shell’s data model:**

- In the shell-definition.yaml file, update the metadata section and make sure that the Shell imports the same CloudShell standard version as the 1st Gen shell.
    
    ```yaml
    metadata:
        template_name: MySwitch
        template_author: Anonymous
        template_version: 0.1.0
        template_icon: shell-icon.png

        description: >
        Sample TOSCA based shell

        imports:
            - cloudshell_standard: cloudshell_networking_standard_4_0_1.yaml
    ```
    
- If the Shell includes custom attributes, see [Modeling the Shell](https://devguide.quali.com/shells/2020.1.0/modeling-the-shell.html) to learn how to model them in 2nd Gen Shell format.
    
- If the Shell includes custom attributes in the discovery process, see [Auto Discovery For Inventory Shells](https://devguide.quali.com/shells/2020.1.0/implementing-discovery-for-inventory-shells.html) to learn how to customize the Auto-discovery process.
    

### Convert the Driver

To convert the driver, we need to update the driver files and then update the code.

#### Updating the driver

To update the driver, we need to copy the 1st Gen driver into the 2nd Gen Shell project. However, since the name of the Shell may be different, we need to copy the files and keep all the references of the Shell’s name.

**To update the driver:**

1. In a text editor, open the 2nd Gen driver files in the src folder and save the lines that include references to the Shell’s name:
    
    - In the drivermetadata.xml file, copy line #1 (MainClass and Name)
        
        ```xml
        <Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.MySwitchG2Driver" Name="MySwitchG2Driver" Version="1.0.0">
        ```
        
    - In the driver.py file, copy the class name
        
        ```python
        class MySwitchG2Driver (ResourceDriverInterface):
        ```
        
2. Replace the files in the 2nd Gen Shell’s src folder with the files from the 1st Gen Shell’s src folder.
    
3. To ensure that the original Shell’s name is used, open the files (drivermetadata.xml and driver.py) and replace the relevant lines with the lines we saved.
    
    At this point, it is recommended to install the Shell and make sure that we don’t get any error message. If the installation fails, make sure that the name references match the new Shell’s name and that you copied all the driver files properly.
    
4. To test the modeling of the 2nd Gen Shell, run the following command in your Command Line to install the Shell:
    
    ```bash
    shellfoundry install
    ```
    

#### Updating the Code – The Shell’s data model

To convert the 1st Gen Shell code to 2nd Gen, we need to modify it to match the 2nd Gen Shell’s data model.

**To update the driver data model code:**

1. Generate the Shell’s data model by running the following command in your Command Line:
    
    ```bash
    shellfoundry generate
    ```
    
2. Add the following to the driver.py file to import the Shell date model into the new driver:
    
    ```python
    from data_model import *
    ```
    
    The Shell’s data model should be used in all the places in the driver where we refer to an attribute by name.
    

For our example, replace the sample\_command with the code below.

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20migration/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

```python
def sample_command(self, context):
	resource = MySwitchG2.create_from_context(context)
	return resource.vendor
```

This code converts the context object that CloudShell provides to an instance of the Shell’s data model, which is saved in the resource variable, then retrieves the value of the vendor attribute by referring to the resource.vendor property.

#### Updating the code – Auto-Discovery

To simplify the conversion process, CloudShell provides a special Python class that transforms 1st Gen discovery code to the 2nd Gen discovery’s structure without having to rewrite the existing code.

The class is called LegacyUtils and it is automatically generated with the Shell’s data model.

The example below shows how to use the LegacyUtils class:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20migration/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

```python
def get_inventory(self, context):
    sub_resources = [ AutoLoadResource(model ='Generic Chassis',name= 'Chassis 1', relative_address='1'),
    AutoLoadResource(model='Generic Module',name= 'Module 1',relative_address= '1/1'),
    AutoLoadResource(model='Generic Port',name= 'Port 1', relative_address='1/1/1'),
    AutoLoadResource(model='Generic Port', name='Port 2', relative_address='1/1/2'),
    AutoLoadResource(model='Generic Power Port', name='Power Port', relative_address='1/PP1')]

    attributes = [ AutoLoadAttribute(relative_address='', attribute_name='Location', attribute_value='Santa Clara Lab'),
    AutoLoadAttribute('', 'Model', 'Catalyst 3850'),
    AutoLoadAttribute('', 'Vendor', 'Cisco'),
    AutoLoadAttribute('1', 'Serial Number', 'JAE053002JD'),
    AutoLoadAttribute('1', 'Model', 'WS-X4232-GB-RJ'),
    AutoLoadAttribute('1/1', 'Model', 'WS-X4233-GB-EJ'),
    AutoLoadAttribute('1/1', 'Serial Number', 'RVE056702UD'),
    AutoLoadAttribute('1/1/1', 'MAC Address', 'fe80::e10c:f055:f7f1:bb7t16'),
    AutoLoadAttribute('1/1/1', 'IPv4 Address', '192.168.10.7'),
    AutoLoadAttribute('1/1/2', 'MAC Address', 'te67::e40c:g755:f55y:gh7w36'),
    AutoLoadAttribute('1/1/2', 'IPv4 Address', '192.168.10.9'),
    AutoLoadAttribute('1/PP1', 'Model', 'WS-X4232-GB-RJ'),
    AutoLoadAttribute('1/PP1', 'Port Description', 'Power'),
    AutoLoadAttribute('1/PP1', 'Serial Number', 'RVE056702UD')]

    autoload_details = AutoLoadDetails(sub_resources,attributes)
    migrated_details = LegacyUtils().migrate_autoload_details(autoload_details, context)

    return migrated_details.create_autoload_details()
```

In this example, you can see that the code creates two arrays: sub\_resources and attributes, which are saved in the autoload\_details object. This 1st Gen structure is using explicit attribute names and model names in string format and needs to be transformed to 2nd Gen format.

With the LegacyUtils().migrate\_autoload\_details method, we convert the autoload\_details object into a new object migrated\_details. Then the function returns the new formatted structure by calling the migrated\_details.create\_autoload\_details() object.

```python
migrated_details = LegacyUtils().migrate_autoload_details(autoload_details, context)
return migrated_details.create_autoload_details()
```

By using LegacyUtils we can avoid rewriting the get\_invontory function. However, in the long term, it is recommended to refactor the code to use the Shell’s data model, as defined in [Auto Discovery For Inventory Shells](https://devguide.quali.com/shells/2020.1.0/implementing-discovery-for-inventory-shells.html)

### Test the conversion

**To test the conversion:**

1. Install the Shell by running the following in Command-Line:
    
    ```bash
    shellfoundry install
    ```
    
2. Log in as administrator to CloudShell Portal, create a Shell resource. Make sure that the Auto-discovery successfully creates the resource with all of its sub-resources.
    
3. Add the resource to a sandbox and run the sample\_command.
    
4. Check the **Output** console to see that the command successfully printed the value of the vendor attribute.
