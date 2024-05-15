---
sidebar_position: 3
---

# Modifying the Quali.vbs File

**To modify the Quali.vbs file:**

1. Rename the extracted `Quali.vbs` file to: "Quali.vbs.old". Keep this file as a backup.

2. Open the `Quali.vbs` file in a text editor.
3. Modify the following values:
    
    - `Eventlog` – The values are `$true` or `$false`. If the value is `$true`, all scripts write logs to the Windows event log while running - set to `$true` by default. It’s recommended to leave it with the default.
    - `ScriptPath` – The folder which in you store all the PowerShell scripts that are in the downloaded HA Plugin zip file. For example:
        
        ```javascript
        Const EventLog = "$true"
        Const ScriptPath = "c:\Quali\QualiServer"
        ```
        
4. Save the file.