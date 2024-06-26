# Subnet Connectivity

*In CloudShell 9.1, subnets are supported out-of-the-box for AWS EC2 and Azure.*

This article explains how to configure CloudShell's **Subnet** service to enable the creation of multiple subnets in a single sandbox.

During the sandbox's setup, CloudShell creates the subnets in the public cloud and during App deployment, each App's VM is connected to the appropriate subnets. Subnet-based connectivity supports connections involving public cloud Apps (peer-to-peer and many-to-many).

:::note Notes
- By default, CloudShell creates a subnet for every sandbox that has public cloud Apps. If additional subnets are required, the blueprint designer can add **Subnet** services to the blueprint and/or create peer-to-peer connections between AWS/Azure Apps. Note that if additional subnets are used, the default subnet will not be created in the sandbox.
- CloudShell creates the necessary route tables in AWS/Azure.
:::
To use subnets in CloudShell, the system administrator needs to perform the following configurations:

1. [Associate the Subnet service family to the domain categories](./index.md#associate-the-subnet-service-family-to-the-domain-categories)
2. [Customize the Subnet service model](./index.md#customize-the-subnet-service-model)

## How CloudShell creates subnet networks

When a sandbox is deployed, CloudShell uses the cloud provider resource of the Apps to create the defined subnets. If no subnets are specified, a single default subnet is created for the sandbox's Apps. However, if the sandbox's blueprint includes Subnet services and/or peer-to-peer connections between Apps, CloudShell will create a dedicated subnet for each, allocating the service's defined IPs for the duration of the sandbox. Note that for each peer-to-peer connection, CloudShell will create a 16 IP subnet.

## Associate the Subnet service family to the domain categories

To expose the Subnet service in the **Apps / Services** catalog of a specific domain, you must associate the service family to each desirable domain's service category. For information about creating service categories for domains, see [Creating a service catalog category](../../../inventory-operations/configuring-services.md#creating-a-service-catalog-category).

**To associate the Subnet service to the domain category:**

1. As system administrator, log into **Resource Manager Client**.
2. In the **Admin** ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Click the **Virtual Network** service family.
    
    The family's **Parameters** pane is displayed.
    
4. Click the **Categories** tab.
5. Click **Add**.
    
    The **Select Category** dialog box is displayed.
    
6. Select the domain category. To select multiple categories, press the **\[Shift\]** key.
7. Save your changes.

## Customize the Subnet service model

This section explains how to customize the default settings of the Subnet service and control which settings can be changed by the user in the blueprint diagram. To learn how to add a subnet to a blueprint and set the service's attribute values, see [Services in Blueprints](../../../../../portal/blueprints/creating-blueprints/services.md).

**To customize a Subnet preset's attributes:**

1. In the **Resource Families** explorer, open the **Virtual Network** service family and click the Subnet service model. Alternatively, copy the service model to customize a separate preset.
    
    The **Parameters** pane is displayed to the right of the **Resource Families** explorer.
    
2. Click the **Attributes** tab and configure the required attributes:
    
    | Attribute | Description |
    | --- | --- |
    | Allocated CIDR | (Read only attribute) This attribute stores the CIDR allocated to the subnet by the sandbox. The allocated CIDR is based on the service's Subnet Size. |
    | Public | Determines if the subnet is connected to the internet. |
    | QnQ | Sets the Subnet connection to be in QinQ mode. Default is **False**. |
    | Subnet Id | Read only attribute that displays the allocated subnet ID. |
    | Subnet Size | Defines the possible sizes of this subnet (block size of the subnet CIDR). Possible values: 16, 32, 64, 128 (corresponding to block sizes of /28, /27, /26 and /25). The maximum VPC IP range is 256 IPs (/24), and cannot be changed in CloudShell 8.2.<br/>**Note:** Since each cloud provider has a few IPs in each subnet reserved for networking services, the actual number of Apps that can be added to a subnet is lower than the number set in the subnet size attribute. Currently in AWS, 5 IPs are reserved. |
    
3. Save your changes.

## Related Topics

- [Subnet Connectivity - Points to Consider](./subnet-connectivity--points-to-consider.md)
- [AWS Integration](../.././../../supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md)
- [Microsoft Azure Integration](../.././../../supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index.md)
- [Managing App Templates](../../../../cloudshell-manage-dashboard/manage-app-templates/index.md)
- [Services Overview](../../../../../intro/features/services.md)
- [Apps Overview](../../../../../intro/features/apps-overview.md)
- [Virtual Network Connectivity](../../../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/index.md)
- [Connect Resources and Apps](../../../../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md)