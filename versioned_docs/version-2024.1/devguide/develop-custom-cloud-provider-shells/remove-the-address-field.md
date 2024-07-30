---
sidebar_position: 5
---

# Removing the Address Field

For some cloud providers, like AWS EC2 and Azure, the **Address** field is irrelevant. If this is the case, you can easily remove the field from the shell by setting the **hide_address** property in the shell-definition.yaml. In the `capabilities` section, under `properties`, uncomment the property and set it to ***true***:

```yaml
node_types:
 vendor.resource.ClpShell:
    derived_from: cloudshell.nodes.CustomCloudProvider
    properties:
      my discovery attribute:
        type: string
    capabilities:
      concurrent_execution:
        type: cloudshell.capabilities.SupportConcurrentCommands
      auto_discovery_capability:
        type: cloudshell.capabilities.AutoDiscovery
        properties:
          my discovery attribute:
            type: string
          VLAN Type:
            type: string
          enable_auto_discovery:
            type: boolean
            default: true
          auto_discovery_description:
            type: string
            default: Describe the auto discovery
          inventory_description:
            type: string
            default: Describe the resource shell template
#          hide_address:
#            type: string
#            default: false
```