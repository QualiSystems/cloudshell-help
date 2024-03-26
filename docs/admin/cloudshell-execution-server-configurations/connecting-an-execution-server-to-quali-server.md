---
sidebar_position: 1
---

# Connecting an Execution Server to Quali Server

This article explains how to connect, or associate, an Execution Server to Quali Server. You need to do this whenever you install a new Execution Server, or deploy an Azure Template or AWS CloudFormation for a cloud-based Quali Server and need to associate the newly-created Execution Server with the Quali Server.
:::note
The Azure and AWS Execution Servers created as part of the integration are installed on Linux machines.
:::
**To associate a Windows Execution Server with Quali Server:**

1. In the Execution Server machine, run the Execution Server configuration wizard.
2. In the **Server connectivity** screen, specify the Quali Server hostname or IP address and CloudShell system administrator's username/password.

For additional information, see [Configure the Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-ts-exec-srver.htm).

**To associate a Linux Execution Server with Quali Server:**

- Log in to the Execution Server machine and follow the instructions in [Configure the Linux Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv.htm).

## Related Topics

- [Integrating Azure with Cloud-based CloudShell Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-Cld-Only-Intg.htm)
- [Create a Management VPC and Networks using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Mng-VPC-Ntwrks.htm)
