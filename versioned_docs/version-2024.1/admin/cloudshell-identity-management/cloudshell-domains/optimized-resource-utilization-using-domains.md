---
sidebar_position: 1
---

# Optimized Resource Utilization Using Domains

A domain is a subnet of lab resources and blueprints that are blocked for use by specific teams. The System Administrator specifies which resources and blueprints are available to each domain.

You can allocate resources to a domain via the **Resources** and **Diagram** pages in the domain's tab, or via the **Domains** tab in the resource's **Configuration** tab.

A user's access to lab resources is dictated by the user's group memberships. The System Administrator user limits the scope of each user's access to lab resources and blueprints by adding the users to groups where the user is allowed to operate.

Group association with a domain can be either active or view-only. When a group is added to a domain, the admin user specifies the group's level of access to that domain.

You can associate groups with a domain via the **Groups** tab in the domain's **Properties** page or via the **Domains** tab in the **Groups** tab.

You can view the group associations of any resource in the in the resource's **Configuration** tab's **Groups** area.

Associating a group with a domain grants users of that group access to all of the domain's resources and blueprints. If the group is granted only view-only access to a domain, users in that group will be able to view and request available resource from that domain, but will not be able to reserve resources or sandboxes from that domain.

In the simplest scenario, the admin adds users to groups, and associates each group with a domain. The group membership specifies the user's permissions; while the domain defines where these permissions are applicable.

It's actually somewhat more complex, as users can be added to multiple groups, and groups can be added to multiple domains.

The system includes a built in Global domain which contains all the entities: folders, resources and blueprints. By default, only System Administrators have access to this domain.
