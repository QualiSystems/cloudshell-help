---
sidebar_position: 3
---

# Creating Sandboxes

In order to use a blueprint in the catalog, you need to create a sandbox for that blueprint. A sandbox is a live instance of the selected blueprint and once created, it is isolated from the blueprint. It is possible to either reserve an existing blueprint from the catalog or, if the feature is enabled, to start a new blank sandbox and pull resources in dynamically.

You can also use the sandbox to carry out operations on the active blueprint such as resource provisioning, access control, connectivity etc. Some provisioning may occur automatically as a part of the blueprint's setup process. However, any changes you make to the sandbox are not applied to the blueprint it is based on.

:::note
Blueprints of type ‘view’ cannot be reserved.
:::

## Reserving a blueprint

**To create an immediate or future sandbox:**

1. In the **Blueprint Catalog**, on the required blueprint tile, click **Reserve**. Alternatively, in the blueprint workspace, click the **Reserve** button.
    
    The **Reserve** dialog box is displayed.  
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReserveBlueprint.png)
    
    :::tip
    The timezone for the sandbox is indicated in the title of the Reserve dialog box.
    :::
    
2. If the blueprint is defined as a persistent blueprint, select the **Sandbox Type** you want to deploy:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReservePersistent.png)
    
    - **Regular Sandbox** to spin up a time-limited sandbox
    - **Persistent Sandbox** to deploy a persistent sandbox with no end time. For details, see [Persistent Sandboxes Overview](../../intro/features/persistent-sandboxes.md).
3. In the **Schedule** field, you can set the required sandbox duration or specify the explicit start and/or end time. Use the **Calendar** button to set future dates.
    
:::note Notes
- Most of the scheduling options are disabled for persistent blueprints.
- For non-persistent sandboxes, if a maximum duration was set for the sandbox, the user will not be able to reserve for a duration beyond this setting.
:::

4. (Unavailable for persistent blueprints) To have this sandbox repeat in a series, click **Add Recurrence**. If this option is missing, the admin needs to enable it using the `EnableRecurringReservation` key.
    
    The **Recurrence** page is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/RecurrenceWindow1.png)
    
    1. To have the sandbox repeat on specific days, click the Pattern field and either select the days or select Daily to have the sandbox repeat on all days of the week.
    2. In the **Range** field, define the period in which the sandbox will repeat.  
        
5. Optionally, change the **Name** of the sandbox. By default, the new sandbox name is the blueprint name.
    
    :::note
    The sandbox’s name has a limit of 60 characters.
    :::
    
6. In the **Blueprint** field, you can see the blueprint on which the sandbox is based.
7. To specify additional options, click the **Advanced Form** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/AdvancedFormTab.png) button.
    
    The advanced form enables you to configure the email notifications, permissions and other options.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReserveBlueprintPane.png)
    
    1. Optionally, enter a **Description**. Otherwise, the description of the sandbox will default to the blueprint description.
    2. To define an owner for the sandbox, click the **Owner** and select the required user. By default, the user who initiated the scheduling action is set as the sandbox owner.
        
    3. Instead of changing the owner of the sandbox, you can permit additional users to use the sandbox. Click the **Permitted Users** section and select the users you wish to add.
        
    4. To prevent users from ending the sandbox before its scheduled end time, enable **Termination Protection**. This option ensures your sandbox isn't ended accidentally or prematurely. And when you are ready to manually end the sandbox, disable the option in the sandbox's properties window and then end it.
    5. You can configure CloudShell to send email notifications to the owner of the sandbox and permitted users.
        
        :::note
        This capability requires the administrator to activate the email notifications feature using the `ReservationEmail` configuration keys.
        :::
        
        1. Click the **Email Notifications** field.
            
            The **Email Notifications** area expands.
            
            ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReservePaneEmailNotificaions.png)
            
        2. Configure the email notification settings.
            
            - **On start** - Sends notification as the sandbox starts.
            - **On setup complete** - Sends notification when the sandbox setup completes.
            - **Before end** - (Unavailable for persistent blueprints) Sends notification before the Teardown process begins. The exact time is decided by the user.
                
                :::note
                By default, it is not possible to launch a sandbox that has a shorter duration than the Before end period. However, your admin can enable this capability using the `ReservationEmail.VerifyNotificationBeforeEndLongerThanDuration` configuration key.
                :::
                
            - **On end** - Sends when the sandbox ends.
8. If the blueprint has inputs (global inputs, published abstract resource or service inputs), you will be asked to provide them.
    
    :::tip
    To expand the value area, click and drag down the icon in the bottom right corner of the frame.  
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/InputBoxExpand.png)  
    :::
    
