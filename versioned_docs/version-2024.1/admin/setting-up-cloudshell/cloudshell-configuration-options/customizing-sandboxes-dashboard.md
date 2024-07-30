---
sidebar_position: 9
---

# Customizing The Sandboxes Dashboard

You can display [sandbox inputs](../../../portal/blueprints/creating-blueprints/add-user-inputs.md) in the [sandboxes dashboard](../../../portal/sandboxes/sandboxes-dashboard.md), and use them to filter sandboxes.

Requirements:
- [Configure an attribute](../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md) to have the following rules:
    - For an [attribute sandbox filter](#sandbox-filter): *Sandbox Filter*
    - For custom column: *Custom Sandbox Column*
    ![attribute rules](/Images/Admin-Guide/CustomizingSandboxesDashboard/AttributeRules.png)
- Sandbox inputs must be [bound to an attribute](../../../portal/blueprints/creating-blueprints/link-global-input-to-attribute.md)

## Sandbox Filter

Filtering sandboxes by an attribute - search only for sandboxes by a particular value passed as an input

![filter demo](/Images/Admin-Guide/CustomizingSandboxesDashboard/filter.gif)

## Custom Column

Show a column with values passed for a particular input

![column demo](/Images/Admin-Guide/CustomizingSandboxesDashboard/CustomColumn.png)
