---
sidebar_position: 2
---

# Select an Installation Option

This article gets you started with CloudShell installation.
:::note
If you need to set or re-set the CloudShell License Server after CloudShell installation, run CloudShell installation using the **Custom / Upgrade** installation option and select the **CloudShell License Server** component. For additional information, see [Custom Component selection](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Complete%20Installation/slct-cs-cmpnt.htm#Custom).
:::

1. In the **Type of Installation** window, select the type of installation to run.
    
    ![](/Images/IG2/Select-an-installation-option_526x344.png)
    
    The CloudShell installation types are listed in the following table.
    
| Installation type | Description  |
    |-------------------|-------------|
    | Standalone        | Select **Standalone** to install the client and server applications on a single machine. <br />**Note: Standalone** does not install the License Server component. We recommend selecting Custom and choosing the specific CloudShell components you wish to install. <br />During the **Standalone** installation, SQL Server 2019 Express is installed and all required databases are created automatically on that server. <br />**Note: If an older SQL Server Express version is already installed, CloudShell will install SQL Server 2019 Express separately without modifying or removing the older versions.**                                      |
    | Client            | Select **Client** if the Quali Server has been centrally installed on your network. This enables you to customize your installation and install the necessary local components. <br />The **Client** installation installs one or more selected clients on a local machine.                                                                                                                                                                                                                                                                                                                                                                        |
    | Server            | Select **Server** to install the server applications. <br />You can install Quali Server and CloudShell Portal on separate machines.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | Custom            | Select **Custom** to manually choose the components to install. For more information about the available installation components, see [CloudShell Component Architecture](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-compnts.htm).                                                                                                                                                                                                                                                                                                                                                                           |

    

2. Click **Next** to select the components to install.