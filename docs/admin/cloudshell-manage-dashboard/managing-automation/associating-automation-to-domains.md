---
sidebar_position: 4
---

# Associating Automation to Domains

CloudShell supports multi-tenancy for CloudShell components (scripts, resources, services, and Apps), allowing users in other domains to also use them. However, in the Global domain, you can manage all components regardless of their association to any particular domain.

## Scripts in multiple domains

When you add a script, it is associated to the domain you are currently in.

- To expose a script to all domains, add the script to the Global domain.
- If you added a script it to a blueprint or resource that has additional domains, the script will be accessible in those domains as well.

## Resources in multiple domains

To enable users of a specific domain to access and use a resource, you must associate that resource to the domain.

- If you add a resource to a blueprint that is associated with multiple domains, the resource will be accessible in those domains as well.
- You can add a resource directly to an additional domain through Resource Manager. See [Adding resources to a domain](../../../admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain.md#adding-resources-to-a-domain).

## Services and Apps in multiple domains

### Services

When you import a service shell, most shells are automatically assigned a default service category which is associated with the Global domain. For custom shells, this may not be true.

To expose a service to users of a non-Global domain, either associate the service to a category that is assigned to that domain or associate the service's category to that domain.

- For 1st gen service shells: modify the category(s) in the shell project’s configuration files to add a new category(s). See the CloudShell Dev Guide's [Migrating Shells to Python 3](../../../devguide/reference/migrate-shells-to-py3.md).
    
- For 2nd gen service shells: See the CloudShell Dev Guide's [Associating categories to a service shell](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Customizing-Shells.htm#Associat).
    

### Apps

By default, all Apps are associated with the **Applications** category, which exposes those Apps in the Global domain.To expose an App in a non-Global domain, associate the App to a category in that domain. However, you also need to associate the App's deployment to that domain. To learn how to do this, see [Managing Public Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md) or [Managing Private Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md).
