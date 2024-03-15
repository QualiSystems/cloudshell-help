---
sidebar_position: 2
---

# Abstract Resources Overview

This article introduces abstract resources, their function in CloudShell and outlines how to configure them.

## What is an abstract resource?

An abstract resource is a component that allows CloudShell to add (to the sandbox) resources based on a set of requirements, such as resource model and/or specific attribute values. When reserving a blueprint that has an abstract resource, CloudShell will find resources that meet the resource requirements and are available for the time slot of the sandbox, and add them to the sandbox. You cannot add abstract resources directly to a sandbox, only to the blueprint. Blueprints can contain a mixture of abstract and specific resources.

An abstract resource is represented on the diagram as a resource with a dotted circle around it. For example:

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/Abstract-Resource-1.png)

## What does an abstract resource include?

An abstract resource must include the family of the resource, and can optionally include the following:

**Requirements:**

Requirements are the resource settings you need the desired resource to have. CloudShell will only select resources that fully match this criteria. You must select the resource family but you can include any combination of the rest of the requirements in your abstract resource.

:::note
As you add or update your requirements, CloudShell updates the number of matching inventory resources in the top right corner of the abstract resource dialog box.
:::

- Family (mandatory)
- Quantity: number of resources to select
- Sharing policy
- Model: model or models within the selected family
- Attribute values
- Sub-resources: sub-resource settings, such as blades, ports, attribute values on each sub-resource

**Additional info:**

Additional info is information you can add to the abstract resource for automation processes and to make available for the sandbox end-user. For example, you may want to save the resource firmware version, which needs to be upgraded as part of the sandbox provisioning process. Another example could be referencing the image file location of the resource.

- Attribute values

**Domains:**

The domains in which this abstract resource can be used. By default, the current domain is selected and cannot be removed from the abstract resource.

For additional information about Requirements, Additional info and Domains, see [Abstract Resource Settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Abst-Rsrc-Tmplt-Sttngs.htm).

## Related Topics

- [Add Abstract Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/RSRC-n-SRVC-Wrk-wth-Abst-Rsrc.htm)