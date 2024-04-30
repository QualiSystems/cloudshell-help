---
sidebar_position: 6
---

# Unable to Share Resources

## Error Message

:::danger-one-line
This action cannot be completed. The resource or its sub resources are being used in another reservation.
:::

## Description

This error is displayed if, when reserving a blueprint, any of the required connectivity ports (for connections between sandbox endpoints) are being used in another reservation.

## Possible Causes

The connection end points were not defined as shared.

## Solution

To resolve the issue described above, ensure that the endpoints you want to make available in multiple reservations, are marked as **Shared**.

You will now be able to share resources in multiple reservations, assuming the physical equipment supports this capability.

## Related Topics

[Share Reserved Resources](../../portal/blueprints/creating-blueprints/resources/share-reserved-resources.md) (in blueprints)

[Share Reserved Resources](../../portal/sandboxes/sandbox-workspace/resources/share-reserved-resources.md) (in sandboxes)
