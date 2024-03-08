---
sidebar_position: 7
---

# Rebrand Insight (White Labeling)

Use the steps described in this procedure to rebrand (white label) and customize the look and feel of your Insight dashboards, as well as the logos, icons and web text. The folders and files referred to in this article are those that were downloaded in [Download the Installation Files](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/dwnld-th-instln-fls.htm).
:::note
White labeling must be enabled in your Sisense license. See this Sisense Docs [article](https://documentation.sisense.com/latest/administration/embedded-analytics/rebranding-sisense/white-label.htm) for details.
:::
**To rebrand Insight:**

1. Browse to the `resources` folder in the path where Sisense is installed. If the path does not exist, create it. For example:
    
    `C:\Program Files\Sisense\app\resources`
    
2. Create a new sub-folder under `resources`. For example:
    
    `C:\Program Files\Sisense\app\resources\QualiSystemsBrand`
    :::note
    If you are using version 9.1 or below, use: `~\Sisense\PrismWeb\resources\QualiSystemsBrand`
    :::
3. Browse to the location where the CloudShell Insight BI Package was downloaded. The required files are located in the `ReBrandingFiles` folder.
    
    ![](/Images/BI/Rebrand-Insight.png)
    
4. Copy the `.png` and `.ico` files to `C:\Program Files\Sisense\app\resources\QualiSystemsBrand`.
5. To set the **Overview** dashboard as the **Insight** landing page, do the following:
    
    1. In Sisense, open the **Overview** dashboard and copy the URL.
    2. Open the `RebrandingQualiJSON.txt` text file.
    3. In the **homepage** value, paste the dashboard URL and add "embed=true&r=false" to the end of the value.
        
        For example, for dashboard URL "http://sisense:8081/app/main#/dashboards/60ed2d2dbd87562ac4eac9e1?", the expected homepage value will be:
        
        ![](/Images/BI/RebrandingQualiJSONExample.png)
        
    4. Save the file.
6. Log into CloudShell Portal as the Sisense administrator.
7. In the main menu, click **Insight**.
    
    ![](/Images/BI/Enable-Direct-Access-to-Insight_1.png)
    
8. In the top toolbar, click **Admin**. Then click **Rest API**.
    
    ![](/Images/BI/admin-menuR.png)
    
9. In the top right corner, click **0.9** and then click **branding**.
    
    ![](/Images/BI/0.9-brandingR.png)
    
10. Click **Add new branding**.
    
    ![](/Images/BI/branding.png)
    
11. Click **Try it out** and delete the branding text box contents.
    
    ![](/Images/BI/branding-try-it-out.png)
    :::note
    A pair of curly brackets will remain ({}). You will need to delete these later.
    :::
12. From your `QualiSystemsBrand` folder, copy all the contents from the `RebrandingQualiJSON.txt` text file and paste them into the branding text box AFTER the curly brackets \{\}.
13. Return to the top of the branding text box, delete the first pair of curly brackets, and then click **Execute**.
14. In CloudShell Portal, refresh the browser to see your changes.
    
    ![](/Images/BI/Rebrand-Insight_7.png)