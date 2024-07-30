# Sandbox Workspace

The sandbox workspace enables you to browse the available resources, services, Apps and connections defined for the sandbox. You can review the instructions and activity feed, and launch blueprint commands (if available). The resources displayed on the diagram and their connections update in real time as their state changes. Depending on your permissions level, you can pull in additional resources into the sandbox or remove existing resources. If you have obtained a license for the Save and Restore paid add-on, you can also save a sandbox.

:::note
An active blueprint is considered a sandbox.
:::

## Navigating the sandbox workspace

In the image below, hover over an area or option to learn more about it, or use the table that follows.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/SandboxWorkspace_559x298.png)

The workspace's areas are arranged as follows: 

| Area | Description |
| --- | --- |
| 1 | The canvas displays the different resources, services and apps in the sandbox, and their connectivity. Here you can perform different actions on the sandbox and its elements like connecting/disconnecting routes, running orchestration and resource commands and deploying Apps. |
| 2 | The **Sandbox** menu enables you to end, update and extend the sandbox, show the physical layer and save the sandbox as a blueprint. |
| 3 | The name of the sandbox. Click to change. |
| 4 | Time left indicator. |
| 5 | Save an Active or Active (with Error) sandbox if you have a license for the **Save and Restore** paid add-on. See [Sandbox Save and Restore Overview](../sandbox-save-and-restore-overview.md) for more information. |
| 6 | End or Extend the sandbox. |
| 7 | Sandbox status| 
| 8 | See who else is viewing the sandbox. |
| 9 | The workspace view mode. Diagram view provides a graphical representation of the sandbox. List view displays the sandbox elements in a list.|
| 10 | Open the **Resource** or **App / Service** catalog to add components to your sandbox. |
| 11 | Review the instructions of the sandbox. This option is available only if the sandbox has instructions. |
| 12 | Review and execute the sandbox commands. CloudShell's blueprint template includes preconfigured setup and teardown commands. |
| 13 | Opens the **Activity Feed** pane, displaying information about actions and commands performed in the sandbox. |
| 14 | Opens the **Output** console, which displays detailed information related to running blueprint and resource commands.| 
| 15 | Show the diagram in a mini-map on the workspace. You can drag the map to change the view in the workspace. |
| 16 | Use these buttons to change the size of the icons in the workspace. |
| 17 | Toggle left or right or change the zoom percentage (default is %100) to zoom in or out of the workspace. |
| 18 | Labels being used in the sandbox. |
| 19 | Buttons for displaying the different sandbox workspace panes, catalogs and windows, as well as layout and canvas arrangement options. |

### Sandbox Diagram view

**Diagram** view is the default view for the sandbox. Depending on your permissions level, it enables you to add and arrange elements in your sandbox, such as resources and Apps, as well as define connectivity requirements between these elements, and set the sandbox's properties, including description, duration, and email notification policy.

Here, you can view and run sandbox and resource commands, track command progress in the **Output** console and **Activity Feed**, and view the sandbox's **Instructions**.

:::tip
To move or delete multiple elements at once, hold down the **\[Ctrl\]** key, select the elements and perform the suitable action.
:::

### Sandbox List view

**List** view displays the sandbox's elements and their sub-resources in a list.

By default, the sandbox is displayed in **Diagram** view. The default view mode can be changed using the `ShowListViewByDefault` key.

For more information, see [Sandbox List View](./sandbox-list-view.md).

## Monitoring sandboxes

The sandbox workspace includes several monitoring aids that update in real time.

### Sandbox state

The current state of the sandbox is indicated in the toolbar by an icon that shows the sandbox state and color.

For example:

![](/Images/CloudShell-Portal/Lab-Management/Reservations/SandboxWorkspaceState.png)

