---
sidebar_position: 4
---

# Modeling Shells with TOSCA

By defining how a Shell is modeled in CloudShell, we can control how it’s represented in CloudShell. If you’ve gone through the steps of the [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm) tutorial, you may have noticed that with little effort we’ve already managed to model a new type of entity.

In this section, we’ll take a more in-depth look at how we can customize how Shell resources or deployed Apps are presented and behave in CloudShell.

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/fJIQvjR5_RA" title="Modeling Shells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Setting the Standard

The first thing to do is to classify the Shell according to one of the CloudShell standards. CloudShell has a growing number of standards, which make it easier to create a new Shell.

To give a few examples:

- [Deployed App Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/deployed_app_standard.md)
    
- [Compute Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/compute_standard.md)
    
- [Networking Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/networking_standard.md)
    
- [Firewall Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/firewall_standard.md)
    
- [Custom Service Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Custom%20Service%20Shell%20Standard.md)
    

*Regarding the **Layer 1 Shell** template, please note that this is a special kind of shell with its own template and mechanism, and works differently from 1st and 2nd Gen shells. For more information, see [L1 Switch Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/L1-Switch-Shells.htm).*

**To get a list of the possible templates:**

- Run the following command in your Command Line:
    
    ```python
    shellfoundry list
    ```
    
    For this example, we’ll use the *gen2/resource* template, which is an implementation of the Shell’s basic standard, a generic standard for any standalone Shell.
    

**To create a new Shell from the template:**

- Run the following command in your Command Line:
    
    ```python
    shellfoundry new custom-data-model --template gen2/resource
    cd custom-data-model
    ```
    
    In previous examples we generated a Shell package that can be installed in CloudShell. This time, we’ll take a look at some of the important settings of the Shell’s model and demonstrate how it can be customized.
    

## TOSCA Modeling

