---
sidebar_position: 5
---

# Map the Insight Dashboards to the Overview Dashboard

This procedure links the different out-of-the-box Insight dashboards to the **Overview** dashboard, enabling their **Go to Overview** link.

![](/Images/BI/Insight-2021.2-Go-to-Overview-link.gif)
:::important
The mapping is done by running a dedicated script that is provided with the CloudShell Insight BI package. However, you can only run this script once. As such, if you need to relink the dashboards, after changing the Sisense App's http protocol or port for example, you will need to completely remove the dashboards, add them again and then rerun the script.
:::
**To map the CloudShell Insight BI dashboards to the Overview dashboard:**

1. Open the CloudShell Insight BI package you previously downloaded.
    
    ![](/Images/BI/CloudShellInsightBIPackage.png)
    
2. Open the `/Attachments` folder.
3. Unzip the `Quali_setup_links.zip` file.
4. In the unzipped folder, edit the `dashboards_links.cfg.json` file.
5. Specify the Sisense App server's URL (including http protocol, hostname and port), and a log folder. If the log folder is missing, create it.
    
    For example:
    
    ![](/Images/BI/dashboard_links_logs.png)
    
6. Save the file.
7. Open command-prompt from the `/Attachments` folder and run the `Quali_setup_links.exe`.
    
8. In the command-prompt that opens, specify the Sisense admin username and password, when prompted.
    
    ![](/Images/BI/Quali_setup_links-cli.png)
    :::note
    Password must be typed, not pasted.
    :::
9. Press **\[Enter\]**.
10. Close the command-prompt when the process finishes.
    
    ![](/Images/BI/quali_setup_links_cli_end.png)