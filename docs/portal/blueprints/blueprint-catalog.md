---
sidebar_position: 1
---

# Blueprint Catalog

The Blueprint Catalog displays public blueprints as well as your private blueprints in the domains you are permitted to access. The Blueprint Catalog is displayed by default when you log in to CloudShell. However, CloudShell remembers the last page you were in and displays that page when you next log in.

## Navigating the Blueprint Catalog

In the image below, hover over an area or option to learn more about it, or use the table that follows.

![](/Images/CloudShell-Portal/Lab-Management/Environments/BlueprintCatalog.png)

<details>
<summary>The catalog's areas are arranged as follows:</summary>

1. Run a free text search for blueprints listed in the dashboard.
2. Switch between the **Blueprint Catalog** and the **Sandboxes** dashboard.
3. Use the filters to find blueprints matching specific criteria. See [Filter the Blueprint Catalog](#filter-the-blueprint-catalog).
4. The catalog header displays the number of blueprints in the catalog, enables you to clear any filters you applied to the catalog, and switch between the catalog views.
5. Select whether to display blueprints in a list or tiles.
6. View and manage the different blueprints in the catalog. Click a tile to open the blueprint's workspace.

   1. Reserve the blueprint (creates a sandbox). See [Reserving a blueprint](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm#Reservin).
   2. Displays the blueprint's current status and whether any resources are unavailable.
   3. Display details about the blueprint and its status.
   4. Click to access the blueprint's diagram and properties page. Select Delete to remove the blueprint from CloudShell.
7. Use this pane to filter blueprints by category. See [View blueprints by categories](#view-blueprints-by-categories).


</details>

In the Blueprint Catalog, you can:

- [View blueprints by categories](#view-blueprints-by-categories)
- [Filter the Blueprint Catalog](#filter-the-blueprint-catalog)
- [Reserve a blueprint from the Catalog](#reserve-a-blueprint-from-the-catalog)
- [Request approval to reserve a blueprint](#request-approval-to-reserve-a-blueprint)

## View blueprints by categories

The Browse by Category pane is displayed when there are categories associated with the current domain. This pane lists the different categories in the portal and enables you to view blueprints that belong to a specific category.

:::note
Categories are created and managed by the system administrator through the **Manage** dashboard.
:::

**To display blueprints of a specific category:**

- On the right of the screen, in the **Browse by Category** pane, click the required category.

**To return to the previous view in the catalog:**

- In the catalog header, click **Back to Blueprint Catalog**.

## Filter the Blueprint Catalog

### Featured or All blueprints

By default, blueprints in the catalog are displayed in one of the following ways:

- **Featured** (default view) – Arranges the blueprints according to recent activities and includes the following sections:

- **New** - Recently created public blueprints
- **Recently Modified** – Recently modified blueprints that are owned by the user
- **Recently Reserved** - Recently reserved blueprints

- **All Blueprints** – Displays all the blueprints in the domain. The blueprints are displayed in alphabetical order.

:::note
The **Featured** section is optional. If the **Featured** section is disabled, the **All blueprints** section is displayed.
:::

To switch between these views:

- Use the ![](/Images/CloudShell-Portal/Lab-Management/Environments/FeaturedEnvironmentsButton.png "Display featured blueprints") and ![](/Images/CloudShell-Portal/Lab-Management/Environments/AllBlueprintsButton.png "Display all the blueprints") buttons in the top left-hand corner of the Blueprint Catalog.
    
    The number of matching blueprints is displayed to the right of the Blueprint Catalog header caption.
    

### Filter pane

To apply additional filters to the catalog, use the Filter options from the left sidebar. Different filters appear according to the blueprints in the catalog and your user permissions.

The following table describes the available filters:

| Filter type | Description | Filter |
| --- | --- | --- |
| My Blueprints | Displays blueprints directly related to the logged in user. <br/> **Note**: If you don’t own any blueprints, the filter is not displayed. | **Active** - Displays blueprints that are currently active <br/>**Owned by me** - Displays blueprints you currently own. |
| Share Level | Displays blueprints you own and public blueprints in your current domain. <br/> Note: If all the blueprints are either public or private, the filter is not displayed. | **Public** - Displays public blueprints (from all users). <br/> **Private (My)** - Displays private blueprints owned by the current user. <br/> **Private (All)** - (Available to admins only) Displays private blueprints of any user in the domain. |
| Blueprint Status | Blueprint status enables you to view blueprints based on their current availability. To ensure a responsive behavior, the status is calculated using a very basic availability check. Only the current status of physical resources in the blueprint is checked. Conflicts related to abstract resources and connectivity is not reflected by the blueprint status. | **Available** - Displays blueprints whose physical resources are currently available. <br/> **Unavailable** - Displays blueprints whose physical resources are currently in use. <br/> **View only** - Displays blueprints that contain resources that are not in your domain or blueprints for which you have View Only permissions. <br/> **Draft** - Displays blueprints that have drafts you are permitted to access |

### Blueprint Type

In the Blueprint Catalog, you can display blueprints according to blueprint type by using the **Type** filter located in the top right-hand area of the page. There are three types of blueprints: Regular, Order and View. The Type filter is displayed if more than one blueprint is enabled. Enabling blueprints of types Order or View requires setting a configuration key.

To display a blueprint type:

1. In the top right hand corner of the Blueprint Catalog, click the Type dropdown list.
2. Select one of the following types:

- **All** - display blueprints of all types (Default)
- **Regular** – display blueprints of type Regular
- Order - display blueprints of type Order. Orders are sandboxes that need to be manually activated, enabling users to make modifications to the sandbox itself before it goes live, without changing the blueprint's settings.
- **View** – display blueprints for which you have view only permissions. You cannot edit, delete or reserve view only blueprints.

The last blueprint type that you selected is remembered and is displayed when you next open the Blueprint Catalog.

## Reserve a blueprint from the Catalog

For additional information about sandboxes and sandbox conflicts, see [Creating Sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm).

:::note
Blueprints of type ‘view’ cannot be reserved.
:::

**To create an immediate or future sandbox:**

1. In the Blueprint Catalog, on the required blueprint tile, click Reserve. Alternatively, in the blueprint workspace, click the Reserve button.
    
    The Reserve dialog box is displayed.  
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReserveBlueprint.png)
    
    :::tip
    The timezone for the sandbox is indicated in the title of the Reserve dialog box.
    :::
    
2. If the blueprint is defined as a persistent blueprint, select the Sandbox Type you want to deploy:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReservePersistent.png)
    
    - Regular Sandbox to spin up a time-limited sandbox
    - Persistent Sandbox to deploy a persistent sandbox with no end time. For details, see [Persistent Sandboxes Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Prmnt-Env.htm).
3. In the Schedule field, you can set the required sandbox duration or specify the explicit start and/or end time. Use the Calendar button to set future dates.
    

:::note Notes

- Most of the scheduling options are disabled for persistent blueprints.
- For non-persistent sandboxes, if a maximum duration was set for the sandbox, the user will not be able to reserve for a duration beyond this setting.
:::

1. (Unavailable for persistent blueprints) To have this sandbox repeat in a series, click Add Recurrence. If this option is missing, the admin needs to enable it using the `EnableRecurringReservation` key.
    
    The Recurrence page is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/RecurrenceWindow1.png)
    
    1. To have the sandbox repeat on specific days, click the Pattern field and either select the days or select Daily to have the sandbox repeat on all days of the week.
    2. In the Range field, define the period in which the sandbox will repeat.  
        
2. Optionally, change the Name of the sandbox. By default, the new sandbox name is the blueprint name.
    
    :::note
    The sandbox’s name has a limit of 60 characters.
    :::
    
3. In the Blueprint field, you can see the blueprint on which the sandbox is based.
4. To specify additional options, click the **Advanced Form** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/AdvancedFormTab.png) button.
    
    The advanced form enables you to configure the email notifications, permissions and other options.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReserveBlueprintPane.png)
    
    1. Optionally, enter a Description. Otherwise, the description of the sandbox will default to the blueprint description.
    2. To define an owner for the sandbox, click the Owner and select the required user. By default, the user who initiated the scheduling action is set as the sandbox owner.
        
    3. Instead of changing the owner of the sandbox, you can permit additional users to use the sandbox. Click the Permitted Users section and select the users you wish to add.
        
    4. To prevent users from ending the sandbox before its scheduled end time, enable Termination Protection. This option ensures your sandbox isn't ended accidentally or prematurely. And when you are ready to manually end the sandbox, disable the option in the sandbox's properties window and then end it.
    5. You can configure CloudShell to send email notifications to the owner of the sandbox and permitted users.
        
        :::note
        This capability requires the administrator to activate the email notifications feature using the `ReservationEmail` configuration keys.
        :::
        
        1. Click the Email Notifications field.
            
            The Email Notifications area expands.
            
            ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReservePaneEmailNotificaions.png)
            
        2. Configure the email notification settings.
            
            - On start - Sends notification as the sandbox starts.
            - On setup complete - Sends notification when the sandbox setup completes.
            - Before end - (Unavailable for persistent blueprints) Sends notification before the Teardown process begins. The exact time is decided by the user.
                
                :::note
                By default, it is not possible to launch a sandbox that has a shorter duration than the Before end period. However, your admin can enable this capability using the `ReservationEmail.VerifyNotificationBeforeEndLongerThanDuration` configuration key.
                :::
                
            - On end - Sends when the sandbox ends.
5. If the blueprint has inputs (global inputs, published abstract resource or service inputs), you will be asked to provide them.
    
    :::tip
    To expand the value area, click and drag down the icon in the bottom right corner of the frame.  
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/InputBoxExpand.png)
    :::
    
