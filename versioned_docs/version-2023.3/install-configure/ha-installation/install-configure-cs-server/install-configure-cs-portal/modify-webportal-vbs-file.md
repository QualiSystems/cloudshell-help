---
sidebar_position: 2
---

# Modify the WebPortal.vbs File

**To modify the WebPortal.vbs file:**

1. Rename the extracted `WebPortal.vbs` file to: "WebPortal.vbs.old". Keep this file as a backup.
2. Open the `WebPortal.vbs` file in a text editor.
3. Modify the following values:
    
    - `SITE_NAME` = "Default Web Site" – use your site name (can be found in the IIS manager)
    - `APP_POOL_NAME` = "DefaultAppPool" – use your application pool (can be found in the IIS manager)
    
    For example:
    
    ![](/Images/HA1/Modify-the-CloudShellPortal_271x52.png)
    
    ![](/Images/HA1/Modify-the-CloudShellPortal_1.png)
    
    ![](/Images/HA1/Modify-the-CloudShellPortal_2_159x64.png)
    
4. Save the file.