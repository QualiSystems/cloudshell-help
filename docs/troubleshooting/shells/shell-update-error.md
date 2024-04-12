---
sidebar_position: 1
---

# Shell update error: "Failed to update shell"

## Error Message

:::danger &nbsp;
Error: Failed to update shell. CloudShell responded with: 'Error: Removing attributes from an existing shell is not supported. The following attributes are missing from the new shell definition: '`__<attribute name>__`'
:::

## Description

You tried to update a shell, but the new shell version is missing attributes that exist in the old version.

## Solution

**To resolve this issue:**

1. Perform the steps in [Overriding Old/Deprecated Shell Attributes](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Override-old-shell-attributes.htm).
2. Try again.