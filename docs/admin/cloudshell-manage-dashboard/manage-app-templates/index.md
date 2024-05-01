# Managing App Templates

This article describes the administrative actions needed to configure App templates in CloudShell that are based on a cloud provider resource. For additional information, see [Apps Overview](../../../intro/features/apps-overview.md).

## Viewing App templates

In the **Apps** page, you can view the App templates you are permitted to access.

To view existing App templates:

- In the **Manage** dashboard, in the left sidebar, click **Apps**.  
    The **Apps** page is displayed, listing the App templates that were previously added to CloudShell.

You can use the toolbar to sort the App templates according to **Name** or Modified time (last modified App at the top), and to filter them according to a specific **Category** or **Domain**.

## Adding App templates

When adding a new App template, you need to configure the settings of the virtual machine and application you want to deploy. To add App templates, at least one cloud provider resource must be defined. To define private cloud provider resources, see [Private Cloud Provider Support in CloudShell](../../../admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/index.md), and for public cloud providers, see [Public Cloud Provider Support in CloudShell](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/index.md).

If your CloudShell deployment includes multiple sites, it is recommended to configure the deployment process of the App to be carried out in the domain that is physically closest to the cloud provider. For additional information, see [Managing Private Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md) or [Managing Public Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md).

:::note Notes for public cloud Apps
- By default, all public cloud Apps of the same type in the same sandbox are deployed within the same subnet and therefore are connected to each other and isolated from other sandboxes. However, using the Subnet service, blueprint designers can set up multiple subnet networks in the sandbox, instead of having one default subnet for all the Apps of the same cloud provider. For details, see [Subnet Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md).
- Public cloud App deployment requires the management network and subnet(s) to be prepared in advance as part of the sandbox Setup process. CloudShell's out-of-the-box Setup process does this. However, the blueprint must include at least one public cloud App to initiate the Setup script's connectivity preparation process for deployment in that public cloud.
:::

**To add a new App template:**

Follow the instructions [here](./manage-app-templates/app-template/adding-app-template).


## Cloning App templates

This section explains how to clone an existing App template in the Apps page. You can use this method, for example, if you want to create an App template that is largely based on an existing one but requires several modifications.

To clone an App template:

1. In the Manage dashboard, in the left sidebar, click Apps.
    
    The Apps page is displayed.
    
2. Click the App template's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select Clone.
    
    The cloned App template is added to the Apps page under the original App template. For example:
    
    ![](/Images/Admin-Guide/Inventory-Operations/AppsClone.png)
    

## Editing App templates

This option is enabled using the `RestrictEditToCreatingDomain` key.

To edit an App template:

1. In the Manage dashboard, in the left sidebar, click Apps.
    
    The Apps page is displayed.
    
2. Click the Name of the App template.
    
    Or-
    
    Click the App template's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select Edit.
    
    The App template's configuration wizard is displayed in the General page.
    
3. Edit the App template’s settings. For more information, see [Adding App templates](../../../admin/cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates).
4. Click Save.  
    

## Deleting App templates

This option is enabled using the `RestrictEditToCreatingDomain` key.

To delete App templates:

1. In the Manage dashboard, in the left sidebar, click Apps.
    
    The Apps page is displayed.
    
2. Select the check boxes of the required App templates.
3. Click the **Delete** button in the toolbar.
    
    Or-
    
    Click the App template's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select Delete.
    

## Related Topics

- [Manage Dashboard Overview](../../../admin/cloudshell-manage-dashboard/manage-dashboard-overview.md)
- [Managing Public Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md)
- [Managing Private Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md)
- [Apps in Blueprints](../../portal/blueprints/creating-blueprints/apps/)
