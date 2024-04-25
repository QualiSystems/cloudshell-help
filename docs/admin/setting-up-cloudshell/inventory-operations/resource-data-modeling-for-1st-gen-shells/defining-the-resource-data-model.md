---
sidebar_position: 1
---

# Defining the Resource Data Model
:::important
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](../../../../intro/features/shells.md).
:::
## Introduction to data modeling

Every resource in the resource repository inherits a collection of properties and behaviors from the data model on which it is based.

For example, the resource data model describes which attributes and drivers to associate with each type of resource. Initial, default and runtime attribute values are determined by the parent family and model.

Even if you choose to set up the resource data model and populate the resource repository automatically, it's important to understand the process in case you choose to customize the default settings and values. If you assign new attributes or modify the attribute values of a resource family or model, the updated properties will be applied to both new and existing resources.

Defining the resource data model affects the whole system, including how resources are searched for, how abstract resources are created, how they are saved in the database and more.

The data model and attributes should be standardized across the company therefore should get a proper design and review procedure prior to deployment.

There are two ways to define the resource data model: importing or manually creating them. In practice, defining the data model usually requires a mix of both methods.

Importing data modeling populates Resource Manager with pre-defined resource families, models and structures. You can import updated definitions by launching the configuration wizard, or by importing xml configuration files via the Resource Families tree. For additional information, see [Importing/Exporting Resource Family Updates](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates.md).

You can use these configuration files to add new resource families, associated models, attributes and their complete structure, or to update existing family and model definitions for the current resource structure.

Importing data modeling is a good starting point for setting up your resource data model, as it sets up common resource data models and configurations.

However, it was not designed to cover every possible device brand and version. If you need additional resource data models, you can add them manually. You may want to customize the default properties for imported resource families and models. The available options are extensive.

When you add a new resource family manually, in addition to defining its properties, you'll need to add associated models and structure manually. You can add new resource models to an existing resource family, or to one that you create.

### Steps to defining your data model

