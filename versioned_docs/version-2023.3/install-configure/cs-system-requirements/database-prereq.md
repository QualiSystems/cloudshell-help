---
sidebar_position: 5
---

# Database Prerequisites

CloudShell applications can work with MS SQL database.

## MongoDB database permissions and installation requirements

CloudShell uses MongoDB's official software and hardware requirements, as detailed in [https://docs.mongodb.com/manual/administration/production-notes/](https://docs.mongodb.com/manual/administration/production-notes/). For your convenience, we've listed the minimum hardware requirements below. In case of a discrepancy, please use MongoDB's recommendations.

Minimum supported versions of MongoDB are detailed in [Select the Database Type](../cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md).

| Minimum Hardware Requirements | Description |
| --- | --- |
| CPU | 2 dual cores or 1 physical multi-core CPU |
| RAM | 4 GB |
| Hard Drive | 40 GB |

## SQL database user permissions

For initial CloudShell installation, provide Windows users and the NT AUTHORITY\\SYSTEM user with the following SQL server roles:

- bulkadmin
- dbcreator
- public
- sysadmin - for the NT AUTHORITY\\SYSTEM user only

When running CloudShell after installation, make sure your Windows users and the NT AUTHORITY\\SYSTEM user have the following SQL server roles:

- bulkadmin
- dbowner
- public

In addition, also provide a specific permission to "Connect to SQL" that is granted manually in the "Securables" section of the user's login properties.

For a detailed list of SQL server roles, see the [Fixed Server Roles](../cloudshell-suite/appendix/fixed-server-roles.md) appendix.

## Installation requirements for SQL databases

The required components must be installed in the following order:

### Database

**Supported Standard editions:**
- SQL Server 2012
- SQL Server 2014
- SQL Server 2016
- SQL Server 2019

**Supported Express editions:**

- SQL Server 2016 SP1

**Hardware requirements for SQL Server:**

|   | POC environment | Team Tier | Premium Tier |
| --- | --- | --- | --- |
| CPU | 4 logical cores | 8 logical cores | 16 logical cores |
| Memory | 8 GB | 16 GB | 32 GB |
| Storage (hard disk) | 20 GB | 40 GB (SSD) | 100 GB (SSD) |
| Network card |   | 1/10 GB, according to network load | 1/10 GB, according to network load |

**Installation instructions:**

- For production environments, use SQL Server in an AlwaysOn availability group configuration.
- SQL Express edition should only be used for POCs. For details, see this Microsoft docs article [https://www.microsoft.com/en-us/sql-server/sql-server-downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
- Where there is an existing SQL server installed on the organization’s network, it is recommended that this is used.
- When selecting the **Standalone** option in the CloudShell installer, if the CloudShell installer cannot find Microsoft SQL Server or Microsoft SQL Server Express on the destination environment, Microsoft SQL Server Express is installed automatically as part of the installation procedure.

:::note Notes
- There is a limitation of the maximum database size, per database - 10 GB for SQL Server 2016 SP1.
- SQL Server 2012 Enterprise, SQL Server 2014 Enterprise and SQL Server 2016 Standard Edition are supported for High Availability (HA) solutions.
:::

### Quali Server

Installation instruction:

- The Quali Server can be located anywhere on the organization’s network.
- For a standalone installation, the Quali Server is installed on the same machine as the clients and the database.


### CloudShell applications

Installation instructions:

Quali Server, SQL server or SQL Express, and the CloudShell applications can be installed on the same machine, or on separate machines in the same network.


## Additional requirements

- The **Distributed Transaction Coordinator** service must be running on the database server with specific configurations, as detailed in the Troubleshooting Guide:
    
    - [MSDTC Security Configuration](../../troubleshooting/installation/msdtc-security-configuration.md)
    - [MSDTC Firewall Settings](../../troubleshooting/installation/msdtc-firewall-settings.md)

## Related Topics

- [Best Practices for CloudShell Production Environment](../cloudshell-suite/appendix/best-practices-cs-prod/index.md)

