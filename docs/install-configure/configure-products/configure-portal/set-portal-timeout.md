---
sidebar_position: 1
---

# Set the Timeout Period for CloudShell Portal

**To set the timeout period for Portal sessions:**

1. Go to the `<Installation drive>\Program Files (x86)\QualiSystems\CloudShell\Portal\Web.` config file.
2. Locate the **sessionState timeout** line:
    
    ```javascript
    <system.web>
         <sessionState timeout="120">
         </sessionState>
    ```
    
    The default timeout period is 120 minutes.
    
    An alert message is issued shortly before the timeout, so if you do modify the timeout interval, do not use a setting that is six minutes or less.
    
3. Set the suitable timeout period and save the file.
4. Restart the IIS, and clear the browser cache.
:::note
Modifications you make to the `web.config` file are overwritten during an upgrade of the CloudShell application. We therefore recommend that you save a copy of the `web.config` file as a backup.
:::