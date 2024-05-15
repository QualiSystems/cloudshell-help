---
sidebar_position: 1
---

# Configure Azure API to work with CloudShell

CloudShell Apps communicate with Azure using the Azure API. To enable the two platforms to work with each other, you need to add a web application that has permission to use the Azure API.

:::note Notes:
- You will need an Azure Global Administrator, Application Administrator or Cloud Application Administrator role to perform this procedure.
- During the app registration process, you will need to save the subscription ID, client ID, tenant ID, and client secret key for later use in your CloudShell "cloud provider resource".
:::
This configuration is a three-step process:

1. [Add an Azure web application](./configure-azure-api-to-work-with-cloudshell.md#add-an-azure-web-application)
2. [Delegate Azure API permissions to the web application](./configure-azure-api-to-work-with-cloudshell.md#delegate-azure-api-permissions-to-the-web-application)
3. [Configure the web application as Contributor](./configure-azure-api-to-work-with-cloudshell.md#configure-the-web-application-as-contributor)

## Add an Azure web application

**To add an Azure web application:**

1. Log in to [https://portal.azure.com](https://portal.azure.com/#).
2. Open the **Subscriptions** page and make sure you have an active subscription.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/ActiveSubscription.png)
    
3. Make sure your subscription has the appropriate permissions.
    
    1. From the user menu, click the **More links** button and select **My permissions**.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/ShowUserPermissions.png)
        
    2. In the **My permissions** blade, click **Resource Provider Status**.
    3. In the **Resource Provider Status** blade, make sure the following permissions are registered (register any missing ones):
        
        <table style={{ marginLeft: 0, marginRight: 'auto' }} className="TableStyle-Alternate-Row-Color" cellSpacing="21">
            <tbody>
                <tr className="TableStyle-Alternate-Row-Color-Body-Body1">
                <td className="TableStyle-Alternate-Row-Color-BodyB-Column1-Body1">
                    <ul>
                    <li className="level0_print">Microsoft.Compute</li>
                    <li className="level0_print">microsoft.support</li>
                    <li className="level0_print">Microsoft.Resources</li>
                    <li className="level0_print">Microsoft.Features</li>
                    <li className="level0_print">
                        Microsoft.Net<span className="SearchHighlight SearchHighlight4">work</span>
                    </li>
                    </ul>
                </td>
                <td className="TableStyle-Alternate-Row-Color-BodyA-Column1-Body1">
                    <ul>
                    <li>Microsoft.Authorization</li>
                    <li>Microsoft.Storage</li>
                    <li>Microsoft.OperationalInsights</li>
                    </ul>
                </td>
                </tr>
            </tbody>
        </table>
        
4. Return to the **Subscriptions** page and copy and store the **Subscription ID** somewhere you'll remember.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/subscription2.png)
    
5. From the left pane, select **Azure Active Directory**.
6. In the active directory's blade, click **App registrations**.
7. In the **App registrations** blade, click the **New registration** button.
8. Enter the new web application's settings:
    
    | Parameter | Description |
    | --- | --- |
    | Name | Name of the web application. For example, "CloudShell App". |
    | Supported account types | Select **Accounts in this organizational directory only (\<your company\> only - Single tenant)**. |
    | Redirect URL | Select **Web** and enter a URL. For example, "https://quali.com". This is required for creating the web application but does not affect it. |
    
9. Click **Register** at the bottom of the blade.
    
    The new web application is displayed.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/NewWebApp.png)
    
10. Copy and store the **Application (client) ID** and **Directory (tenant) ID**. You will need these values when creating the cloud provider resource in CloudShell.
    
11. Proceed to the next section to delegate Azure API permissions to the web application.

## Delegate Azure API permissions to the web application

**To delegate Azure API permissions to the web application:**

1. Return to the **App registrations** blade of the subscription's active directory.
2. Click the web application you created in the previous section. If you don't see the web application, select **All applications**.
3. In the web application's page, click **API permissions** and do the following:
    
    1. Delegate **Azure Service Management** permission: Click **Add a permission**. In the **Request API permissions** blade, in the **Microsoft APIs** tab, click the **Azure Service Management** tile, make sure the **Delegated permissions** tile is selected and select the **Access Azure Service Management as organization users** checkbox. Click **Add permissions** at the bottom of the blade.
        
    2. Make sure the **Sign in and read user profile** permission was delegated for **Microsoft Graph**. If not, click **Add a permission**. In the **Request API permissions** blade, in the **Microsoft APIs** tab, scroll down and click the **Microsoft Graph** tile. Select **Delegated permissions**, expand **User** and select **User.Read (Sign in and read user profile)**. Click **Add permissions** at the bottom of the blade.
        
        The API permissions blade should look like this:
        
        ![](/Images/Admin-Guide/Azure-deployment-type/RequiredPermissions.png)
        
    3. Make sure the **Grant admin consent for \<your company\>** link is checked next to the **Add a permission** button.
        
4. Next, create a **client secret** (Azure application) key to be used by the CloudShell App for authentication with Azure.
    1. In the web application's page, click **Certificates & secrets**.
    2. Click **New client secret** and set it to expire **In 2 years**.
    3. Click **Add**.
        
        The client secret key is displayed.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/SecretKey.png)
        
    4. Copy and store the key value somewhere you'll remember. This is the **Azure Application Key** you will need to specify in the Azure cloud provider resource in CloudShell.
        :::note
        The client secret key is displayed only once and will disappear when you leave this blade.
        :::
5. Proceed to the next section to configure the web application as **Contributor**.

## Configure the web application as Contributor

The **Contributor** role enables CloudShell to create and manage virtual machines and other Azure services.

**To configure the Azure web application as Contributor:**

1. Return to the **Subscriptions** page and click the subscription's name.
    
    For example, **VS Account**:
    
    ![](/Images/Admin-Guide/Azure-deployment-type/subscription.png)
    
2. In the blade that appears, click **Access control (IAM)**.
    
    The **Access Control** blade is displayed.
    :::note
    If you don't see this blade, clear your browser's cache and refresh the page.
    :::
3. Click **Add** and select **Add Role assignment**.
4. In the **Add role assignment** blade, in the **Role** tab, select the **Contributor** role.
5. Click **Next**.
6. Click **Select members**, and search for the web application you created.
    
    For example:
    
    ![](/Images/Admin-Guide/Azure-deployment-type/AddUsersSelectApp.png)
    
7. Select the app and click **Select** at the bottom of the blade.
    
8. Click **Review + assign**.
9. To verify that the web application was created correctly, in the **Access control (IAM)** blade, click the **Role assignments** tab and make sure it is displayed as a **Contributor**.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/NewContributorWebApp.png)
    
10. Next, [Create a Management Resource Group and VNets](./create-a-management-resource-group-and-vnets.md).
