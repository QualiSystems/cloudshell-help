---
sidebar_position: 4
---

# Adding/Removing Resources from a Domain

This article explains the different ways you can add and remove resources from domains.

In order to make a resource available for users, you need to associate the resource to the users' domain. This will enable the users in that domain's groups to access and use this resource in CloudShell Portal.

## Searching for resources to add to a domain

**To search for resources to add to a domain**:

1. In the **Admin** ribbon, click the **Domains** button to open the **Domains** pane.  
    ![](/Images/Admin-Guide/User-Management/AddDomainRes_526x130.png)
2. In the **Domains** pane, double-click a domain (or right-click a domain and select **Open**) to open the domain's tab.
3. From the **Page** drop down list, select **Resources**.
4. In the **Resources** page, click the **Find Resources** button to open the **Resource Search** window.
5. Use the search criteria to help narrow down the list of resources and select the resources that you wish to add to the domain.
    
    Note that the search also returns excluded resources.
    
6. Drag them into the domain's tab. If any of these resources have sub-resources, you'll be prompted to include them. Click **Yes** if you wish to add all resource's descendants as well.

## Adding resources to a domain

**To add resources from Resource Explorer:**

- Drag resources and blueprints from **Resource Explorer** to the domain tab's **Diagram** page.

**To add resources implicitly via a blueprint**:

- Use the domain tab's **Properties>Topologies** tab, to add a blueprint to the domain. Any resources within that blueprint are automatically added to the domain.
    
    ![](/Images/Admin-Guide/User-Management/AddDomainRes_1.png)
    

**To associate multiple domains to a specific resource:**

1. Right-click the resource and select **Configuration** from the context menu.  
    ![](/Images/Admin-Guide/User-Management/AddDomainRes_2_261x345.png)
2. In the resource's **Configuration** tab, select the **Domains** tab.

![](/Images/Admin-Guide/User-Management/AddDomainRes_3.png)

1. To allocate the resource to additional domains, click **Add** to open the **Domains Selection** window.
    

![](/Images/Admin-Guide/User-Management/AddDomainRes_4.png)

6. Select one or more domains and click **OK**.

## Removing resources from domains

This section explains how to remove resources from domains in Resource Manager Client. Admins can also remove resources via the CloudShell Portal Inventory dashboard but this removes the resource entirely - see [Deleting Resources from the Inventory](../../../portal/inventory/managing-resources/deleting-resources-from-inventory.md).

**To remove resources via the domain's Resources page:**

1. Click the **Admin** ribbon's **Domains** icon to open the **Domains Explorer** window.

![](/Images/Admin-Guide/User-Management/AddDomainRes_428x106.png)

2. In the **Domains** pane, right-click a domain and select **Open** from the context menu to open the domain's tab.
3. Open the **Resources** page from the **Page** drop down list.

![](/Images/Admin-Guide/User-Management/AddDomainRes_5.png)

1. In the **Resources** page, select the resource that you wish to delete and click the **Delete** button. If the selected resource has descendants, they will be removed as well.

**To remove resources via the domain's Diagram page:**

1. Click the **Admin** ribbon's **Domains** button to open the **Domains** pane.
2. In the **Domains** pane, right-click a domain and select **Open** from the context menu to open the domain's tab.
3. Open the **Diagram** page from the **Page** drop down list.
4. In the **Diagram** page, select the resources and click the **Remove** button in the top left corner of the diagram.

**To remove a specific resource from associated domains**:

1. Right-click the resource and select **Configuration** from the context menu.  
    ![](/Images/Admin-Guide/User-Management/AddDomainRes_2_235x310.png)
2. In the resource's **Configuration** tab, select the **Domains** tab.  
    ![](/Images/Admin-Guide/User-Management/AddDomainRes_3.png)
3. Select one or more associated domains and click **Remove**.
