---
sidebar_position: 4
---

# Managing Shells
:::note
The procedures in this article apply to 2nd Gen Shells, unless stated otherwise. For information about 1st Gen Shells, contact CloudShell Support.
:::
This article explains how to add, update and remove Shells from CloudShell. Note that Shell management operations are performed by system administrators in the **Global** domain. For additional information, see [Shells Overview](../../intro/features/shells.md).

## Viewing Shells

The **Shells** page is only displayed for system administrators in the **Global** domain.

**To view Shells:**

1. As system administrator, access the **Global** domain.
2. In the **Manage** dashboard, in the left sidebar, click **Shells**.
    
    The **Shells** page is displayed.  
    

You can use the toolbar to only display official Quali shells, sort the Shells according to **Name** or date of modification, and filter them according to Shell **Type**.

## Importing Shells
:::warning
A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's `shell-definition.yaml` ONLY when something in the data model changes (new attributes added to `shell-definition.yaml`). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.
:::
**To import a new Shell into CloudShell:**

- From the **Add Shells** drop-down list, select the appropriate option:
    
    - **Get From Community** to download a compatible Shell from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) page. After you download the Shell, Click **Add Shells>Add From File** to import the Shell into CloudShell.
    - **Add From File** if you already have the Shell ZIP file and want to import it into CloudShell
        :::note
        To import a 1st Gen Shell, see [Import a Blueprint Package into CloudShell](../../portal/blueprints/creating-blueprints/import-package.md).
        :::
    
    The Shell is displayed in the **Shells** page and can be used by domain administrators in all CloudShell domains to create new inventory resources, as explained in [Adding Inventory Resources](../../portal/inventory/managing-resources/adding-inventory-resources/index.md).
    
    :::note Notes
    - If you are planning on running CloudShell in offline mode, and the Shell has dependencies, make sure to update the dependencies repository - see [Updating Python Dependencies for Shells, Drivers and Scripts](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts.md).
    - Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
    :::    

## Adding custom attributes to a Shell

This section explains how to add an attribute from the pool of global attributes to the Shell and set the attribute's defaults. Note that this capability applies to the Shell's root model and sub-models.

:::note Notes
- This capability applies to attributes that already exist in CloudShell. If the attribute you want to add is missing, make sure to add it in Resource Manager Client's **Attributes** tab.
- Custom attributes that are added to already-installed service shells are defined as "user input". As such, when adding the service into the blueprint/sandbox diagram, these attributes are displayed in the service's details form. In addition, when upgrading CloudShell to 9.1 or a later version, CloudShell will set all custom service attributes as user input.
:::
**To add a custom attribute to a Shell:**

1. Click the Shell's row or menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_28x27.png) and select **Details/Edit**.
    
    The **Details/Edit Resource** dialog box is displayed.
    
2. Click the **Add Custom Attribute** link at the bottom.
    
    A New Attribute is added to the list of attributes.
    
3. Select the **Attribute Name**.
4. Select the **Model Name** that will contain the attribute.
5. Optionally specify a **Default Value** (Mandatory for Lookup and Numeric attributes).
6. (For Lookup attributes) Use the **Restricted Values** field to optionally determine the attribute's possible values in this resource.
    :::tip
    To link the attribute’s possible values to the global attribute, remove all restricted values. This way, any updates made to the global attribute in Resource Manager Client are automatically applied to the shell’s attribute.
    :::

## Updating Shells

Shell update overrides that existing Shell's settings with the new Shell.
:::warning
A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's `shell-definition.yaml` ONLY when something in the data model changes (new attributes added to `shell-definition.yaml`). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.
:::
:::note Points to consider:
- You can only update Shells with a compatible version.
- Updating an uncertified Shell may cause backward compatibility issues.  
:::    

**To update a Shell:**

1. Click the Shell's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_27x26.png) and select **Update**.
    
    A dialog box is displayed.
    
2. In the dialog box, navigate to the updated Shell's ZIP file, select it and click **Open**.
    :::note
    If you are planning on running CloudShell in offline mode, and the Shell has dependencies, make sure to update the dependencies repository - see [Updating Python Dependencies for Shells, Drivers and Scripts](../cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts.md).
    :::

## Downloading Shells from CloudShell

CloudShell enables you to download Shells from the Shells page. This can be useful if you or a developer in your organization wants to make changes or updates to a specific Shell, as explained in the CloudShell Dev Guide's [Getting Started with Shell Development](../../devguide/developing-shells/getting-started.md). You can then update the existing Shell in CloudShell with the updated one.

**To download a Shell from CloudShell:**

1. Click the Shell's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_26x24.png) and select **Download**.
    
    Depending on your web browser, a dialog box prompting you to save the Shell's ZIP file or a "downloading" indication is displayed.
    
2. Save the file.

## Deleting Shells

Shells that have inventory resources cannot be deleted.
:::note
To delete a 1st Gen Shell, you must use the `DeleteResourceTemplate` method in the [TestShell API](../../api-guide/shell-dev-blueprint-design-api/testshell-api.md).
:::
**To delete Shells:**

- Click the Shell's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_29x28.png) and select **Remove**.
    
    If the Shell cannot be deleted, an error message is displayed, prompting you to download a CSV file.
    
    ![](/Images/CloudShell-Portal/Manage/ShellDependenciesMessage.png)
    
    The file lists the Shell's dependencies that need to be removed before deleting the Shell, and contains the following details:
    
    <table>
        <tbody>
            <tr>
                <td>Entity Name</td>
                <td>Names of the elements in CloudShell</td>
            </tr>
            <tr>
                <td>Entity Type</td>
                <td>Type of elements (Resource, Service, App, Abstract Resource, Abstract Template)</td>
            </tr>
            <tr>
                <td>Blueprint Names</td>
                <td>Names of the blueprints containing the elements</td>
            </tr>
            <tr>
                <td>Blueprint Template Names</td>
                <td>Names of the blueprint templates containing the elements</td>
            </tr>
            <tr>
                <td>Sandbox Names</td>
                <td>Names of sandboxes containing the elements</td>
            </tr>
        </tbody>
    </table>
    

## Related Topics

- [Adding Inventory Resources](../../portal/inventory/managing-resources/adding-inventory-resources/index.md)
