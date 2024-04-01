---
sidebar_position: 6
sidebar_label: vCenter Clone VM From VM
hide_table_of_contents: true
---

# vCenter Clone VM From VM Deployment Path Attributes

The following attributes would be used to define the vCenter Clone VM from VM:

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

:::note Notes:
- The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-Cld-Prvdr-Rsc.htm).
- After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
:::
            </td>
        </tr>
        <tr>
            <td>Saved Sandbox Storage</td>
            <td>All</td>
            <td>
            (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv.htm) for more information.

For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.

- **Note**: The value configured here overrides the configuration in the vCenter cloud provider resource, see [Add VMware vCenter Cloud Provider Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-Cld-Prvdr-Rsc.htm).
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
:::note
If **Customization Spec** is specified, the value specified in the **Hostname** attribute will be used. If **Customization Spec** is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page.
:::
            </td>
        </tr>
        <tr>
            <td>Private IP</td>
            <td>2<sup>nd</sup> Gen only</td>
            <td>
            (Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there's a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway

:::note Notes:
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