1. [Creating a resource family](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#creating-a-resource-family)
2. [Creating a resource model](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#creating-a-resource-model)
3. [Associating a driver to a resource model](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#associating-a-driver-to-a-resource-model)
4. [Associating an attribute to a family or model](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#associating-an-attribute-to-a-family-or-model)
5. [Define the resource structure](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#define-the-resource-structure)

## Creating a resource family

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Right-click the root and select **New \> Resource Family**.
    
    ![](/Images/Admin-Guide/Resource-Data-Modeling/New-Resource-Family.png)  
    
:::note
The **Name** field is mandatory. The **Description** field is optional. Resource family names can include any combination of alpha numeric characters, including spaces, hyphens, periods, pipes, and square brackets.
:::
4. Click the **Image** button and select **Set Image** to browse for an icon for the new resource family.
    
    The icon will be displayed on the resource, Execution instance diagram, and Lab Monitor, for every family resource. The maximum allowed image size is 240 KB. It is recommended to use 32x32 pixel icons.  
    :::tip
    It is recommended to add the relevant images to your data model so that users creating complex blueprints in CloudShell Portal will easily identify the resources.
    :::
5. Select the required properties for resources of this family:
    
<table>
    <thead>
        <th>Property</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Connectable</td>
            <td>When selected, resources from this family can be connected to other resources. For example, a traffic generator port is usually connectable, while the parent chassis and blades are not</td>
        </tr>
        <tr>
            <td>Locked By Default</td>
            <td>
            When selected, resources from this family are unshared by default, and therefore cannot be used in different sandboxes at the same time.

For example, you can choose to share a server resource to allow it to serve multiple sandboxes at the same time, while a port is typically used exclusively and therefore should be locked by default.
:::note
To override the setting for a specific resource, edit the resource's default share level in the **Inventory** dashboard. For more details, see [Editing Resources from the Inventory Dashboard](../../../../portal/inventory/managing-resources/editing-resources-from-inventory-dashboard.md).
:::
            </td>
        </tr>
        <tr>
            <td>Acts As Group</td>
            <td>
            Tells CloudShell to reserve all sub-resources of a resource whose family is defined to act as a group, along with the resource itself. For example, when attempting to reserve a port within a blade that is defined to act as a group, the blade resource and all the blade’s ports will be reserved as well.

This option is typically used to create a pair of neighboring ports.
:::note
**Acts As Group** is only defined when creating a new family.
:::
            </td>
        </tr>
        <tr>
            <td>Admin Only</td>
            <td>
            Hides this family's resources from all non-admin users. Admins can change this setting for a resource in CloudShell Portal - see [Editing Resources from the Inventory Dashboard](../../../../portal/inventory/managing-resources/editing-resources-from-inventory-dashboard.md).
:::note
You can only define a sub-resource as admin only, if the root family was defined as admin only.
:::
            </td>
        </tr>
        <tr>
            <td>Searchable</td>
            <td>Displays this family in advanced resource search results.</td>
        </tr>
        <tr>
            <td>Service Template</td>
            <td>
            If you are creating a family for services or apps, select the type of service that will be included in this category. Select the **Service Template** check box. From the **Type** drop-down list that is displayed, select the type of service:

- **Regular**: This is a regular service, not an app
- **Deployment**: Relevant for apps. This service deploys the app's virtual machine on the selected cloud provider.
- **Installation**: Relevant for apps. This service installs the application on the virtual machine.
- **Orchestration**: Relevant for apps. This is a built-in service that manages the execution of the app's services. Contact support before working with this type of service.
</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>
            The **Type** check box enables you to classify resources within this family into a category to help end-users search for this resource in the CloudShell Portal.

The categories are:

- **Resource**
- **Application**
</td>
        </tr>
        <tr>
            <td>Allow Remote Connection</td>
            <td>
            Enables users to remotely connect to resources of this family from the sandbox and the **Inventory** dashboard. The option is enabled by default.
:::note
When importing packages into CloudShell or upgrading from CloudShell 8.0 or earlier, the option is enabled by default for root resource families only. To enable for sub-resource families, select the check box in the family's **Parameters** page.
:::
            </td>
        </tr>
    </tbody>
</table>
    
6. Click **OK**.
    
    The new resource family is added to the **Resource Families** explorer.
    

## Creating a resource model

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Resource Families**.
3. In the **Resource Families** explorer, select the relevant family.
4. Right-click the family name and select **Add \> New \> Resource Model**.  
    ![](/Images/Admin-Guide/Resource-Data-Modeling/Resource-Model.png)
5. Enter a **Name** and optionally enter a **Description** for your model.
    :::tip
    It is recommended to start with the device vendor and complete with the device model
    :::
6. Click the **Image** button and browse for an icon to represent the model. The maximum allowed image size is 240 KB. It is recommended to use 32x32 pixel icons.
    :::tip
    It is recommended to add the relevant images to your data model so that users creating complex blueprints in CloudShell Portal, will easily identify the resources.
    :::
7. Click **OK**.
    
    The new model is added under the relevant family.
    

## Associating a driver to a resource model
:::warning Important
The **Drivers** management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st Gen Shells. For details, see [Customer Configuration Keys Repository](../../cloudshell-configuration-options/customer-configuration-keys-repository/general.md#show-the-drivers-management-page).
:::
This procedure explains how to associate a driver that exists in CloudShell to a resource model. Drivers provide commands that can be run on resources.

Drivers are added to CloudShell in the CloudShell Portal's **Manage** dashboard, as explained in [Adding drivers](../../../cloudshell-manage-dashboard/managing-automation/managing-drivers.md#adding-drivers).

**To associate a driver to a resource model:**

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Resource Families**.
3. In the **Resource Families** explorer, select the relevant resource model.
    
    The resource model's **Parameters** page tab is displayed.
    
4. In the **Drivers** sub-tab, click **Add/Remove From Bank**.
    
    The **Select Drivers** dialog box is displayed.
    
5. From the **Available Drivers** pane, select the driver you want to associate and click ![](/Images/Admin-Guide/Resource-Data-Modeling/RightArrow_45x30.png).
6. Click **OK**.
7. Optionally, select the **Supports Concurrent Commands** check box to enable multiple commands to run on the model's resources at the same time.
:::note
To use this driver, you will need to associate it to the resource(s) you create in the **Resource Explorer**. You can also associate a driver to a resource model in the **Manage** dashboard. For additional information, see [Editing drivers](../../../../admin/cloudshell-manage-dashboard/managing-automation/managing-drivers.md#editing-drivers).
:::
## Associating an attribute to a family or model

For information on how to create attributes, see [Attributes](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md).

**To associate an attribute with a resource family or model:**

1. In the **Resource Families** explorer, select the required family/model.

    The **Parameters** pane is displayed.

2. In the **Parameters** pane, in the **Attributes** tab, click **Add/Remove From Bank**.
3. In the **Resource Family Attributes** window, in the **Available Attributes** pane, select the required attributes.
    1. To add an attribute, in the **Available Attributes** pane, click ![](/Images/Admin-Guide/Resource-Data-Modeling/RightArrow_45x30.png).
    2. To remove attributes, in the **Selected Attributes** pane, click ![](/Images/Admin-Guide/Resource-Data-Modeling/LeftArrow_43x28.png).
4. Click **OK**.
:::note
If you don't see the attribute in the resource's **Configuration/Settings** tabs, make sure that the attribute has the **Configuration/Settings** rules selected.
:::
## Configuring associated attribute rules

After associating an attribute with a family or model, you can modify the rules associated with that instance of the attribute. The settings that you specify for an attribute instance will affect all child resources of the selected family or model, but will not affect the attribute's source settings.

**To edit attribute rules for an attribute instance:**

1. Click the **Admin** tab's **Resource Families** icon to open the **Resource Families** explorer.
2. Select a resource family or model from the **Resource Families** tree. Any attributes associated with the selected family or model will be displayed in the **Attributes** pane on the right.
3. Select the attribute that you wish to configure, and click the **Edit Rules** button.

**To edit rules for an attribute that is associated with a resource family:**

1. Select a resource family and click the toolbar's **Edit Rules** button.

    The Attributes **Rules** window contains three tabs: **Attributes Details**, **Value Constraints**, and **Inheritance Rules**.

### Setting new default value for an attribute instance

**To modify the attribute's default value:**

1. Click the **Attribute Details** tab.

    The attribute name, type, and description are global settings and cannot be changed.

### Restricting values for an associated attribute

**To define a set of valid attribute values for this specific family or model:**

1. Click the **Value Constraints** tab. By default, no constraints are set
2. To add constraints, check the **Restricted Values** option.
    1. For **String** or **Numeric** type attributes, enter the list of valid values for the attribute instance, separated by a comma
    2. For **Lookup** type attributes, check each value that you wish to associate with the attribute
:::note
Value constraints cannot be set for **Password** or **Boolean** type attributes.
:::
### Configuring attribute inheritance settings
:::note Important
The attribute inheritance feature will be deprecated in an upcoming release. Please do not use this setting.For additional information, contact [Quali Support](https://register.quali.com/).
:::
**To specify inheritance settings for this instance of the attribute:**

1. Click the **Inheritance Rules** tab.
2. Select **Default** rule: Not inherited to disable inheritance.  
    In this case, the attribute will apply to the selected family or model, but not to any resources of this type.
3. Select **Not overridable** to enable inheritance but to disable modifications to the attribute settings.  
    This attribute will be added to any child resources for the selected family or model with the current values and rules
4. Select **Inherited**, **overridable** to enable inheritance and property modifications.
    
    Child resources of the selected family or model can modify attribute values and settings.
    :::note
    Attributes inherited by a child resource cannot be removed from a family or model. You can however modify the default and restricted values of inherited attributes in a child resource. If you choose to modify the default or restricted values of an inherited attribute, the inheritance connection between the child resource and the parent family or model will be lost. Future changes to the family will no longer automatically apply to the modified child. Inherited attribute values that have been modified are marked with an asterisk
    :::

## Duplicating an existing data model

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Resource Families**.

**To duplicate an existing family along with the models included in it:**

1. In the **Resource Families** tree, select the family you wish to duplicate.
2. Right-click the family name and select **Copy**.
3. Right-click the root of the **Resource Families** tree and select **Paste**.

A new family and all its models is added to the **Resource Families** tree.

**To duplicate a model:**

1. In the **Resource Families** tree, select the model that you wish to duplicate.
2. Right-click the model name and select **Copy**.
3. Select the family of the model you just copied.
4. Right-click the family's name and select **Paste**.
:::note
You can only duplicate a model within the same family.
:::
A duplicate model, under a new name is added to the same family in the **Resource Families** tree.

## Define the resource structure

If the device you are modeling has sub-resources, such as ports or jacks, you can associate your resource model with the models of those sub-resources. This will enable you to add sub-resources, which use the associated models, to the actual resource you will create. For more information, see [Defining the Resource Structure](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure.md).

## Relate topics

- [Importing/Exporting Resource Family Updates](../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates.md)
