---
sidebar_position: 5
---

# Unable to Save New App

## Error Message

:::danger-one-line
HTTP 405 Error (Method Not Allowed)
:::
## Description

When creating a new App in the **Manage** section of CloudShell Portal, the user cannot save the App. When the user clicks **Done**, the operating system returns an error, the process is halted and the app is not saved. Note that this is an operating system error message and not an error message in CloudShell.

## Possible Causes

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