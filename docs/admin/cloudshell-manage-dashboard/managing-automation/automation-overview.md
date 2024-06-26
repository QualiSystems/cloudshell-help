---
sidebar_position: 1
---

# Automation Overview

The Automation process is enabled in the **Sandbox** workspace and is invoked during:

- **Blueprint Orchestration**: You can use automation at the blueprint level when setting up and cleaning up the sandbox. You can also define automation that the user can use during the lifetime of the blueprint.
- **Resource Automation**: You can use the resource commands to integrate the same capabilities within the resource that can be reused in multiple blueprints.

Scripts and drivers are used in the automation process, and their functions vary. For more details, see:

- [Managing Assets](./managing-assets.md)
- [Managing Drivers](./managing-drivers.md) (hidden by default, applies to 1st Gen shells only)
:::warning Important
The **Drivers** management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st Gen Shells. For details, see [Customer Configuration Keys Repository](../../setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/general.md#show-the-drivers-management-page).
:::
CloudShell supports associating scripts and drivers with different domains. For more details, see:

- [Associating Automation to Domains](./associating-automation-to-domains.md)

## Related Topics

- [Run Commands](../../../portal/sandboxes/sandbox-workspace/run-commands.md)
