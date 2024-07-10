---
sidebar_position: 1
---

# Abstract Resource Settings

## Defining Requirements

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/CreateAbstractResource1.png)

Abstract resources enable you to control how restrictive or relaxed the match conditions are. It is possible to scope an abstract resource to candidates of a particular family, a particular family and model, a group of possible models, as well as add attribute and quantity restrictions. All this is possible to set both at the resource and sub-resource level. If that sounds complicated, bear in mind that you can make the abstract resource as simple or complex as you wish it. The abstract requirements can express something as simple as a "router with three 10 GB ports" or something drastically more complicated with multiple model and attribute restrictions on each level of the resource structure.

### The number of matches indicator

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/NumberOfMatches.png)

Notice the number of matches counter at the top right side of the dialog. As you modify the restrictions and structure of the abstract resource, it continually updates to provide feedback on the number of different root resources that match all the requirements in the abstract. For example, if the abstract requirements are for 1 root resource with 2 ports and you have 1 inventory resource that has 10 ports and several resources with 1 port each, the matching number will be "1".

:::note Notes
- The number of matches does not indicate if the resources are available or excluded. It's simply an aid to help you determine if there are resources in your inventory that match the abstract requirements.
- For performance reasons, when resolving sub-resource requirements, only the first 1000 matches are considered. So for example, if the first 1000 sub resources are unavailable when reserving the blueprint, the resolution will fail. Note that "1000" is the default and can be changed via the `AbstractSubResourceResultsPageSize` configuration key.
:::
### Resource sharing strategy

For some resources it makes sense to use the entire resource exclusively. That means that when you use the resource, it and all of its sub-resources become available exclusively for you.

Alternatively, you can choose to share the resource. This strategy is especially useful for resources that are either completely shared, or managed mostly at the port level. In such a scenario the chassis or top level device would be shared but users would have exclusive access to each port.

**To set the sharing status of the abstract resource:**

- Select either the **Share with others** or **I need the entire resource** option.
    
    The sharing preference is available for each level of the abstract resource structure. So if you add additional sub-resources, you will be able to set the sharing preference for each of them individually.
    

### Save behavior for abstract resources

This setting determines how the abstract resource will behave when saving the sandbox. The abstract resource's template determines the abstract resource's behavior in the blueprint, but blueprint designers can change it.
:::note
The blueprint's abstract template save behavior policy determines the behavior of the abstract resources in the blueprint. For additional information, see [Define the Blueprint's Properties](../../../blueprints/creating-blueprints/blueprint-properties.md).
:::
**To change the save behavior for an abstract resource:**

- Select the **Revert to abstract when saving sandbox** checkbox to save the abstract resource or unselect to save the resource that was selected in the sandbox.
    :::note
    This checkbox is only displayed if **Save & Restore** is enabled.
    :::

### Resource Model options

Model requirements limit the solution of the abstract resource to specific models within the family. The order of the models will affect the solution. First the system will look for solutions for the 1st model and if there are none available for the sandbox time slot, it will look for resources of the 2nd model, and so on.

**To specify a possible model:**

1. Click the **Add Model** button.
    
    A dropdown list is displayed with possible model options.
    
2. Select a model.
    
    The model is displayed under the **Models** section. You can always remove it later using the delete icon next to the model name.
    
3. Add additional model options by clicking the 'plus' button.
4. If an abstract resource has multiple model options specified, when reserving the blueprint, the system will search for available candidates in the order they appear in the dialog box, starting with the leftmost model. You can rearrange the order by dragging the relevant models left or right.
    :::note
    Model priority only applies to the main resource (not to sub-resources).
    :::