6.  Click **Reserve**.
    
    The sandbox is being reserved.
    
    If you are reserving a blueprint that has the Default Sandbox Setup script, the script runs, and an indication next to the sandbox state informs you of its progress.
    
    <details>
        <summary>More details</summary>
    
        ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SetupStageConfiguration.png)
        
        Note that during the Setup process, the sandbox is locked in CloudShell Portal and cannot be modified - see [Unlocking sandboxes for use during the Setup process](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Cnfg-Ky.htm#Locking2).  
        The default setup process has 4 stages:
        
        - Preparation \- Prepare network connections for the sandbox's Apps and any additional custom preparations.
            :::note
            This stage is not used by default, but can be used for custom code executions that need to run before the setup process.
            :::
            
        - Provisioning - This is the main stage of the setup process. In this stage, CloudShell locks unshared resources for the duration of the sandbox, deploys the sandbox's Apps and prepares App connectivity in the respective cloud providers.
        - Connectivity \- CloudShell creates the physical and virtual network connections for the sandbox's resources and Apps, and powers on the App VMs.
        - Configuration - If any of the sandbox's Apps have configuration management operations that need to be run, CloudShell runs them in this stage.
    </details>
    
    If any resource is unavailable for the scheduled time slot, the Conflicts dialog box is displayed, proposing an alternative time slot, as described in [Dealing with conflicts](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm#Dealing).
    
    The new sandbox is displayed in **Diagram** view with a blue Sandbox label at the top of the canvas and a green Active icon in the toolbar:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActiveSandbox.png)
    
    :::note
    For persistent blueprints, the blue **Sandbox** label is replaced with a **Persistent Environment** label.
    :::
    If you have a license for the Save and Restore paid add-on, you will see a Save Sandbox button. For more information, see the [Sandbox Save and Restore Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv-Rstr-Ovrvw.htm).
    

## Request approval to reserve a blueprint

Some blueprints require a moderator's approval. This usually applies to high-cost blueprints or those using critical infrastructure. Such blueprints have a **Request** button instead of the traditional **Reserve** one. For details, see [Blueprint Approval Policy](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Blueprint-Approval.htm).

:::note
Admins and blueprint owners have full permissions on their blueprints and can therefore reserve their approval blueprints without going through the approval process.
:::

To request approval:

1. In the **Blueprint Catalog**, click the blueprint's **Request** button.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/RequestApprovalButton.png)
    
    The **Request Approval** dialog box is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ApprovalRequestForm.png)
    
2. Fill in the details. The **Approval Validity** period defines the time frame in which you plan to create the sandbox, and the **Max Sandbox Duration** defines the maximum period of the sandbox to be created. Enable **Unlimited Request** to set a validity period with no end time.
    
    :::note Notes
    
    - Once the request is approved, you will be able to start the sandbox at any time within the period as long as the sandbox also ends within the alloted time frame.
    - The approval applies to a single sandbox reservation. In other words, you cannot start the sandbox, end it and start a new one on the same approval.
    :::
    
3. Optionally enter **Notes** relating to the request.
4. If the blueprint has published inputs, specify their values.
5. Click **Request Approval**.
    
    An approval request is logged in the Approval Requests page, and a notification email is sent to the blueprint's approvers.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ApprovalRequestsPage.png)