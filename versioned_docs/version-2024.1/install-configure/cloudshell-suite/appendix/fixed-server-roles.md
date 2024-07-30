---
sidebar_position: 5
---

# Fixed Server Roles

The following table describes fixed server roles. For more information, see the Microsoft Fixed Server\-Level Roles [article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-2017#fixed-server-level-roles).
:::note
The roles may change depending on the SQL Server version.
:::
| Role | Description | Required for? |
| --- | --- | --- |
| sysadmin | Members of the sysadmin fixed server role can perform any activity in the server, for example, set up and maintain the system or server. | Required for High Availability (HA) and Quali Server |
| serveradmin | Members of the serveradmin fixed server role can change server\-wide configuration options and shut down the server. | Required for HA |
| securityadmin | Members of the securityadmin fixed server role manage logins and their properties. They can GRANT, DENY, and REVOKE server\-level permissions. They can also GRANT, DENY, and REVOKE database-level permissions if they have access to a database. Additionally, they can reset passwords for SQL Server logins. | Used only by DB admin |
| processadmin | Members of the processadmin fixed server role can end processes that are running in an instance of SQL Server. | Might be required during installation |
| setupadmin | Members of the setupadmin fixed server role can add and remove linked servers by using Transact-SQL statements. (sysadmin membership is needed when using SQL Management Studio.) | Required for HA |
| bulkadmin | Members of the bulkadmin fixed server role can run the BULK INSERT statement. | Required during normal operation |
| diskadmin | The diskadmin fixed server role is used for managing disk files. | Not required from app perspective |
| dbcreator | Members of the dbcreator fixed server role can create, alter, drop, and restore any database. | Required during installation |
| Public | Every SQL Server login belongs to the public server role. When a server principal has not been granted or denied specific permissions on a securable object, the user inherits the permissions granted to public on that object. Only assign public permissions on any object when you want the object to be available to all users. You cannot change membership in public. | Required during normal operation |