---
sidebar_position: 18
---

# Extend and End Sandboxes

You can extend and end sandboxes from the **Sandboxes** dashboard and from the Sandbox workspace.

To define a calendar event for a sandbox, see [Create a Calendar Event for a Sandbox](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Creat-clndr-event-4-sndbx.htm).

## Extending a sandbox

This option is not available for persistent environments.

**To extend an active sandbox:**

1. In the sandbox workspace, in the toolbar or Sandbox menu, click ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ExtendButton.png) **Extend**. You can also extend a sandbox from the more info window of the sandbox in the Sandboxes dashboard.
2. In the **Extend Sandbox** window enter the additional duration required for the sandbox.

:::note
If a max duration was set for the sandbox or the user, the user will not be able to extend the sandbox duration beyond this setting. If a maximum duration set for both the user and the sandbox, the shorter duration prevails. System administrators can extend any sandbox with no restriction.
:::

## Ending a sandbox

**To end a sandbox:**

- In the sandbox workspace, in the toolbar or **Sandbox** menu, click ![](/Images/CloudShell-Portal/Lab-Management/Reservations/StopReservationButton.png) **End**. You can also end a Sandbox from the more info window of the sandbox in the **Sandboxes** dashboard.
    
    While Teardown is running, the **End** button changes to Terminate. The option to terminate a teardown command is available for administrators only.
    
    :::warning
    Terminating a sandbox forces a hard shutdown, immediately canceling the Teardown process, which can result in unexpected behavior. For example, Apps and networks created as part of the sandbox may continue to exist on the cloud provider and physical resources might be corrupted or contain incomplete configurations.
    :::
    

## Related Topics

- [Sandboxes Dashboard](../sandboxes-dashboard)
- [Sandbox Workspace](../sandbox-workspace/)