5. To have the user select the suitable model when reserving the blueprint, click ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/PublishButton_29x29.png). See [Publishing abstract resource user inputs](#publishing-abstract-resource-user-inputs).
    
6. Click **Save Changes**.

### Attribute restrictions

In addition to restricting the possible models, it is possible to set any attribute and attribute value as a restriction for the resource. The order of the attribute values doesn’t affect the solution.
:::note
Only attributes that have the **Available for Abstract Resources** rule are available.
:::
**To add attribute restrictions:**

1. Click the **Add Attribute** button.
    
    A dropdown list displays the available attributes in the selected family. However, if you also selected models, the list will display the available attributes in the selected models instead.
    
2. Select an attribute.
    
    Additional fields are displayed.
    
3. From the dropdown list, select the appropriate option and specify the value. You can specify multiple attributes as well as multiple values of the same attribute.
    :::note
    Multiple values of the same attribute have an OR relationship while multiple attributes have an AND relationship.
    :::
    1. From the dropdown list, select an attribute.
    2. Choose the appropriate option.
        
        - For **String** attributes, supported options are: Equals, Is not Equal, Contains, Does Not Contain, Starts With, and Ends With.
        - For **Numeric** attributes, supported options are: =, !=, \<, \>, \<=, and \>=.
        - For other types of attributes, select **Any** to allow any value for the attribute (as long as the resource has it) or select **Equals** to set a specific value.
    3. Specify the value (case-sensitive).
        
        Partial attribute values are supported (applies to String attributes).
        
    4. To add the requirement, click the check button to the right of the attribute.
        
        Additional options are available in the buttons to the right of the attribute requirement:
        
        - ![](/Images/CloudShell-Portal/INVN/AbstractResourceNewAttributeFilter.png) - Add a new filter to the attribute. Multiple values of the same attribute have an OR relationship while multiple attributes have an AND relationship.
        - ![](/Images/CloudShell-Portal/INVN/AbstractResourceEditAttributeFilter.png) - Edit the attribute's filters.
        - ![](/Images/CloudShell-Portal/INVN/AbstractResourceRemoveAttributeFilter.png) - Remove the attribute and its filters. To remove a specific attribute filter, click the 'x' icon on the filter itself.
        - ![](/Images/CloudShell-Portal/INVN/AbstractResourcePublishAttributeFilters.png) - Publish the attribute as an input when reserving a blueprint containing this abstract resource, to allow the user to specify a suitable value.
4. Click **Save Changes**.

### Adding sub-resources

The sub-resource structure of the abstract resource is displayed on the right side of the dialog box. As you add additional sub-resources, they are automatically added to the resource structure as individual components in their correct place in the hierarchy. To edit an existing sub-resource, click the sub-resource's box on the right and edit the requirements and properties.

In the example below, you can see the Juniper switch abstract resource structure is defined as a chassis with two ports, the second port is selected and is currently being edited:

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/Connectivity.png)

**To add a sub-resource:**

1. Click the **Add Sub Resource** button.
    
    A page is displayed, showing resource types that can be used as sub-resources for the current abstract resource.
    
2. Select the resource type to use.
    
    A new abstract resource box is added to the right side of the dialog box, under the main resource box.
    
3. Configure the sub-resource's requirements and properties.
4. To add additional sub-resources, either click the main abstract resource and then click **Add Sub-Resource**.
    
    -or-
    
    Duplicate an existing sub-resource by selecting the sub-resource and clicking the **Duplicate** button located directly above the **Quantity** field.
    
5. Click **Save Changes**.

:::note Notes
- You do not have to reconstruct the entire resource hierarchy. For example, even if the resource has a complex structure, such as chassis-\>slot-\>subslot-\>port group-\>port, the abstract resource does not need to include all of these levels and can contain just the chassis and the port if those are the relevant resources.
- For performance reasons, when resolving sub-resource requirements, only the first 1000 matches are considered. So for example, if the first 1000 sub resources are unavailable when reserving the blueprint, the resolution will fail. Note that "1000" is the default and can be changed via the `AbstractSubResourceResultsPageSize` configuration key.
:::
### Connectivity

Unless the main abstract resource is also connectable (doubles as a port), adding abstract sub-resources is crucial in order to later define connectivity with other resources (abstract or specific) in the blueprint.

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/Connectivity.png)

Creating connectivity requirements between an abstract resource and another endpoint in the blueprint diagram follows the same process as with any other resource. However, the following need to be considered:

- CloudShell does not take into account VLAN connectivity requirements when resolving an abstract resource in the sandbox. It is therefore recommended to use physical layer connectivity for connections involving one or more abstract resources. For additional information, see [Add Physical Network Connectivity Requirements](../../../sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/index.md).
- Abstract resources and sub-resources assigned a quantity value greater than one are not connectable to other devices in the blueprint via routes.
- Shared ports cannot be used for connectivity. Therefore, make sure each sub-resource that represents a port in the abstract resource is unshared. To do this, in the abstract resource dialog box, select the sub-resource and select the **I need the entire resource** option.
    
    ![](/Images/CloudShell-Portal/INVN/AbstractResourceUnshareSubresource.png)
    

