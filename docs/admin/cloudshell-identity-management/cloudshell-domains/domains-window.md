---
sidebar_position: 2
---

# Domains Window

Use the domain's tab to add and remove resources, and blueprints (including their components and logic) to and from domains. User access to a domain is determined according to the domain's associated groups.

**To configure a domain:**

1. In the **Domains** pane, right-click a domain and select **Open** from the context menu, or double-click the domain.
    
    ![](/Images/Admin-Guide/User-Management/The-Domain-window.png)
    
    The domain's tab is displayed.
    
2. Use the buttons in the pane to add, remove and show archived domains.
    
    The domain's tab has three pages:
    
    - [Properties page](#properties-page)
    - [Resources page](#resources-page)
    - [Diagram page](#diagram-page)

## Properties page

The **Properties** page displays the current domain settings: the domain name, description, the default blueprints folder, a short summary of the domain's reservation history, and any groups or blueprints that are associated with the domain.

![](/Images/Admin-Guide/User-Management/The-Domain-window_1.png)

**To configure settings in the Properties page:**

1. To change a domain's name and description, click the **Edit** button next to the **Domain Name** field.
2. To archive the domain, click the **Archive** button next to the **Domain Name** field. If the domain is currently archived, click the **Archive** button to restore the domain. For additional information, see [Archiving and Restoring Domains](./archiving-and-restoring-domains.md).
3. The domain's **Topologies Folder** arranges all blueprints created within that domain. To change the domain's topologies folder, click the **Change** button next to the **Topologies Folder** field.
    :::tip
    Clicking the Clear button next to the Topologies Folder field will remove the blueprints folder and prevent users from adding blueprints to the domain.
    :::
4. The domain's **License Pool** determines the domain's permitted number of concurrent sandboxes. To change the domain's default license pool, click the **License Pool** drop down list and specify the number of sandboxes to be allowed to run at the same time.
5. To specify an expiry date for the domain, click the **Calendar** button next to the **End Time** field. Click **Clear** to remove the expiry date.
    :::note
    The default duration for a domain is indefinite.
    :::
6. The **Resources** field displays the number of resources associated with the domain. Click the **Add Resource** button to find additional resources.
7. The **Reservations** field shows a real time summary of the domain's activity.
8. To add or remove groups from the domain, click the **Groups** tab. The **Groups** tab lists all groups associated with the domain. The **View Only** field is checked for any group with view-only access to the domain. To manage groups and their permission levels, see [Managing CloudShell Groups](../managing-users/managing-cloudshell-groups.md).
    :::note
    You can also associate a group with a domain via the **Domains** area in the **Groups** tab.
    :::
9. Click the **Topologies** tab to add or remove blueprints. The **Topologies** tab lists all blueprints associated with the domain. When you add a blueprint to a domain, the blueprint's resources, Apps and services are added as well. For additional information, see [Adding resources to a domain](./addingremoving-resources-from-a-domain.md#adding-resources-to-a-domain).
    
    ![](/Images/Admin-Guide/User-Management/The-Domain-window_2.png)
    :::note
    You can also manage domain blueprints via the domain's **Diagram** page.
    :::

## Resources page

The **Resources** page lists all resources associated with the domain. Here you can search for and add resources to domains. For additional information, see [Searching for resources to add to a domain](./addingremoving-resources-from-a-domain.md#searching-for-resources-to-add-to-a-domain).

![](/Images/Admin-Guide/User-Management/The-Domain-window_3.png)

:::note
You can also add and remove resources via the **Diagram** page.
:::
Use the **Resources** page to add resources via a resource search, or for adding resources to large domains.

## Diagram page

The **Diagram** page displays the domain's resources and blueprints. You can use the domain diagram to add and remove resources and to manage domain blueprints.

- Drag and drop resources from the Resource Explorer or from the search results to allocate the resources to the domain.
- Drag and drop a blueprint from the Resource Explorer to add the blueprint and its associated routes and resources to the domain.

Resource Manager resolves blueprints that are added via the domain diagram. If any of the blueprints' connected resources are connected via an L1 switch or a patch panel, these will be added automatically to the blueprint.

**To toggle display of the blueprint's L1 switches and patch panels:**

1. Click **Logical** to view only the requested resources.
        
    ![](/Images/Admin-Guide/User-Management/The-Domain-window_4.png)
    
2. Click **Physical** to also display resource connections.
    
    ![](/Images/Admin-Guide/User-Management/The-Domain-window_5.png)

