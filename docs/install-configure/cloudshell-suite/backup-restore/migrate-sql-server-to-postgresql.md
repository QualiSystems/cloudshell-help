---
sidebar_position: 4
---

# Migrating the Databases from SQL Server to PostgreSQL

This article explains how to move an existing CloudShell from Microsoft SQL Server to PostgreSQL, using the CloudShell database migration tool. The tool copies the three CloudShell relational databases. MongoDB isn't affected: CloudShell keeps using the same MongoDB after the migration.

| Database (default name) | SQL Server connection name | PostgreSQL connection name |
|---|---|---|
| Quali | `TestShell` | `TestShellPostgres` |
| QualiResults | `TestShellResult` | `TestShellResultPostgres` |
| QualiInsight | `InSightResult` | `InSightResultPostgres` |

:::tip
Migrate a copy of your environment first, and keep your SQL Server databases until you have validated CloudShell on PostgreSQL.
:::

## Getting the tool

The tool's version must match your installed CloudShell version exactly. The tool prints its version when it starts, but it doesn't block a mismatch, and a mismatched tool creates a database schema that doesn't match your Quali Server.

- **CloudShell 2026.2 and later:** the CloudShell installation package includes the matching tool, in `CloudShell\Utilities\SqlServerToPostgresqlMigrator`.
- **Earlier versions:** contact Quali Support for the tool that matches your version.

## Before you start

1. Make sure CloudShell works normally on SQL Server, and that the Quali Server Configuration Wizard has completed.
2. Back up the SQL Server databases and the MongoDB databases. See [Backing Up CloudShell Databases](./backup-cs-db.md).
3. Stop the Quali Server service, and close any running Configuration Wizard.
4. On a PostgreSQL 12 or later server, create three new, empty databases, owned by the login CloudShell will use. Use lowercase names. For example, in `psql`:

    ```sql
    CREATE DATABASE quali        WITH OWNER = cloudshell ENCODING = 'UTF8';
    CREATE DATABASE qualiresults WITH OWNER = cloudshell ENCODING = 'UTF8';
    CREATE DATABASE qualiinsight WITH OWNER = cloudshell ENCODING = 'UTF8';
    ```

    Don't create the databases with the Configuration Wizard. The tool expects them to be empty.

5. Give that login superuser rights for the duration of the migration. The tool needs them to copy the data. Run the tool with the same login CloudShell will use, so CloudShell owns the tables:

    ```sql
    ALTER ROLE cloudshell SUPERUSER;
    ```

6. Make sure the PostgreSQL server has enough disk space for the full data size of the SQL Server databases.
7. Run the tool from a machine with .NET Framework 4.8 and a fast, reliable connection to both database servers. The Quali Server machine is usually the best choice.

## Running the migration

1. Copy the `SqlServerToPostgresqlMigrator` folder to the machine, and set the six connection strings in `connections.config`: the three SQL Server databases and the three PostgreSQL databases.

    ```xml
    <add name="TestShell" providerName="System.Data.SqlClient"
         connectionString="Data Source=SQLHOST;Initial Catalog=Quali;Integrated Security=True" />
    <add name="TestShellPostgres" providerName="Npgsql"
         connectionString="Host=PGHOST;Database=quali;Username=cloudshell;Password=***" />
    ```

    Use the same SQL Server connection strings as your Quali Server.

2. Run `QualiSystems.SqlServerToPostgresqlMigrator.exe` from a command prompt and follow the prompts. The tool:
    1. Tests the connections. If some databases can't be reached, it offers to migrate only the others. InSight can only be migrated together with Results.
    2. Waits until no Quali Server is using the Quali database.
    3. Creates the CloudShell schema on PostgreSQL and compares it with SQL Server.
    4. Empties the PostgreSQL tables, copies all rows, and shows the progress.
    5. Resets the PostgreSQL ID sequences.

    :::warning
    If the tool reports that your SQL Server databases haven't been upgraded to its version and offers to upgrade them, don't accept. Press Ctrl+C, run the Quali Server Configuration Wizard on SQL Server, and then run the tool again.
    :::

3. When the tool prints `Migration process is finished`, remove the superuser rights:

    ```sql
    ALTER ROLE cloudshell NOSUPERUSER;
    ```

4. Run the Quali Server Configuration Wizard. In the database step, select **PostgreSQL**, point it to the migrated databases, and don't create new databases.
5. Start the Quali Server, log in to CloudShell, and check your blueprints, resources, sandboxes and users.

## If the migration fails

- Your SQL Server data isn't changed, unless you accepted the upgrade offer above. Fix the cause and run the tool again. Each run copies everything from the start.
- If the tool reports differences between the SQL Server and PostgreSQL catalogs, check that the tool's version matches your CloudShell version, and contact Quali Support with the full console output.
- If the copy fails with a permission error on `session_replication_role`, the PostgreSQL login doesn't have superuser rights.
