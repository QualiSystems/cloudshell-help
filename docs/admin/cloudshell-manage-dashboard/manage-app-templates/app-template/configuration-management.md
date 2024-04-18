---
sidebar_position: 3
hide_table_of_contents: true
---

# App Configuraion Management Settings

When adding or editing an App, click **Configuration Management** and configure the application to be installed on the VM

![](/Images/CloudShell-Portal/Manage/ConfigurationManagement.png)
    
:::tip
To learn how to develop custom scripts and Ansible playbooks, including examples, and set up support for the desired configuration management tool, see [Developing Configuration Management Scripts for Apps](../../../../devguide/develop-config-management-scripts-for-apps/index.md).
:::

:::note Notes    
- To run configuration management on an Azure App, make sure the App's VM size is Basic\_A2 or larger.
- For configuration management operations, CloudShell uses an available Execution Server (for Ansible, it's a Linux Execution Server that has the **Supports Ansible** flag).
    
    If the cloud provider resource has an **Execution Server Selector** configured, it will use that selector. If the selector is empty, CloudShell will use the selector defined in the appropriate **Resource Manager Client \>Configuration Services** model (**Ansible Configuration** or **Custom Script Configuration**).
    
- Execution Server selectors specified on the deployed App shell/resource are not used to execute configuration management operations.
:::
    
1. Define the script or playbook to install.

<table>
    <thead>
        <th>Attribute</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Select Tool</td>
            <td>
Select the application's installation and configuration tool.
- **None**: Do not use any Configuration Management option. Use this option if, for example, the image or template already contains the application to install.
- **Script**: Select the custom script to run (PowerShell, bash or sh).
- **Ansible**: (Intended for customers who are already using Ansible) Select the Ansible playbook to run.
:::note
The playbook runs once during the Setup phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way.
:::
        
Depending on the selection, additional options may become available.  
            </td>
        </tr>
        <tr>
            <td>Connection Method</td>
            <td>
The method to use to connect to the VM.
    
Select:

- **SSH** if the VM has a Linux OS
- **Windows Remote Management** if the VM has a Windows OS
        
:::note
To run configuration management on a Windows VM, the VM must have WinRM enabled. For details, see [Enable WinRM on Windows VMs to Support Configuration Management](../../../../devguide/enable-winrm-on-win-vm-for-cfg-mng.md).
:::                        
            </td>
        </tr>
        <tr>
            <td>Playbook / Script Location</td>
            <td>
Details of the Ansible playbook or custom script.
    
- URL: Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers.

:::tip        
The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint.

- To use parameters, specify the parameter name in curly brackets (for example: `{branch}`).
- If the App has this parameter, CloudShell will replace the `{branch}` with its value during execution.
- If the parameter is missing, CloudShell will replace `{branch}` with emptystring.
- If you are using a global input, customers would be well advised to set a default value on the global input
:::
        
**For GitHub, specify the raw URL. For example:**

```javascript
https://raw.githubusercontent.com/.../site.yml
```

**For GitLab, specify the API endpoint in the format:**

```javascript
https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master
```

Where:

- Each special character that the file contains has to be encoded. In the example above - “%2E” is an encoded point (“.”)
    
- The ref value is the branch name (master for this example)
    

**For BitBucket Data Center (on premise), use the following URL format:**

```javascript
http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml
```

**For BitBucket Cloud, use one of the following:**

- For source code files, specify the API endpoint:
    
    ```javascript
    https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/src/{GUID- the Commit hash string}/testsharding.yml
    ```
    
- For download files (files residing in the repository's "Downloads" folder), specify this endpoint:
    
    ```javascript
    https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/downloads/site.yml
    ```
                 
:::note Important
If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open Resource Manager Client>Resource Families>Configuration Services (Ansible Configuration or Custom Script Configuration) and set the **Verify Certificate** attribute to **False**.
:::
        
- User/Password: (For private repositories) Access credentials or token to the script/playbook's online repository.
    
- Token: (For private repositories) Access token to the script/playbook's online repository.
        
    For GitHub and GitLab, specify the API token. For BitBucket Cloud, set the repo's "App Password" in the App template's Password field. For BitBucket Data Center, specify the personal access token.
        
:::note Notes    
- For Custom Script configurations: In SSH mode, only bash and sh scripts are allowed. In WinRM mode, only PowerShell scripts are allowed. WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the winrm\_transport parameter to ssl.
- For Ansible configurations: The Ansible playbook must be a YML or YAML file. To specify multiple playbooks or a hierarchy of an Ansible project, you can specify multiple Ansible playbooks or a ZIP package. For example: `https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip`
- If a ZIP containing 2 or more playbooks is specified, CloudShell will use the playbook file titled site.yml or site.yaml. If the file is missing, the App's deployment will fail.
:::
            </td>
        </tr>
        <tr>
            <td>Inventory Groups</td>
            <td>
(For Ansible) Specify the host groups for the application to be installed, separated by semicolons (;). The newly deployed VM will be associated to these groups, thus allowing plays that target these groups to run on the VM.
    
For example: `Servers/AppServers;Servers/DBServers`
            </td>
        </tr>
        <tr>
            <td>Parameters</td>
            <td>
Parameters to be passed to the Ansible playbook or custom script. Specify the parameters and their default values.
    
In the blueprint or sandbox diagram, privileged users can also set the parameter to receive the value that is specified for a global input when reserving a sandbox containing the App. This is done by selecting the global input when editing the App in the blueprint or sandbox diagram. For example, a global input that specifies the build number of a product to be tested or which components of a product to install.
    
(For Ansible) To customize the port to be used to communicate with the VM, add the `Ansible_port` parameter. Default: `SSH` / `Port: 22` / `WinRM: 5985`.
            </td>
        </tr>
        <tr>
            <td>Additional Arguments</td>
            <td>
(For Ansible) Define arguments to be passed to the execution of the playbook (`Ansible-playbook` command). For example, `-v` will set verbose mode on while `-f` will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation.
    
The arguments must be specified in Resource Manager Client > Configuration Services family > Ansible Configuration model > Ansible Additional Arguments attribute.
    
Note: The arguments are defined globally for all Apps using Ansible.
    
Important: To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known\_hosts' key), include the following additional arguments: `--ssh-extra-args='-o StrictHostKeyChecking=yes'`
            </td>
        </tr>
    </tbody>
</table>
    
    
2. To enable the end-user to rerun the App's configuration management on the deployed App in the sandbox, select **Allow rerunning configuration management for resources deployed from the App**. Once the App's deployment completes, a Rerun Configuration Management command is included in the deployed App's Application Commands pane. For details, see [Run App Commands](../../../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md). This is useful for rolling back the App's VM to its original state.
    
3. To enable blueprint and sandbox owners to modify the App's Configuration Management details, select Allow blueprint/sandbox owners to modify the App's Configuration Management. The following details can be modified: playbook/script, authentication details, inventory groups, and parameters. Note that the modifications only apply to the blueprint or sandbox of the instance.
4. Optionally click the Add New Script/Playbook link at the bottom right to add additional custom scripts/Ansible playbooks to the App. The scripts will run in their display order, from top to bottom. You can drag scripts up or down to rearrange.

5. To change the script's alias, click the script's name and change as appropriate.
    
    ![](/Images/CloudShell-Portal/Manage/RenameConfigManageScript.png)
