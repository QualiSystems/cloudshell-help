---
sidebar_position: 4
---

# Add a vCenter App Template

The App template defines the settings and configurations of the VM to be deployed in the sandbox as well as the application(s) to be installed on that VM.

**To add a new vCenter App template:**

1. Click **\+ Add**.
    
    The **Create New App** wizard is displayed.
    
    ![](/Images/CloudShell-Portal/Manage/CreateNewApp.png)
    
2. From the **Select Deployment Type** pane, select the desired vCenter deployment type.
3. Enter a **Name** for the App template.
    :::note
    The App template's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
4. Click **Create**.
    
    The App template is created and the **App** wizard's **General** page is displayed.
    
    ![](/Images/CloudShell-Portal/Manage/AppGeneralPage.png)
    
5. In the **General** page, define the App template's display settings and category.

    <table>
        <thead>
            <th>Field</th>
            <th>Required</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Required</td>
                <td>App name that is displayed in the catalog.</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>Optional</td>
                <td>Description of the App.</td>
            </tr>
            <tr>
                <td>Icon</td>
                <td>Optional</td>
                <td>Add an image to the catalog definition. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB).</td>
            </tr>
            <tr>
                <td>Categories</td>
                <td>Optional</td>
                <td>
                Service categories are a method to classify Apps. The Apps are displayed in the **Add App / Service** side pane in the blueprint and sandbox diagram, arranged in categories. Only users who are permitted to view the category can access the App. Apps without a category are not displayed.

    By default, the **Applications** category is selected.

    Select a category from the dropdown list. You can select additional categories. Examples of categories are: applications, networking and VLAN.

    :::note Notes
    - The category must be associated with the domain in which the required cloud provider resides. For information about domain categories, see [Managing domain categories](../../../cloudshell-manage-dashboard/managing-categories.md#managing-domain-categories).
    - It is recommended to use up to a 2-level hierarchy when organizing the **Add App / Service** catalog (i.e. root and sub-category).
    - In the **Add App / Service** side pane, Apps are displayed in the root category only. This includes services associated to sub-categories.
    :::
                </td>
            </tr>
        </tbody>
    </table>

6. In the left pane, click **Deployment Paths** and configure the App template's deployment path.

    A deployment path consists of (1) the selected deployment type (the method to be used to deploy the VM), (2) the VM’s settings such as storage size, CPU and image file, and (3) the CloudShell cloud provider resource that enables CloudShell to access the cloud provider and deploy the VM on it.

    Note the deployment path's name (highlighted in the image below). The path's name is dynamic and consists of the selected **Cloud Provider** resource and **Deployment type**. You can change the name of the path by clicking the field.

    ![](/Images/Admin-Guide/Inventory-Operations/vCenterDeploymentPathName.png)

    1. From the **Deployment** drop down list, select the deployment type.
        
        The selected deployment type's attributes are displayed.
        :::important
        Deployment types related to the vCenter 2<sup>nd</sup> Gen cloud provider shell include "2G" in the title (for example: "vCenter VM From Template 2G").
        :::
    2. Fill in the details.

        <details>
        <summary>For **vCenter Clone VM From VM** attributes</summary>
        <table>
            <thead>
                <th>Attribute</th>
                <th>vCenter shell version</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Cloud Provider</td>
                    <td>All</td>
                    <td>Name of the vCenter cloud provider resource to be used</td>
                </tr>
                <tr>
                    <td>vCenter VM</td>
                    <td>All</td>
                    <td>Full path to the VM that will be used to clone a new VM, relative to the datacenter. For example: `My-Folder/My-VM`</td>
                </tr>
                <tr>
                    <td>Behavior During Save (optional)</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

        - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
        - **Remain Powered On**: The VM will remain powered on during the saving state.
        - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
            

        :::note Notes
        - The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        - After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Saved Sandbox Storage</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](../../../../portal/sandboxes/sandbox-workspace/save-sandbox.md) for more information.

        For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.

        - **Note**: The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        </td>
                </tr>
                <tr>
                    <td>Customization Spec</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Name of the vSphere VM Customization Specification to apply to the App's VM.</td>
                </tr>
                <tr>
                    <td>Hostname</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The hostname to set on the VM.
        :::note Notes
        If **Customization Spec** is specified, the value specified in the **Hostname** attribute will be used. **If Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Private IP</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there's a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway

        :::note Notes
        - If there is no gateway, the .1 IP of the same subnet will be used as the gateway. So, for private IP "192.168.4.124", gateway "192.168.4.1" will be used.
        - It is also possible to provide a subnet mask here. For example: "192.168.4.124/24:80.114.1.87"
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used.
        - If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        :::
                    </td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Number of CPU core s to configure on the VM.</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Amount of RAM (GB) to configure on the VM.</td>
                </tr>
                <tr>
                    <td>HDD</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Allows to add/edit hard disk size to the VM. The syntax is semi-colon separated disk pairs 'Hard Disk Label: Disk Size (GB)'. For example: 'Hard Disk 1:100;Hard Disk 2:200'. Short-hand format is also valid: '1:100;2:200'.</td>
                </tr>
            </tbody>
        </table>
        </details>

        <details>
        <summary>For **VCenter Deploy VM From Linked Clone** attributes</summary>
        <table>
            <thead>
                <th>Attribute</th>
                <th>vCenter shell version</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Cloud Provider</td>
                    <td>All</td>
                    <td>Name of the vCenter cloud provider resource to be used</td>
                </tr>
                <tr>
                    <td>vCenter VM</td>
                    <td>All</td>
                    <td>Full path to the VM containing the snapshot that will be used to clone a new VM, relative to the datacenter.</td>
                </tr>
                <tr>
                    <td>vCenter VM Snapshot</td>
                    <td>All</td>
                    <td>
                    Full path to the virtual machine snapshot that will be used to clone a new VM. For example Snapshot1/Snapshot2

        This snapshot should be associated with the VM defined in the **vCenter VM** input.
                    </td>
                </tr>
                <tr>
                    <td>Behavior During Save</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

        - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
        - **Remain Powered On**: The VM will remain powered on during the saving state.
        - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
            

        :::note Notes
        - The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        - After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Saved Sandbox Storage</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](../../../../portal/sandboxes/sandbox-workspace/save-sandbox.md) for more information.

        For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.
        :::note
        The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        :::
                    </td>
                </tr>
                <tr>
                    <td>Customization Spec</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Name of the vSphere VM Customization Specification to apply to the App's VM.</td>
                </tr>
                <tr>
                    <td>Hostname</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The hostname to set on the VM.
        :::note Notes
        If **Customization Spec** is specified, the value specified in the **Hostname** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page
        :::
                    </td>
                </tr>
                <tr>
                    <td>Private IP</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there's a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway

        :::note Notes
        - If there is no gateway, the .1 IP of the same subnet will be used as the gateway. So, for private IP "192.168.4.124", gateway "192.168.4.1" will be used.
        - It is also possible to provide a subnet mask here. For example: "192.168.4.124/24:80.114.1.87"
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used.
        - If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        :::
                    </td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Number of CPU core s to configure on the VM.</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Amount of RAM (GB) to configure on the VM.</td>
                </tr>
                <tr>
                    <td>HDD</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Allows to add/edit hard disk size to the VM. The syntax is semi-colon separated disk pairs 'Hard Disk Label: Disk Size (GB)'. For example: 'Hard Disk 1:100;Hard Disk 2:200'. Short-hand format is also valid: '1:100;2:200'.</td>
                </tr>
            </tbody>
        </table>
        </details>

        <details>
        <summary>For **vCenter VM From Image** attributes</summary>
        <table>
            <thead>
                <th>Attribute</th>
                <th>vCenter shell version</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Cloud Provider</td>
                    <td>All</td>
                    <td>Name of the vCenter cloud provider resource to be used</td>
                </tr>
                <tr>
                    <td>vCenter Image</td>
                    <td>All</td>
                    <td>
                    Full path to the vCenter OVF image file, relative to the datacenter. For example: `My-OVF-Images/Image.ovf`
        :::note
        Path must be accessible to all execution servers. OVF tool must be installed on all execution servers.
        :::
                    </td>
                </tr>
                <tr>
                    <td>vCenter Name</td>
                    <td>All</td>
                    <td>Name of the vCenter resource to be used</td>
                </tr>
                <tr>
                    <td>vCenter Image Arguments</td>
                    <td>All</td>
                    <td>
                    (Optional) vCenter-specific arguments to use when deploying the virtual machine.

        Example for OVF:

        `--allowExtraConfig --prop:Hostname=ASAvtest --prop:HARole=Standalone --prop:SSHEnable=True --prop:DHCP=True --net:Management0-0='Office LAN 41' --net:GigabitEthernet0-0='VLAN_access_101'`
                    </td>
                </tr>
                <tr>
                    <td>Behavior During Save</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

        - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
        - **Remain Powered On**: The VM will remain powered on during the saving state.
        - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
            

        :::note Notes
        - The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        - After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Saved Sandbox Storage</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](../../../../portal/sandboxes/sandbox-workspace/save-sandbox.md) for more information.

        For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.
        :::note
        The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        :::
                    </td>
                </tr>
                <tr>
                    <td>Customization Spec</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Name of the vSphere VM Customization Specification to apply to the App's VM.</td>
                </tr>
                <tr>
                    <td>Hostname</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The hostname to set on the VM.
        :::note Notes
        If **Customization Spec** is specified, the value specified in the **Hostname** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page
        :::
                    </td>
                </tr>
                <tr>
                    <td>Private IP</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there's a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway

        :::note Notes
        - If there is no gateway, the .1 IP of the same subnet will be used as the gateway. So, for private IP "192.168.4.124", gateway "192.168.4.1" will be used.
        - It is also possible to provide a subnet mask here. For example: "192.168.4.124/24:80.114.1.87"
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used.
        - If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        :::
                    </td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Number of CPU core s to configure on the VM.</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Amount of RAM (GB) to configure on the VM.</td>
                </tr>
                <tr>
                    <td>HDD</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Allows to add/edit hard disk size to the VM. The syntax is semi-colon separated disk pairs 'Hard Disk Label: Disk Size (GB)'. For example: 'Hard Disk 1:100;Hard Disk 2:200'. Short-hand format is also valid: '1:100;2:200'.</td>
                </tr>
            </tbody>
        </table>
        </details>

        <details>
        <summary>For **vCenter VM From Template** attributes</summary>
        <table>
            <thead>
                <th>Attribute</th>
                <th>vCenter shell version</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Cloud Provider</td>
                    <td>All</td>
                    <td>Name of the vCenter cloud provider resource to be used</td>
                </tr>
                <tr>
                    <td>vCenter Template</td>
                    <td>All</td>
                    <td>
                    Path to the vCenter template to use in the virtual machine's creation. Path is relative to the datacenter and must include the template name, for example: `My-Templates/Template1`
                    </td>
                </tr>
                <tr>
                    <td>Behavior During Save</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

        - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
        - **Remain Powered On**: The VM will remain powered on during the saving state.
        - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
            

        :::note Notes
        - The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        - After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Saved Sandbox Storage</td>
                    <td>All</td>
                    <td>
                    (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](../../../../portal/sandboxes/sandbox-workspace/save-sandbox.md) for more information.

        For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.
        :::note
        The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](./add-vmware-vcenter-cloud-provider-resource.md).
        :::
                    </td>
                </tr>
                <tr>
                    <td>Customization Spec</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Name of the vSphere VM Customization Specification to apply to the App's VM.</td>
                </tr>
                <tr>
                    <td>Hostname</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The hostname to set on the VM.
        :::note Notes
        If **Customization Spec** is specified, the value specified in the **Hostname** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page
        :::
                    </td>
                </tr>
                <tr>
                    <td>Private IP</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>
                    (Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there's a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway

        :::note Notes
        - If there is no gateway, the .1 IP of the same subnet will be used as the gateway. So, for private IP "192.168.4.124", gateway "192.168.4.1" will be used.
        - It is also possible to provide a subnet mask here. For example: "192.168.4.124/24:80.114.1.87"
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used.
        - If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        - If **Customization Spec** is specified, the value specified in the **Private IP** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a **Password** in the **App resource** page.
        :::
                    </td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Number of CPU core s to configure on the VM.</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Amount of RAM (GB) to configure on the VM.</td>
                </tr>
                <tr>
                    <td>HDD</td>
                    <td>2<sup>nd</sup> Gen only</td>
                    <td>Allows to add/edit hard disk size to the VM. The syntax is semi-colon separated disk pairs 'Hard Disk Label: Disk Size (GB)'. For example: 'Hard Disk 1:100;Hard Disk 2:200'. Short-hand format is also valid: '1:100;2:200'.</td>
                </tr>
            </tbody>
        </table>
        </details>

7. To add additional deployment paths to the App template, click the **Add New Deployment Path** link at the bottom of the wizard and fill in the required information.
8. In the left pane, click **Configuration Management** and configure the application to be installed on the VM.

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
            The playbook runs once during the **Setup** phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way.
            :::
            Note that the playbook runs once for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs.
            

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

        - **URL**: Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers.
            :::tip
            The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint.
            
            - To use parameters, specify the parameter name in curly brackets (for example: **\{branch\}**).
            - If the App has this parameter, CloudShell will replace the **\{branch\}** with its value during execution.
            - If the parameter is missing, CloudShell will replace **\{branch\}** with an empty string.
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
            
            - Each special character that the file contains has to be encoded. In the example above - "%2E” is an encoded point (".”)
                
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
                
            :::important
            If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open Resource Manager **Client>Resource Families>Configuration Services** (**Ansible Configuration** or **Custom Script Configuration**) and set the **Verify Certificate** attribute to **False**.
            :::
        - **User/Password**: (For private repositories) Access credentials or token to the script/playbook's online repository.
            
        - **Token**: (For private repositories) Access token to the script/playbook's online repository.
            
            For GitHub and GitLab, specify the API token. For BitBucket Cloud, set the repo's "App Password" in the App template's Password field. For BitBucket Data Center, specify the personal access token.
            

        :::note Notes
        - For **Custom Script configurations**: In SSH mode, only bash and sh scripts are allowed. In WinRM mode, only PowerShell scripts are allowed. WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the **winrm_transport** parameter to **ssl**.
        - **For Ansible configurations**: The Ansible playbook must be a YML or YAML file. To specify multiple playbooks or a hierarchy of an Ansible project, you can specify multiple Ansible playbooks or a ZIP package. For example: `https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip`
        - If a ZIP containing 2 or more playbooks is specified, CloudShell will use the playbook file titled `site.yml` or `site.yaml`. If the file is missing, the App's deployment will fail.
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
        :::important
        (For Ansible) To customize the port to be used to communicate with the VM, add the `Ansible_port` parameter. Default: `SSH` / `Port: 22` / `WinRM: 5985`.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Additional Arguments</td>
                    <td>
                    (For Ansible) Define arguments to be passed to the execution of the playbook (`Ansible-playbook` command). For example, `-v` will set verbose mode on while `-f` will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation.

        The arguments must be specified in **Resource Manager Client > Configuration Services** family > **Ansible Configuration** model > **Ansible Additional Arguments** attribute.
        :::note
        The arguments are defined globally for all Apps using Ansible.
        :::
        :::important
        To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known\_hosts' key), include the following additional arguments: `--ssh-extra-args='-o StrictHostKeyChecking=yes'`
        :::
                    </td>
                </tr>
            </tbody>
        </table>

      1. To enable the end-user to rerun the App's configuration management on the deployed App in the sandbox, select **Allow rerunning configuration management for resources deployed from the App**. Once the App's deployment completes, a **Rerun Configuration Management** command is included in the deployed App's **Application Commands** pane. For details, see [Run App Commands](../../../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md). This is useful for rolling back the App's VM to its original state.
      2. To enable blueprint and sandbox owners to modify the App's Configuration Management details, select **Allow blueprint/sandbox owners to modify the App's Configuration Management**. The following details can be modified: playbook/script, authentication details, inventory groups, and parameters. Note that the modifications only apply to the blueprint or sandbox of the instance.
      3. Optionally click the **Add New Script/Playbook** link at the bottom right to add additional custom scripts/Ansible playbooks to the App. The scripts will run in their display order, from top to bottom. You can drag scripts up or down to rearrange.
      4. To change the script's alias, click the script's name and change as appropriate.
      ![](/Images/CloudShell-Portal/Manage/RenameConfigManageScript.png)

