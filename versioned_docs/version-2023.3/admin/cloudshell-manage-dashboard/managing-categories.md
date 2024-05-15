---
sidebar_position: 3
---

# Managing Categories

Categories enable system and domain administrators to organize CloudShell inventory items in logical groups, and expose specific items to members of a particular domain.

## System Categories

The system categories are stored as a pool of categories that can be used in a single domain or multiple domains. The categories are used to create catalogs. Two types of categories are supported.

- Blueprint categories
- Service categories

Categories are managed in the **Manage** dashboard and require the following user permissions:

- System administrators can create and customize the system categories and also specific domain categories
- Domain administrators can create and customize categories only in the domain in which they are the administrator.

### Managing system categories

**To manage the system categories:**

1. In the **Manage** dashboard, in the left sidebar, click **Categories**.
2. Select the desired category type, either **Blueprints Categories** or **Services Categories**.  
    ![](/Images/CloudShell-Portal/Manage/CatManagement1.png)

### Creating a new system category

**To create a new category:**

1. In the left sidebar, click **Categories**.
2. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
    
3. Click **\+ Add New Category**.
4. In the **Add New Category** dialog box, enter the required information:
    
    | Field | Required | Description |
    | --- | --- | --- |
    | NAME | Required | Category name that displays in the catalog. |
    | DESCRIPTION | Optional | Description of the category. |
    | CATALOG | View only | The type of category, selected automatically according to categories view selection |
    | LOCATION | Optional | Determines if the current definition is a category or sub-category:<br/>If you leave the selection with slash (‘/’), then this definition is a Category.<br/>If you select a value, then this definition becomes a sub-category of the selected category. |
    | DOMAINS | Optional | Select the domain or domains where the category will be available.<br/>If you are a domain administrator, the selected domain is displayed but cannot be changed.<br/>If this category is a sub-category, this field inherits the domain values that were selected for the main category. The sub-category can be displayed in less domains than the main category. However, additional domains cannot be added. |
    | IMAGE | Optional | You can add an image to the catalog definition. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200Mb). |
    
5. Click **Save**.

In the **Categories** list, sub-categories have a line in front of the category name, as displayed in the following image:

![](/Images/CloudShell-Portal/Manage/CatManagement1-_1.png)


### Editing system categories

**To edit a system category:**

1. In the left sidebar, click **Categories**.
2. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
3. In the list of categories, click the name of the required category.
4. In the **Edit Category** dialog box, edit the required fields.
5. Click **Save**.
:::note
The category's Location is not editable.  
:::
### Deleting system categories

**To delete a system category**:

1. In the left sidebar, click **Categories**.
2. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
3. In the list of categories, select the checkbox next to the category to delete.
4. Click the **Delete** button.  
    -or-  
    At the end of the row of the required category, click the menu icon and select Delete .
:::note  
If you delete a category that has sub-categories, they are automatically deleted. Connections between blueprints and deleted categories and sub-categories are removed.
:::
## Managing domain categories

You can create, add or remove categories from a domain.

The system administrator can, but is not limited to, use system categories in the specific domain while the domain administrator can only create new categories in their specific domain.
:::note
Categories created in a specific domain are also added as system categories.
:::
![](/Images/CloudShell-Portal/Manage/CatManagement1_2.png)

### Adding domain categories

Domain categories are accessible for users of the specified domain and of course to the system administrator.

**To add a category to a domain:**

1. In the left sidebar, click **Domains**.
2. Click the required domain.
3. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
4. Click **Add Category to Domain**.
5. In the **Select Categories for This Domain** dialog box, select the categories to add (this step is available only for system administrators).
6. To create a new category, click **Create New Category** (opens by default to domain administrator), define the new category and click **Save**.
7. Click **Done**.
    

### Editing domain categories

Editing a domain category as a system administrator will update the system category as well. Domain users cannot edit system categories that were added as domain categories.

**To edit a domain category:**

1. In the left sidebar, click **Domains**.
2. Click the required domain.
3. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
4. In the list of categories, click the name of the required category.
5. In the **Edit Category** dialog, edit the required fields.
6. Click **Save**.
:::note
Location of **Category** and **Domain** are not editable.
:::
### Deleting categories from domains

**To delete a category from a domain:**

1. In the left sidebar, click **Domains**.
2. Click the required domain.
3. Select the desired category type, either **Blueprints Categories** or **Services Categories**.
4. In the list of categories, select the required category/categories.
5. Click the **Delete** button.  
    -or-  
    At the end of the row of the required category, click the menu icon and select **Delete** .
:::note
If you delete a category that has sub-categories, they are automatically deleted. Connections between blueprints and deleted categories and sub-categories are removed. Deleting a category from a domain removes the category from that domain but keeps the category in the system.  
:::
## Rearranging order of categories

You can change the order in which categories and sub-categories are displayed in the **Blueprint Catalog** (blueprints categories) or in the **Add App / Service** window (services categories).

**To rearrange the categories' order:**

- Drag the required category up or down within the list to the desired position.
    
    -or-

    Select a category and use the position controls (on top bar or inside the More Actions menu ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png)) to move the category up or down.
    
:::note
When moving a category, its sub-categories are also moved. When moving a sub-category, it changes order only under the main category. Only one category can be moved at a time.
:::
## Related Topics

- [Manage Dashboard Overview](../../admin/cloudshell-manage-dashboard/manage-dashboard-overview.md)
