---
sidebar_position: 10
---

# Configure the Execution Server to Run as a Process by Default

By default, the Execution Server currently runs as a service, which may be convenient in many cases. However, there are some technical limitations when running the Execution Server as a service, for example, the following features cannot be used:

- GUI automation (Ranorex)
- Writing to Excel through the Filesystem library prior to Library version 5.1.1[  
    ](http://portal.qualisystems.com/entries/50010383?TestShell%20Suite/TestShell%20Suite%20Tool%20Libraries/FileSystem%205.1.1.284/FileSystem%205.1.1.rar)
- Libraries that must launch a GUI, for example: IxNetwork
- Studio Function - Capture Image

In contrast, there may be instances where it is preferred to run the Execution Server as a process. However, running the Execution Server as a process requires a user to be logged in to the machine. The machine can be locked but an active user session must be in progress.

:::note Notes
- If you need to change the configuration, uninstall the Execution Server, ignore any error that appears and click **OK** to proceed, and install the Execution Server with the new configuration. Then, if desired, configure the Execution Server to run as a process again.
- If you are performing an upgrade, you will need to perform the below procedure again after upgrading CloudShell.
:::
## Running the Execution Server as a Process

The following procedure explains the steps required to convert the default Execution Server service to a process.

**To run the Execution Server as a process by default:**

1. Click **Start** and then run:
    
    ```javascript
    Services.msc
    ```
    
2. Stop the **TestShell Execution Server** service.
3. Run **CMD** (as administrator).
4. Delete the existing service by running the following command:
    
    ```javascript
    sc delete "TestShell Execution Server"
    ```
    
5. Create a text file containing the following command, with the quotation marks:
    
    ```javascript
    "C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\QsExecutionServer.exe" tray
    ```
    
6. Save the file as a batch file named `TestShell Execution Server.bat`.
    
7. To have any Windows user on the machine configure the Execution Server as a process at login, add the batch file to the Windows Startup folder:
    
    `C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp`
    
    Alternatively, you can designate a Windows user to log in for the Execution Server and save the batch file to that user's Startup folder:
    
    `%appdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup`
    
    Windows will launch the script automatically whenever the Windows user logs in. The Execution Server process is indicated by a system tray icon:
    
    ![](/Images/IG2/CloudShellExecutionServerTrayIcon.png)
    

## Reverting the Execution Server back to a service

Use this procedure to convert an Execution Server that is set to run as a process back to a service.

**To revert the Execution Server to a service:**

1. Remove the batch file from the Windows Startup folder:
    
    `C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp`
    
2. Exit the system tray process by right-clicking the process and selecting **Exit**.
    
    ![](/Images/IG2/CloudShellExecutionServerTrayIcon.png)
    
3. Run **CMD** as administrator and run the following command:
    
    ```javascript
    sc create "TestShell Execution Server" binpath="c:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\QsExecutionServer.exe"
    ```
    
    The **TestShell Execution Server** service is created.
    
4. Run the **Execution Server** configuration wizard to start the Execution Server.