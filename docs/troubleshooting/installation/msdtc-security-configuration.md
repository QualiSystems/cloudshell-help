---
sidebar_position: 3
---

# MSDTC Security Configuration

## Error Message

:::danger &nbsp;
Failed the MSDTC test

The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn't have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers:

xx.xx.xxx.xxx, xxxx\\qualisystems2016

You should also check Windows Event viewer for more details.
:::

## Description

When running the Quali Server configuration wizard, and trying to connect to a database in the **Database selection** screen, an error message is displayed if there is a security configuration issue.

## Possible Causes

Possible reasons for incorrect MSDTC configuration include:

- MSDTC is not installed.
- MSDTC is not configured to start automatically in Windows Services.
- Security configurations of MSDTC are not correctly defined.
- You did not specify the DB machine's NetBIOS computer name when connecting to the DB.

To run the CloudShell Suite applications, configure MSDTC Security settings on the Quali Server machine and the SQL database machine (or machines in a High Availability deployment).

## Solution

:::tip
Before performing the below steps, try specifying the DB machine's NetBIOS computer name in the Quali Server Configuration wizard's **Database Connection** window, so for example, instead of using "`dbmachine\dbinstance`", use "`dbmachine.<NetBIOS-computer-name>\dbinstance`". For details, see [Configure the SQL Server Database Connection](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-sql.htm).
:::

**To resolve the issue described above, follow these steps:**

1. Ensure that proper **Security Settings** in **Local DTC** properties have been selected:
    1. Go to **Control Panel > Administrative Tools > Component Services** or select **Start > Run**, type **dcomcnfg.exe** and press **Enter**.
    2. From the left navigation tree, drill down to **Component Services > Computers > My Computer > Distributed Transaction Coordinator > Local DTC**.
    3. Right click **Local DTC** and select **Properties** from the context menu.
    4. In the **Security** tab, select the following checkboxes:
        
        - Network DTC Access
        - Allow Remote Client
        - Allow Remote Administration
        - Allow Inbound
        - Allow Outbound
        - Enable SNA LU 6.2 Transactions
        - No Authentication Required
        
        ![](/Images/Troubleshoot/Known-upgrade-issues.png)
        
    5. Apply the changes and click OK. The service restarts. However, you may have to restart the computer(s).
2. For all operating systems, define the **Distributed Transaction Coordinator** service to startup automatically:
    1. Select **Start > Run**, type **services.msc** and press **Enter**.
    2. In the **Services** window, right-click **Distributed Transaction Coordinator**, and select **Properties** from the context menu.
    3. In the **Startup type** dropdown list, select **Automatic**.
    4. Click **OK** to close the **Properties** window.

## Related Topics

[Database Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/db-prereqs.htm)
