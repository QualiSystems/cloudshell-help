---
sidebar_position: 1
---

# How QualiX Works

This articles illustrates the sequence of events that take place when a user opens a remote access link. For details on QualiX architecture and ports, see the [Related Topics](#related-topics) section at the bottom.

:::note Notes
- When using a QualiX server that is installed on AWS, a pem file is used for authentication instead of the reservation owner's CloudShell credentials.
- Communication between CloudShell Portal and QualiX is always over HTTPS.
- QualiX only displays connection links that are available for the selected resource or App. Connections that require an attribute that is missing from the component are not displayed.
:::
![](/Images/QualiX/QualixFlowDiagram_760x386.png)

1. In CloudShell Portal, the user clicks a resource or App in the sandbox.
    
    The **Actions** context menu is displayed, listing the component's remote connection links. These may include remote connection links RDP, SSH, Telnet and VNC and any others defined in the file.
    
2. The user selects a remote connection link.
3. CloudShell Portal gets the access credentials of the reservation owner from Quali Server and any other relevant parameters from the `ServerUniversalSettings.xml` file.
4. A new browser tab is opened
5. Quali Server authenticates against QualiX and creates a session.
6. QualiX redirects the user to the correct page with a different URL. For example: `http://192.168.70.30/remote/#/client/c3NocXVhbGkAYwBxdWFsaS1hdXRo`.

## Related Topics

- [CloudShell Component Architecture](../../cs-system-requirements/cs-component-architechture.md)
- [Microsoft Azure Integration](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index.md)
- [AWS Integration](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md)
- [CloudShell Port Requirements](../../cs-system-requirements/cs-port-requirements.md)