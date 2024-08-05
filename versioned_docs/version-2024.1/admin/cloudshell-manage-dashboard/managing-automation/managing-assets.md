---
sidebar_position: 2
---

# Managing Assets

## Assets overview

An asset is a script that runs automation in CloudShell sandboxes. CloudShell supports two types of scripts:

- **Python scripts** that run on the resource/App/blueprint level: A script is a single command on the blueprint or resource/App level. You can add many scripts to your blueprint or resources. CloudShell runs the scripts, which actually are processed in an external environment such as Python, which then returns the results to CloudShell.
    
*Sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier.*
    
- **Repository Assets** are Configuration Management scripts (bash/PowerShell) or Ansible playbooks that run on resources. For Configuration Management that runs on deployed Apps, see [Adding App templates](../../../admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template.md).
:::note
For brevity, the term "script" denotes both Python scripts and repository assets, unless indicated otherwise.
:::
### Out-of-the-box orchestration scripts

CloudShell provides the following orchestration scripts out-of-the-box. These scripts are included in the [CloudShell Sandbox Template](../../../admin/cloudshell-manage-dashboard/blueprint-templates.md#cloudshell-sandbox-template) but can also be added and removed from blueprints as appropriate.

- Default Sandbox Setup
- Default Sandbox Teardown
- Default Sandbox Save
- Default Sandbox Restore

To learn how to develop scripts for CloudShell, see [Getting Started with Orchestration Scripts](../../../devguide/develop-orch-scripts/getting-started-with-orch-scripts.md).

## Viewing scripts

In the **Manage** dashboard, you can view a repository of the blueprint and resource scripts that were uploaded in your domain. You can filter, sort, and search the repository for scripts.
:::tip
Global admins can see all scripts in CloudShell, including scripts that were added to other domains, while domain admins can only see scripts that were added to the domain they're currently in.
:::
**To view existing blueprint and resource scripts:**

1. In the **Manage** dashboard, from the left sidebar, select **Assets \> Blueprint**, or **Assets \> Resource**.
    
    The respective script catalog opens, displaying the blueprint or resource scripts/assets that were previously added to CloudShell, and related details, including: **Name**, **Type**, **Version**, **Blueprints** or resource **Models**, **Type**, **Domains**, and **Modified** by date and time.
    :::note
    Clicking **Manage \> Assets** opens the **Script/Blueprint** catalog by default.
    :::
2. To filter the list by domain, from the **Domain** dropdown list, select **All Domains** or a particular domain.
3. To sort the list, from the **Sort By** dropdown list, select **Modified** to sort the list by date and time in chronological order, or select **Name** to sort the list by script name in alphabetical order.
4. To search for particular scripts, type the relevant text in the search box ![](/Images/CloudShell-Portal/Manage/Manage-Scripts-Drivers/Searching-for-a-script-or_2_114x27.png) at the top of the left sidebar. For example, you can search by name, type, model, or owner.

## Adding scripts

Scripts give you the flexibility to customize a blueprint and make extra features available, for example, adding specialized commands that can be run in a sandbox. You can add commands through Python scripts and upload them to CloudShell Portal to be used when configuring blueprint orchestration, including PY, PYC, and ZIP files containing several Python files.

Use the steps in the following procedure to add blueprint and resource scripts to the CloudShell Portal.

:::note Notes
- The script is added to the domain you are currently in. To expose the script to all domains, add the script in the Global domain
- By default, new scripts are added into CloudShell as Python 3 scripts. Therefore, if you're adding a Python 2 script, make sure to change the script's **Type**, as explained in [Editing scripts](../../../admin/cloudshell-manage-dashboard/managing-automation/managing-assets.md#editing-scripts).
:::
**To add blueprint and resource scripts:**

1. In the **Manage** dashboard, from the left sidebar, select **Assets \> Blueprint** or **Assets \> Resource** to open the respective script catalog.
    :::note
    Repository assets only apply to resource-level components.
    :::
2. In the toolbar, click **\+ Add Python Script** to add a Python script or **\+ Add Repository Asset** to add a Configuration Management script/playbook.
    
    A dialog box is displayed, prompting you to select a script to upload.
    
3. Browse and select a script file to upload to CloudShell, and click **Open**.
    
    The **Uploading Completed** message is displayed at the top of the script catalog, indicating the upload status. When completed, the **Edit** button is displayed on the right. For more information, see [Editing scripts](../../../admin/cloudshell-manage-dashboard/managing-automation/managing-assets.md#editing-scripts).
    

## Editing scripts

This section explains how to edit a Python script or repository asset's default parameters.
:::note
Global admins can edit any script in CloudShell while domain admins can only edit scripts that were added to the domain they are currently in.
:::
**To edit Python scripts:**

1. In the **Manage** dashboard, from the left pane, select **Assets \> Blueprint** or **Assets \> Resource** to open the respective script catalog.
    
2. Click the **Name** of the script you want to edit.
    
    Or-
    
    Click the script's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_22x20.png) and select **Edit**.
    
    The **Edit Script** dialog box for the respective blueprint or resource script is displayed.
    
3. Edit the relevant fields, as described in the following table:
    
<table>
    <thead>
        <th>Field</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Script File</td>
            <td>The script file. To replace the current script file with another one, browse to the location where the required PY or PYC file is located, select the file, and click **Open**.</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>The name of the script. Edit as required.</td>
        </tr>
        <tr>
            <td>Script Type</td>
            <td>
            From the dropdown list, select an option:

- Default
- Setup
- Teardown
- Save
- Restore

If you select **Setup**, **Teardown**, **Save**, or **Restore**, you cannot specify Category, Alias or parameters for the script.

:::note
This field is relevant for blueprint scripts only.
:::
            </td>
        </tr>
        <tr>
            <td>Version</td>
            <td>Type the script version number. Remember to increment the number the next time you upload a new version of the script.</td>
        </tr>
        <tr>
            <td>Visibility</td>
            <td>
            (Hidden for blueprint scripts that have a Script Type defined) Determines who can see the script in the diagram's **Commands** pane:

- **Admin Only**: Only domain admins and system admins
- **Everyone**: (Default) All user types
</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>
            Select the Python version of the script. Options are **Python 2** or **Python 3**.

The default setting is Python 3, but the CloudShell admin can change it via the `DefaultPythonVersion` configuration key.

:::note Notes
- This does not affect existing scripts, whose Python version remains as is.
- Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
:::
            </td>
        </tr>
        <tr>
            <td>Description</td>
            <td>Type the relevant text to clearly describe the script.</td>
        </tr>
        <tr>
            <td>Models</td>
            <td>
            (Relevant for resource scripts) From the dropdown list, select the relevant resource models associated with the resource script.

Associate App installation scripts to the relevant **Installation Options** model(s).
</td>
        </tr>
        <tr>
            <td>Blueprints</td>
            <td>(Relevant for blueprint scripts) Lists the blueprints that use the script. This field is only visible if the script is included in any blueprints.</td>
        </tr>
        <tr>
            <td>Category</td>
            <td>Type the category name. In an active sandbox, in the **Blueprint Commands** pane, the scripts are arranged according to these categories.</td>
        </tr>
        <tr>
            <td>Alias</td>
            <td>The alias for the script. Edit as required. In an active sandbox, in the **Blueprint Commands** pane, the scripts appear under this alias.</td>
        </tr>
    </tbody>
</table>
    
4. To add additional parameters to the script, click the **Add Parameter** link at the bottom of the dialog box, and type the **Name**, **Default Value**, and **Description** of the parameter. Make sure you add parameters that are relevant for your script.
    
    These parameters will be available for editing when running the script in an active sandbox.
    
    To edit and delete the script parameters, click the adjacent **Edit** or **Delete** button.
    
5. Click **Apply** to apply the changes and keep the window open.
6. Click **Save** to save the changes and close the window.
    
    The updated details of the edited script are displayed in the relevant blueprint or resource script catalog.
    

**To edit repository assets:**

1. In the **Manage** dashboard, from the left pane, select **Assets \> Resource** to open the Resource Assets catalog.
    
2. Click the **Name** of the repository asset you want to edit.
    
    Or-
    
    Click the asset's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_22x20.png) and select **Edit**.
    
    The **Edit Script** dialog box is displayed.
    
3. Edit the relevant fields, as described in the following table:
    
<table>
    <thead>
        <th>Field</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>The name of the asset. Edit as required.</td>
        </tr>
        <tr>
            <td>Visibility</td>
            <td>
            Determines who can see the asset in the diagram's **Commands** pane:

- **Admin Only**: Only domain admins and system admins
- **Everyone**: (Default) All user types
</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>Type the relevant text to clearly describe the asset.</td>
        </tr>
        <tr>
            <td>Select Tool</td>
            <td>
            Select the resource's installation and configuration tool.

- **Script**: Select the custom script to run (PowerShell, bash or sh).
- **Ansible**: (Intended for customers who are already using Ansible) Select the Ansible playbook to run.


Depending on the selection, additional options may become available.
</td>
        </tr>
        <tr>
            <td>Connection Method</td>
            <td>
            The method to use to connect to the resource.

Select:

- **SSH** if the resource has a Linux OS
- **Windows Remote Management** if the resource has a Windows OS
:::note
To run configuration management on a Windows machine, the machine must have WinRM enabled. For details, see [Enable WinRM on Windows VMs to Support Configuration Management](../../../devguide/enable-winrm-on-win-vm-for-cfg-mng.md).
:::
</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>
            Details of the Ansible playbook or custom script. Unlike for Apps, resources support only one Configuration Management script or playbook.

- **URL**: Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers.
:::tip
The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint.

- To use parameters, specify the parameter name in curly brackets (for example: \{branch\}).
- If the App has this parameter, CloudShell will replace the \{branch\} with its value during execution.
- If the parameter is missing, CloudShell will replace \{branch\} with an empty string.
- If you are using a global input, customers would be well advised to set a default value on the global input
:::
<details>
<summary>
For GitHub, specify the raw URL. For example:
</summary
>
```javascript
https://raw.githubusercontent.com/.../site.yml
```
</details>
<details>
<summary>
For GitLab, specify the API endpoint in the format: 
</summary>

```javascript
https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master
```

Where:

- Each special character that the file contains has to be encoded. In the example above - "%2E” is an encoded point (".”)
    
- The ref value is the branch name (master for this example)
</details>  

<details>
<summary>
For BitBucket Data Center (on premise), use the following URL format:
</summary>

```javascript
http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml
```
</details>
<details>
<summary>
For BitBucket Cloud, use one of the following:
</summary>

- For source code files, specify the API endpoint:

```javascript
https://api.bitbucket.org/2.0/repositories/{username}/{repository name}/src/{GUID- the Commit hash string} /testsharding.yml
```

- For download files (files residing in the repository's "Downloads" folder), specify this endpoint:

```javascript
https://api.bitbucket.org/2.0/repositories/{username}/{repository name}/downloads/site.yml
```
</details>
</td>
        </tr>
        <tr>
            <td>User/Password</td>
            <td>(For private repositories) Access credentials or token to the script/playbook's online repository.</td>
        </tr>
        <tr>
            <td>Token</td>
            <td>
            (For private repositories) Access token to the script/playbook's online repository.

For GitHub and GitLab, specify the API token. For BitBucket Data Center, specify the personal access token.
            </td>
        </tr>
        <tr>
            <td>Inventory Groups</td>
            <td>
            (For Ansible) Specify the host groups for the Configuration Management to be installed, separated by semicolons (;), thus allowing plays that target these groups to run on the resource.

For example: `Servers/AppServers;Servers/DBServers`
            </td>
        </tr>
        <tr>
            <td>Models</td>
            <td>From the dropdown list, select the relevant resource models associated with the asset.</td>
        </tr>
        <tr>
            <td>Category</td>
            <td>Type the category name. In an active sandbox, in the **Resource Commands** pane, the resource is arranged according to these categories.</td>
        </tr>
        <tr>
            <td>Alias</td>
            <td>The alias for the repository asset. Edit as required. In an active sandbox, in the **Resource Commands** pane, the asset appears under this alias.</td>
        </tr>
    </tbody>
</table>
    
4. To add additional parameters to the asset, click the **Add Parameter** link at the bottom of the dialog box, and type the **Name**, **Default Value**, and **Description** of the parameter. Make sure you add parameters that are relevant for your asset.
    
    These parameters will be available for editing when running the asset in an active sandbox.
    
    To edit and delete the asset parameters, click the adjacent **Edit** or **Delete** button.
    
5. Click **Apply** to apply the changes and keep the window open.
6. Click **Save** to save the changes and close the window.
    
    The details of the update asset are displayed in the Resource Assets catalog.
    

## Downloading scripts

You can download uploaded scripts to save them in your system.
:::note
Global admins can download any script in CloudShell while domain admins can only download scripts that were added to the domain they are currently in.
:::
**To download blueprint and resource scripts:**

1. In the **Manage** dashboard, from the left pane, select **Assets \> Blueprint** or **Assets \> Resource**.
    
    The respective blueprint or resource script catalog is displayed.
    
2. Click the script's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_27x26.png) and select **Download**.
    
    A dialog box is displayed, prompting you to open or save the file.
    

## Deleting scripts

You can delete scripts you no longer require.
:::note
Global admins can delete any script in CloudShell while domain admins can only delete scripts that were added to the domain they are currently in.
:::
**To delete scripts:**

1. In the **Manage** dashboard, from the left pane, select **Assets \> Blueprint** or **Assets \> Resource**.
    
    The respective blueprint or resource script catalog is displayed.
    
2. Select the check boxes next to the relevant scripts that you want to delete.
3. In the toolbar, click the **Delete Selected** button.
    
    Or-
    
    Click the script's More actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_27x26.png) and select **Remove**.
    
    A message is displayed, prompting you to confirm the deletion.
    
    The selected scripts are removed from the respective blueprint or resource script catalog.
    

## Requirements, script dependencies, virtual environments

Each Python script's dependencies are listed in the `requirements.txt` file that is included in the zip file that contains the script. The dependencies are installed on the execution server by the pip installation when CloudShell prepares the Python virtual environment for the script. To use offline execution servers, the admin will need to perform several additional configurations.

For additional information, see [What are Python Virtual Environments?](../../cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments.md).

## Related Topics

- [Creating Blueprints](../../../portal/blueprints/creating-blueprints/index.md)
- [Create Blueprint Commands](../../../portal/blueprints/creating-blueprints/create-blueprint-commands.md)
- [Configure Blueprint Orchestration](../../../portal/blueprints/creating-blueprints/configure-orchestration.md)
- [Run Commands](../../../portal/sandboxes/sandbox-workspace/run-commands.md)
- [Run App Commands](../../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md)
- [CloudShell Sandbox Template](../blueprint-templates.md#cloudshell-sandbox-template)
