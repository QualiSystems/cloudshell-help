---
sidebar_position: 5
---

# Customizing App Deployment Types

As a CloudShell system administrator, you can publish and configure the settings of certain App creation and orchestration processes.

## Publishing App parameters

This section explains how to set App creation and orchestration parameters as user inputs, so that when creating an App in the **Manage** dashboard, the App designer will be able to set the inputs' values.

### Publishing App parameters for 1<sup>st</sup> Gen shells

**To publish App creation and/or orchestration parameters in 1<sup>st</sup> Gen shells:**

1. As system administrator, log into **Resource Manager Client**.
2. In the **Admin** ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Click the **Deployment Options** service family.
    
    The family's **Parameters** pane is displayed.
    
4. Click the model of the required deployment type:
    
    - **AWS EC2 Instance**
    - **Azure VM From Custom Image**
    - **Azure VM From Marketplace**
    - **vCenter Clone VM From VM**
    - **vCenter Deploy VM From Linked Clone**
    - **vCenter VM From Image**
    - **vCenter VM From Template**
    
    The model's **Parameters** page is displayed.
    
5. From the **Attributes** tab, select one of the following attributes and click **Edit Rules**. For parameter descriptions, see [App parameters](#app-parameters).
    
    The **Attribute Rules** dialog box is displayed.
    
6. Select the **User Input** check box.
7. Click **OK**.
8. Repeat to publish additional attributes.
9. Save your changes.

### Publishing App parameters for 2<sup>nd</sup> Gen shells

**To publish App creation and/or orchestration parameters in 1<sup>st</sup> Gen shells:**

1. Extend the shell, as explained in [Customizing a 2nd Gen Shell](../../devguide/reference/shellfoundry.md#customizing-a-2nd-gen-shell).
2. Extract the shell's project folder to your local computer.
3. Open the project folder in your preferred IDE.
4. From the shell's `deployments` folder, open the `deployment-path.yaml`.
    
    This file lists the attributes available for each deployment type.
    
    ![](/Images/Admin-Guide/DeploymentTypeAttributes.png)
    
5. To publish an attribute, make sure the attribute has the **user_input** tag.
    
    For example:
    
    ![](/Images/Admin-Guide/DeploymentTypeAttributePublishing.png)
    
6. Save the file and import/update the shell into CloudShell.

## Modifying App parameter defaults

This section explains how to modify the default settings of certain App creation and orchestration parameters that are used when creating Apps in the **Manage** dashboard.
:::note
These parameters are used by CloudShell's **Setup** and **Teardown** scripts. For additional information, see [Configure Blueprint Orchestration](../../portal/blueprints/creating-blueprints/configure-orchestration.md).
:::
### Modifying App parameter defaults for 1<sup>st</sup> Gen shells

**To modify App parameter defaults (1<sup>st</sup> Gen):**

1. As system administrator, log into Resource Manager Client.
2. In the **Admin** ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Click the **Deployment Options** service family.
    
    The family's **Parameters** pane is displayed.
    
4. Click the model of the required deployment type:
    
    - **AWS EC2 Instance**
    - **Azure VM From Custom Image**
    - **Azure VM From Marketplace**
    - **vCenter Clone VM From VM**
    - **vCenter Deploy VM From Linked Clone**
    - **vCenter VM From Image**
    - **vCenter VM From Template**
    
    The model's **Parameters** page is displayed.
    
5. From the **Attributes** tab, select one of the following attributes and click **Edit Rules**. For parameter descriptions, see [App parameters](#app-parameters).
    
    The **Attribute Rules** dialog box is displayed.
    
6. Enter the **Default Value**.
7. Select the **User Input** check box.
    
    To prevent App designers from seeing this input, make sure the **User Input** check box is cleared.
    
8. Click **OK**.
9. Repeat to edit additional attributes.
10. Save your changes.

### Modifying App parameter defaults for 2<sup>nd</sup> Gen shells

**To modify App parameter defaults (2<sup>nd</sup> Gen):**

1. Extend the shell, as explained in [Customizing a 2nd Gen Shell](../../devguide/reference/shellfoundry.md#customizing-a-2nd-gen-shell).
2. Extract the shell's project folder to your local computer.
3. Open the project folder in your preferred IDE.
4. In the shell's `deployments` folder, open `deployment-path.yaml`.
    
    The deployment type attributes are displayed
    
5. Set a **default** value for the desired attributes.
    
    For example:
    
    ![](/Images/Admin-Guide/DeploymentTypeAttributeDefaults.png)
    
6. Save the file and import/update the shell in CloudShell.

## App parameters

### App creation parameters

#### vCenter parameters:

- **IP Regex**: Regular expressions that define which IP address ranges to allocate for the deployed VM's primary IP address.
- **Promiscuous Mode**: If enabled, the port groups on the virtual switch will be configured to allow all incoming traffic.
- **Refresh IP Timeout**: Timeout for waiting while obtaining IP address (in seconds)
- **VM Cluster**
- **VM Location**
- **VM Resource Pool**
- **VM Storage**

#### AWS EC2 parameters:

- **Root Volume Name**: The available device names for the volume. Depending on the block device driver of the selected AMI's kernel, the device may be attached with a different name than what you specify. If left empty, the default defined in the AMI is used. For example: "/dev/xvda".
- **Storage IOPS**: The default number of I/O operations per second that the root volume can support. For example "240". This parameter is used only for storage of type io1, in which you can provision up to 30 IOPS per GiB. If set to zero, the default defined in the image is used.
- **Storage Size**: The root volume size. For example "30". The value must be greater or equal to the size of the root snapshot used. If set to zero, the default defined in the image is used.
- **Storage Type**: The type of the storage volume. In AWS, there are several EBS Volume types that can be used: **gp2** and **io1** for SSD, **st1** and **sc1** for HDD or the standard type, which is the old generation EBS volume type. If **Auto** is selected, the storage type defined in the image is used.

#### Azure parameters:

- **Image Version**: The version of the VM image. For example: 16.04.201606270
- **Extension Script Timeout**: Timeout, in minutes, for the execution of extension scripts during App deployment

#### OpenStack parameters:

- **Floating IP Subnet Id**: UUID of the external network to use for floating IPs

### App orchestration parameters

#### General parameters (used by all deployment types):

- **Autoload**: Determines if the Autoload process runs for Apps deployed manually or during the setup of the sandbox. Default is **True**.
- **Wait For IP**: Determines if the App deployment process waits for the VM to get an IP. Default is **True**.
    :::note
    The default wait time is 10 minutes. On vCenter App deployment paths, this can be changed by specifying the number of seconds to wait in the **Refresh IP Timeout** attribute.
    :::

#### vCenter parameters:

- **Auto Power On**: Enables the automatic power on of an app, following its deployment during sandbox Setup. Default is **True**.
- **Auto Power Off**: Determines if the App's VM powers off automatically during the sandbox teardown. Default is **True**.
- **Auto Delete**: Determines if the App's VM is deleted automatically during the sandbox teardown. Default is **True**.

#### AWS EC2 parameters:

- **Wait for Credentials**: Enables the retrieval of credentials from a Windows machine. Note that if this parameter is enabled and the credentials are not retrieved within 15 minutes, the deployment will fail. Default is **True**.
- **Wait for Status Check**: If enabled, the App's deployment will end successfully only after the instance status check has passed. The status check includes network connectivity, physical host status, system status and more. Default is **False**.

#### Azure parameters:

- **Autogenerated Name**: **True** enables CloudShell to autogenerate the deployed App's name. Set to **False** to use the App's name instead. (Default is **True**)

## Related Topics

- [Add an AWS EC2 Cloud Provider Resource](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource.md)
- [Add an Azure Cloud Provider Resource](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource.md)
- [Add VMware vCenter Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource.md)
- [Developing Custom Cloud Provider Shells](../../devguide/develop-custom-cloud-provider-shells/)
