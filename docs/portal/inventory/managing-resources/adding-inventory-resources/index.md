# Adding Inventory Resources

In the **Inventory** dashboard, administrators can add resources based on Shell packages and cloud provider resources for App deployments.

In order to add resources that are based on a Shell, the administrator needs to first import that Shell's package into CloudShell Portal. The Shells are preconfigured with the required settings, attributes, and automation. For additional information, see [Shells Overview](../../../../intro/features/shells.md).
:::note Notes
- CloudShell administrators can download the required Shell package from [Quali Repositories](https://github.com/orgs/QualiSystems/repositories) and import it into CloudShell Portal. For details, see [Managing Shells](../../../../admin/cloudshell-manage-dashboard/managing-shells.md).
- If you are populating your CloudShell inventory for the first time, we recommend to use the **CloudShell Autodiscovery** tool, which allows you to load multiple resources at the same time. For additional information, see the tool's [readme](https://github.com/QualiSystems/cloudshell-autodiscovery/blob/master/README.md).
:::

**To add a resource using a Shell:**

1. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
2. Click **+ Add New**.
3. In the **Add New Resource** dialog box, select the required Shell from the list.
4. Enter the required information. Type the **Name** and **IP Address** of the resource.
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
    
5. Click **Create**.
    
    You may be prompted at this point to start the discovery process (if there is a discovery option for this particular resource).
    
    A new dialog box is displayed for the discovery process.
    :::note
    The required inputs vary per driver.
    :::
    
6. Enter the required information (for example, **Password** and **User** name), and click **Start Discovery**.
    
    A message is displayed, confirming that the discovery process has started. The discovery process validates the resource's settings against the actual device, and loads the device's resource structure (if exists) and settings into the resource.
    
    :::note
    During the discovery process, the resource is excluded from use. In the Inventory list, the resource is marked by status icons with tooltips, indicating that the resource is excluded from use (!) and that the discovery process is in progress (![](/Images/CloudShell-Portal/INVN/offlinedisc.png) indicates the resource is offline during discovery). When the discovery process has completed, the status icons change accordingly, and the resource becomes available for use.
    :::
    
    When the discovery process has completed, a confirmation message is displayed.
    
    CloudShell adds the new resource using the Shell’s settings, attributes, and driver.
    
    The resource is displayed in the **Inventory** list in CloudShell Portal and in Resource Manager.
    

## Related Topics

- [Inventory Dashboard](../../inventory-dashboard)
- [Traffic Generators Overview](../../../../intro/features/traffic-gens/index.md)
- [Editing Resources from the Inventory Dashboard](../editing-resources-from-inventory-dashboard.md)
- [Discovering Inventory Resources](../discovering-resources.md)