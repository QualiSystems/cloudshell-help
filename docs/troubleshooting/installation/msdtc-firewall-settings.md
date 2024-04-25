---
sidebar_position: 4
---

# MSDTC Firewall Settings

## Error Message

:::danger-one-line
Failed the MSDTC test

The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn't have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers:

xx.xx.xxx.xxx, xxxx\\qualisystems2008
:::

## Description

When installing CloudShell on some versions of Windows Server OS with East Asian languages, the above error may appear when running the Quali Server configuration wizard, and trying to connect to a database in the Database selection screen.

## Solution

Open **Control Panel > System and Security > Windows Firewall > Allowed Programs** and select **Distributed Transactions Coordinator** to ensure that Distributive Transaction Coordinator is permitted to communicate through Microsoft Firewall.

![](/Images/Troubleshoot/Firewall-settings_1_503x457.png)

## Related Topics

[Database Prerequisites](../../install-configure/cs-system-requirements/database-prereq.md)
