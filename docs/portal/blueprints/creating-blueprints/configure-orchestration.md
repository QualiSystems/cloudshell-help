---
sidebar_position: 14
---

# Configure Blueprint Orchestration

*Sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier.*

This section explains how to configure the blueprint (orchestration) commands that will run on the sandbox and should be used when working on a blueprint that is not based on the default **CloudShell Sandbox Template**, which provides common setup, teardown, save, and restore orchestration commands. For resource automation, see [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm).

## Add blueprint scripts

You can add Python scripts that contain orchestration commands. However, the blueprint scripts first need to be added to CloudShell - see [Adding scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm#AddingScrpts).

**To add blueprint scripts:**

1. From the **Blueprint** menu, select **Properties**.
2. In the **Scripts** area, click **Add Scripts**.
3. Select the scripts you want to add and click **Done**.
    
    The scripts are listed in the **Scripts** area.
    
4. To apply the changes, click **Update**.
    
    The properties page closes and the diagram workspace is displayed.
    

## Use scripts to set up and tear down blueprints

CloudShell provides [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe), an out-of-the-box template, which includes common setup and teardown orchestration. If you have an existing blueprint or you created a new blueprint not based on the out-of-the-box template, you can add out-of-the-box orchestration to your blueprint in the blueprint properties page.

You can also create your own scripts that will setup and teardown a sandbox or customize the out-of-the-box scripts. For more information, see CloudShell Dev Guide's [Getting Started with Orchestration Scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/Getting-Started.htm).

**To add set up and teardown scripts to a blueprint:**

1. In the **Manage** dashboard, upload the orchestration script (as described above). (For more details about adding and editing scripts, see [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm).)
2. In the **Edit Script** dialog box for the required script, set the **Script Type** to be **Setup** or **Teardown** and save.
3. Open the blueprint's properties page.
4. (Optional) Select a **Driver**.
5. Click **Add Scripts**.
6. Select the required **Setup** or **Teardown scripts** and save it to the blueprint.

## Add Setup and Teardown scripts

**To add Setup and Teardown scripts to the blueprint:**

1. From the **Blueprint** menu, select **Properties**.
2. (Optional) Select the appropriate **Driver**. By default, no driver is needed to run the default orchestration scripts.
    
    The default driver included in the out-of-the box CloudShell Sandbox Template is used for running sandbox orchestration scripts setup, teardown, save and restore.
    
3. Add the orchestration scripts, which are explained in the following section.
    
4. If you're using **Setup** and **Teardown** scripts in the blueprint, define their durations:
    
    - In the **Estimated setup duration** section, use the Up/Down arrows to define the setup duration.
    - In the **Estimated teardown duration** section, use the Up/Down arrows to define the teardown duration.  
        
    
    :::note Notes
    
    - Setting either of these values to a duration of '0' hours and minutes will disable the **Setup** and **Teardown** script's execution.
    - The Setup phase is included in the sendbox's duration while Teardown is scheduled to start when the sandbox duration ends.
    - The estimated Setup duration will allow the Setup process to run as long as it needs to.
    - If the Teardown process takes longer than the Teardown's defined duration, it will be cancelled in both regular and Job Scheduling sandboxes. This is the designed behavior in order to ensure that any sandboxes scheduled ahead will start on time. The Teardown duration defined in the blueprint should be longer so it will allow the Teardown script to complete in time.
    :::
5. To apply the changes, click **Update**.
    
    The properties page closes and the diagram workspace is displayed.
    

## Add save and restore orchestration scripts

The [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe) is provided out-of-the-box and includes save and restore orchestration. If you have a new or existing blueprint that is not based on the out-of-the-box template, you can add out-of-the-box orchestration to your blueprint in the blueprint's **Properties** page. For additional customizations related to the **Save and Restore** add-on, see [Save Sandbox Configurations](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Sv-Sndbx-Cnfg.htm)

Developers can also customize the out-of-the-box **Save and Restore** scripts that save and restore sandboxes. For more information, see the CloudShell Dev Guide's [Getting Started with Orchestration Scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/Getting-Started.htm).

**To add save and restore orchestration scripts:**

1. From the **Blueprint** menu, select **Properties**.
2. (Optional) Select the appropriate **Driver**. By default, no driver is needed to run the default orchestration scripts.
    
3. In the **Save Sandbox** area, make sure the **Enable Sandbox Save** check box is enabled.
4. In the **Scripts** area, click **Add Scripts**.
5. Select the **Save** and **Restore** scripts you want to add and click **Done**.
    
    The scripts are listed in the **Scripts** area.
    
6. To apply the changes, click **Update**.
    
    The properties page closes and the diagram workspace is displayed.
    

## Related Topics

- [Create Blueprint Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Crt-Blprnt-Cmnds.htm)
- [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe)
- [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm)
- [Custom Routing for Azure in Sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-Cstm-Routing.htm)
- [Managing Drivers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Drvr.htm)
- [Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Run-Cmd.htm)