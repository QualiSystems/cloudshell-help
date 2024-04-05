---
sidebar_position: 3
---

# Managing Drivers
:::caution Important:
The **Drivers** management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st Gen Shells. For details, see [Customer Configuration Keys Repository](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository.md).
:::
## Drivers overview

In CloudShell, a driver is a group of commands that can be associated with a blueprint or resource. Each blueprint or resource can have one driver associated with it. Blueprint drivers are developed in CloudShell Authoring while resource drivers can also be developed in Python, on their own or within Shells. To learn more about Shells, see [Managing Shells](../../../admin/cloudshell-manage-dashboard/managing-shells.md).
:::note
Resource drivers are supported for backwards compatibility only.
:::
CloudShell manages the life cycle of the driver, where it:

- **Initializes** the driver, whereby it allows the driver to do some setup initialization
- Performs **Cleanup** at the end of driver life cycle, whereby it allows the driver to free system resources for which the driver is no longer required
- Preserves the **State** of the driver commands

## Viewing drivers

In the **Manage** dashboard, you can view a repository of the blueprint and resource drivers that were uploaded in your domain. You can filter, sort, and search the repository for drivers.

**To view existing blueprint and resource drivers:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Blueprint**, or **Drivers \> Resource**.
    
    The respective driver catalog opens, displaying the blueprint or resource drivers that were previously added to CloudShell, and related details, including: **Name**, **Type**, **Version**, **Blueprints** or resource **Models**, **Domains**, and **Modified** by date, time, and user name.
    :::note
    Clicking Manage > Drivers opens the Driver/Blueprint catalog by default.
    :::
2. To filter the list by domain, from the **Domain** dropdown list, select **All Domains** or a particular domain.
3. To sort the list, from the **Sort By** dropdown list, select **Modified** to sort the list by date and time in chronological order, or select **Name** to sort the list by driver name in alphabetical order.
4. To search for particular drivers, type the relevant text in the search box ![](/Images/CloudShell-Portal/Manage/Manage-Scripts-Drivers/Searching-for-a-script-or_2.png) at the top of the left sidebar. For example, you can search by name, type, model, or owner.

## Adding drivers

You can add drivers to resources or blueprints to add commands that can be run in a sandbox. Drivers can be developed using CloudShell Authoring or Python scripts that comply with the rules defined by CloudShell. To learn how to create Python scripts, see the [Getting Started with Orchestration Scripts](../../../devguide/develop-orch-scripts/getting-started-with-orch-scripts.md).
:::note
Python drivers may have dependencies they need to use in order to run. For additional information, see [Requirements, driver dependencies, virtual environments](../../../admin/cloudshell-manage-dashboard/managing-automation/managing-drivers.md#requirements-driver-dependencies-virtual-environments).
:::
You can also automate the execution of Python scripts using the API. For details about automating scripts, see [CloudShell Automation API](../../../api-guide/shell-dev-blueprint-design-api/cs-automation-api).

You can upload the following CloudShell Authoring and Python drivers to the CloudShell Portal:

- For resources, you can add DLL CloudShell Authoring drivers and ZIP files with Python drivers
    :::note
    Python drivers may have dependencies they need to use in order to run. For additional information, see [Requirements, driver dependencies, virtual environments](../../../admin/cloudshell-manage-dashboard/managing-automation/managing-drivers.md#requirements-driver-dependencies-virtual-environments).
    :::
- For blueprints, you can add DLL CloudShell Authoring drivers
    :::note
    The driver will be added to the domain you are currently in. To expose the driver to all domains, add the driver to the Global domain.
    :::
**To add blueprint and resource drivers:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Blueprint** or **Drivers \> Resource** to open the respective driver catalog.
2. In the toolbar, click **\+Add New Driver**.
    
    A dialog box is displayed, prompting you to select a driver to upload.
    
3. Browse and select a driver file to upload to CloudShell, and click **Open**.
    
    The **Uploading Completed** message is displayed at the top of the driver catalog, indicating the upload status. When completed, the **Edit** button is displayed on the right. For more information, see [Editing drivers](#editing-drivers).
    :::note
    In the driver catalog, you can easily identify the driver type. The driver names are marked by the respective **Python** or **CloudShell Authoring** icon, and the **Type** column displays the driver type.
    :::

## Editing drivers

You can edit a driver to modify its default parameters.

**To edit blueprint and resource drivers:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Blueprint** or **Drivers \> Resource** to open the respective driver catalog.
2. Click the **Name** of the driver you want to edit.
    
    Or-
    
    Click the driver's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Edit**.
    
    The **Edit Driver** dialog box for the respective blueprints or resource driver is displayed.
    
3. Edit the relevant fields, as described in the following table. For each driver, additional read-only fields are displayed and vary per driver type and related functions.
    
    | Field | Description |
    | --- | --- |
    | Driver File | The driver file. To replace the current driver file with another one, browse to the location where the required file is located, select the file (DLL file for blueprint drivers, or zip, py, or pyc file for resource drivers), and click **Open**. |
    | Name | The name of the driver. Edit as required. |
    | Version | The driver version number is automatically generated by the system. The number will be automatically incremented with every new version of the driver. |
    | Description | Type the relevant text to clearly describe the driver. |
    | Models | (Relevant for resource drivers) From the dropdown list, select the relevant resource models to associate the resource driver to. After you upload the resource driver, you will need to associate it to its intended resource models.<br/>To associate drivers to resource models via Resource Manager, see [Associating a driver to a resource model](../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md#associating-a-driver-to-a-resource-model). |
    
4. Click **Apply** to apply the changes and keep the window open.
5. Click **Save** to save the changes and close the window.
    
    The updated details of the edited driver are displayed in the relevant blueprint or resource driver catalog.
    

## Activating resource drivers

After you upload the resource driver and you specify the resource models for it, you can then associate this driver with the existing inventory resources that do not have drivers.

**To activate a resource driver:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Resource**.
    
    The resource driver catalog is displayed.
    
2. Click the driver's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Set as active**.
    
    A dialog box is displayed, prompting you to confirm.
    
    A confirmation message is displayed, indicating the number of resources updated with this driver.
    

## Downloading drivers

**To download blueprint and resource drivers:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Blueprint** or **Drivers \> Resource**.
    
    The respective blueprint or resource driver catalog is displayed.
    
2. Click the driver's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Download**.
    
    A dialog box is displayed, prompting you to open or save the file.
    

## Deleting drivers

**To delete drivers:**

1. In the **Manage** dashboard, from the left sidebar, select **Drivers \> Blueprint** or **Drivers \> Resource**.
    
    The respective blueprint or resource driver catalog is displayed.
    
2. Select the check boxes next to the relevant drivers that you want to delete.
3. In the toolbar, click the **Delete Selected** button.
    
    Or-
    
    Click the script's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Remove**.
    
    A message is displayed, prompting you to confirm the deletion.
    
    The selected drivers are removed from the respective blueprint or resource driver catalog.
    

## Requirements, driver dependencies, virtual environments

Each Python driver's dependencies are listed in the `requirements.txt` file that is included in the zip file that contains the driver. The dependencies are installed on the execution server by the pip installation when CloudShell prepares the Python virtual environment for the driver. To use offline execution servers, the admin will need to perform several additional configurations.

For additional information, see [What are Python Virtual Environments?](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments.md).

## Related Topics

- [Creating Blueprints](../../../portal/blueprints/creating-blueprints/index.md)
- [Create Blueprint Commands](../../../portal/blueprints/creating-blueprints/create-blueprint-commands.md)
- [Configure Blueprint Orchestration](../../../portal/blueprints/creating-blueprints/configure-orchestration.md)
- [Run Commands](../../../portal/sandboxes/sandbox-workspace/run-commands.md)
- [Run App Commands](../../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md)
- [CloudShell Sandbox Template](../../../admin/cloudshell-manage-dashboard/blueprint-templates.md#cloudshell-sandbox-template)
