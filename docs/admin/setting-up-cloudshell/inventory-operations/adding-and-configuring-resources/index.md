# Adding and Configuring Resources

:::info
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Shells.htm).
:::

In Resource Manager Client, you can manually add and configure resources. This includes setting up the resource's data model, structure including sub-resources, associating a driver that provides automation commands to be executed on the resource in CloudShell, and associating domains to the resource to allow the domain's users to access and use it.

## Adding and configuring resources in Resource Explorer

Each resource in the **Resource Explorer** pane represents a resource, including the resource's model, address, internal resources such as ports, internal port mappings, and other settings.

**To add or modify resources in Resource Explorer:**

1. Define the relevant resource data model. For more details, see [Defining the Resource Data Model](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#top).
2. Create the resources, associate the relevant attributes, and create the relevant resource connections. See [Adding and Configuring Resources in Resource Manager](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-n-Cnfg-Rsrc-manul.htm#top).
    
    If you are populating your CloudShell inventory for the first time, we recommend to use the CloudShell Autodiscovery tool, which allows you to load multiple resources at the same time. For additional information, see the tool's [readme](https://github.com/QualiSystems/cloudshell-autodiscovery/blob/master/README.md).
    
3. Associate the required resource driver. See [Associating a Driver with a Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-Rsc-Drv.htm).
4. Associate the resource to the required domains. See [Adding/Removing Resources from a Domain](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-dmn-rsrc.htm) .

## Related Topics

- [Import a Blueprint Package into CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Imprt.htm)