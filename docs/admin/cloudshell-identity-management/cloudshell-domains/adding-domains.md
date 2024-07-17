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


**Minimum Lead Time**

You have the ability to establish a minimum lead time for reserving Sandboxes within a specific domain. This means that when this setting is configured, any sandbox reservations must be made for a date in the future, not for immediate use.

To implement this, you need to adjust the `MinimumLeadTimeMinutes` parameter via a specific API call. Detailed instructions on how to make this API call can be found in [this guide](../../../api-guide/cs-admin-rest-api/edit-domain.md).
