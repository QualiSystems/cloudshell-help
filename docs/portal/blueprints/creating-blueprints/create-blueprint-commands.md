---
sidebar_position: 13
---

# Create Blueprint Commands

You can add, to your blueprint, commands that perform different orchestration tasks through the use of Python scripts containing these commands. This configuration is done in the blueprint's **Properties** page. However, before configuring blueprint commands, the blueprint scripts must be added to CloudShell Portal. For additional information, see [Configure Blueprint Orchestration](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm).

## Adding Scripts

Scripts give you the flexibility to customize a blueprint and make extra features available, for example, adding specialized commands that can be run in a sandbox. You can add commands through Python scripts and upload them to CloudShell Portal to be used when configuring blueprint orchestration, including PY, PYC, and ZIP files containing several Python files.

Use the steps in the following procedure to add blueprint and resource scripts to the CloudShell Portal.

:::note Notes:

- The script is added to the domain you are currently in. To expose the script to all domains, add the script in the **Global** domain
- By default, new scripts are added into CloudShell as Python 3 scripts. Therefore, if you're adding a Python 2 script, make sure to change the script's **Type**, as explained in [Editing scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm#EditingScrpts).
:::
**To add blueprint and resource scripts:**

1. In the **Manage** dashboard, from the left sidebar, select **Assets > Blueprint** or **Assets > Resource** to open the respective script catalog.
    :::note
    Repository assets only apply to resource-level components.
    :::
2. In the toolbar, click **\+ Add Python Script** to add a Python script or **\+ Add Repository Asset** to add a Configuration Management script/playbook.
    
    A dialog box is displayed, prompting you to select a script to upload.
    
3. Browse and select a script file to upload to CloudShell, and click **Open**.
    
    The **Uploading Completed** message is displayed at the top of the script catalog, indicating the upload status. When completed, the Edit button is displayed on the right. For more information, see [Editing scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm#EditingScrpts).
    

## Related Topics

- [Configure Blueprint Orchestration](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm)
- [Managing Drivers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Drvr.htm)
- [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm)
- [Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Run-Cmd.htm)
- [Run App Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm)
- [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe)