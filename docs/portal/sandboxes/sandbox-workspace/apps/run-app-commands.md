---
sidebar_position: 4
---

# Run App Commands

These commands are available for VMs deployed by CloudShell (Apps) and for static VM resources that were added to the CloudShell inventory.

You start by deploying the App. This can be done manually as explained below or automatically via the out-of-the-box **Default Sandbox Setup** script, deploys all Apps in the sandbox as part of the Setup process. Once the App is deployed, additional automation commands are provided by the App's shell - see the **App Resource** step in [Adding App templates](../../../../admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template.md).

Note: Some commands, like Refresh IP, do not apply to static VMs.

**To run an App command:**

1. In a sandbox diagram, select the required App.
2. Hover over the App. From the context menu, select **Commands**.
    
    The **Application Commands** pane is displayed, listing the commands available for this App.
    
3. Click the **Deploy** command.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working with Apps/Working with Apps_5_New.png)
    
    The App deploys the VM and installs the specified application in it. When App deployment completes, an "active" live status icon (![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActiveColorCode.png)) is displayed on the App and additional commands become available.
    
    :::note
    For vCenter Apps, the VM is deployed under the vCenter folder defined in the App's vCenter cloud provider resource, under the `Deployed Apps` folder, in a dedicated folder named as the sandbox ID.
    :::
    
    :::info
    If App deployment fails, an "error" live status icon is displayed on the App. Hover over the icon to see the error's description.  
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/AppDeploymentFail.png)
    :::
    
    The following Day 2 commands are provided by default for deployed Apps:
    
<table>
    <thead>
        <th>Command</th>
        <th>Deployed App</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Console</td>
            <td>OpenStack 2G</td>
            <td>
                Prints the OpenStack console URL to the sandbox's Output console. Use this URL to view the instance OS.
                
                **To open the instance's OpenStack console:**
                <ol>
                    <li>Run the **Console** command.</li>
                    <li>When the command's execution completes, open the Output console.</li>
                    <li>Use the URL to see the web console in a new browser tab.</li>
                    <li>Log in with the credentials to the OpenStack instance.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <td>Customize Guest OS</td>
            <td>VMware vCenter 2G</td>
            <td>
            Runs vCenter's Run Guest OS command on the VM before the VM powers on.

            This is a hidden command that needs to be executed using the CloudShell Automation API, as part of the sandbox's setup orchestration for example.
            
            Example scenarios include:
            
            - Running several customization specs on the same VM by running this command consecutively for each customization spec, followed by a power cycle (Power Off and then Power On)
            - Having a custom setup script that reserves the VM's MAC addresses from the IP management system (IPMS) and then runs the Customize Guest OS to assign the reserved IP addresses to the VM's network interfaces.
            
            For details, see [Customize Guest OS vCenter Command Implementation](../../../../devguide/develop-orch-scripts/cs-oob-orch/customize-guest-os-vcenter-command.md).
            </td>
        </tr>
        <tr>
            <td>Get Snapshots</td>
            <td>VMware vCenter</td>
            <td>
            Displays a list of the App's snapshots. To see the list, click the command execution’s **Show command output** button.

            ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Apps/GetSnapshotCommandOutput.png)
            </td>
        </tr>
        <tr>
            <td>Get VM Web Console</td>
            <td>VMware vCenter 2G</td>
            <td>
            Open the VM’s web console directly from the deployed App. This can be done with or without QualiX (by specifying the credentials of a vCenter user that has at least the Virtual Machine console user role). For details on configuring QualiX support, see [Configure VM Web Console Access to vCenter App VMs (QualiX)](../../../../install-configure/qualix/post-installation-config/configure-vm-web-console.md).

            **To open the VM's web console:**

            1. Run the Get VM Web Console command.
            2. When the command's execution completes, open the Output console.
            3. Click the URL to open the web console in a new browser tab.
                
                ![](/Images/CloudShell-Portal/Manage/GetVMWebConsole.png)
                
            4. Log in with your vCenter credentials.
            </td>
        </tr>
        <tr>
            <td>Power Off</td>
            <td>All</td>
            <td>
            Shuts down the App's virtual machine but does not remove it from the sandbox.
            
:::note Notes
 - Apps are designed to be used in the context of a sandbox. Therefore, when the sandbox ends, you must ensure the deployed Apps are deleted and their virtual machines powered off and removed from the cloud provider. CloudShell's out-of-the-box **Default Sandbox Teardown** orchestration script does this during the **Teardown** process of the sandbox. For additional information, see [CloudShell Sandbox Template](../../../../admin/cloudshell-manage-dashboard/blueprint-templates.md#cloudshell-sandbox-template).
 - Deleting a deployed App from the sandbox will power off the App's VM and delete the VM from the cloud provider. For additional information, see the [Run App Commands](../../../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md) below.