9.  Click **Reserve**.
    
    The sandbox is being reserved.
    
    If you are reserving a blueprint that has the **Default Sandbox Setup** script, the script runs, and an indication next to the sandbox state informs you of its progress. 

    <details>
    <summary>Setup Stages Details</summary>
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SetupStageConfiguration.png)
    
    Note that during the Setup process, the sandbox is locked in CloudShell Portal and cannot be modified - see [Unlocking sandboxes for use during the Setup process](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Cnfg-Ky.htm#Locking2).  
    The default setup process has 4 stages:
    
    - **Preparation** \- Prepare network connections for the sandbox's Apps and any additional custom preparations.
        :::note
        This stage is not used by default, but can be used for custom code executions that need to run before the setup process.
        :::
    - **Provisioning** \- This is the main stage of the setup process. In this stage, CloudShell locks unshared resources for the duration of the sandbox, deploys the sandbox's Apps and prepares App connectivity in the respective cloud providers.
    - **Connectivity** \- CloudShell creates the physical and virtual network connections for the sandbox's resources and Apps, and powers on the App VMs.
    - **Configuration** \- If any of the sandbox's Apps have configuration management operations that need to be run, CloudShell runs them in this stage.

    </details>
    
    If any resource is unavailable for the scheduled time slot, the **Conflicts** dialog box is displayed, proposing an alternative time slot, as described in [Dealing with conflicts](#dealing-with-conflicts).
    
    The new sandbox is displayed in **Diagram** view with a blue **Sandbox** label at the top of the canvas and a green **Active** icon in the toolbar:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActiveSandbox.png)
    
    :::note
    For persistent blueprints, the blue Sandbox label is replaced with a Persistent Environment label.
    :::
    
    If you have a license for the **Save and Restore** paid add-on, you will see a **Save Sandbox** button. For more information, see the [Sandbox Save and Restore Overview](./sandbox-save-and-restore-overview.md).
    

## Reserving blueprints that have published attributes

You can reserve blueprints that require users to key-in parameter values for services.

**To reserve a blueprint that has a published attribute:**

1. In CloudShell Portal, select **Lab Management > Blueprints**.
2. Reserve the blueprint.  
    
3. In the **Reserve** dialog box, you can modify the reservation parameters and specify the required values for the published attributes.
    
    :::note
    Make sure not to leave any empty spaces before or after the value.
    :::
    
4. Click **Reserve**.
    
    The sandbox is displayed in the **Sandboxes** dashboard.
    

## Reserving a resource from the inventory

Admins can reserve a resource directly from the Inventory dashboard. This will create a sandbox containing only this resource (as well as its sub-resources if the resource is unshared by default). By default, this option is available for CloudShell admins only but can be exposed to regular users using the `AllowRegularUsersToReserveFromInventory` configuration key.

For additional information, see [Reserving Resources from the Inventory](../inventory/managing-resources/reserving-from-inventory.md).

## Dealing with conflicts

If some of the resources, abstract resources, or connections in the sandbox are currently unavailable (because they are unshared in another sandbox, for example), the **Conflicts** dialog box is displayed, suggesting alternative time slots you can use.

For conflicts that are not time related, like when a resource in the blueprint is not in the current domain or matches for abstract resource requirements don't exist, an available time slot cannot be suggested and the Conflicts dialog box lists the conflicted resources without any possible actions for the user. In this case, ask your system administrator to add the required resources to the domain or make them available in CloudShell.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/ResolveConflictsWindow1.png)

**To find an available time slot:**

1. Click **Load more slots** to query for additional scheduling options.
2. Select a suitable time slot.
3. Click the **Reserve** button to create the sandbox.

### Reserving with conflicts

If the option to create sandboxes with conflicts is enabled, you will also see a **Reserve with conflicts** link. Click this link to create a sandbox using the specified times regardless of the conflicts. The resources in conflict will not be available to use in the sandbox and the sandbox will appear with an alert indication in the **Sandboxes** dashboard:

![](/Images/CloudShell-Portal/Lab-Management/Reservations/ConflictsFoundIndications_New.png)

While conflicting resources cannot be used within the sandbox, they are still included in it and if the resources once again become available (if the conflicting sandboxes complete, for example), you can try to reserve them again. In the sandbox diagram or **Sandboxes** dashboard, open the **More Info** menu and click the **Resolve** button next to the conflicts indication to try to reserve them again.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReservingWithConflict_New_388x265.png)

### Reserving when available

If the option to create sandboxes when available is enabled, you will also see a **Reserve when available** link. Click this link to add the sandbox to a queue. The sandbox will automatically be scheduled when all resources will be available.

### Resolving reservation conflicts per resource

Click the **Browse conflicts** link to review a list of conflicted resources. Details on the conflicting sandbox are displayed under the Status column (subject to user permissions).

To see all the resources in the sandbox, change the **Show** filter to **All**.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/ResolvingConflictsPerResource.png)

## Related Topics

- [Reserving Resources from the Inventory](../inventory/managing-resources/reserving-from-inventory.md)
