---
sidebar_position: 3
---

# Adding Domains

Only system administrator users are allowed to create and modify domains. The **Domains** explorer and the domain tab's pages are not available for other users.

Designated system administrators have limited permissions for performing domain operations. A sys admin user can update resource allocation settings from within the resource's **Configuration** tab. Domain administrators can perform admin level operations within their domains.

**To add a new domain:**

1. In the **Admin** ribbon, click the **Domains** button to open the **Domains Explorer** window.  
    
2. In the **Domains** explorer, click the **New** button to add a new domain.  
    ![](/Images/Admin-Guide/User-Management/NewDomainWin.png)
3. In the **New Domain** dialog box, enter the **Domain** Name.
4. Add a short description of the domain. This step is optional but recommended.
5. Click **OK** to add the new domain.
6. Next, set up the domain, as explained in [Domains Window](../../../admin/cloudshell-identity-management/cloudshell-domains/domains-window.md).


## Minimum Lead Time

You can require sandboxes in a domain to be reserved ahead of time. When a domain has a minimum lead time:

- Sandboxes can't be reserved to start immediately. The **Now** option isn't offered in the reservation dialog.
- A sandbox's start time must be at least the minimum lead time from the moment it's reserved. This applies to reservations made from the Portal and through the API.

A value of 0 (the default) means no restriction.

**To set the minimum lead time:**

1. In Resource Manager, open the domain and select the **Properties** page (see [Domains Window](./domains-window.md#properties-page)).
2. In **Min. Lead Time**, enter the number of minutes (0 to 525600) and press **Enter**.

You can also set it with the `MinimumLeadTimeMinutes` parameter of the [Edit domain](../../../api-guide/cs-admin-rest-api/edit-domain.md) Admin REST API call.
