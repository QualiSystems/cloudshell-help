---
sidebar_position: 2
---

# Setting QualiX to UTC Time

QualiX uses UTC timestamps to validate basic operations and therefore must be synchronized with the Quali Server.

We recommend to synchronize the QualiX machine with your organization's Network Time Protocol (NTP) server. However, if you do not have an NTP server, you can use the following procedure.

**To set QualiX to UTC time (manually, without NTP):**

1. Download the **SetQualiXTimeZone** utility: Open [Quali's QualiX Download Page](https://support.quali.com/hc/en-us/articles/360037650694), search the page for "utilities", and click the **Utilities** link of the appropriate QualiX version:
    
    ![](/Images/QualiX/SetUTCTimeUtilityLocation.png)
    
2. Extract the files to your local directory.
3. Edit the `.\SetQualiXTimeZone.ps1` file and set the username and password to the QualiX machine:
    
    ![](/Images/QualiX/SetqualiXTimeZoneSetCreds.png)
    
4. Save the file and run the `.\SetQualiXTimeZone.ps1` file with Windows PowerShell.
    
    If you get an error message that running scripts is disabled on your system, run the following command and try again:
    
    ```javascript
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    
5. When prompted, enter the IP address of the QualiX machine.
    
    The command returns the current time and date on the QualiX machine and Quali Server.
    
6. If the QualiX machine's time is different from the time on Quali Server, when prompted, enter the UTC time that is set on the Quali Server machine, in `HH:mm` format.
    
    For example:
    
    ![](/Images/QualiX/Input-UTC-Time.png)
    
    The QualiX machine's time is updated.