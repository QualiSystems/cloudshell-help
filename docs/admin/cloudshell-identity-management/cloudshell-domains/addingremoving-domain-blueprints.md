---
sidebar_position: 5
---

# Adding/Removing Domain Blueprints

The are two ways to add blueprints to a domain: in the domain tab's **Properties** page, under **Topologies**, or in the domain tab's **Diagram** page.

- Use the **Topologies** tab to view the list of all associated blueprints, to add blueprints to the domain, or to remove selected blueprints.
- Use the domain tab's **Diagram** page to add new blueprints directly from **Resource Explorer**, and to perform blueprint operations.
- Multi selection is supported.

:::note Notes:
- When adding a blueprint to a domain, the blueprint's resources, services and Apps are added as well.
- The blueprint's properties, including privacy setting, are also preserved, so if the blueprint is private, only the blueprint's owner will be able to see it in the new domain.
:::
**To add blueprints to a domain:**

1. In **Resource Manager Client**, in the domain's tab, open the **Properties** page and select the **Topologies** tab.
2. Click the **Add** button and select the required blueprints.
    
    ![](/Images/Admin-Guide/User-Management/DeleteDomain_1.png)
    

**To remove a blueprint from a domain:**

1. In **Resource Manager Client**, in the domain's tab, open the **Properties** page and select the **Topologies** tab.
2. Select the blueprints that you wish to remove and click the toolbar's **Delete** button.

## Adding blueprint routes

You can use the domain tab's **Diagram** page to manage blueprint routes.

You can add route segments for blueprint resources with existing connections.

- Adding a new route adds all of the resources for that segment.
- Deleting a route removes all the resources in the route except for the end point resources.