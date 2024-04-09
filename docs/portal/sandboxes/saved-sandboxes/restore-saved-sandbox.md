---
sidebar_position: 1
---

# Restore a Saved Sandbox

*Restoring a sandbox is part of the Save and Restore paid add-on. Contact your account manager to purchase a license. For additional information about this add-on, see the [Sandbox Save and Restore Overview](../sandbox-save-and-restore-overview.md)*

In CloudShell, you can restore a saved sandbox to the exact state of the sandbox when it was saved. The saved sandbox is an independent copy of the original sandbox, and can be restored to multiple sandboxes.

The restore script is available out-of-the-box. It is a part of the setup process and when restoring a sandbox, it actually replaces the setup script. To customize the restore script, see the CloudShell Dev Guide's [Extending the OOB Restore Orchestration Script](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm#Extendin2).

Note: Save and Restore does not apply to persistent environments.


## Restoring a saved sandbox

**To restore a saved sandbox:**

1. In the **Saved Sandboxes** dashboard, click the **Actions** button at the end of the row and select **Restore**.
    
    The **Restore** dialog box is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/RestoreSandboxSimple.PNG)
    
2. In the **Schedule** field, you can set the required restored sandbox duration or specify the explicit start and/or end time. Use the Calendar button to set future dates.
    
3. You can view and edit the **Name** of the restored sandbox. By default, the restored sandbox name is the name of the saved sandbox.
    
4. You can view the name of the **Saved Sandbox**. This field is not editable.
5. To specify additional options, click the **Advanced Form** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/AdvancedFormTab_20x20.png) button.
    
    The advanced form enables you to configure the email notifications, permitted users, and other options.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/RestoreSandboxAdvanced.PNG)
    
    1. Optionally enter a **Description**. Otherwise, the description of the restored saved sandbox will use the saved sandbox description.
    2. To define a sandbox owner, click **Owner** and select the required user. By default, the user who initiated the restore action is set as the sandbox owner.
    3. Instead of changing the owner of the restored sandbox, you can permit additional users to use the sandbox. Click the **Permitted Users** section and select the users you wish to add.
    4. You can configure CloudShell to send email notifications to the owner of the restored sandbox and permitted users.
        
        :::note
        This capability requires the administrator to activate the email notifications feature using the `ReservationEmail` configuration keys.
        :::
        
        1. Click the **Email Notifications** field.
            
            The **Email Notifications** area expands.
            
            ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReservePaneEmailNotificaions.png)
            
        2. Configure the email notification settings.
            - **On start** - Sends notification as the restore saved sandbox starts.
            - **On setup complete** - Sends notification when the sandbox setup completes.
            - **Before end** - Sends notification before the Teardown process begins. The exact time is decided by the user.
            - **On end** - Sends notification when the sandbox ends.
    5. If the original blueprint had inputs, they are displayed here. Values are taken from the saved sandbox and are not-editable.
6. Click **Restore**.
    
    If any resource is unavailable for the scheduled time slot, the Conflicts dialog box is displayed, proposing an alternative time slot, as described in [Dealing with conflicts](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm#Dealing).
    
    The saved sandbox is restored to the state when the sandbox was saved. Once the sandbox is restored, the sandbox state changes to **Active**.
    
    CloudShell restores the saved sandbox, its elements and configurations, as well as the states of the sandbox and its elements.
    

## Sandbox restore logic

Currently, CloudShell Save and Restore applies only to sandboxes with vCenter/OpenStack-based virtual components, physical resources and CloudShell services. Apps of other cloud providers are not supported and therefore, you cannot save and restore a sandbox which contains any of these elements.

The elements of the saved sandbox that are restored directly reflect the elements that were saved when you saved the sandbox. For information on the save logic, see [Sandbox save logic](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv.htm#Save2).

There are, however, a number of important points that you should consider when restoring a saved sandbox:

- Resources in the saved sandbox are added to the sandbox, assuming they are available for the reservation's timeslot.
- Apps that were not deployed in the original sandbox will be deployed, using their defined deployment paths. Since clones are not created for undeployed Apps when saving the sandbox, CloudShell will need to deploy the Apps using their respective deployment paths, in the same way a regular App is deployed during sandbox setup.
- All L1/L2 connections are established in the restored sandbox, regardless of their state (connected/disconnected) in the original sandbox.
- Since new VMs are created in the restored sandbox, the IP and MAC addresses of the VMs may differ from the original sandbox. You may need to adjust the Restore script as a result of this change.
- If the original sandbox contained any virtual traffic generator VMs loaded with a test configuration, the test configuration will need to be reloaded either automatically by the Restore script or manually after the sandbox is restored.
- If the original sandbox contained any **VLAN Auto** services, the VLAN IDs allocated in the restored sandbox may differ.
