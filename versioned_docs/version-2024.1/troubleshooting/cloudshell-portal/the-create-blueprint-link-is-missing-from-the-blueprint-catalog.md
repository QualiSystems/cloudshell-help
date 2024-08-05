---
sidebar_position: 2
---

# The Create Blueprint Link is Missing From the Blueprint Catalog

## Description

The **\+ Create Blueprint** link is missing from the Blueprint Catalog, preventing users from creating blueprints.

![](/Images/Troubleshoot/CreateBlueprintLink.png)

## Possible Causes

1. The domain's Topologies folder has been removed from Resource Manager Client.
2. The `OnlyAllowNewEnvironmentsFromTemplates` key is enabled on the server but there are no templates in the domain.

## Solution

**To set a new Topologies folder to the domain:**

1. In Resource Manager Client, open Resource Explorer.
2. Add a new folder.
    
    ![](/Images/Troubleshoot/RMNewFolder.png)
    
3. In the **Domains** explorer, double-click the domain and switch to the **Properties** page.
4. Click the **Change** button to the right of the **Topologies Folder** field and select the new folder.
5. Click **OK**.


**To fix the missing templates issue:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file and make sure the `OnlyAllowNewEnvironmentsFromTemplates` key is included and set to **True**.
2. In CloudShell Portal, go to the **Manage>Blueprint Templates** page and make sure at least one template is associated with the domain.
