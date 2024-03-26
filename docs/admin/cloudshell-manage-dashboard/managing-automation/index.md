# Managing Automation

The Automation process is enabled in the **Sandbox** workspace and triggered during:

- **Blueprint Orchestration**: You can use automation at the blueprint level when setting up and tearing down the sandbox. You can also define automation that the user can use during the lifetime of the sandbox.
- **Resource Automation**: You can run resource commands that perform different actions on the resource, including power on, power off, and deploy.

Scripts and drivers are used in the automation process, and their functions vary. For more details, see:

- [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm)
- [Managing Drivers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Drvr.htm) (hidden by default, applies to 1st Gen shells only)
  
  :::warning Important
  The Drivers management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st Gen Shells. For details, see [Customer Configuration Keys Repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-Ky-Rpstr.htm).
  :::
    

CloudShell supports associating scripts and drivers with different domains. For more details, see:

- [Associating Automation to Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Multi-Ten.htm)