:::
</td>
        </tr>
        <tr>
            <td>Power On</td>
            <td>All</td>
            <td>
            Deploys the App (deploys the virtual machine and installs the specified application).

Once deployed, the App changes to a resource modeled after the Shell specified for the App, and receives the IP address of the deployed virtual machine.

Note that this command is not available for Azure deployed Apps that were deployed in another sandbox. Power On is only available in the "master" sandbox.
            </td>
        </tr>
        <tr>
            <td>Reconfigure VM</td>
            <td>
            VMware vCenter 2G

Microsoft Azure 2G
            </td>
            <td>
            Allows scaling up/down the VM's technical specifications. 

**To reconfigure:**
1. **Power Off** the VM.
    :::note
    Power off is not required when reconfiguring CPU and RAM on vCenter Apps based on vCenter 2G shell version 3.4.0 and up.
    :::
    
2. Click **Reconfigure VM**.
3. Specify the new settings (see the tooltips for additional details):
    
    For vCenter:

    - **CPU**: Number of CPU cores
    - **RAM**: Memory in GB
    - **HDD**: Disk size in GB. Semicolon-separated list of disk number:size pairs. For example: "1:60;2:40"
            
    :::note Notes

    - HDD disk size of a deployed App cannot be scaled down.
    - HDD disk size cannot be modified for deployed Apps that have a snapshot.
    - For Apps deployed from linked clones, the original image's HDD disk sizes cannot be changed, but it is possible to add additional disk sizes. In other words, if the image has disks 1 and 2, you can add disk 3. For example: "3:25".
    :::
            
        
    For Azure:

    - **VM Size**: Microsoft Azure VM Size. For example: "Standard\_A1\_v2"
    - **OS Disk Size**: OS disk size, in GB
    - **OS Disk Type**: OS disk type (HDD / SSD)
    - **Data Disks**: Add/edit disk size by their name (HDD by default). The syntax is: `disk_name:disk_size,disk_type`.
        
        Supported disk types are
        
        - **Standard HDD** (default)
        - **Standard SSD**
        - **Premium SSD**
        - **Ultra SSD**
        - **Standard SSD (zone-redundant storage)**
        - **Premium SSD (zone-redundant storage)**
        
        For example:
        
        `disk1:10;disk2:20,Premium SSD;disk3:20,Standard SSD (zone-redundant storage)`
        
        :::note
        Disk size of a deployed App cannot be scaled down.
        :::
        
4. Click Run.
5. Power On the VM.
6. Reconfigure VM does not automatically update the App's VM details. To do so, open the App's VM Details pane and click the Refresh button.            
</td>
        </tr>
        <tr>
            <td>Refresh IP</td>
            <td>All</td>
            <td>Releases and renews the VM's IP address to troubleshoot network connection issues.</td>
        </tr>
        <tr>
            <td>Remove Snapshot</td>
            <td>VMware vCenter 2G</td>
            <td>Removes a snapshot from the App's VM. Optionally set the **remove_child** parameter to **Yes** to remove all child snapshots under the snapshot to be deleted.</td>
        </tr>
        <tr>
            <td>Rerun Configuration Management</td>
            <td>All</td>
            <td>
            Re-executes the App's configuration management. The App's configuration management inputs are presented as command inputs with the values that were set before the App's deployment. You can change the values before running the command. 

            :::note Notes

- This command is available only for Apps that support re-running configuration management (see [Adding App templates](../../../../admin/cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates) for details).
- Configuration management commands cannot be cancelled or stopped.
- The configuration management inputs can be retrieved via the GetResourceCommands CloudShell Automation API for Apps that allow rerunning configuration management from the sandbox.
:::
            </td>
        </tr>
        <tr>
            <td>Restore Snapshot</td>
            <td>VMware vCenter</td>
            <td>Reverts the App's VM to a previously saved snapshot.</td>
        </tr>
        <tr>
            <td>Save Snapshot</td>
            <td>VMware vCenter</td>
            <td>Creates a snapshot of the App's VM, saving the state of the VM's hard disc, including software and configurations. To also save the VM's RAM memory, including open windows and running processes, set **Save Memory** to **Yes**. Snapshots are available for use on the deployed App in the same sandbox only.</td>
        </tr>
        <tr>
            <td>Save to Template</td>
            <td>VMware vCenter</td>
            <td>Update the App template with the current settings of the App. Set Save Memory to Yes if you wish to include the App's current state in the snapshot.</td>
        </tr>
    </tbody>
</table>
    

    
    

## Related Topics

- [Apps in Sandboxes](../../../../portal/sandboxes/workspace/apps)