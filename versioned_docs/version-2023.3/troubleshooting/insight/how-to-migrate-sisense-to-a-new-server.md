---
sidebar_position: 4
---

# How to Migrate Sisense to a New Server

## Description

Due to a RabbitMQ coexistence issue, Sisense server cannot be installed on the Quali Server machine.

Starting with version 2020.2, Quali Server comes with a built-in RabbitMQ service. Sisense also uses RabbitM and therefore cannot coexist with Quali Server on the same machine, so if you’re upgrading from an older CloudShell version and your Sisense server is hosted on your Quali Server machine, you will need to move Sisense to a different server.

## Solution

When upgrading Quali Server from an older version, you will need to install Sisense server on a separate machine.

**To migrate Sisense to a separate machine:**

1. If you have custom or modified dashboards, create backups of your ElastiCube and dashboards, as explained in [Back Up and Restore ElastiCube and Dashboards](../../install-configure/cs-insight-bi/create-customize-dashboards/backup-restore-elasticube-and-dashboards.md).
    
2. Since the same Sisense license will be used on the new server, sign out from Sisense.
3. Remove Sisense from the Quali Server machine and uninstall all Sisense services.
4. Install Sisense on the new machine and sign in with your Sisense account.
