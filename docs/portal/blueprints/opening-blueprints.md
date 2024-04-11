---
sidebar_position: 2
---

# Opening Blueprints

There are two ways to open an existing blueprint, from the Blueprint Catalog and by opening a link to the blueprint.

Both methods only apply to blueprints you are permitted to access. These include blueprints you created and public blueprints in the domain.

## Opening a blueprint from the Blueprint Catalog

**To open a blueprint from the Blueprint Catalog:**

1. In CloudShell Portal, access the blueprint's domain.
2. Click the **Blueprints** menu.
    
    The blueprints you are permitted to access are displayed.
    
3. Click the tile of the blueprint.
    
    The blueprint's workspace is displayed.
    

## Opening a blueprint link

To allow CloudShell users to conveniently share and collaborate on blueprints and sandboxes, we implemented support for opening blueprint and sandbox URLs in the diagram's domain, even if CloudShell Portal is currently open in a different domain. This option is enabled by default and can be disabled using the `AutoSwitchDomain` admin key.

:::note
Since blueprint URLs do not include the blueprint's domain, the URLs need to be generated using the `GetTopologyUrls` API method, which includes this information in the link. The method is available in the [CloudShell Automation API](pathname:///api-docs/2023.3/Python-API/cloudshell.api.html?highlight=gettopologyurls#cloudshell.api.cloudshell_api.CloudShellAPISession.GetTopologyUrls) and [TestShell API](pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html#GetTopologyUrls).
:::

**To open a blueprint link:**

- Click the blueprint link.
    
    CloudShell opens the blueprint workspace, prompting you to first log in to CloudShell Portal or switch to the blueprint's domain, if needed.
    

## Related Topics

- [Opening Sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Open.htm)