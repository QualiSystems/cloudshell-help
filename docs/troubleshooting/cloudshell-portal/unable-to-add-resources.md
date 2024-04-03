---
sidebar_position: 7
---

# Unable to Add Resources

## Description

The user is unable to perform one or both of the following: 

- Add resources to blueprints.
- Add a new script via the **Manage** dashboard.

## Possible Causes

CloudShell is installed in a High Availability configuration.

WebDAV is enabled under the IIS on the CloudShell Portal machine.

## Solution

:::note Important
If you’re working in High Availability mode, perform these steps on both CloudShell Portal nodes.
:::

**To resolve the issue described above, follow these steps:**

1. On the CloudShell Portal machine, click **Start > Programs and Features > Turn Windows features on or off**
2. Under **Internet Information Services > World Wide Web Services > Common HTTP Features** > ensure that **WebDav Publishing** is unchecked.
3. Restart CloudShell Portal:
    1. Launch the IIS Management console.
    2. Click the CloudShell website.
    3. Click **Restart** under the **Manage Website** section on the right.
        :::note
        Restarting the website will disconnect all logged in users.
        :::

## Related Topics

[Configure the Self-Service Portal](../../install-configure/cloudshell-suite/configure-products/configure-portal/index.md)
