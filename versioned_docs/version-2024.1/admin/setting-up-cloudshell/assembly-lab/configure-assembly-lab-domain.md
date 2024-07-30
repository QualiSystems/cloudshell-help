---
sidebar_position: 2
---
# Configure an Assembly Lab Domain

To leverage the capabilities of Assembly Lab, a domain must be configured to the Assembly Lab domain. Once the domain is configured, all sandboxes created within this domain will adhere to the specific rules of Assembly Lab.

:::warning
Once a domain has been configured as an assembly lab domain, do not try to change it back to a non-assembly lab domain. Assembly Lab domains have a different set of rules for resource management and blueprint resolution which are not compatible with standard domain operation.
:::

To set a domain to be an Assembly Lab domain, open the [domain's properties page in Resource Management Client](../../cloudshell-identity-management/cloudshell-domains/domains-window.md).

1. Press Edit next to the domain name.
2. Tick the checkbox Assemble Lab and press `Ctrl+S`.

![configure domain](../../../../static/Images/Admin-Guide/AssembleLab/configure-domain.png)