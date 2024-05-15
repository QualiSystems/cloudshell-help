---
sidebar_position: 3
---

# Advanced CloudShell Customizations

## Introduction

This topic describes how to use CloudShell configuration keys to customize and configure CloudShell. For the complete repository of our customer configuration keys, see [Customer Configuration Keys Repository](../../setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/index.md).

## How to use configuration keys

Some configurations involve setting configuration keys. This means copying the key into the appropriate `customer.config` file, as a new line anywhere in the file before the closing `</appSettings>` tag, and restarting the relevant component:

- For Server configurations, restart the **Quali Server** service in the **Windows Services** dialog box or run the **Quali Server Configuration Wizard**.
- For Portal configurations, restart the CloudShell Portal website via the IIS Manager or run the **CloudShell Portal Configuration Wizard** if the CloudShell Portal website is running on IIS Express.

## How to use this article

In this article, you will find CloudShell keys, logically arranged in categories. For example, the Setting home page `key = HomePageUrl` is found under the General category both in the table (see [Set the default home page (HomePageUrl)](./customer-configuration-keys-repository/general.md#set-the-default-home-page) in the list of keys) and in the General category [Setting the default home page](#setting-the-default-home-page).

The following categories are used to organize the configuration keys:

- [Abstract resources](./advanced-cloudshell-customizations.md#abstract-resources)
- [API](./advanced-cloudshell-customizations.md#api)
- [Apps](./advanced-cloudshell-customizations.md#apps)
- [Connectivity management and route configuration](./advanced-cloudshell-customizations.md#connectivity-management-and-route-configuration)
- [Custom live status icons](./advanced-cloudshell-customizations.md#custom-live-status-icons)
- [Blueprint Catalog](./advanced-cloudshell-customizations.md#blueprint-catalog)
- [Blueprint Workspace](./advanced-cloudshell-customizations.md#blueprint-workspace)
- [Execution Server](./advanced-cloudshell-customizations.md#execution-server)
- [General](./advanced-cloudshell-customizations.md#general)
- [Inventory dashboard](./advanced-cloudshell-customizations.md#inventory-dashboard)
- [New Job Scheduling](./advanced-cloudshell-customizations.md#new-job-scheduling)
- [LDAP Integration](./advanced-cloudshell-customizations.md#ldap-integration)
- [Monitoring](./advanced-cloudshell-customizations.md#monitoring)
- [Online Help](./advanced-cloudshell-customizations.md#online-help)
- [Registration, passwords, emails, and licenses](./advanced-cloudshell-customizations.md#registration-passwords-emails-and-licenses)
- [Sandboxes](./advanced-cloudshell-customizations.md#sandboxes)
- [Scheduling and Queuing](./advanced-cloudshell-customizations.md#scheduling-and-queuing)
- [Scheduling commands](./advanced-cloudshell-customizations.md#scheduling-commands)
- [Search](./advanced-cloudshell-customizations.md#search)
- [Single Sign On (SSO)](./advanced-cloudshell-customizations.md#single-sign-on-sso)
- [TestShell Studio](./advanced-cloudshell-customizations.md#testshell-studio)

## Abstract resources

### Advanced: Randomized abstract resource selection

By default, the abstract resource selection process is randomized in order to reduce clashes when blueprints are resolved in parallel. Disabling randomization will cause abstract resources and network connections to be resolved in the same order each time.

**To make abstract resolution non-randomized:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="RandomizeAbstractSelection" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Changing the number of matches that are considered for abstract sub-resource requirements

For performance reasons, when resolving sub-resource requirements, CloudShell only considers the first 1000 matches it finds. This default can be changed using the `AbstractSubResourceResultsPageSize` configuration key.
:::note
This key only applies to the matches that are considered for resolution of the abstract resource and is unrelated to the matches indicator in the abstract resource's dialog box.
:::
**To change the default for possible abstract sub-resource requirements:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Add the following key:
    
    `<add key="AbstractSubResourceResultsPageSize" value="1000"/>`
    
3. Change the value as appropriate.
    
4. Save the file.
5. Restart the **Quali Server** service.

## API

For configuration keys related to API SSO, see [SSO Login to CloudShell APIs](../../../devguide/available-cs-api/sso-login-to-cs-api.md).

### Setting the response page size for the Sandbox API live documentation pages

The administrator can set the maximum amount of entries included in each response page, when running the `sandbox output` and `sandbox events` methods. By default, the response includes up to 1000 entries.

**To set maximum entries per response page:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the relevant value:
    
    `<add key="DefaultSandboxApiPagingSize" value="1000"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Extending the API authorization token validity period

The authorization token is valid for 5 hours by default, but the validity period can be changed using the `AuthToken.ExpirationSpanMinutes` configuration key.

**To change the token validity period:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Add the following key:
    
    `<add key="AuthToken.ExpirationSpanMinutes" value="300"/>`
    
3. Set the desired validity period, in minutes
4. Save the file.
5. Restart the **Quali Server** service.

## Apps

### Setting the default category for new Apps

This configuration key enables you to specify the default category that will be selected for new Apps. The default category is "Apps".
:::note
Only users that have permissions to the category's domain will have access to the App.
:::
**To set the default category for new Apps:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Add the following key:
    
    `<add key="DefaultAppCategory" value="app category"/>`
    
3. Replace "`app category`" with the new default category.
    
    To set a sub-category, use "/". For example, `Apps/My App Category`"(where "My App Category" is the sub-category).
    
4. Save the file.
5. Restart the **Quali Server** service.

### Enabling the modification and deletion of App templates only from the template's domain

This key disables the options to edit or delete an App template when the admin is not in the domain in which the App was created. By default, Apps templates can be modified from any CloudShell domain.

:::note Notes
- This key does not restrict system admins from editing Apps in other domains.
- This key does not apply to the "clone App" option.
:::
**To enable this restriction:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, add the following key, and set the value accordingly:
    
    `<add key="RestrictEditToCreatingDomain" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## Connectivity management and route configuration

For more information about the connection types, see [Add Physical Network Connectivity Requirements](../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/index.md).

### Setting max hops for routes

You can set the maximum allowed hops for route resolution to cap the number of chassis connections that can be used when resolving a route. For details, see [Configure Physical Network Connectivity Requirements](../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req.md).

The default value is 6 hops (or 7 switches).

**To change the max hops settings for routes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the value accordingly (for example, 10 hops):
    
    `<add key="MaxHopsForRoute" value="10"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting default max hops for routes

This key defines the default value to display in the connection line's **Max Hops** property in the **Resource Connections** dialog box. The default value is 2 hops.

**To change the default max hops settings for routes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the value accordingly (for example, 10 hops):
    
    `<add key="DefaultMaxHopsForRoute" value="10"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Enabling automatic route configuration

You can enable the server to automatically configure the L1 connections to support the maximum possible speed for the selected route, based on the end point port and their connected L1 speed capabilities. Once enabled, CloudShell will look for an attribute called **Speed** on both endpoints of the L1 route, and when the route gets connected in a sandbox, the server will change the attribute’s value on both endpoints to the highest mutually supported speed.

**To enable automatic route configuration:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the value accordingly:
    
    `<add key="EnableRouteConfiguration" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Set the supported connection types for new connections

You can set the supported connection types for new connections from these default values: Route, Cable, Tap, Connector. This key allows you choose the connection types to include in CloudShell, disabling any values you don't specify. To set these connection types, just specify their name, comma separated, as the key value.

**To set the supported connection types for new connections:**

1. Open the ``C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config`` file, add the following key, and set the value accordingly by specifying the connection types you want to include:
    
    `<add key="SupportedConnectionTypes" value=""/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## Custom live status icons

### Modifying the list of custom live statuses

The system supports custom statuses for resources which can also be visualized using different icons.

**To define the custom statuses and their icons:**

1. Open the `%programdata%\QualiSystems\Settings\Global\ServerUniversalSettings.xml` file, and in the `ResourcesLiveStatus`section, add a new key (where the name is the status name and value is the icon path), for example:
    
    ```javascript
    <ResourcesLiveStatus>
       …
       <key name="CustomStatus">C:\ProgramData\QualiSystems\Portal\Content\Images\cust.png</key>
    </ResourcesLiveStatus>
    ```
    
2. Save the file.

## Blueprint Catalog

The main page of the **Blueprint Catalog**, when no specific category is selected, can be customized to contain any or none of the following sections. This is done by adding the relevant configuration key in the `customer.config` file in the CloudShell Server installation directory. Note that each of the sections described below do not appear if there are no relevant blueprints to display.

### All blueprints

This key controls whether to display all blueprints in the main **Blueprint Catalog**, when no category is selected.

**To enable displaying all blueprints:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologyDashboardAllTopologies" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

There are two supported modes for displaying the blueprints: as one group, or categorized alphabetically (default).

**To disable alphabetic sub-grouping:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
    
2. Add the following key:
    
    `<add key="ShowAlphabeticTopologySubCategories" value="False"/>`
    
3. Save the file.
4. Restart the **Quali Server** service.

### New Blueprints section (Featured section)

The **Blueprint Catalog**'s **Featured** view includes a **New** section, which displays blueprints that were recently added to the domain.

**To display new published blueprints, ordered by date of creation:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologyDashboardNewTopologies" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To control the maximum number of new blueprints:**

1. Add the following key and set the value (the default is 5):
    
    `<add key="NewTopologiesCategoryCount" value="5"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To restrict the maximum number of days a blueprint can be considered ‘new’:**

1. Add the following key and set the value to specify the number of days (the default is `-1` for no restriction):
    
    `<add key="NewTopologiesCategoryDaysLimit" value="20"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Recently modified blueprints (Featured section)

This **Blueprint Catalog**'s **Featured** view includes a **Recently Modified** section, which displays recently-modified private and public blueprints owned by the user, ordered by the modification date. This makes it convenient to quickly find a blueprint after creating/modifying it.
:::note
This section will not appear if no blueprints are owned by the user.
:::
**To enable displaying recently modified blueprints:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologyDashboardRecentlyModified" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To control the maximum number of recently modified blueprints:**

1. Add the following key and set the value (the default is 5):
    
    `<add key="RecentlyModifiedTopologiesCategoryCount" value="5"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Recently reserved blueprints (Featured section)

The **Blueprint Catalog**'s **Featured** view includes a **Recently Reserved** section, which displays recently reserved blueprints in which you are either the owner or a permitted user. If you never reserved blueprints, this section will be hidden. Using the below keys, you can choose to show/hide this section and set the maximum number of recently reserved blueprints to include.

**To enable displaying recently reserved blueprints:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key: 
    
    `<add key="TopologyDashboardRecentlyReserved" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To control the number of recently reserved blueprints to appear in "Recently Reserved" within the Featured section of the Blueprint Catalog:**

1. Add the following key and set the value (the default is 5)
    
    `<add key="RecentlyReservedTopologiesCategoryCount" value="5"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Featured categories (Featured section)

This key can be used to set one or more blueprint categories whose blueprints will be displayed in the **Featured** section of the **Blueprint Catalog** To set these categories, just specify their name, comma separated, as the key value.

**To enable displaying featured categories:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologyDashboardFeaturedCategories" value="Category 1, Category 2"/>`
    
2. Set the desired categories s the value (comma-separated).
    
3. Save the file.
4. Restart the **Quali Server** service.

### Hiding the Featured section

These keys control whether to display the **Featured** section in the **Blueprint Catalog**. When disabled, all blueprints will appear in a single section in the catalog.

**To disable the Featured section:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and change the following keys' values to False:
    
    `<add key="TopologyDashboardNewTopologies" value="False"/>`
    
    `<add key="TopologyDashboardRecentlyModified" value="False"/>`
    
    `<add key="TopologyDashboardRecentlyReserved" value="False"/>`
    
2. In addition, make sure to either remove the `TopologyDashboardFeaturedCategories` key from the `customer.config` file or set it to an empty value.
3. Save the file.
4. Restart the **Quali Server** service and the **CloudShell Portal IIS** service.

### Hiding the “Status” filter

As of CloudShell 6.2.3, an administrator can show/hide the **Status** filter from the **Blueprint Catalog**.

**To show/hide the "Status" filter:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideEnvironmentsStatusFilter" value="False"/>`
    
2. To show the option, set the value to `False`. To hide the option, set the value to `True`.
3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

### Enabling blueprints of “view” type

An administrator can enable users to set blueprints to type “view”. Blueprints of type “view” cannot be edited, deleted or reserved by users with view permissions.

**To enable View blueprints:**

1. Open the folder `C:\Program Files (x86)\QualiSystems\CloudShell\Server`.
2. Open the `customer.config` file.
3. Add the following key: 
    
    `<add key="EnableEnvironmentTypeView" value="True"/>`
    
4. Save the file.
5. Restart the **Quali Server** service.

### Enabling the creation of empty blueprints

As an administrator you can enable users to create empty blueprints, which are not based on any predefined template and do not include out-of-the-box setup and teardown scripts.

**To enable users to create blank blueprints:** 

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="OnlyAllowNewEnvironmentsFromTemplates" value="false"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

Note that this will change the behavior of the **\+ Create Blueprints** button.

The following table describes all the possible behaviors: 

| Activity | Key value set to 'False'  | Key value set to 'True' |
| --- | --- | --- |
| A single template is defined | Clicking **\+ Create Blueprint** opens the drop-down list which includes the default out-of-the-box CloudShell Sandbox Template. The **Create Empty Blueprint** button is available. | Clicking **\+ Create Blueprint** creates a new blueprint based on the default out-of-the-box [CloudShell Sandbox Template](../../cloudshell-manage-dashboard/blueprint-templates.md#cloudshell-sandbox-template). The Create Empty Blueprint button is not available. |
| Multiple templates are defined | Clicking **\+ Create Blueprint** opens the drop-down list containing all available templates. The **Create Empty Blueprint** button is available. | The **Add New Blueprint** button is available. Clicking **\+ Create Blueprint** opens the drop-down list containing all available templates. The **Create Empty Blueprint** button is not available. |

## Blueprint Workspace

### Setting the maximum allowed teardown time for blueprints

The default maximum value for teardown time for blueprints is 48 hours.

**To change the maximum allowed teardown time:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologyTeardownDurationMaxHours" value="24"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the maximum allowed setup time for blueprints

The default maximum value for setup time for blueprints is 48 hours.

**To change the maximum allowed setup time:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="TopologySetupDurationMaxHours" value="24"/`\>
    
2. Save the file.
3. Restart the **Quali Server** service.

### Hiding the “More Info” option

An administrator can enable the option to show/hide the **More Info** option from blueprints.

**To show/hide the More Info option:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key: 
    
    `<add key="HideMoreInfoOnEnvironmentTile" value="False"/>`
    
2. To show the option, set the value to `False`. To hide the option, set the value to `True`.
3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

This change applies to all the blueprints in the catalog, in both **Tile** and **List View** modes. 

When hiding the **More Info** option, it still remains available in the **Blueprint** menu of the blueprint's workspace. 

### Specifying which side panes should be open by default (blueprints)

It is possible to specify that either the instructions side pane or the blueprint commands side pane be opened by default in the **Blueprints** pages.

**To specify which side panes should be open by default:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the appropriate key:
    
    `<add key="WS_Environment_AutoOpenInstructions" value="True"/>`
    
    `<add key="WS_Environment_AutoOpenCommands" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Blocking non-admin users from exporting a blueprint package

As an administrator you can block non-admin users from exporting a blueprint package. This option is disabled by default.

**To block non-admin users from exporting a blueprint package:** 

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="BlockPackageExportForNonAdmins" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Changing the time allocated for exporting the blueprint diagram

By default, CloudShell allocates 2 seconds for the **Export Diagram (pdf)** process. For most blueprints, this is enough time to accurately render the diagram's components and connection lines. However, in large blueprints, this period may not be enough and some components/connection lines may be missing. If this is the case, you can increase the period to give CloudShell the time necessary to properly complete the action.

**To change the time allocated for exporting the blueprint diagram:**

1. Go to ``C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config`` file, and add the following key:
    
    `<add key="ExportToPdf.WaitForRender" value="2000"/>`
    
    Where the value is the period, in milliseconds.
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Enabling the Check Blueprint Routes option

Use this key to show the **Check Blueprint Routes** option in the **Blueprint** menu. For additional information, see [Check Blueprint Routes](../../../portal/blueprints/creating-blueprints/check-blueprint-routes.md).

**To enable the Check Blueprint Routes option:** 

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="DetectFailedRoutes" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the route grouping policy

You can change the route grouping policy in the blueprint or sandbox diagram. By default, 3 or more connection lines between any two endpoints are grouped together. For example:

![](/Images/CloudShell-Portal/Lab-Management/Environments/GroupedRoutes.png)

**To change the route grouping policy:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="MaxUngroupedRoutes" value="5" />`
    
    Where the value is the minimum number of connections to be grouped.
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## Execution Server

For Python package handling keys, see [Advanced CloudShell Customizations](./advanced-cloudshell-customizations.md). For execution server configurations and customizations, see [Optimizing Execution Provisioning](../../cloudshell-execution-server-configurations/optimizing-execution-provisioning.md).

## General

### Controlling the visibility of the main navigation bar components

You can control which components will be visible to the user using the main menu bar. This removes some features from the user’s view.

**To remove/hide the Scheduling and Queuing component:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideSnQ" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

**To remove/hide the Sandboxes component:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideReservations" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

**To remove/hide the Blueprints component:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideTopologies" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

**To remove/hide the Inventory component:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideInventory" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Configuring the CloudShell Portal virtual front

This key is used for two reasons:

- To set the CloudShell Portal virtual front in a high availability configuration. For details, see [Creating a Configuration Role in Windows Failover Cluster](../../../install-configure/ha-installation/install-configure-cs-server/install-configure-cs-portal/create-config-role.md).
- To include a sandbox link in email notifications.

**To configure the CloudShell Portal:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Server` folder and open the `customer.config` file.
2. Add the following key to the file. This key sets the virtual front address to be used in emails sent from CloudShell to users.
    
    `<add key="PortalAddressLinkForEmails" value="protocol://PublicServerName:PortalPort"/>`
    
3. Modify the key's values:
    
    | Parameter | Parameter details |
    | --- | --- |
    | protocol | http or https if CloudShell Portal is set to use SSL |
    | PublicServerName | The DNS name or IP address of the CloudShell Portal virtual front |
    | PortalPort | The port which CloudShell Portal is using (If the port is 80 or 443, which are the default http and https ports, remove this parameter and the colon from the key). |
    
4. Save the file.
5. Restart the **Quali Server** service.

### Setting the default home page

The web application directs the user to the last dashboard that was visited upon login. You can determine the default page that users are directed to upon first time login.

**To set the default home page:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HomePageUrl" value="/RM/Topology "/>`
    :::note
    The value of the configuration key should be the relative path of the first page the user needs to be directed to, which can be taken from the address bar of each dashboard.
    :::
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Adding the "Contact Us" option to the user menu in CloudShell Portal

It is possible to add a "contact us" option to the user menu in CloudShell Portal. When clicked, it opens the webpage you configure in this key. You could use this feature, for example, to receive feedback and feature requests from your customers.

This option is disabled by default.

**To add a "Contact Us" option to CloudShell Portal:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="ContactUsURL" value="<webpage-url>"/>`
    
    Where `<webpage-url>` is the URL to your contact form.
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

**To disable the "Contact Us" option:**

1. Remove the key from the `customer.config` file.
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Setting a page to redirect to after logout from CloudShell Portal

By default, when users log out of CloudShell Portal, they are redirected to your custom login page. You can change this setting to redirect users to another page, such as your main homepage or a page that offers additional information.

**To set the redirected login page to a custom location:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="CustomAbsoluteLoginPage" value="http://anyurl"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Configuring CloudShell to import user definitions from an active directory

The following procedures explain how to enable the import of users from your corporate Microsoft Active Directory into CloudShell. To import user definitions, see [Importing users into CloudShell from an active directory](../../cloudshell-identity-management/managing-users/managing-cloudshell-users.md#importing-users-into-cloudshell-from-an-active-directory). Note that the passwords of imported users are managed by the active directory itself.

:::note Prerequisite
The computer that will be used to import the users must be in your corporate domain.
:::
**To enable the import of active directory users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ActiveDirectory.Domain" value="QUALISYSTEMS"/>`
    
2. Set the key to the name of the domain of the active directory, for example, `Router_UK`.
3. Save the file.
4. Restart the **Quali Server** service.
5. Import the users into **Resource Manager Client**, as explained in [Importing users into CloudShell from an active directory](../../cloudshell-identity-management/managing-users/managing-cloudshell-users.md#importing-users-from-an-active-directory-group).

### Configuring CloudShell to automatically import users from an external system at login

This key enables CloudShell to automatically import users from an active directory or LDAP when they log in to CloudShell for the first time. Note that the passwords of imported users are managed by the directory service provider itself.

This option is disabled by default.

**To enable CloudShell to auto-import users when they log in:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ExternalUserManagement.AutoImportUser" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Defining the Instructions pane size

You can control the width, in pixels, of the **Instructions** pane in a blueprint or sandbox. The default value is 540 pixels.

**To set the width of the Instructions pane:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="WS_InstructionsPanelWidth" value="500"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.
:::note
This setting applies to all blueprints in the system.
:::
### Disabling DBCC TRACEON (sql_sysadmin_membership_exists)

Set to **False** to disable DBCC TRACEON (sql query execution performance). This requires membership in the sysadmin fixed server role. Default is **True**.

**To disable DBCC TRACEON:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="sql_sysadmin_membership_exists" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Showing the Drivers management page (Manage dashboard)

This key determines if the **Manage** dashboard's **Drivers** tab is visible. By default, the **Drivers** tab is hidden. This tab is relevant only when developing or customizing 1st Gen shells.

**To display the Drivers tab:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="HideDriversTabInManage" value="False"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Setting the default python version for new Python scripts

This key determines which Python version will be used by default for new Python scripts the admin loads into CloudShell. Python 3 is the default.

:::note Notes
- You can change the default setting for a script in the **Scripts** management page, as explained in [Editing scripts](../../cloudshell-manage-dashboard/managing-automation/managing-assets.md#editing-scripts).
- Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
:::

**To set the default Python version for new scripts:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="DefaultPythonVersion" value="<python version>"/>`
    
2. Replace `<python version>` with the appropriate option: **Python 2** or **Python 3**.
3. Save the file.
4. Restart the **Quali Server** service.

### Hiding the CloudShell Portal footer

This key enables you to hide the CloudShell Portal footer. The footer is displayed by default on all pages and dashboards in CloudShell Portal, except the login page.

To hide the footer:

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="EnableQualiBrandingFooter" value="False"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Allowing the execution of orchestration scripts without the need for a blueprint driver

This key determines if sandbox scripts (Setup, Teardown, Save and Restore) are run directly in the sandbox as orchestration scripts or require a .NET orchestration driver to invoke them.

By default, Quali Server runs orchestration scripts directly in the sandbox, ignoring the blueprint driver if one is defined for the sandbox. Note that manually running orchestration scripts with the key enabled will still run them with the default **Python Setup & Teardown** driver.

**To require the use of a blueprint driver when running sandbox orchestration scripts:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ExecutePythonOrchestrationScriptsDirectly" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.
4. Make sure a driver is added to all blueprints in CloudShell. For details, see [Add Setup and Teardown scripts](../../../portal/blueprints/creating-blueprints/configure-orchestration.md#add-setup-and-teardown-scripts).

### Increasing the time allowed for Quali Server to stop gracefully

When upgrading Quali Server, one of the steps is to stop the **Quali Server** service. By default, the step has 30 seconds to complete. This period is enough for most cases. However, if the service does not stop gracefully within the allotted period, the upgrade process will shut down. This can be resolved by stopping the **Quali Server** service before running the upgrade, or, for scenarios in which Quali Server is performing some critical process and must be running during the upgrade, it is possible to increase the timeout period to allow the Quali Server stop step more time to complete.

This configuration key also applies to non-upgrade scenarios in which a graceful shutdown is required. For example, in high availability mode where two or more Quali Servers work against the same DB and you need to change node, stopping the Quali Server in a timely manner is important.

**To increase the timeout period:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ServiceOnStopTimeSeconds" value="30"/>`
    
2. Change the period, in seconds, as appropriate.
3. Save the file.
4. Restart the **Quali Server** service.

### Changing the default Quali API port (9000)

By default, Quali API runs over TCP/9000.

**To change the Quali API port:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="QualiApi.Port" value="9002"/>`
    
2. Change the port, as appropriate. For example: "9002".
3. Save the file.
4. Restart the **Quali Server** service.

### Hiding Approval Request content from CloudShell Portal

If you don't intend to use Approval Request flows, you can disable the EnableApprovals key to remove all Approval Request content from CloudShell Portal. This will do the following:

- Hide the **Require Approval** section in the blueprint properties page
- Hide the **Approval Requests** page that lists end-user requests for approval.
- Revert the **Request** button on approval blueprints back to **Reserve**.

**To hide Approval Request content:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="EnableApprovals" value="False"/>`
    
    Default is "True".
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Setting approval request expiration policy

There are three configuration keys relating to approval request expirations.

- `ApprovalsCleanup.EnableOldExpiredRequests`: If set to True (default), this key enables the automatic removal of approval requests that have expired.
- `ApprovalsCleanup.OldExpiredRequestsTimeoutInHours`: The default timeout for expired approval requests is 168 hours (one week). Once the request end time has passed, the request is considered expired and will be automatically deleted.
- `ApprovalsCleanup.OldExpiredRequestsCheckIntervalInHours`: Interval (in hours) for checking the expired approval requests. The default value is 24.

All three keys are defined in the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file.

## Inventory dashboard

### Allowing regular users to reserve resources from the Inventory dashboard

By default, only admins can reserve resources from the **Inventory** dashboard. For additional information about this option, see [Reserving Resources from the Inventory](../../../portal/inventory/managing-resources/reserving-from-inventory.md).

![](/Images/CloudShell-Portal/Lab-Management/Working-with-the-Inventory/InventResResFromInventory.png)

**To allow regular users to reserve resources from the Inventory dashboard:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="AllowRegularUsersToReserveFromInventory" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## New Job Scheduling

### Switching between Sandbox Services

The CloudShell Server installation includes a Sandbox Service component which is used to handle sandbox reservations. In addition, when deploying the New Job Scheduling infrastructure, a separate Sandbox Service is deployed on the New Job Scheduling Kubernetes cluster. This Sandbox Service can communicate both with Quali Server and the Kubernetes-based New Job Scheduling. Therefore, in deployments that include New Job Scheduling, the Kubernetes-based Sandbox Service needs to be used instead of the out-of-the-box one.

**To switch to the Kubernetes-based Sandbox Service:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="UseEmbeddedSandboxService" value="False"/>`
    
2. Run the Quali Server configuration wizard.
    

### Allowing Quali Server to access the Kubernetes-based Sandbox Service

Following the successful deployment of the New Job Scheduling infrastructure, you need to allow Quali Server to communicate with the **sandbox-service-svc**.

To allow Quali Server to access the Kubernetes-based Sandbox Service:

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="SandboxServiceHost" value="<sandbox-service-svc-external-ip/hostname>"/>`
    
    `<add key="SandboxServiceRestPort" value="<port-number>"/>`
    
2. Edit the values as appropriate. Note that the default Sandbox Service port is 8888.
    
3. Save the file.
4. Restart the **Quali Server** service.

### Allowing Quali Server to access the Kubernetes-based RabbitMQ Service

Following the successful deployment of the New Job Scheduling infrastructure, you need to allow Quali Server to communicate with the **cloudshell-rabbitmq-ha**.

**To allow Quali Server to access the Kubernetes-based RabbitMQService:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="RabbitHostname" value="<sandbox-rabbitmq-ha-external-ip/hostname>"/>`
    
    `<add key="RabbitPort" value="<port-number>"/>`
    
2. Edit the values as appropriate. Note that the default RabbitMQ port is 15671.
    
3. Save the file.
4. Restart the **Quali Server** service.

## LDAP Integration

For information about integration with an LDAP server, see [LDAP Integration](../../cloudshell-identity-management/access-control-and-authentication/ldap-integration.md).

## Monitoring

### Setting the retention period for old logs

By default, old logs are retained for 2 weeks. When this time elapses, these files are automatically purged.
:::note
Logs are considered old if they were note created or modified over the last 24 hours. This period is configurable using the `QsPythonLogsCleanup.OldFilesCheckIntervalInHours` key.
:::
**To set the retention period for old logs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key (value in days):
    
    `<add key="QsPythonLogsCleanup.OldFileAccessTimeoutInHours" value="72"/>`
    
2. In the key's `value`, set the retention period, in hours.
3. Save the file.
4. Restart the **Quali Server** application.

### Setting the retention period for CloudShell Monitor logs

By default, CloudShell Monitor collects logs that were created or modified within the last 14 days. Using this key, you can change this period. For example, to limit the size of the logs.

**To set the duration for CloudShell Monitor logs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Monitor\monitor.config` file, and add the following key (value in days):
    
    `<add key="ProductLogsDaysBackFilter" value="10"/>`
    
2. Save the file.
3. Restart the **CloudShell Monitor** application.

### Disabling the export of usage data to Quali

By default, Quali exports CloudShell usage data to help us improve CloudShell. If you do not want to share this data, set the `EnableWatcher` key to **False**.

Note that disabling this key does not prevent CloudShell from sending usage data to **CloudShell Monitor**, but you can prevent that from happening by disabling the `AddUsageDataToMonitoring` key.

**To disable the export of usage data to Quali:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="EnableWatcher" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Disabling the export of usage data to CloudShell Monitor

By default, **CloudShell Monitor** collects CloudShell usage data, which you can retrieve by saving CloudShell system logs, as explained in [Collecting Logs](../../../troubleshooting/troubleshooting-overview/collecting-logs.md). If you do not want CloudShell Monitor to collect this data, set the `AddUsageDataToMonitoring` key to **False**.

Note that disabling this key does not prevent CloudShell from sending usage data to Quali, but you can prevent that from happening by disabling the `EnableWatcher` key.

**To prevent CloudShell Monitor from collecting usage data:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="AddUsageDataToMonitoring" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

## Online Help

### Switching between online and offline help

CloudShell provides two help packages, an online package and an offline package. By default, the online package is used.

This key applies to the CloudShell Portal, TestShell Studio, and CloudShell Authoring components.

**To use the offline help instead of the online help:**

1. If CloudShell has been upgraded from version 8.0 or below, delete the `KnowledgeBase` folders from:
    
    `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\`
    
    `C:\Program Files (x86)\QualiSystems\CloudShell\`
    
2. Place the offline help files in the appropriate folder:
    
    1. On the CloudShell Server machine, create a folder named `Knowledge Base` in the appropriate path:
        
        - For CloudShell Portal: `C:\Program Files (x86)\QualiSystems\CloudShell\Portal`
        - For Resource Manager Client: `C:\Program Files (x86)\QualiSystems\CloudShell\ResourceManagement`
        - For TestShell Studio and TestShell Runner: `C:\Program Files (x86)\QualiSystems\TestShell\Studio`
        - For CloudShell Authoring: `C:\Program Files (x86)\QualiSystems\CloudShell\Authoring`
    2. If any of the clients are installed on a different machine, make sure to create the appropriate folder on the client machine.
    3. Create the following folders in that folder:
        
        - `DRB`
        - `Portal`
        - `RM`
        - `RUN`
        - `ST`
    4. Download the component's updated offline help package locally and unzip it. To download the offline help packages, see [All Help Versions](https://help.quali.com/help%20versions/All%20Versions%20Help/Content/Versions.htm).
    5. Place the unzipped folder's contents in the appropriate sub-folder. The folder structure is as follows:
        
        - `DRB` - CloudShell Authoring help folder
        - `Portal` - CloudShell Portal help folder
        - `RM` - Resource Manager Client
        - `RUN` - TestShell Runner help folder
        - `ST` - TestShell Studio help folder
3. Configure CloudShell to use the offline help instead of the online help:
    
    1. Open the relevant installation folder:
        
        `C:\Program Files (x86)\QualiSystems\CloudShell\Authoring`
        
        `C:\Program Files (x86)\QualiSystems\CloudShell\Portal`
        
        `C:\Program Files (x86)\QualiSystems\CloudShell\ResourceManagement`
        
        `C:\Program Files (x86)\QualiSystems\TestShell\Studio` (for TestShell Studio and Runner)
        
    2. In each installation folder, do the following:
        
        1. Open the `customer.config` file, and enter this key:
            
            `<add key="ShowOnlineHelp" value="False"/>`
            
        2. Save the file.
            
        3. Restart the service of the updated components. You can do this by restarting the actual service or running the component's configuration wizard.
            

### Using your own help files in CloudShell portal

You can use your own help content instead of CloudShell’s. You can switch back to CloudShell help at any time.

**To use your own help content:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, add the following key:
    
    `<add key="CustomizedHelpUrl" value="<help-site-url>"/>`
    
    Where `<help-site-url>` is the website URL to your web help content
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

**To switch back to CloudShell help content:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, remove the above key or replace it with:
    
    `<add key="CustomizedHelpUrl" value="Empty"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## PyPi Server

### Setting the online computer for downloading Python dependencies
:::note
This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer.
:::
**To set the online computer:**

1. Go to `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\customer.config` file, and add the following key:
    
    `<add key="RequirementsRepository" value="http://<hostname|IP>:<port>"/>`
    
    Where the value is the online computer's hostname/IP address and port
    
2. Restart the **TestShell Execution Server** service.

### Defining the online computer as a trusted host

This key adds an additional fallback online repository to search if the local PyPi Server and online PyPi repository don't have the missing package(s).
:::note
This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer.
:::
**To define the online computer as a trusted host:**

1. Go to `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\customer.config` file, and add the following key:
    
    `<add key="RequirementsTrustedHost" value="http://<hostname|IP>:<port>"/>`
    
    Where the value is the hostname or IP address specified in the `RequirementsRepository` configuration key
    
2. Restart the **TestShell Execution Server** service.

### Setting a secondary online Python packages repository

This key adds an additional fallback online repository to search if the local PyPi Server and online PyPi repository don't have the missing package(s). For example, let's say you have an internal artifactory where you manage your packages, and you would prefer to just pull packages from there instead of our local PyPi repo.
:::note
Make sure to set this key on all execution servers.
:::
To set secondary online Python repo:

1. Go to `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\customer.config` file, and add the following key:
    
    `<add key="RequirementsExtraRepository" value="http://<hostname|IP>:<port>"/>`
    
    Where the value is the online computer's hostname/IP address and port. For example:
    
    `https://testpypi.python.org/simple//`
    
2. Restart the **TestShell Execution Server** service.

## Registration, passwords, emails, and licenses

### Enabling regular users to change their email address

Email defaults are read-only to all users, except administrators and domain administrators, who can allow regular users to change their email address, when the following key is turned on.

**To enable regular users to change their email address:**

1. Go to **C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config** file, and add the following key:
    
    `<add key="ChangeEmailEnabled" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Enabling password reset

This key hides or shows the **Forgot your password?** link in the login page. To get the password reset option to work, you need to also configure the [SMTP mail configuration](../../../install-configure/cloudshell-suite/configure-products/admin-config-settings.md#smtp-mail-configuration) when installing or configuring the Quali Server. By default, this option is disabled.

![](/Images/Admin-Guide/Setting-Up-CloudShell/PasswordReset.png)

**To enable password reset:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="ResetPassword.Enabled" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Hiding the Change Password option

This key enables users to change their password from the user login menu in CloudShell Portal. By default, this option is enabled.

![](/Images/Admin-Guide/Setting-Up-CloudShell/ChangePassword.png)

**To hide the "Change Password" option:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="ChangePasswordEnabled" value="False"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Enabling registration

Before a new user can register, you need to create the default group and configure the following keys.

**To enable registration:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following keys:
    
    `<add key="Registration.Enabled" value="True"/>`
    
    `<add key="Registration.AdminEmail" value=""/>`
    
    As well as configure the default role using the following key:
    
    `<add key="Registration.DefaultRole" value="Regular"/>`
    :::note
    DefaultRole is relevant when the group does not exist.
    :::
    In this case, the default group is called “Registered Users”.
    
2. Save the file and restart the **CloudShell Portal IIS** service.
3. In the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, define the default role, the group’s name, the domain of the group, and the admin’s email address (according to the address set for a system administrator level user in the Resource Manager):
    
    `<add key="Registration.DefaultDomain" value="Global"/>`
    
    `<add key="Registration.AdditionalGroup" value="External Users"/>`
    :::note
    The default additional group is External Users. If you want users to be added to a different group, change the value of the key to another group name. To disable this option, leave this key's value empty.
    :::
4. Save the file.
    
5. Restart the **Quali Server** service.
    
    In order to get to the registration page, you need to post a few parameters to it. Depending on your use case, you can either provide the user and email values (if you already know them) or leave them empty to let the user provide them. You must provide the group name that this user will be added to. You can use the following procedure to create a link that redirects the user to the registration form without providing the user and email details:
    
6. Add the following javascript function to the page from where you would like to redirect new users, and modify the default group value:
    
    ```javascript
    function NewUser() {
        var redirect = function(url, method) {
            var group = document.createElement('input');
            group.name = 'Group';
            group.value = 'Regular Users'; //the group name to add the user to
            group.type = 'text';
            var form = document.createElement('form');
            form.method = method;
            form.action = url;
            form.appendChild(group);
            form.submit();
        };
        redirect('http://CloudShellPortal/Account/Register', 'post');
    }
    ```
    :::note
    The group name that you provide does not have to exist and it will be created upon the first registration.
    :::
7. The link that redirects to the registration form needs to call the above function and might look like this:
    
    `<a onclick="NewUser()">New user?</a>`
    
    Then, when the user clicks on the link to the registration in his client’s website, he is directed to the CloudShell Registration page and is required to supply only a password.
    
    After this, a new user should appear in the **Users** tab.
    
    A different approach would be to create a registration form of your own. In this case your registration form might look like this:
    
    ```css
    <form action = "http://localhost:801/Account/Register" method = "post" novalidate = "novalidate">
        <div>
            <span > UserName </span>
            <input name = "Username" type = "text" value = "xx">
        </div>
        <div>
            <span> Email </span>
            <input name = "Email" type = "text" value = "xx@work.com">
        </div>
        <div>
            <input name = "Group" type = "hidden" value = "users">
        </div>
        <button type = "submit" class = "btn"> Register </button>
    </form>
    ```
    
    When the user submits this form he will be redirected to the CloudShell Registration page where he will need to provide only the password.
    

### Enabling brute-force protection for logins

To prevent a brute-force attack trying to find a user/password match that can log in to CloudShell, the Administrator can enable a delay between failed log in attempts.  
This adds an extra layer of security by applying exponential delays after defined failed login attempts, with resets on successful login, password change via Resource Manager or Forgot password, or when the MaxDelay time has passed.

**To enable the delay between failed login attempts:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="DelayFailedLoginsAttempts" value="True"/>`
    
2. To set the maximum failed log in attempts before a user account gets locked, add the following key (the default is 3 attempts):
    
    `<add key="Bruteforce.AttemptsBetweenLockout" value="3"/>`
    
3. To set the lock time for a user that reached the maximum failed log in attempts, add the following key (value is in hours, the default is 10 hours):
    
    `<add key="Bruteforce.MaxDelay" value="12"/>`
    
4. Save the file.
5. Restart the **Quali Server** service.

### Setting password policies for CloudShell user accounts

To increase the security with who access CloudShell and reduce easy password guessing, you can set the following password policies that will be enforced upon user creation or password change:
:::note
This does not apply to Single-Sign-On (SSO) users or existing users (until their password changes).
:::
**To enable the password policies:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="PasswordMinimumLength" value="3"/>`
    
    `<add key="PasswordMustContainNumber" value="True"/>`
    
    `<add key="PasswordMustContainSpecialCharacter" value="True"/>`
    
    `<add key="PasswordMustContainUpperCaseLetter" value="True"/>`
    
    `<add key="PasswordMustContainLowerCaseLetter" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**Update the error message a user gets if their password does not match the policy:**

1. An error message will be displayed to the users when they try to set a password which is not complying to the configured policies. To update the message to explain to the user what is the required policy, you can update the localization file at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Localization\LanguageServer.xml` and set a new value to the PasswordPolicyErrorMessage key.
    

### Configuring the workspace to release the license after lying idle for a specified time

An administrator can configure the relevant applications (detailed below) to automatically release the license by updating a key in the `customer.config` file. The application remains open and when focus is returned to the application, a new license is retrieved. If none is available, a message is issued to notify the user that the license is missing.

By default, when the application has been lying idle for 65 minutes, the license is released.

In the following conditions, idle time is not counted:

- When TestShell Runner is under external control.
- When a Test or function is either running or has paused.
- When a seat license is being used.

Relevant applications:

- TestShell Studio
- TestShell Runner
- CloudShell Authoring

**To change the default idle time for releasing the license in TestShell Studio and TestShell Runner:**

1. Open the `C:\Program Files (x86)\QualiSystems\TestShell\Studio\customer.config` file, and add the following key:
    
    `<add key="IdleLicenseReleaseWatchdog.IdleTimeInMinutes" value="65"/>`
    
2. Specify the value `0` to disable the idle check.
3. Save the file.
4. Run the **TestShell Studio Configuration Wizard**.

**To change the default idle time for releasing the license in CloudShell Authoring:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Authoring\customer.config` file, and add the following key:
    
    `<add key="IdleLicenseReleaseWatchdog.IdleTimeInMinutes" value="65"/>`
    
2. Save the file.
3. Run the **CloudShell Authoring Configuration Wizard**.

**To disable the idle check:**

- In the above key, set `value=0` and run the **CloudShell Authoring Configuration Wizard**.

### Setting the email validation pattern

You can specify the email validation pattern to limit the characters the user can enter for the email address (for example, to limit to a company-provided email address per specified string). The default email validation allows the user to insert any email, where the strings can be any character in any language or symbol (separated by "@" and ".").

**To set the email validation pattern:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, add the following key, and set the relevant value (for example, to limit users to enter email addresses that are specific to a particular company, such as Quali):
    
    `<add key="EmailValidationPattern" value="[^\s@]+@qualisystems\.com"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Enabling regular users to change email notifications

Administrators and domain administrators can allow users to change notifications about their sandboxes when the following key is turned on.

**To enable regular users to change notifications about their sandboxes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ReservationEmail.NonAdminCanChangeNotifications" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting email notification defaults for sandboxes

:::note Notes
- The time stamps on sandbox events are in the time zone of the recipient. In the event of multiple recipients in different time zones, CloudShell will send a different email to each time zone's recipients.
- Email notifications require [SMTP mail configuration](../../../install-configure/cloudshell-suite/configure-products/admin-config-settings.md#smtp-mail-configuration).
- It's possible to customize email notification templates. For details, see [Email Notifications Overview](../../../intro/features/email-notifications.md).
:::
**To set the email event defaults for sandboxes, for the sandbox's lifecycle events:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the appropriate keys:
    
    To send an email notification when the sandbox starts (**On setup** option):
    
    `<add key="ReservationEmail.SendNotificationOnStart" value="True"/>`
    
    To send an email notification when the sandbox is active (**On setup** complete option):
    
    `<add key="ReservationEmail.SendNotificationOnSetupComplete" value="True"/>`
    
    To send an email notification when teardown starts (**Before end** option):
    
    `<add key="ReservationEmail.SendNotificationBeforeEnd" value="True"/>`
    
    To send an email notification x minutes before the teardown phase starts:
    
    `<add key="ReservationEmail.NotificationMinutesBeforeEnd" value="10"/>`
    
    To send an email notification when the sandbox ends (**On end** option):
    
    `<add key="ReservationEmail.SendNotificationOnEnd" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To include a link to the sandbox in notification emails:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:

`<add key="PortalAddressLinkForEmails" value="protocol://Portal:PortalPort"/>`

3. Modify the key's values:
    
    | Parameter | Parameter details |
    | --- | --- |
    | protocol | http or https if CloudShell Portal is set to use SSL |
    | PublicServerName | The DNS name or IP address of the CloudShell Portal virtual front |
    | PortalPort | The port which CloudShell Portal is using (If the port is 80 or 443, remove this parameter and the colon from the key value). |
    
4. Save the file.
5. Restart the **CloudShell Server** service.

### Enabling calendar events for future sandboxes

As an administrator you can configure CloudShell to send calendar invitations for future sandboxes via email. The invitations are suitable for both Outlook and Google calendars. All calendar invitations are sent to the owner of the sandbox only.

Email notifications can be created for sandboxes that were created either manually or via an API.

If you extend or end the sandbox, a new event notification will be sent, changing the event time or canceling the event. For more information about extending and ending sandboxes, see [Extend and End Sandboxes](../../../portal/sandboxes/sandbox-workspace/extend-and-end-sandbox.md).
:::note
Email notifications require [SMTP mail configuration](../../../install-configure/cloudshell-suite/configure-products/admin-config-settings.md#smtp-mail-configuration).
:::
**To enable the calendar event:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:

`<add key="SendEmailForFutureReservations" value="True"/>`

3. Save the file.
4. Restart the **Quali Server** service.

### Disabling admin calendar event when user extends/cancels a sandbox

By default, whenever a user extends the duration of a sandbox or cancels a future one, the system administrator receives a calendar invite.

**To disable the calendar event:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="ReservationEmail.SendNotificationOnReschedule" value="False"/>`
    
    `<add key="ReservationEmail.OverrideSendNotificationOnRescheduled" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Adding additional recipients for sandbox notifications, in addition to the owner

There are two supported methods to specifying additional recipients that are to be emailed on all sandbox events in addition to the owner. The two methods can be used in conjunction.

**To specify a hard-coded list of email addresses (the list items should be separated by a semi-colon):**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ReservationEmail.RecipientsToNotify" value="admin1@company.com;admin2@company.com"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To set more general policies to inform admins and non-admins globally:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="ReservationEmail.NotifySystemAdmins" value="True"/>`
    
    `<add key="ReservationEmail.NotifyDomainAdmins" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Ensuring admin notifications even if a user disables them

The admin can specify that he wants to always get a notification for some sandbox events, regardless whether the user disables them in the sandbox. Set the below keys to **True** to have CloudShell send a notification email to the admin/domain admin when the event occurs, or **False** to only send notifications based on the sandbox end-user's settings.

By default, admin notifications are sent.

**To ensure admin notifications even if user disables them:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="ReservationEmail.OverrideSendNotificationOnStart" value="True"/>`
    
    `<add key="ReservationEmail.OverrideSendNotificationOnSetupComplete" value="True"/>`
    
    `<add key="ReservationEmail.OverrideSendNotificationBeforeEnd" value="True"/>`
    
    `<add key="ReservationEmail.OverrideSendNotificationOnEnd" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Disabling admin email notifications

Setting the keys `ReservationEmail.NotifySystemAdmins` and `ReservationEmail.NotifyDomainAdmins` to **False** determines that the admin/domain admin should not receive email notifications for notifications that were enabled in sandboxes by the users that launched them (when reserving the sandboxes). However, the `ReservationEmail.Override` keys, which are enabled by default, will override the admin notification setting and ensure that CloudShell will send email notifications for the specified sandbox events even if these notifications were disabled in a specific sandbox.

**As such, to completely disable notifications from reaching the admin:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    `<add key="ReservationEmail.NotifySystemAdmins" value="False"/>`
    
    `<add key="ReservationEmail.NotifyDomainAdmins" value="False"/>`
    
2. Disable the appropriate `ReservationEmail.Override` keys.
    
    For example, disabling the "on start" notification override:
    
    `<add key="ReservationEmail.OverrideSendNotificationOnStart" value="False"/>`
    
3. Save the file.
4. Restart the **Quali Server** service.

## Sandboxes

### Allowing users to reserve existing blueprints only

In some cases, it can be undesirable to allow regular users to create new blank sandboxes. For example, sandboxes that are not based on blueprints cannot run setup scripts that perform important configuration steps on the sandbox, such deploying App VMs and preparing connectivity for public cloud Apps, such as AWS EC2 and Azure.

**To enforce the rule that users reserve existing blueprints only:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="RegularUserCanCreateEmptyReservation" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Unlocking sandboxes for use during the Setup process

*This applies to sandboxes that either use the Default Sandbox Setup script or a modified version of the script. Note that these restrictions do not apply to API methods.*

During the Setup process, CloudShell prevents users from performing certain actions in the sandbox. This restriction both protects the Setup process from unexpected changes and avoids situations where the user makes changes to the sandbox and the Setup process overrides them.

The following actions cannot be performed in the sandbox during Setup:

- Run commands
- Add or remove resources, services and Apps
- Remotely connect to sandbox elements via QualiX

**To enable users to interact with sandboxes during setup:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="BlockSandboxDuringSetup" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Enabling extended permissions for external users

An external user is limited in the ways they are able to interact with CloudShell Portal. By default, an external user is not allowed to create new sandboxes, for example.

An external user with extended permissions can also perform actions such as:

- Resources and Apps: Viewing and controlling the resources in a blueprint or sandbox. This includes managing connections and moving elements in the diagram, viewing resource attributes and commands, and connecting to devices and VMs from the sandbox diagram (using remote connection protocols such as Telnet, SSH, and RDP).
- Blueprints: Using advanced settings when reserving a blueprint and resolving reservation conflicts.
- Sandboxes: Controlling the duration of the sandbox, changing the sandbox properties and input values, exporting diagrams and connections, downloading file attachments, and viewing the sandbox's **Instructions** and **Activity feed**.

**To enable extended permissions for external users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ExternalUserHasExtendedPermissions" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** and **CloudShell IIS Portal** services.

### Allowing sandboxes to be shared only with users in the same group

By default, the user can share their own sandbox with anyone in the same domain. If you enable this key, only users in the same CloudShell group as the user who created a particular sandbox can use it.

**To restrict the possible users to users in the same group:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="PickOnlyUsersFromLoggedInUserGroups" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Preventing users reserving a blueprint from viewing Owner and Permitted Users details

This key controls whether to display the **Owner** and **Permitted Users** details when creating a sandbox (in the **Reserve** dialog box). When enabled, the **Owner** and **Permitted Users** sections will display only the details of the logged in user. If the logged in user is not the designated owner, the **Owner** section will be empty.

This option is disabled by default.

**To prevent users reserving a blueprint from viewing Owner and Permitted Users details:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="PickOnlyLoggedInUser" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.
4. Then, restart the **CloudShell Portal IIS** service.

### Preventing users from using the "Reserve Anyway" option to create sandboxes with conflicts

In some cases, it may be undesirable to allow users to use the **Reserve Anyway** option to create a sandbox with conflicts.

**To remove the Reserve Anyway option from the interface:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="BlockReserveWithConflicts" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Allowing regular users to view sandboxes of other users in their domain

By default, all users in the same domain have visibility of each other’s sandboxes. You can disable this with the following key.

**To disable non admin users from viewing sandboxes other than their own:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ShowOtherUserInDomainReservations" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the default duration for new sandboxes

The default value for all new sandboxes is two hours.

**To change the default duration for new sandboxes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value accordingly:
    
    `<add key="Reservation.DefaultDuration" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Disabling the "Recurrence" option when creating sandboxes

When creating a sandbox, the sandbox can be set to repeat on a schedule. By default, this option is enabled.

Note that this does not prevent users from modifying existing recurrence settings.

**To disable the Recurrence option:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value accordingly:
    
    `<add key="EnableRecurringReservation" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.
4. Restart the **CloudShell Portal IIS** service.

### Setting the default maximum concurrent sandboxes limit for CloudShell users

This key enables you to set the default number of maximum number of live sandboxes any user can own in CloudShell. If this key is not used, users are allowed to own up to 10 scheduled sandboxes. Note that admins can change the default for specific users using Resource Manager Client or the API.

**To apply this constraint for all new users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value for the specified number of sandboxes:
    
    `<add key="DefaultUserMaxConcurrentReservations" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the default maximum scheduled sandboxes limit for CloudShell users

This key enables you to set the default number of maximum scheduled sandboxes for all users in CloudShell. By default, new users can reserve up to 10 scheduled sandboxes while users migrated from a pre-9.3 Patch 2 version (during upgrade) have an empty value (unlimited). Value "0" means users can only start immediate reservations (no scheduled). Note that admins can change the default for specific users using Resource Manager Client or the API.

**To apply this constraint for all new users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value for the specified number of sandboxes:
    
    `<add key="DefaultUserMaxScheduledSandboxes" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the default maximum number of blueprints a user can own

By default, new users are allowed to own an unlimited number of blueprints. Using this key, the CloudShell administrator can change the number of blueprints new users can own at any given time. By default, new users can own an unlimited number of blueprints (empty value).

**To apply this constraint for all new users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value for the specified number of sandboxes:
    
    `<add key="DefaultUserMaxOwnedBlueprints" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the default maximum number of saved sandboxes for CloudShell users
:::note
This only applies if you are using the **Save and Restore** paid add-on.
:::
By default, users are allowed to save as many sandboxes as they require. This is done using the `DefaultUserMaxSavedSandboxes` key. This key applies only to new users or users created in a CloudShell version prior to 9.0 that are migrated for the first time. The default value is empty (unlimited).
:::note
Admins can override the default for specific users in **Resource Manager Client**.
:::
**To set the default maximum number of saved sandboxes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value:
    
    `<add key="DefaultUserMaxSavedSandboxes" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the default maximum sandbox duration limit for each user

By default, users are not restricted to sandboxes up to a certain duration. Using this key, you can apply a maximum duration limit for all new users. It is possible to change the value for specific users later using the application or the API.

**To apply this constraint for all new users:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the number of minutes as the value (for example, 2 days):
    
    `<add key="DefaultUserMaxReservationDuration" value="2:00:00:00"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting the maximum number of permitted users per reservation

Use this key to set the maximum number of permitted users that a single reservation can have. The default is 20.

**To specify which side panes should be open by default:**

1. `Open the C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add this key with the appropriate value:
    
    `<add key="MaxPermittedUsersForReservarion" value="10"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Specifying which side panes should be open by default (sandboxes)

It is possible to specify that either the instructions side pane or the blueprint commands side pane be opened by default in the **Sandboxes** pages.

**To specify which side panes should be open by default:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the appropriate key:
    
    `<add key="WS_Reservation_AutoOpenInstructions" value="True"/>`
    
    `<add key="WS_Reservation_AutoOpenCommands" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Controlling whether sandboxes should end automatically

The server can end sandboxes automatically when their end time arrives, or allow them to go into overtime. Sandboxes that have resources that are marked “in use” can go into overtime when their time ends. Using this configuration key, you can enable sandboxes to go into overtime when their time ends. By default, sandboxes end automatically without going into overtime.
:::note Important
It is not recommended to enable Overtime since it makes managing and troubleshooting conflicts more difficult.
:::
**To enable overtime (have sandboxes not end automatically if "in use" resources are present):**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="AutoEndReservation" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Showing the **Mark "in use"** option for resources

This key determines whether the mark in use option is available for sandbox resources. For details see [Mark Resources "in use"](../../../portal/sandboxes/sandbox-workspace/resources/mark-in-use.md).

To display the Mark "in use" option:

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="HideMarkInUseAction" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Preventing regular users from reserving shared resources exclusively

Administrators can specify that resources marked as "Shared by default" cannot be "unshared" by a regular user. The intent is to apply a policy that prevents exclusive access to some devices, which are meant as shared.

**To prevent regular users from reserving shared resources exclusively:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="NonAdminCanUnshareResource" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Preventing non admin users from viewing the physical sandbox layer

Administrator can prevent non-admin users from using the **Show Physical Layer** functionality in the web portal, which exposes him to the L1, patch panel, and other physical layer devices.

**To prevent users from viewing the physical sandbox layer:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="NonAdminCanViewPhysicalLayerInReservation" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Enabling HTML formatting in system and command messages

HTML formatting such as rich text and hyperlinks is displayed by default in the **Output** console, **Activity Details**, and **Commands** side panes. For security reasons, \<script\> tags are disabled by design.
:::note
Before you begin writing your scripts, you must determine your required output format. If you require a special format other than HTML (for example, XML), you need to set this key to `False` in order to prevent unexpected behavior and erroneous output.
:::
**To disable HTML formatting:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, add the following key, and set the value to `False`:
    
    `<add key="CommandsOutputConsoleSupportsHtml" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Limiting the time to keep sandbox Activity Feed/Output data

This key enables you to set the time, in days, to retain sandbox events data.

By default, CloudShell keeps sandbox events data for 49+ years (Value "17910"). Setting a retention limit ensures that the CloudShell database is smaller and as a result can improve performance in high throughput deployments. However, a smaller retention period also means that older reservations may not have the entire original Activity Feed data.

**To change the sandbox Activity Feed/Output retention period:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="SandboxLogAndOutputSaveDuration" value="17910"/>`
    
2. Set the desired value.
3. Save the file.
4. Restart the **Quali Server** service.

### Preventing the Output console from opening when new sandbox events occur

Starting with 2022.1, the **Output** console opens whenever a new sandbox event occurs. This default behavior can be changed using the `AutoOpenCommandOutputOnNewEvents` configuration key.

**To prevent the Output console from opening automatically:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="AutoOpenCommandOutputOnNewEvents" value="False"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Enabling users to create ad hoc sandboxes

Administrators can enable CloudShell users to start a new sandbox from scratch (ad hoc). Ad hoc sandboxes can be based on existing blueprints or by starting a blank sandbox, to which components such as resources and services can be added.

By default, sandboxes can only be created from existing blueprints.
:::note
Apps based on a public cloud provider, such as AWS EC2 and Azure, cannot be used when creating an ad hoc sandbox. For additional information, see [Apps in Blueprints](../../../portal/blueprints/creating-blueprints/apps/).
:::
**To enable users to create ad hoc sandboxes:**

1. Open the C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config file, and add the following key:
    
    `<add key="HideCreateNewEmptyReservation" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.
4. restart the **CloudShell Portal IIS** service.

### Preventing CloudShell from switching to the domain of a sandbox/blueprint when accessing via URL

By default, when trying to open a URL to a sandbox from a domain you can access but are not currently logged into, CloudShell prompts the user to switch to the domain (assuming the blueprint is public and the user is permitted to access the sandbox/blueprint). If the user confirms the switch, CloudShell will then open the sandbox/blueprint in its domain. However, you can choose to prevent this domain switch by setting the `AutoSwitchDomain` key. For additional information, see [Opening Sandboxes](../../../portal/sandboxes/opening-sandboxes.md).
:::note
When opening a blueprint from a URL, the domain switch only works if the blueprint URL includes the domain ID. To obtain a blueprint URL with the domain ID, use the CloudShell Automation API's [GetTopologyUrls](pathname:///api-docs/2023.3/python-api/cloudshell.api.html?#cloudshell.api.cloudshell_api.CloudShellAPISession.GetTopologyUrls) method.
:::
**To disable the domain switch when accessing a sandbox/blueprint link:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="AutoSwitchDomain" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Showing/hiding user/sandbox details of currently shared resources in CloudShell Portal

The `ShowSharedResourceUsage` key determines whether to display the list of users and sandboxes that are currently using a shared resource, when viewing the resource's information in the **Inventory** dashboard or **Add Resources** catalog in a blueprint/sandbox.

By default, this information is displayed, as illustrated in this image:

![](/Images/Admin-Guide/Setting-Up-CloudShell/UserDetailsOnSharedResource.png)

**To hide user/sandbox details on a shared resource:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ShowSharedResourceUsage" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Set List view as the default for sandbox workspaces

By default, when you open a sandbox, the sandbox's elements are displayed in **Diagram** view. However, you can choose to change the default display mode to **List** view, using this key. For additional information, see [Sandbox List View](../../../portal/sandboxes/sandbox-workspace/sandbox-list-view.md).

**To set List view as the default:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ShowListViewByDefault" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Preventing regular users from adding/removing resources in sandboxes

By default, CloudShell enables regular users to add and remove resources in the sandbox. To block this option, enable the following key. As a result, the **Resource** button in the sandbox toolbar will be hidden in the active sandbox.

Note that this does not apply to admins (who have full access permissions), or external users (who are unable to modify the sandbox diagram).

**To prevent regular users from adding/removing resources in the sandbox:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="BlockAddRemoveResourcesInSandbox" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Allowing sandboxes with shorter duration than Before end notification

This section applies to sandboxes that have a **Before end** notification. By default, it is not possible to launch such a sandbox if the sandbox's duration is shorter than the **Before end** notification period. Using this key, you can allow users to launch such sandboxes.

**To allow launching sandboxes with a shorter duration than the Before end period:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:

`<add key="ReservationEmail.VerifyNotificationBeforeEndLongerThanDuration" value="False"/>`

3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

### Setting the lowest role that can create and use persistent sandboxes (MinimalRoleForPersistentSandbox)

This does not apply to "External" users, which do not have blueprint "Create" and "Reserve" permissions. External Extended users can reserve persistent sandboxes as long as this key is set to "None". In addition, by definition, users who have "View only" permission in the domain can only create but not reserve blueprints.

**To set the lowest role for persistent sandboxes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="MinimalRoleForPersistentSandbox" value=""/>`
    
2. Set the role. Options are:
    - **None (default)**
        
    - **Regular**
        
    - **DomainAdmin**
        
    - **SystemAdmin**
        
3. Save the file.
4. Restart the **Quali Server** service.

### Block non-admin users from ending persistent sandboxes (BlockNonAdminEndingPersistentSandbox)

To avoid unintended stops of a persistent sandbox by non-admin users, while still permitting them to create or be designated as permitted users in such sandboxes, you can activate the following key. Enabling this key restricts the ability to stop a persistent sandbox solely to domain admin and system admin users. As a result, other users, including sandbox owners, won't have the permission to stop it.

**To block non-admin users (even owners) from ending persistent sandboexs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="BlockNonAdminEndingPersistentSandbox" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

## Scheduling and Queuing

***Job Scheduling*** *is available as an add-on. For details, contact your account manager.*

### Customizing the schedule-ahead buffer for pending jobs

The scheduling and queuing engine continually tries to find open slots for pending jobs. By default, every 30 minutes. This configuration key enables you to determine the time interval at which the engine searches for available time slots.

For example, if a job has completed running its tests but the job’s duration hasn’t ended, the job slot is available. However, the next job in queue will have to wait either for the current job's duration to end or the scheduling and queuing engine to run it.

**To customize the time limits for the schedule-ahead buffer for pending jobs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the relevant value:
    
    `<add key="QacAllowedTimeFrameDurationInMinutes" value="120"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

## Scheduling and Queuing

***Job Scheduling*** *is available as an add-on. For details, contact your account manager.*

### Customizing the schedule-ahead buffer for pending jobs

The scheduling and queuing engine continually tries to find open slots for pending jobs. By default, every 30 minutes. This configuration key enables you to determine the time interval at which the engine searches for available time slots.

For example, if a job has completed running its tests but the job’s duration hasn’t ended, the job slot is available. However, the next job in queue will have to wait either for the current job's duration to end or the scheduling and queuing engine to run it.

**To customize the time limits for the schedule-ahead buffer for pending jobs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the relevant value:
    
    `<add key="QacAllowedTimeFrameDurationInMinutes" value="120"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Setting allowed job overtime before termination

The SNQ engine can allow jobs some to go overtime, instead of terminating them.

This value, set by the admin, is used to add an additional overtime buffer for all jobs. Jobs that exceed their allocated time are considered overtime, and their owner receives a warning email. The buffer is specified as a percentage.

**To set the job overtime buffer:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the relevant value:
    
    `<add key="ExecutionJobDurationOvertimePercentage" value="20"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Controlling the number of recently completed jobs displayed in the Job Scheduling page

The **Job Scheduling** page in the CloudShell Portal displays the currently running jobs for each suite, as well as a limited number of recently ended jobs. By default, the last two completed jobs will be displayed.

**To change the number of completed jobs displayed:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key, and set the relevant value:
    
    `<add key="NumberOfEndedExecutionJobSetsToDislpay" value="4"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Working with local tests

By default, the **Create Suite Template (TestShell)** page in CloudShell Portal's **Job Scheduling** dashboard enables you to select only shared tests to add to the job. Adding this key enables you to select local tests as well.

**To enable local test selection:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:

`<add key="EnableLocalTestBrowsing" value="True"/>`

3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

You must get the latest parameters for the local tests per the execution server on which they are stored.

**To get environment variables into the batch files:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:

`<add key="LocalEnvironmentUserParameters" value="Get_UserName, Get_Password,..."/>`

Separate the relevant parameters with a comma as in the example above.

4. Save the file.
5. Restart the **CloudShell Portal IIS** service.

For additional information, see [Setting Up Execution Servers to Run Commands](../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).

### Locking a test for editing

This key enables you to configure if TestShell tests are locked for editing while they are being updated by other users.

Note that while a test is being edited, other users can still edit this test and save changes, but their changes will not be applied. Setting this key to **True** will pop up an error message if a second user tries to save a locked test and block the action.

Once the test is saved, all users with the required permission may edit the test.

You can enable Admin users to unlock tests. See [Enabling TestShell admins to unlock tests in TestShell Studio](./advanced-cloudshell-customizations.md#enabling-testshell-admins-to-unlock-tests-in-testshell-studio).

**To enable locking a test for editing in TestShell Studio:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:

`<add key="EnableTestShellStudioAccessControl" value="True"/>`

3. Save the file.
4. Restart the **Quali Server** service.
5. Rerun the TestShell Configuration Wizard if your TestShell Studio client is installed on a different machine than **Quali Server**.

### Enabling TestShell admins to unlock tests in TestShell Studio

**To enable unlocking by an admin:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\TestShell\Studio\customer.config` file, and add the following key:

`<add key="EnableAccessControlAdministration" value="False"/>`

2. Restart the TestShell Studio client.

### Configurations for running local tests

For additional information, see [Working with local tests](../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md#working-with-local-tests).

### Suite notification default severity level

You can define the default notification severity level for your suite notification emails.

**To set a default:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:

`<add key="SuiteEmailNotificationDefaultSeverityLevel" value="ErrorsOnly"/>`

Other possible values are `None`, `SuiteAndErrors`, and `All`.

2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

### Setting the Test Execution Report Template for Automation Suite Tests

For additional information, see [Setting the Test Execution Report Template for Automation Suite Tests](../../../portal/job-scheduling/view-execution-history/view-test-reports/setting-test-execution-report-template.md).

### Setting the maximum number of steps for test reports

Reports of very large TestShell tests (over 10,000 steps) may take a long time to open and in some cases, may not open at all. To prevent this from happening, it is recommended to set a limit on the maximum number of steps allowed in a test report.

The default is 10,000.

**To set the maximum number of steps for test reports:**

1. Open the appropriate file:
    
    - For reports created in TestShell Studio and Runner: `C:\Program Files (x86)\QualiSystems\TestShell\Studio\customer.config` file.
    - For reports created in CloudShell Portall automation suites: `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file.
2. Add the following key:
    
    `<add key="MaxReportStepCount" value="10000"/>`
    
3. Set the value, as appropriate.
4. Save the files.
5. Run the **TestShell Studio Configuration Wizard** for Studio or Runner, or restart the **CloudShell Portal IIS** service for CloudShell Portal.

### Setting the default Reporting Profile for automation suite jobs

This key sets the default logging profile for automation suite tests. For tests that are executed in TestShell Studio and Runner, the default logging profile is defined globally in the application itself .

The default value is: Results

**To set the default Reporting Profile for jobs:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="LoggingProfile" value="Results"/>`
    
    Possible values are:
    
       - **Results** logs only the execution results (results of following tools: Pass, Fail, Text To Report, Criteria, Attributes).
       - **Measurements and Results** logs execution results and measures of all tools with output.
       - **All** logs all results and outputs of the test execution (including tools without outputs).
       - **None** runs the test without logging any output or result.
    
2. Set the value, as appropriate.
3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

### Enabling non-admin users to edit and create suite templates

**To enable non-admins to edit and create suite templates:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="AllowRegularUsersToEditSnQ" value="True"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## Scheduling commands

### Controlling the time a command can stay in "pending" state

This key determines the period a resource or blueprint command can be in the commands queue before it is automatically canceled.

**To set the timeout period:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="InstantJobTimeToLiveTimeoutMinutes" value="10"/>`
    
2. Set the timeout period, in minutes. The default is 10.
3. Save the file.
4. Restart the **Quali Server** service.

### Enabling concurrent blueprint scripts

Set this key to **True** to enable multiple blueprint script commands to run at the same time in a sandbox. This enables the **Default Sandbox Setup** script to run other scripts as part of its own execution.

This option is disabled by default.

:::note
To enable a resource driver's commands to run concurrently, in **Resource** **Manager** **Client**, open the **Resource** **Families** explorer and in the resource model's **Drivers** tab, select **Supports** **Concurrent** **Commands**.
:::
**To enable blueprint scripts to run concurrently:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="AllowConcurrentTopologyScriptCommands" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

## Search

It is possible to customize the resource search experience and scope using several configuration keys.

### Showing/hiding the bulk add resources option in the search side pane

The functionality to add a bulk of resources at once to a sandbox can be useful, especially in cases where the user needs to add hundreds of ports, storage LUNs or any other type of device to a sandbox. In such a scenario, dragging them in one-by-one might not be relevant.

However, if that scenario is not relevant, you can disable this option for the user.

**To disable the bulk add resources option:**

1. Open the C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config file, and add the following key:
    
    `<add key="ShowSearchMultiAdd" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Controlling the resource types the user can drag into the sandboxes

This can be useful if the admin wants to hide certain resources from the search pane results only, when the user is selecting which resource to add to his/her sandbox. In this manner, for example, it is possible to ensure that the user only uses the chassis/port level for certain device types, and avoid the confusing of many sub slot/blade/port group hierarchies.

**To control the resource types the user can drag into sandboxes:**

1. Open the C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config file, and add the following key:
    
    `<add key="SearchOnlySearchables" value="True"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.
4. In the **Resource Manager client**, in the **Resource Families** explorer, click a resource family. In the **Parameters** area, set the **Searchable** property according to the required visibility. 
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ConfigurationScreen.png)
    

### Controlling which attributes to display as filters

As the user searches the database, automatic filtering attributes appear in the search panel and can be used to further focus the search. To avoid clutter, you can specify which attribute should be used for filtering in the **Resource Manager Client**.

**To control which attributes to display as filters:**

- Open the **Resource** **Manager** **Client**'s **Attributes** tab and add the **Displayed in Search Results** rule to the relevant attributes.

### Advanced: Controlling the number of attributes and values filters retrieved for search results

As the user searches the resources database, automatic attribute filters appear based on the search results. It is possible to configure the maximal number of these attribute filters and the maximal number of values for filtering. This can be useful if your resources have numerous relevant attributes which you want the user to be able to filter by, or if you want to reduce clutter and focus the user only on the most common attributes.

**To control the maximum number of filtering attributes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key and set the value (the default is 10 attributes):
    
    `<add key="NumberOfTopAttributeNames" value="10"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

**To control the maximum number of possible values per attribute:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and addAdd the following key and set the value (the default is 5):
    
    `<add key="NumberOfTopAttributeValues" value="5"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

## Single Sign On (SSO)

*SSO/SLO configuration is available with CloudShell Premium Tier.*

For information about configuring Single Sign-On and SAML, see [Configuring Single Sign-On (SSO)](../../cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md).

## TestShell Studio

### Preventing regular users (non-admins) from creating tests and folders in the Shared test folder

By default, non-admins can create tests and folders (in TestShell Studio) under the `Shared` root. To only allow domain admins and global admins to create tests and folders in the `Shared` test folder, disable the `AllowNonAdminToCreateTestsUnderSharedRoot` key.

:::note
Shared tests and assets are stored in the MS SQL database
:::
**To prevent regular users from creating tests and folders:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="AllowNonAdminToCreateTestsUnderSharedRoot" value="False"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

### Hiding the "Shared" test folder from Job Scheduling

(This key applies to the original Job Scheduling) By default, the `Shared` test folder is accessible from Job Scheduling. However, you can hide the `Shared` test folder, preventing automation suite designers from using its tests in their automation suites.

**To hide the "Shared" test folder:**

1. Open the C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config file, and add the following key:
    
    `<add key="EnableSharedTestBrowsing" value="False"/>`
    
2. Save the file.
3. Restart the **CloudShell Portal IIS** service.

## Related topics

- [Customer Configuration Keys Repository](./customer-configuration-keys-repository)
