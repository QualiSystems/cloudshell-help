---
sidebar_position: 8
---

# Unable to Locate a Resource

## Error Message

:::danger-one-line
No resource matches your search
:::

## Description

When searching in CloudShell Portal for a resource to add to a blueprint or sandbox, the user cannot locate the resource.

## Possible Causes

- Resource is not associated to the user's domain
- Resource has been marked as **Excluded**
- Resource family is not set as **Searchable**
- Resource family visibility is set to **Admin only**
- Search engine is not in sync with the database
- There's a corruption in the Quali database (rare)

## Solutions

### Resource is not associated to the user's domain

**To associate a resource with your domain:**

1. Check if the resource is associated to the user's domain.
    1. In Resource Manager, click the **Resource Explorer** pane.
    2. In **Settings** click the **Domains** tab.
    3. Verify that the user's domain is included in the list of domains.
2. If not, add the resource to the user's domain, see [Adding resources to a domain](../../admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain.md#adding-resources-to-a-domain).

### Resource is unsearchable

**To set a resource family as Searchable:**

1. Check if the resource family is set as **Searchable**.
    1. In Resource Manager, click the Admin button and select **Resource Families**.
    2. Choose the relevant **Resource Family** and in the **Parameters** section, verify that the **Searchable** check box has been selected.
2. If not, select the **Searchable** check box.

### Resource is only visible to admins

**To set a resource family as Visible:**

1. Check if the resource's **Visibility** is set to **Admin only** in the **Inventory** dashboard.
    :::tip
    Admins can override the resource family setting for specific resources using the **Inventory** dashboard, see [Editing Resources from the Inventory Dashboard](../../portal/inventory/managing-resources/editing-resources-from-inventory-dashboard.md).
    :::
    
2. Check if the resource family is set as visible.
    1. In Resource Manager, click the **Admin** button and select **Resource Families**.
    2. Choose the relevant **Resource Family** and in the **Parameters** section, verify that the **Admin only** check box has been de-selected.
3. If not, unselect the **Admin only** check box.

### Resource is "Excluded"

**To mark a resource as Included:**

1. Open CloudShell Portal.
2. Check if the resource is marked as **Excluded**, see [Including/Excluding Inventory Resources](../../portal/inventory/managing-resources/include-exclude-resources.md).
3. If the resource is marked as **Excluded**, change the marking to **Include**.
    

### Search engine is not in sync with the database

**To sync the search engine with the database, reset the resource indexing in one of two ways:**

1. Using CloudShell Monitor:
    1. Open CloudShell Monitor.
    2. Select the **Quali Server** component.
    3. In the right pane, click the **Search** tab.
    4. Ensure that **Service status** and **Engine status** are **Online** and click the **Start** button to refresh.
        
        ![](/Images/Troubleshoot/LogMonitor-QualiServer.png)
        
        When refresh has finished, the status will change to **Completed** and the number of refreshed resources is indicated.
        
2. Using CloudShell configuration:
    
    :::note
    This method restarts the service and should not be used if other users require the service to be active.
    :::
    
    1. Open CloudShell Configuration wizard.
    2. Click **Quali Server**.
    3. In the **Administrative tasks** window, click **Search Service**.
    4. In the **Search Service** dialog box, click **OK** to confirm that you would like to re-index the search service. the re-indexing process includes a restart of the service.

### Quali database is corrupted

**To fix database corruptions:**

1. Run **DBCC CHECKDB** on the Quali db to check the database. For details, see this SQL Docs help page: [DBCC CHECKDB (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-checkdb-transact-sql?view=sql-server-ver15).
2. If any corruptions are detected, work with your IT/DB admininstrator to fix those issues accordingly.
