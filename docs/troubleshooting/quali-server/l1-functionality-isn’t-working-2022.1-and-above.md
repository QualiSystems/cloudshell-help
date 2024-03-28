---
sidebar_position: 8
---

# L1 functionality isn’t working (2022.1 and above)

## Description

If you upgraded to CloudShell 2022.1 and above and your L1 isn’t working, please follow these steps.

## Solution

**To resolve this issue:**

1. If you're using CloudShell 2022.1, create a symlink by doing the following:
    
    ```javascript
    mklink /D "C:\Program Files (x86)\QualiSystems\CloudShell\Server\python\2.7.10" "C:\Program Files (x86)\QualiSystems\CloudShell\Server\python\2"
    ```
    
2. Make a backup of L1 driver folder `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Drivers\%driver_name%`.
3. Open the L1 driver's folder.
4. Delete these folders:
    
    - `Include`
    - `Lib`
    - `Scripts`
    - `Tcl` located under `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Drivers\%driver_name%`
5. Open Windows Task Manager and end all running **python2** processes from the L1 driver folder
6. Re-install the L1 driver by executing `install_driver.bat`.
    
7. Auto-load the new L1 resource in Resource Manager Client.
8. Make sure it works as expected. You can do this by clicking the **Sync from** button in the L1 resource's **Configuration** tab in Resource Manager Client - see [Sync between the L1 switch and CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-L1-Swch.htm#Switch-s).