CloudShell’s 2nd Gen Shells are modeled with TOSCA, an open standard for designing and modeling cloud-based services. To develop a Shell, there is no need for an in depth understanding of TOSCA. We will introduce all the important concepts for Shell development in this topic. If you are interested in learning more about TOSCA, you can read the [TOSCA YAML Specification](http://docs.oasis-open.org/tosca/TOSCA-Simple-Profile-YAML/v1.0/csprd01/TOSCA-Simple-Profile-YAML-v1.0-csprd01.html).

Shells created using Shellfoundry include the `shell-definition.yaml` file, which holds the Shell model specifications in TOSCA format. Let’s review the structure of this file:

```css
tosca_definitions_version: tosca_simple_yaml_1_0

imports:
  - cloudshell_standard: cloudshell_resource_standard_1_0_0.yaml

node_types:
  vendor.switch.CustomDataModel:
    derived_from: cloudshell.nodes.GenericResource
    ...
    ...
    ...
```

This file uses a YAML format and includes several key elements:

- The first line indicates the TOSCA version. At this point CloudShell supports version 1.0.
    
- The **imports** section indicates the CloudShell standard that is used. It already points to the standard of the ShellFoundry template that was used to create the Shell.
    
- The **node\_types** section is the most important part. The Shell is modeled as a new TOSCA node that derives from the *cloudshell.nodes.GenericResource* node. This parent node is defined in the imported CloudShell standard file and lists all the configurations that were defined in the standard.
    

In the following sections, we will describe how to edit the `shell-definition.yaml` file and customize the Shell’s data model.

## The Standard Data Model

First, let’s understand which definitions the Shell inherits from the standard. The standard is not vendor-, device- or App-specific, but a general description of how Shells created from the same standard should integrate with CloudShell.

The standard defines the following elements:

- **Data model structure** - Shells can be modeled using a hierarchy of building blocks. We often call the Shell itself the ‘root’, and under it we have ‘sub-resource’. In this generic Shell example, the data model structure includes ports and power ports. If we use a switch template instead, the structure will include switch-specific elements such as chassis, modules, port groups and networking ports.
    
- **Attributes** - Attributes are used to store persistent information about the Shell. This information is presented to the user in CloudShell Portal and can be used in automation processes. Attributes are defined for all levels of the Shell’s hierarchy. For example, the root level has generic information like ‘vendor’, ‘model’, ‘user’ and ‘password’, and the sub-resource level may have attributes such as ‘port speed’ and ‘port description’.
    
- **Link to one of CloudShell standard families** - CloudShell families typically represent broad categories or roles of resources, such as Switch, Router, Compute Server and Database.
    
- **Driver interface** – A Python class with the common functions that the Shell driver may have. For example: *init*, *save*, *restore* etc.
    

To see all the details of the Resource Standard used in this example, go to: [Resource Standard Documentation](https://github.com/QualiSystems/resource-shell-standard-clean/blob/master/spec/shell_resource_standard.md).

Note that each ShellFoundry template uses its own standard and has its own documentation.

## Extending the Data model

Let’s review the complete structure of the `shell-definition.yaml` file and see which settings can be customized:

```css
tosca_definitions_version: tosca_simple_yaml_1_0

metadata:
  template_name: CustomDataModel
  template_author: Anonymous
  template_version: 0.1.0
  template_icon: shell-icon.png

description: >
  TOSCA based resource shell

imports:
  - cloudshell_standard: cloudshell_resource_standard_1_0_0.yaml

node_types:
  vendor.switch.CustomDataModel:
    derived_from: cloudshell.nodes.GenericResource
    #properties:
    #  property_name:
    #    type: string          # optional values: string, integer, float, boolean, cloudshell.datatypes.Password
    #    default: fast
    #    description: Some attribute description
    #    constraints:
    #      - valid_values: [fast, slow]
    artifacts:
      icon:
        file: shell-icon.png
        type: tosca.artifacts.File
      driver:
        file: CustomDataModelDriver.zip
        type: tosca.artifacts.File
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
```

**To extend the data model:**

1. Edit the Shell metadata
    
2. Add a custom attribute to the Shell
    
3. Determine the usage of custom Shell attributes
    
4. Customize the Shell’s Image
    
5. Add Shell Capabilities
    

### Edit the Shell metadata

The TOSCA metadata element describes important information that needs to be updated.

```css
metadata:
  template_name: CustomDataModel
  template_author: Anonymous
  template_version: 0.1.0
  template_icon: shell-icon.png
```

- **template\_name** is the Shell name that is displayed to the CloudShell administrator in CloudShell Portal’s **Manage** page.
    
- **template\_author** is the developer’s name. It is recommended to edit this field.
    
- **template\_version** defines the version number of the Shell.
    
- **template\_icon** is the image that is displayed on the shell’s resources in CloudShell Portal.
    

### Add a custom attribute to the Shell

In certain situations, we might want to extend the Shell by adding our own custom attributes. There are several common use cases for adding an attribute:

- Saving administrative information, such as custom permission groups, categories and contact person.
    
- Saving additional information about the device. This information can be loaded or used by the driver.
    

An example of adding a custom attribute is already included in the `shell-definition.yaml` file:

```css
properties:
  my_property:
    type: string         
    default: fast
    description: Some attribute description
    constraints:
      - valid_values: [fast, slow]
```

The format is aligned with the TOSCA representation:

- **my\_property**: The name of the attribute. Replace *my\_property* with the name of your custom attribute. Attribute name must begin with a letter and can contain alpha numeric characters, spaces and underscores.
    
- **type**: This is a mandatory definition. Specify the data type of the attribute: *string*, *integer*, *float*, *boolean* or *cloudshell.datatypes.Password*.
    
- **default**: The default value of the attribute. If you don’t specify a default value, CloudShell will use the default value according to the data type: empty string for string attributes, ‘0’ for integers, and false for boolean attributes. Wrap the value in single quotes if it contains one of the following characters: :, \{, \}, \[, \], ,, &, \*, #, ?, |, -, < >, =, !, %, @, \`, and use double quotes if your value contains a backslash “\\” to avoid escaping it.
    
- **description**: A short explanation that will be displayed in CloudShell Portal next to the attribute.
    
- **valid\_values**: In TOSCA, properties may have several constraints, CloudShell currently only supports valid\_values. This definition holds a comma-separated list of values that the attribute may have. Please note that CloudShell enforces this constraint only when creating a new resource or changing existing resources. If you remove a value from a list that is already in use, some resources may still have the old value.
    

By modifying the *properties* section, you can add your own custom attributes.

Let’s see how CloudShell presents the Shell inside a sandbox.

**To see the attributes in CloudShell:**

1. Add the following attribute to the `shell-definition.yaml` file:
    
    ```css
    properties:
      my_attribute:     
        type: string
        description: Some attribute description
    ```
    
2. After you add the attribute, make sure that the YAML format is kept valid. You can use online tools such as [yamllint](http://www.yamllint.com/) to validate the format.
    
3. Re-install the Shell by running the following command from your Command Line:
    
    ```python
    shellfoundry install
    ```
    
4. In the **Sandbox** workspace, hover over the Shell resource and select **Attributes**. The **Resource Attributes** pane is displayed, listing the attributes which are visible to end users on the web.
    
    ![Shell Image](/Images/Devguide-shells/Modeling-Shells-with-TOSCA_624x296.png)
    

### Determine the usage of custom Shell attributes

In CloudShell, an attribute may have multiple rules that control the attribute’s visibility and behavior. These rules are specified in the tags definition. By default, all attributes are declared with the *setting* and *configuration* tags, which are not visible in the template. We can override the default value as you can see in the example below.

```css
properties:
  Att1:
    type: string         
    default: fast
    tags: [setting, configuration, search_filter]
```

- The available tags are:
    
- **setting**: This tag indicates that this attribute is a setting that can be controlled from the sandbox or defined in the blueprint by end users. Without this tag, the attribute is assigned to the resource but does not appear in the attributes pane.
    
- **configuration**: This tag indicates that this attribute is a resource configuration. CloudShell enables administrators to control the value of this attribute from Resource Manager Client but not from CloudShell Portal.
    
- **search\_filter** (Inventory Resources): Users will be able to filter based on that attribute in CloudShell Portal. It’s recommended to allow the filtering of attributes, which are both constrained by a limited set of values and often used to filter resources. Omitting this tag is relevant for attributes with unique values such as serial number or *uniqueid*, since this tag enables filtering.
    
- **abstract\_filter** (Inventory Resources): This attribute can be added to an abstract resource template.
    
- **include\_in\_insight**: This attribute’s value is saved in Insight and can be used to later create BI data for the resources linked to it.
    
- **readonly\_to\_users**: Only administrators and domain administrators in CloudShell Portal will be able to modify this attribute. Users will be able to see the attribute but not modify it.
    
- **display\_in\_diagram**: This attribute will be displayed on the component itself (in the blueprint/sandbox diagram) when using the larger icon size in the diagram.
    
- **connection\_attribute**: This attribute will be displayed in the **Inventory** tab of the **Resource Connections** dialog box. This enables users to specify a specific attribute value (such as Speed) that will apply only to this specific route when it is connected in a sandbox.
    
- **read\_only**: This attribute will be read only and users will not be able to modify it from CloudShell Portal.  
    Note that in CloudShell 9.2 and above, admins can change the values on read only attributes that were added to the resource discovery form (in the **Inventory dashboard**). Furthermore, the discovery process will use these updated values as is without running validations on them.
    
- It is recommended to only use the tags you need. Adding all attributes as search filters, for example, would cause a lot of UI clutter.
    

### Customize the Shell’s Image

The Shell’s image is defined in the artifacts section, and is displayed directly on the Shell resources.

**To change the image:**

- Add your own image file to the Shell project and change the file name in the artifacts section:
    
    ```css
    artifacts:
      icon:
        file: shell-icon.png
        type: tosca.artifacts.File
      driver:
        file: CustomDataModelDriver.zip
        type: tosca.artifacts.File
    ```
    

### Optional Shell Capabilities

The Shell supports two capabilities that can be enabled, assuming the Shell’s driver supports them: auto discovery and concurrent execution of commands.

The implementation of these capabilities is covered in detail in [Auto-discovery for Inventory Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Auto-discovery.htm) and the Driver Deep Dive article’s [Drivers and concurrency](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Driver-Deep-Dive.htm#drivers-and-concurrency) section.
