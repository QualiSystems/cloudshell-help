---
sidebar_position: 5
---

# QualiX Connection Error: Missing Required Permissions/Invalid link – Access denied

## Error Messages

:::danger-one-line
- CONNECTION ERROR You do not have permission to access this connection because you are not logged in. Please log in and try again.

- Invalid link – Access denied
:::

## Description

There is a difference between the time set on the QualiX machine and the time set on Quali Server.

## Solution

**To resolve the issue described above, do one of the following:**

- Set QualiX to UTC time.

\-or-

- Set both machines against the same Network Time Protocol server.

**To set QualiX to UTC time (manually, without NTP):**

1. Download the **SetQualiXTimeZone** utility: Open [Quali's QualiX Download Page](https://support.quali.com/hc/en-us/articles/360037650694), search the page for "utilities", and click the **Utilities** link of the appropriate QualiX version:
    
    ![](/Images/QualiX/SetUTCTimeUtilityLocation.png)
    
2. Extract the files to your local directory.
3. Edit the `SetQualiXTimeZone.ps1` file and set the username and password to the QualiX machine:
    
    ![](/Images/QualiX/SetqualiXTimeZoneSetCreds.png)
    
4. Save the file and run the `SetQualiXTimeZone.ps1` file with Windows PowerShell.
    
    If you get an error message that running scripts is disabled on your system, run the following command and try again:
    
    ```powershell
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    
5. When prompted, enter the IP address of the QualiX machine.
    
    The command returns the current time and date on the QualiX machine and Quali Server.
    
6. If the QualiX machine's time is different from the time on Quali Server, when prompted, enter the UTC time that is set on the Quali Server machine, in `HH:mm` format.
    
    For example:
    
    ![](/Images/QualiX/Input-UTC-Time.png)
    
    The QualiX machine's time is updated.
    

### Syncing Quali Server and QualiX to the same Network Time Protocol

In certain cases, the Quali Server, QualiX and CloudShell Portal machines might be synchronized to different Network Time Protocol (NTP) servers, which may cause slight time differences.

**To set both machines against the same Network Time Protocol server:**

- Perform the steps at [http://support.ntp.org/bin/view/Support/WindowsTimeService](http://support.ntp.org/bin/view/Support/WindowsTimeService) to resolve this issue.
