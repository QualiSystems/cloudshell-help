---
sidebar_position: 4
---

# Setting up the App Resource

When adding or editing an App, click **App Resource** in the left page, to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell.

![](/Images/CloudShell-Portal/Manage/AppResource.png)
    
:::tip
To help sandbox end-users connect to the VM, it is recommended to include the **User** and **Password** in the blueprint's instructions. For additional information, see [Add Instructions](../../../../portal/blueprints/creating-blueprints/add-instructions.md).
:::
    
<table>
    <thead>
        <tr>
        <th>Attribute</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Shell</td>
            <td>
                <p>The Shell on which the App's VMs are based. When an App is deployed in a sandbox, it changes into a "deployed App resource", which is based on the selected Shell. By default, the "Generic App Model" Shell is used.</p>
                <p>
                Deployed Apps include a default set of commands such as Power On and Refresh IP, and the VM's User and Password attributes, as explained below.
                </p>
:::note
Changing the Shell might cause additional fields to become visible and you may need to enter further information.
:::
            </td>
        </tr>
        <tr>
            <td>User</td>
            <td>
                <p>User defined in the App's image. The **User/Password** credentials are used by QualiX to create in-browser connections to the VM from within the sandbox.</p>
:::note Notes
- For AWS instances,make sure to set the User of a user that already exists on the Amazon machine image. For custom images, the image owner should know the credentials, while community/marketplace images have the image's credentials listed in their documentation.
- Azure VM username and password restrictions apply. For details, see [Frequently asked question about Windows Virtual Machines](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq).
- For Azure Marketplace images, CloudShell will create a user on the VM based on the User/Password credentials you specify.
- For Azure Marketplace VMs, if the user is not set, CloudShell will set adminuser as the default user name.
:::
            </td>
        </tr>
        <tr>
            <td>Password</td>
            <td>
                VM user's password.
:::note Notes
- For AWS Marketplace images, leave the Password empty. The AWS shell generates a new key-pair for each sandbox, which QualiX will use to establish the in-browser connection.
- For Azure Marketplace images:
    - If the password is not set, only the user name will be required. For Linux VMs, CloudShell will create an SSH key-pair to enable a secure connection.
    - If the password is set, it will be displayed as asterisks (\*\*\*\*\*\*) in the blueprint or sandbox.
:::
            </td>
        </tr>
    </tbody>
</table>
    