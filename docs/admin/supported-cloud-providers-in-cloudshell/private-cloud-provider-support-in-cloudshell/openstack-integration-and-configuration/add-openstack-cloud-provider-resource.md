---
sidebar_position: 2
---

# Add OpenStack Cloud Provider Resource

The OpenStack 2<sup>nd</sup> Gen cloud provider enables the deployment of OpenStack instances from images. CloudShell supports OpenStack releases Ocata, Pike, Queens, Rocky, Stein, Train, Ussuri, Victoria and Wallaby.

:::note Notes:
- The OpenStack 2<sup>nd</sup> Gen shell is available for download from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
- OpenStack elements created by the CloudShell management network should not be altered as this may cause unexpected behavior.
:::
**To add an OpenStack cloud provider resource:**

1. Log in to CloudShell Portal as administrator.
2. Import the OpenStack 2G shell into CloudShell. For details, see [Importing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm#Adding).
    
    ![](/Images/Admin-Guide/KubernetesDownloadShell.png)
    
3. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
4. Click **\+ Add New**.
5. In the **Create New Resource** dialog box, select the **OpenStack Cloud Provider Shell 2G** cloud provider template.
6. Enter a **Name** for the OpenStack resource.
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
7. Enter the **IP Address** of the OpenStack server that will be used to deploy the virtual machines.
8. Click **Create**.
    
    The **Resource** dialog box is displayed.
    
    ![](/Images/Admin-Guide/Inventory-Operations/OpenstackResource.png)
    
9. Enter the required information.
    
    <table>
        <thead>
            <th>Attribute</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Controller URL</td>
                <td>
                OpenStack Keystone Controller URL endpoint address. For example: http://controler:5000/v3.

    Displayed in OpenStack portal>**API Access** page>**Identity** value).
                </td>
            </tr>
            <tr>
                <td>OpenStack Domain Name</td>
                <td>OpenStack domain to use.</td>
            </tr>
            <tr>
                <td>OpenStack Project Name</td>
                <td>OpenStack project in which CloudShell will create the instances.</td>
            </tr>
            <tr>
                <td>OpenStack Management Network ID</td>
                <td>
                UUID of the manually created CloudShell management network (for assistance identifying your management network, contact your OpenStack admin). This network will be used to configure the communication between the Sandbox instances and the CloudShell components. For example: c14241d2-376c-4fb3-8d1e-61f5c1408448

    The UUID can be found in the Horizon user interface or in OpenStack portal>**Network**\>**Networks** page>click the network and copy the **ID**.
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>OpenStack user's password</td>
            </tr>
            <tr>
                <td>User</td>
                <td>OpenStack user on the OpenStack server</td>
            </tr>
            <tr>
                <td>OpenStack Reserved Networks</td>
                <td>
                Comma separated list (,) of reserved networks. vNICs configured to these networks will not be used for instance connectivity.
    :::note
    Ideally, one of the following three ranges should be free: 10.0.0.0/8, 172.16.0.0/16, 192.168.0.0/16
    :::
                </td>
            </tr>
            <tr>
                <td>VLAN Type</td>
                <td>(**VLAN** / **VXLAN**) The VLAN technology to use for connectivity to/from this cloud provider.</td>
            </tr>
            <tr>
                <td>Floating IP Subnet ID</td>
                <td>
                UUID of the external network subnet that will allocate floating IDs to the OpenStack instances, to allow external connectivity into those instances. For additional details, see [OpenStack Configuration Requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/OpenStack-Cnfg-Rqrs.htm).

    Displayed in OpenStack portal>**Network**\>**Networks** page>**Subnets** tab>select the subnet>**ID** value. For assistance identifying your Floating IP network, contact your OpenStack admin.
                </td>
            </tr>
            <tr>
                <td>OpenStack Physical Interface Name</td>
                <td>
                (Not required if you set the **VLAN Type** attribute to **VXLAN**) The physical interface mapping name to use when configuring OpenStack connectivity.

    The physical interface can be found under the connectivity provider configuration in your OpenStack plugin's agent file. For example:

    - For Linux Bridge plugin: `/etc/neutron/plugins/ml2/linuxbridge_agent.ini` file > `[linux_bridge]` configuration section > `physical_interface_mappings` attribute.
        
        For example: `physical_interface_mappings = public:em1,office:p1p2,quali:em2`.
        
    - For Open vSwitch plugin: `/etc/neutron/plugins/ml2/openvswitch_agent.ini` file > `[ovs]` configuration section > `bridge_mappings` attribute.
        
        For example: `bridge_mappings = public:br-vlan`.
    </td>
            </tr>
            <tr>
                <td>Behavior During Save (Optional)</td>
                <td>
                (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

    - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
    - **Remain Powered On**: The VM will remain powered on during the saving state.
    - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
    :::note    
    After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
    :::
    If this field is left empty, the default value is **Remain Powered On**.
                </td>
            </tr>
            <tr>
                <td>Execution Server Selector</td>
                <td>
                (Optional) This attribute points to a pre-defined group of execution servers (grouped by a common **Execution Server Selector** value). To make the association, enter the same value you specified on the execution server.

    This attribute is typically used for different sites or domains. For additional information on managing App deployments per domains, see [Managing Private Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm).
                </td>
            </tr>
        </tbody>
    </table>
    
10.  Click **Start Discovery** to validate the OpenStack settings.
    
        When the discovery process completes, a confirmation message is displayed. The resource is displayed in the **Inventory** dashboard in CloudShell Portal and in Resource Manager.
        
        Apps can now be added using the OpenStack resource. For additional information, see [Adding App templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding).
        
        To customize the App deployment types and publish App orchestration parameters, see [Customizing App Deployment Types](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-App-Dply-Types.htm)
    

## Related Topics

- [Adding Inventory Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Add-Rsrc-Tmplt.htm)
- [Managing Private Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm)
