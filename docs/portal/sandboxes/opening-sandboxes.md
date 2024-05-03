---
sidebar_position: 2
---

# Opening Sandboxes

There are two ways to open an existing sandbox, from the Sandboxes dashboard and by opening a link to the sandbox.

Both methods only apply to sandboxes you are permitted to access. These include sandboxes you own, sandboxes in which you are a permitted user and public sandboxes in the domain.

## Opening a sandbox from the Sandboxes dashboard

**To open a sandbox from the Sandboxes dashboard:**

1. In CloudShell Portal, access the sandbox's domain.
2. Click the **Sandboxes** menu.
    
    The sandboxes you are permitted to access are displayed.
    
3. Make sure you are in **List** view. If not, click the **List View** button (![](/Images/CloudShell-Portal/Lab-Management/Reservations/ListViewModeButton_17x17.png)) from the blue toolbar.
4. Click the sandbox name.
    
    The sandbox's workspace is displayed.
    

## Opening a sandbox link

To allow CloudShell users to conveniently share and collaborate on blueprints and sandboxes, we implemented support for opening blueprint and sandbox URLs in the diagram's domain, even if CloudShell Portal is currently open in a different domain. This option is enabled by default and can be disabled using the `AutoSwitchDomain` admin key.

:::note
Unlike blueprint links, which must be generated using the API, the sandbox link is simply the URL of the sandbox workspace.
:::

**To open a sandbox link:**

- Click the link.
    
    CloudShell opens the sandbox workspace, prompting you to first log in to CloudShell Portal or switch to the sandbox's domain, if needed.
    

## Related Topics

- [Opening Blueprints](../blueprints/opening-blueprints.md)
