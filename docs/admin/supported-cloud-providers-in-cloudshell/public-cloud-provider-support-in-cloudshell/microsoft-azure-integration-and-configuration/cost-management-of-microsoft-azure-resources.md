---
sidebar_position: 2
---

# Cost Management of Microsoft Azure Resources

To assist with your Microsoft Azure cost management activities, Microsoft Azure resources, such as subnets, virtual machines and VNets, which are created by CloudShell Apps include the following tags: **Blueprint**, **CreatedBy**, **Domain**, **Name**, **Owner**, and **SandboxId**.
:::note Important:
These tags should not be altered as this may result in inaccurate usage data reports.
:::
## Download usage data from the Azure billing center

This procedure explains how to download an Azure subscription’s usage data from the Azure billing center. The data is provided in a SCV file.

**To download Microsoft Azure usage data:**

1. Sign in to the [Microsoft Azure Account Center](https://account.windowsazure.com/subscriptions?correlationId=00000000-0000-0000-0000-000000000000) using your Microsoft account or Organizational ID.
2. Click the required subscription.
3. Specify the desired period.
4. From the **Download Usage** drop down list, select **Version 2 - Preview**. The Version 2 CSV file contains the updated terminology and user tags required to properly filter Azure resources.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/BillingCurrentPeriod.jpg)
    
    A CSV file detailing the subscription’s usage data is downloaded.
    

## Filter usage data

In the CSV file, the subscription’s usage data is arranged in 3 tables:

- **Provisioning Status** – General information regarding subscriptions
- **Statement** – Summary and payments amounts
- **Daily Usage** - Detailed information regarding resource usage

The **Daily Usage** table displays CloudShell custom tags attached to CloudShell elements created in Azure. Here are a few examples of how to use CloudShell tags in your budget:

- For a general budget, filter by the **CreatedBy** tag with the **CloudShell** value, and specify an amount.
- For information regarding specific users, filter by the **Owner** tag and specify the owner for whom to create a budget.
    :::note
    The report includes sandbox owners only. Permitted users who modified existing sandboxes are not included.
    :::
- For information regarding the number of times a blueprint can be reserved, select the **Blueprint** tag and select a specific blueprint.
- For information regarding the number of Azure virtual machines that can be created per domain, select the **Domain** tag and select a certain domain.
    

For example:

![](/Images/Admin-Guide/Azure-deployment-type/BillingTags.png)

For additional information on Azure billing and setting up billing alerts, see [Understand your bill for Microsoft Azure](https://docs.microsoft.com/en-us/azure/billing/billing-understand-your-bill) and Set up billing alerts for your [Microsoft Azure subscriptions on the official Microsoft Documentation](https://docs.microsoft.com/en-us/azure/billing-set-up-alerts).

Advanced billing options are available using the Microsoft Azure API and other 3rd party tools.