### Quantity

For each resource and sub-resource, you can determine how many resources that match the specified requirements must be selected. This can be useful in defining large amounts of resources. For example, adding 80 LUNs to a storage device requirement.
:::note
If the number of required resources is not available, the abstract resource will not have a solution for the time slot.
:::
**To specify the quantity:**

- Enter the number in the **Quantity** field.
    
    In the blueprint diagram, the quantity specified is displayed next to the abstract resource's name. For example, this abstract resource is set to a quantity of three:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/AbstractResourceQuantity.png)
    

The quantity feature has one important limitation, though. Abstract resources and sub-resources assigned a quantity value greater than one are not connectable to other devices in the blueprint via routes. This limitation should be considered when debating whether to use the 'duplicate' functionality to create a couple of ports of the quantity restriction.

## Defining Additional Info

Beyond the model, attribute, and quantity requirements, which are used to select the right resources when the user reserves the blueprint, additional information can be added to the resource. This additional information will later be available to the provisioning process or to the user in the sandbox itself. One example would be saving the resource's firmware version, which needs to be upgraded as part of the sandbox provisioning process, or referencing the image file location of the resource. The **Additional Info** section provides a placeholder where such information can be stored.

![](/Images/CloudShell-Portal/INVN/AbstractResourceAdditionalInfo.png)

Adding additional info is very similar to adding any attribute requirement.

**To add additional info items:**

1. In the **Create Abstract Resource** dialog box, click the **Additional info** button.
2. Click the **Add attribute** button.
    
    Note that the attributes list may change depending on the selected model. For example, the root model may have different attributes than a port.
    
3. Select an attribute.
    
    Additional fields are displayed.
  
4. From the dropdown list, select **Any** to allow any value for the attribute (as long as the resource has it) or select '=' if you want the value to equal a specific value. If you select '=', from the dropdown list that is displayed, select the required value.  
5. Click the check button to the right of the attribute.  
6. Publish the attribute if you want the user to specify the suitable attribute value when reserving the blueprint. For additional information, see the following section. 
7. Repeat these steps to add additional attribute restrictions.
8. Click **Save Changes**.
9. The new additional information attribute(s) are applied to the abstract resource.
    
## Sharing the abstract resource template with other domains

Admins can share abstract resource templates with other domains in CloudShell.
:::note
This capability does not apply to abstract resources.
:::
**To share an abstract resource template with other domains:**

1. In the **Inventory** dashboard, create or edit an abstract resource template.
2. Click **Domains**.
    
    ![](/Images/CloudShell-Portal/INVN/AbstractResourceDomains.png)
    
3. From the **Domains** drop-down list, select the desired domains.
    
    ![](/Images/CloudShell-Portal/INVN/AbstractResourceDomainsSelection.png)
    
    :::note Notes
    - The current domain cannot be removed.
    - Only the domains you are permitted to access are available.
    - The matches only apply to resources in the current domain.
    :::
4. Click **Save Changes**.

## Publishing abstract resource user inputs

When creating an abstract resource, you can select to publish some of those requirements to the user. Any quantity, attribute or model selection for abstract resources can be published. When reserving the blueprint, the user will be asked to provide a value for these inputs.

For example, an abstract resource can have a requirement for a resource of “Model A” or “Model B”. If this requirement is published, the user reserving the blueprint that contains this abstract resource is required to select “Model A” or “Model B”. If the user selects “Model A”, the server will search only for resources of that model, which are available in the required time slot.

**To publish a value as an input:**

- Click the ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/PublishButton_34x36.png) button located next to the selected value.

### Restricting the values that are selectable by the user

The possible values you add as resource model choices or as an attribute also define the list of values the user can select from. For example, if you define the abstract resource as one of two possible models and publish the model selection as an input, the user will be able to select only from those two models. The user can always select the **Any** value as well.

For published resource quantities, the default value provided for the quantity becomes the maximum limit for the quantity value.

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/RestrictAbstResInputValues.png)

## Related Topics

- [Inventory Dashboard](../../inventory-dashboard.md)
- [Add Abstract Resources](../../../blueprints/creating-blueprints/abstract-resources.md)