9. In the left pane, click **App Resource** to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell.

    ![](/Images/CloudShell-Portal/Manage/AppResource.png)
    :::important
    To help sandbox end-users connect to the VM, it is recommended to include the **User** and **Password** in the blueprint's instructions. For additional information, see [Add Instructions](../../../../portal/blueprints/creating-blueprints/add-instructions.md).
    :::

    <table>
        <thead>
            <th>Attribute</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Shell</td>
                <td>
                The Shell on which the App's VMs are based. When an App is deployed in a sandbox, it changes into a "deployed App resource", which is based on the selected Shell. By default, the "Generic App Model" Shell is used.

    Deployed Apps include a default set of commands such as Power On and Refresh IP, and the VM's **User** and **Password** attributes, as explained below.
    :::note
    Changing the Shell might cause additional fields to become visible and you may need to enter further information.
    :::
                </td>
            </tr>
            <tr>
                <td>User</td>
                <td>
                User defined in the App's image. The **User/Password** credentials are used by QualiX to create in-browser connections to the VM from within the sandbox.

    :::note Notes
    - For AWS instances,make sure to set the **User** of a user that already exists on the Amazon machine image. For custom images, the image owner should know the credentials, while community/marketplace images have the image's credentials listed in their documentation.
    - Azure VM username and password restrictions apply. For details, see [Frequently asked question about Windows Virtual Machines](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq).
    - For Azure Marketplace images, CloudShell will create a user on the VM based on the **User/Password** credentials you specify.
    - For Azure Marketplace VMs, if the user is not set, CloudShell will set **adminuser** as the default user name.
    :::
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                VM user's password.

    :::note Notes
    - For AWS Marketplace images, leave the **Password** empty. The AWS shell generates a new key-pair for each sandbox, which QualiX will use to establish the in-browser connection.
    - For Azure Marketplace images:
        - If the password is not set, only the user name will be required. For Linux VMs, CloudShell will create an SSH key-pair to enable a secure connection.
        - If the password is set, it will be displayed as asterisks (\*\*\*\*\*\*) in the blueprint or sandbox.
    :::
                </td>
            </tr>
        </tbody>
    </table>

10. Click **Done**.
    
    The new App template is displayed in the **Apps** page.