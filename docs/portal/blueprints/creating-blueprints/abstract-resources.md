---
sidebar_position: 7
---

# Add Abstract Resources

This article explains how to create abstract resources.
:::note
Abstract resources can be saved as templates, which can be easily added to any blueprint, just like any specific resource. Abstract templates are created and managed by the administrator in the Inventory dashboard, in the Abstract Templates page.
:::

## Creating abstract resources

You can use abstract resources in your blueprint in the following ways:
<details>
    <summary>To add an abstract resource template from the Inventory</summary>

1. Click the **Abstract** button in the toolbar.
    
    The **Add Abstract Template** pane is displayed, listing all the resource templates in the system.
    
2. To find the resource template, use the **Families** and **Models** groupings on the left side of the pane and/or search for the resource template by name.
    :::note
    Only families of existing resources are displayed.
    :::
3. Drag and drop the relevant template to the diagram to add it to the blueprint.
</details>

<details>
    <summary>To create a new abstract resource</summary>

1. In the blueprint diagram, click the **Blueprint** menu and select the **Create Abstract Resource** option.
    
    The **Create Abstract Resource** dialog box is displayed.
    
2. Select the resource family. Only families of existing resources are displayed.
    :::tip
    Resources that have a "CS\_" prefix are based on 2nd Gen Shells.
    :::
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/AbstractResTypeSelection.png)
    
    An empty abstract resource definition dialog box is displayed.
    :::note
    The **Matches** section in the top right of the dialog box indicates how many resources satisfy the new abstract resource requirements (at the moment, the only requirement is the selected resource type).
    :::
3. Enter a **Name** for the abstract resource.
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
4. There are three types of resource requirements you can add: **Models** define the model of the resource, **Attributes** define attributes of the resource, and **Sub-resources** are resources within the resource (such as ports). For additional information, see [Defining Requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Abst-Rsrc-Tmplt-Sttngs.htm#Defining).
    
    :::note Special considerations
    - For resources based on a 1st Gen Shell, when creating the abstract resource from an existing resource and no model is selected, the Attributes drop down displays all attributes that are shared among the resource’s family and models.
    - For resources based on a 2nd Gen Shell, only the family’s attributes are displayed, as each model’s attributes have a namespace that is unique to that model.
    
    Therefore, if you want to define an abstract resource based on attributes without limiting it to a specific model, either use family-level attributes or use custom attributes, which can be associated with multiple models. To learn how to create and associate custom attributes with your Shell, see the CloudShell Dev Guide's [Deploying to Production](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Deploying-to-Production.htm).
    :::
5. **Additional Information** inputs are inputs that aren't mandatory. Use these to prompt the user for inputs that drive provisioning or provide general information about the resource. For additional information, see [Defining Additional Info](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Abst-Rsrc-Tmplt-Sttngs.htm#Addition).
6. Click **Save Changes**.
    
    The new abstract resource is displayed in the diagram.
    
    Reserving the blueprint will automatically pick a match for it based on resource availability.
</details>    
<details>
    <summary>To replace an existing resource with an abstract resource</summary>

This action changes a specific resource in the diagram into an abstract resource, while retaining the original resource's settings, family, model and attribute values.

1. In the blueprint diagram, hover over a resource and select the **Replace With Abstract** option.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/ReplaceWithAbstract_355x141.png)
    
    The resource becomes an abstract resource with the same structure and attributes as the resource it replaced.
    :::tip
    Consider changing the abstract's settings so as not to limit resource selection. For example, removing unneeded attribute values.
    :::
2. Edit the abstract resource as necessary - see [Abstract Resource Settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Abst-Rsrc-Tmplt-Sttngs.htm).
3. Save the abstract resource.
</details>

<details>
    <summary>To duplicate an existing abstract resource or template</summary>

The quickest way to create a copy or a variation of an existing abstract resource or template is simply to duplicate it.

1. In the blueprint diagram, hover over an abstract resource and select **Duplicate**.
    
    The new abstract resource is added to the blueprint with the same settings as the original.
    
2. Edit the abstract resource as necessary - see [Abstract Resource Settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Abst-Rsrc-Tmplt-Sttngs.htm).
3. Save the abstract resource.
</details>

## Related Topics

- [Blueprint Workspace](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Blprnt-Brws-Wrkspc.htm)