| State | Description |
| --- | --- |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/PendingColorCode.png) Pending | Sandbox is scheduled for future use. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SetupColorCode_9x9.png) Setup | Setup command is currently running. Sandbox is not available for use. <br/>During setup, CloudShell reserves the sandbox's resources for the sandbox's time slot, and deploys layer 2 connections and Apps. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActiveColorCode_9x9.png) Active | Sandbox is currently active and ready for use. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActiveColorCode_9x9.png) Active (with Error) | Sandbox is currently active and ready for use. Setup was not completed successfully. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/TeardownColorCode.png) Teardown |  Teardown command is currently running. Sandbox is not available for use.<br/>During teardown, CloudShell releases the sandbox's resources to allow others to use them, powers off the Apps and deletes them from the cloud provider, and disconnects layer 2 connections. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/CompletedColorCode_9x9.png) Completed | Sandbox ended and is not available for use. The sandbox is no longer considered active and does not hold any resources. |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/OvertimeColorCode_9x9.png) Overtime | (Requires the `AutoEndReservation` key to be disabled) Sandboxes with resources that are marked "in use" remain active after the sandbox time ends. Ending the sandbox requires the user to manually end each "in use" resource or the entire sandbox. For additional information, see [Mark Resources "in use"](./resources/mark-in-use.md). |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SavingColorCode.png) Saving | Save command is currently running. Once saving is complete, status returns to Active. You can only save a sandbox that is Active or Active (with Error).<br/>For additional information, see [Save a Sandbox](./save-sandbox.md). |
| ![](/Images/CloudShell-Portal/Lab-Management/Reservations/TeardownWithErrors_10x9.png) Completed (with Error) | Sandbox ended with errors (Teardown process failed). Note that resources in "Completed (with Error)" status are no longer considered reserved. However, the sandbox will remain in this state until you manually clean up the sandbox's infrastructure and then rerun the sandbox's Teardown process. |

Hovering the cursor over the sandbox status icon opens a tooltip that includes an indication of the time to end of the current state. This is applicable for pending, setup and active states only.

In the case of setup, the popup opens automatically and closes when you click outside the popup.

For actions that are permitted during each of the sandbox states, see [Permissible actions according to sandbox status](../../../admin/cloudshell-identity-management/managing-cloudshell-permissions/cloudshell-user-permission-levels-rbac.md#permissible-actions-according-to-sandbox-status)

:::note
The status bar in the sandbox workspace displays the remaining sandbox time continuously.
:::

### Live status indications

Live status indications are used to indicate the current status of reserved sandboxes and sandbox components, such as Apps and resources.

Live status is activated via TestShellAPI commands.

#### Sandbox live status

For sandboxes, the live status indication is displayed in the sandbox workspace and in the **Sandboxes** dashboard.

For example, a sandbox in Setup state has an "In Progress" live status icon:

![](/Images/CloudShell-Portal/Lab-Management/Reservations/SandboxLiveStatus.png)

#### Resource live status

For reserved components, the live status indication is displayed in the sandbox workspace (Diagram and List views) and in the **Inventory** dashboard.

For example, a deployed App in a sandbox has an "Online" live status icon:

![](/Images/CloudShell-Portal/Lab-Management/Reservations/AppLiveStatus.png)

### Sandbox sharing indication

The sharing indication informs the user when other users are viewing the same workspace. Admins are indicated. Click the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Shared Icon_28x30.png) icon to see a list of users.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/SandboxSharing.png)

:::note
Only permitted users or administrators can open the workspace.
:::

### Sandbox attachments

Files can be attached to sandboxes via API. When a file is attached to a sandbox a dedicated icon is displayed both in the Sandboxes dashboard and in the sandbox workspace. The attached files can be downloaded through the API (for administrators only) or from the CloudShell Portal.

:::note
Downloading attached files is available only to permitted users.
:::

**To download an attachment:**

1. In the **Sandboxes** dashboard or workspace, in the toolbar, click **Attachment**.
2. From the list of attached files, select the required file to download.

The file is downloaded to your local drive. If the file type is identified, it will automatically open once the download is complete.

### Custom sandbox data

Starting with CloudShell 9.2, it is possible to add custom data to the sandbox to be used by automation processes running in the sandbox. Note that this information is not presented in CloudShell Portal and can only be managed via the API. For additional information, see CloudShell Dev Guide's [Custom Sandbox Metadata](../../../devguide/reference/custom-sandbox-metadata.md).