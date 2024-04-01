---
sidebar_position: 6
---

# Unable to Share Resources

## Error Message

:::danger &nbsp;
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

[Share Reserved Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Blprnt-Shr.htm) (in blueprints)

[Share Reserved Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Sndbx-Shr.htm) (in sandboxes)
