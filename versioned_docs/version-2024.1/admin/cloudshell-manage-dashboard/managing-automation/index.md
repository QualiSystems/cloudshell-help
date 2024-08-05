# Managing Automation

The Automation process is enabled in the **Sandbox** workspace and triggered during:

- **Blueprint Orchestration**: You can use automation at the blueprint level when setting up and tearing down the sandbox. You can also define automation that the user can use during the lifetime of the sandbox.
- **Resource Automation**: You can run resource commands that perform different actions on the resource, including power on, power off, and deploy.

Scripts and drivers are used in the automation process, and their functions vary. For more details, see:

- [Managing Assets](../managing-automation/managing-assets.md)
- [Managing Drivers](../managing-automation/managing-drivers.md) (hidden by default, applies to 1st Gen shells only)
  
  :::warning Important
  The Drivers management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st Gen Shells. For details, see [Customer Configuration Keys Repository](../../setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/general.md#show-the-drivers-management-page).
  :::
    

CloudShell supports associating scripts and drivers with different domains. For more details, see:

- [Associating Automation to Domains](./associating-automation-to-domains.md)