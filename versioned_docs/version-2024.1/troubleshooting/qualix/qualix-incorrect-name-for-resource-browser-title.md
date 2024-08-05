---
sidebar_position: 7
---

# QualiX: Incorrect Name for Resource Browser Title

## Description

:::note 
This issue applies to QualiX versions 4.1.1.417 and below. To fix it, download version 4.1.1.418 or later from the [QualiX Download Page](https://support.quali.com/hc/en-us/articles/360037650694), and update the `ServerUniversalSettings.xml` configuration file, as explained below.
:::

The same browser tab title is displayed for remote connections to different resources. This issue mostly occurs for remote connections using telnet, but can also occur for the other protocols.

## Solution

1. Open the `ServerUniversalSettings.xml`.
2. Replace the protocol in the remote connection lines to its first letter. For example, change "telnet" to "t".
    
    For example:
    
    ![](/Images/QualiX/BrowserTabTitle.png)
    
3. Save the file.
4. Restart the **Quali Server** service to apply the changes.
