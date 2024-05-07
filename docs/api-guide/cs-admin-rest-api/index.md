# CloudShell Administration REST API

This API enables developers to perform CloudShell administration tasks. This includes managing CloudShell users, groups, domains, license pools, associating resources and blueprints to other domains, and more.

The following Administration APIs are available:

**Login:**

- [Get Administration API token](./get-admin-api-token.md)

**Domains:**

Manage CloudShell domains.

- [Get all domains](./get-all-domains.md)
- [Create domain](./create-domain.md)
- [Get domain by ID](./get-domain-by-id.md)
- [Edit domain](./edit-domain.md)
- [Delete domain](./delete-domain.md)

**DomainBlueprints:**

Manage a domain's blueprints.

- [Get domain's blueprints](./get-domain-blueprints.md)
- [Add blueprints to domain](./add-blueprints-to-domain.md)
- [Remove blueprints from domain](./remove-blueprint-from-domain.md)

**DomainGroups:**

Manage a domain's group associations.

- [Get domain's groups](./get-domain-group)
- [Add groups to domain](./add-groups-to-domain.md)
- [Remove groups from domain](./remove-groups-from-domain.md)

**DomainResources:**

Manage a domain's resources.

- [Get domain's resources](./get-domain-resources.md)
- [Add resources to domain](./add-resource-to-domain.md)
- [Remove resources from domain](./remove-resource-from-domain.md)

**Groups:**

Manage CloudShell groups.

- [Get all groups](./get-all-groups.md)
- [Create group](./create-group.md)
- [Get group by ID](./get-group-by-id.md)
- [Edit group](./edit-group.md)
- [Delete group](./delete-group.md)

**GroupDomains:**

Manage a group's domain associations.

- [Get group's domains](./get-group-domains.md)
- [Add domains to group](./add-domains-to-group.md)
- [Remove domains from group](./remove-domains-from-group.md)

**GroupUsers:**

Manage a group's users.

- [Get group's users](./get-group-users.md)
- [Add users to group](./add-users-to-group.md)
- [Remove users from group](./remove-users-from-group.md)

**Users:**

Manage CloudShell users.

- [Get all users](./get-all-users.md)
- [Get user by ID](./get-user-by-id.md)
- [Create user](./create-user.md)
- [Edit user](./edit-user.md)
- [Delete user](./delete-user.md)

**IdentityManagement:**

Get and import users from your active directory or LDAP.

- [Get all external groups](./get-all-external-groups.md)
- [Get users from an external group](./get-users-from-an-external-group.md)
- [Import external users](./import-external-users.md)

**LicensePools:**

Manage CloudShell license pools.

- [Get all license pools](./get-all-license-pools.md)
- [Get license pool by ID](./get-license-pool-by-id.md)
- [Create license pool](./create-license-pool.md)
- [Edit license pool](./edit-license-pool.md)
- [Delete license pool](./delete-license-pool.md)