---
sidebar_position: 5
---

# Select Where to Install CloudShell

1. In the **Destination Folder** window, specify where to install the CloudShell applications and click **Next** to start the status check for required components.
    
    ![](/Images/IG2/Select-an-installation-option_4.png)
    
2. Specify the default path and folder to which CloudShell is installed. The default path is:
    
    **C:\\Program Files(x86)\\QualiSystems**
    
    If you need to install to a different installation path and folder, click **Change**.
    
<details>
  <summary>CloudShell uses Erlang and MongoDB, which are installed by default in C: drive as part of CloudShell installation. To change their default installation paths, do the following before you continue with CloudShell setup: **click for more...** </summary>
  
  1. From the CloudShell installation package's **\\Data\\Prereq** folder, install Erlang and MongoDB as appropriate. For example, in **D:** drive.
  2. Create the following environment variables on the Quali Server machine:
     
     - ERLANG\_HOME: Path to the root folder of the new Erlang installation
     - ERLANG\_SERVICE\_MANAGER\_PATH: Path to the folder containing the **erlsrv.exe** file
     
     For example:
     
     ![](/Images/IG2/ErlangEnvironmentVariables_444x419.png)
</details>

        
    
3. Click **Next** and proceed to [Check for CloudShell Required Components](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Complete%20Installation/chk-cs-reqd-cmpnts.htm).