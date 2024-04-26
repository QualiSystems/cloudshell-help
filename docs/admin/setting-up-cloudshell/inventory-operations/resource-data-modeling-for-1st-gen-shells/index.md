# Resource Data Modeling (for 1st Gen Shells)

:::info
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](../../../../intro/features/shells.md).
:::

Every resource in the resource repository inherits a collection of properties and behaviors from the data model on which it is based.

For example, the resource data model describes which attributes and drivers to associate with each type of resource. Initial, default and runtime attribute values are determined by the parent family and model.

Even if you choose to set up the resource data model and populate the resource repository automatically, it's important to understand the process in case you choose to customize the default settings and values. If you assign new attributes or modify the attribute values of a resource family or model, the updated properties will be applied to both new and existing resources.

Defining the resource data model affects the whole system, including how resources are searched for, how abstract resources are created, how they're saved in the database and more.

The resource data model and attributes should be standardized across the company therefore should get a proper design and review procedure prior to deployment.

There are two ways to define the resource data model: importing or manually creating them. In practice, defining the data model usually requires a mix of both methods.

Importing data modeling populates Resource Manager with pre-defined resource families, models and structures. You can import updated definitions by launching the configuration wizard, or by importing xml configuration files via the Resource Families tree. For additional information, see [Importing/Exporting Resource Family Updates](./importingexporting-resource-family-updates.md).

You can use these configuration files to add new resource families, associated models, attributes and their complete structure, or to update existing family and model definitions for the current resource structure.

Importing data modeling is a good starting point for setting up your resource data model, as it sets up common resource data models and configurations.

However, it wasn't designed to cover every possible device brand and version. If you need additional resource data models, you can add them manually. You may want to customize the default properties for imported resource families and models. The available options are extensive.

When you add a new resource family manually, in addition to defining its properties, you'll need to add associated models and structure manually. You can add new resource models to an existing resource family, or to one that you create.