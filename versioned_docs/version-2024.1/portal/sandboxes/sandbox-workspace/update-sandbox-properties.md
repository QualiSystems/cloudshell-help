---
sidebar_position: 9
---

# Update Sandbox Properties

You can change the properties of the sandbox using the Update dialog box in the sandbox workspace.

To change the sandbox properties:

1. In the sandbox workspace, from the **Sandbox** menu, select **Properties**.
    
    The **Update** dialog box is displayed.
    
2. Make the required changes. For additional information about these properties, see [Reserving a blueprint](../creating-sandboxes.md#reserving-a-blueprint).

<table>
    <thead>
        <th>Field</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Schedule</td>
            <td>
            Sandbox duration. Specify the explicit start and/or end time. Use the **Calendar** button to set future dates. If a max duration was set for the sandbox or the user, the user will not be able to extend the sandbox duration beyond this setting. If a maximum duration set for both the user and the sandbox, the shorter duration prevails.
            </td>
        </tr>
        <tr>
            <td>Name</td>
            <td>
            The name of the sandbox to be displayed in CloudShell. By default, the new sandbox name is the blueprint name.
:::note
The sandbox’s name has a limit of 60 characters.
:::
            </td>
        </tr>
        <tr>
            <td>Description</td>
            <td>Sandbox description to be displayed in the **Blueprint Catalog**. By default, the sandbox inherits the blueprint's description.</td>
        </tr>
        <tr>
            <td>Owner</td>
            <td>
            Sandbox owner. By default, the user who initiated the scheduling action is set as the sandbox owner.
            </td>
        </tr>
        <tr>
            <td>Permitted Users</td>
            <td>
            Users permitted to use this sandbox. Permitted users have enhanced permissions on the sandbox, as explained in [Permissible actions for Owner/Permitted User](../../../admin/cloudshell-identity-management/managing-cloudshell-permissions/cloudshell-user-permission-levels-rbac.md#permissible-actions-for-ownerpermitted-user). You can assign any user to be a permitted user, even an external user. A notification is sent when a permitted user is added to an active sandbox (if email notifications are enabled).
            </td>
        </tr>
        <tr>
            <td>Email Notifications</td>
            <td>
            Email notifications to be sent to the owner and permitted users of the sandbox at different times during the lifecycle of the sandbox. Options are **On start**, **On setup complete**, **Before end**, and **On end** (you can decide exactly when to receive notification).
:::note
This capability requires the administrator to activate the email notifications feature using the `ReservationEmail` configuration keys.
:::
            </td>
        </tr>
        <tr>
            <td>Blueprint</td>
            <td>
            Blueprint on which the sandbox is based.
:::note
Once active, it is not possible to change the blueprint for the sandbox.
:::
            </td>
        </tr>
    </tbody>
</table>

3. Click **Update**.
    
   The sandbox workspace is displayed.