---
sidebar_position: 2
hide_table_of_contents: true 
---

# Adding Microsoft Azure Cloud Provider Resource

*The use of an Azure cloud provider resource requires a CloudShell management resource group to be installed on an Azure region. For additional information, see [Microsoft Azure Integration](../../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index.md).*

The **Microsoft Azure** cloud provider enables the deployment of Azure virtual machines from an Azure image.

:::tip
We strongly recommend using the 2<sup>nd</sup> Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: [Replacing the 1st Gen shell with a 2nd Gen version](../../../../devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell.md#replacing-the-1st-gen-shell-with-a-2nd-gen-version), [Cloud Provider Shells - Features and Capabilities Per Release](../../../../admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities.md).
:::

**To add an Azure cloud provider resource:**

1. Log in to the CloudShell domain in which this resource will reside. This will enable the Apps based on this cloud provider resource to be usable in this domain.
2. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
3. Click **\+ Add New**.
4. In the **Create New Resource** dialog box, select the **Microsoft Azure** cloud provider template. To use the Azure 2<sup>nd</sup> Gen shell, select **Microsoft Azure Cloud Provider 2G**.
5. Enter a **Name** for the Azure resource.
    
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
    
6. Click **Create**.
    
    The **Resource** dialog box is displayed.
    
    ![](/Images/Admin-Guide/Inventory-Operations/AzureResourceDiscoveryInformation.png)
    
7. Enter the required information.
    
    :::note
    All Azure resources must belong to the specified region.
    :::

    <table>
        <thead>
            <tr>
            <th>Attribute</th>
            <th>Supporting shell version</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Region</td>
            <td>All</td>
            <td>
                The Azure region to be used by this cloud provider resource. For example, "East US".
        
    :::note
    The Azure region must have the **CloudShell Management resource group** configured. All Azure regions are supported by CloudShell.
    :::
            </td>
        </tr>
        <tr>
            <td>VM Size</td>
            <td>All</td>
            <td>
            The size of the Microsoft Azure VM. The VM size determines the CPU, memory and networking capacity of the VM. By default: “Standard\_A3”.

            For additional information, see the Azure help page [Sizes for virtual machines in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes) or use Azure CLI to get a list of your region's supported sizes.

    :::note
    The VM size can be changed when creating the App in the **Manage** dashboard.
    :::
            </td>
        </tr>
        <tr>
            <td>Networks in Use</td>
            <td>All</td>
            <td>
            Comma-separated list of CIDRs to be excluded when allocating sandbox networks. The value must include at least the CloudShell Management VNet.

            For example, `10.0.0.0/24,10.1.0.0/16,172.31.0.0/24`
            </td>
        </tr>
        <tr>
            <td>Azure Subscription ID</td>
            <td>All</td>
            <td>
            The **Subscription ID** of the Azure user.
            </td>
        </tr>
        <tr>
            <td>Azure Tenant ID</td>
            <td>All</td>
            <td>
            The ID of the Azure tenant that is associated with your Azure Active Directory (AAD) instance - called **Directory (tenant) ID** in Azure. For example: "ccd13026-98e3-4e90-01f4-28e2afdf3213".

            The tenant ID can be retrieved when creating the Azure API web application or from Azure CLI. For more information, see [Configure Azure API to work with CloudShell](../../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md).
            </td>
        </tr>
        <tr>
            <td>Azure Application ID</td>
            <td>All</td>
            <td>
            The Azure API web application's **Application (client) ID**.

            The application ID allows CloudShell to access the Azure API and is generated as part of the web application’s configuration process. For more information, see [Configure Azure API to work with CloudShell](../../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md).
            </td>
        </tr>
        <tr>
            <td>Azure Application Key</td>
            <td>All</td>
            <td>
            The Azure API web application's client secret.

            The application key allows CloudShell to access the Azure API and is generated as part of the Azure API web application’s configuration process. For more information, see [Configure Azure API to work with CloudShell](../../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md).
            </td>
        </tr>
        <tr>
            <td>Management Group Name</td>
            <td>All</td>
            <td>
            The name of the Management Resource Group.
            </td>
        </tr>
        <tr>
            <td>Sandbox Virtual Network Name</td>
            <td>Azure 2nd Gen shell only</td>
            <td>
            The name of the Sandbox VNet under the Management Resource Group.

    :::note Notes
    - In dedicated mode, the sandbox subnet will be created in this VNet.
    - In predefined mode, you must make sure the subnet to be used is located within this VNet.
    :::
            </td>
        </tr>
        <tr>
            <td>Management Virtual Network Name</td>
            <td>Azure 2nd Gen shell only</td>
            <td>
            (Optional) The name of the Management VNet under the Management Resource Group. Used to store management network security rules.
            </td>
        </tr>
        <tr>
            <td>Additional Mgmt Networks</td>
            <td>All</td>
            <td>
            Networks to be allowed to interact with all sandboxes. This is used for allowing connectivity to Azure resources outside the Management VNet.

            The syntax is comma separated CIDRs. For example, `10.0.0.0/24,10.1.0.0/16,172.31.0.0/24`.
            </td>
        </tr>
        <tr>
            <td>Custom Tags</td>
            <td>Azure 2nd Gen shell only</td>
            <td>
            Semi-colon separated list of up to 9 tags to be applied to all related Azure objects created during the App deployment, such as the sandbox's resource group, VNETs, subnets, NSGs and VMs.

            Attribute supports the following syntax: \[TagName\]=\[TagValue\]; \[TagName\]=\[TagValue\]. For example: `Tag1=Val1;Tag2=Val2`
            </td>
        </tr>

        <tr>
            <td>Private IP Allocation Method</td>
            <td>All</td>
            <td>
            Method to be used to assign private IP addresses to VMs. Options are:

            - **Azure Allocation**: (Default. Recommended option) Azure assigns private IPs when creating the network interface.
            - **CloudShell Allocation**: In this method, the Azure cloud provider resource assigns the private IPs for the network interface from the region's subnet CIDR. When the VM is deleted, the assigned IPs are released.
    
    :::note
    When using this option, you can use the GetAvailablePrivateIP command (on the Azure cloud provider resource) to get an IP that will not be used by CloudShell when allocating any future private IPs. You can use this IP when creating Azure VMs independently from CloudShell.
    :::
            </td>
        </tr>
        <tr>
            <td>Availability Zones</td>
            <td>Azure 2nd Gen shell only</td>
            <td>
            Specify the Availability Zone (1, 2, or 3) in which the App’s VM, managed disk and public IP (if available) will be deployed. Leave empty to deploy directly to the region.

            For details and supported regions, see [Regions and availability zones](https://learn.microsoft.com/en-us/azure/availability-zones/az-overview).
            </td>
        </tr>
        <tr>
            <td>Key Vault</td>
            <td>Azure 2nd Gen shell only</td>
            <td>
            (Mandatory for QualiX connections to Azure machines) Name of the key vault to be used to securely store private ssh keys used for in-browser connections via QualiX. CloudShell will automatically delete the keys when the sandbox ends.

            To use private SSH keys for QualiX connections, grant the **Key Vault Secrets Officer** role to your Azure integration's web application to allow CloudShell to dynamically store and delete the secrets from the key vault. For details, see this official Microsoft docs article on [Key Vault keys and secrets](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli).

            Key Vault name must be a 3-24 character string, containing only 0-9, a-z, A-Z, and -.
            </td>
        </tr>
        <tr>
            <td>Execution Server Selector</td>
            <td>All</td>
            <td>
            (This attribute needs to be added to the shell via the **Manage > Shells > Details / Edit** dialog box) This attribute points to a pre-defined group of execution servers (grouped by a common Execution Server Selector value). To make the association, enter the same value you specified on the execution server.

            For additional information on managing App deployments per domains, see [Managing Public Cloud Apps in Domains](../../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md).
            </td>
        </tr>
    </tbody>
    </table>
    
    
8. Click **Start Discovery**.
    
    When the discovery process completes, a confirmation message is displayed. The cloud provider resource is displayed in the **Inventory** dashboard in CloudShell Portal and in Resource Manager Client.
    
    To customize the App deployment types and publish App orchestration parameters, see [Customizing App Deployment Types](../../../../admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types.md)
