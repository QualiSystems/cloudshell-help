---
sidebar_position: 1
---

# Find Resources

## Basic resource search

The resource search enables you to quickly find resources by name, family, model, attribute, address and other criteria. You can search for full and partial words.

:::note
Search results will only show resources that were defined as searchable in the Resource Manager.
:::

**To access the resource search:**

1. In the blueprint or sandbox diagram, click the **Browse** button at the center of the screen.
    
    Or-
    
    In an existing blueprint, click the **Resource** button in the top left hand corner of the screen.
    
    The **Add Resource** pane is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/AbstractSearchPane1New.png)
    
2. Type the desired search string and matching results are displayed. Any resource result can then be directly dragged into the blueprint.

### Filtering search results

After search results are returned, you can further filter results in order to locate the desired resource in a potentially long list of matching results.

**To filter search results using simple search:**

- Use the filtering options displayed on the left side of the **Add Resource** pane to further filter down the results. The filtering results are:
- **Type**: Displays resources according to the family type.
- **Folder**: Root: Displays resources belonging to a specific folder in the **Resource Explorer** of the **Resource Manager Client**.
- **Family/Model**: Displays results according to a specific resource family and/or model in the **Resource Families** explorer of the **Resource Manager Client**. Selecting either one of these filtering options will affect the other.
- **Availability**: Displays results that are available now, available today, or available during the next week or month.
- **Attribute value**: Displays results that have a specific attribute value.

### Additional Filters

- By connectivity
- By domain

Additional filters are provided in order to further narrow results by connectivity or domain. Choose the connectivity filter to find resources which are currently disconnected, currently connected, or choose "any status" to locate resources of either status. Choose the domain filter to find resources in the current domain, all domains corresponding to the current user, or resources which are not yet allocated to a domain.

### Finding the right resources

You can use the search to narrow down the query to target specific results. For example, searching for '10G ethernet traffic port' will attempt to match the search phrase as well as subsets of it to resources that may match it and rank them accordingly.

## Advanced resource search

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/WorkingWithResources1_New.png)

Advanced resource search enables you to perform a more granular search compared to the simple search by matching resources based on one or many sets of criteria.

:::note
Search results will only show resources that were defined as searchable in the Resource Manager.
:::

**To filter search results using advanced search:**

1. In the **Add Resources** pane, click the **Advanced search** link.
    
    The search options are as follows:
    
    - **Name**, **Address** or **Unique Identifier** fields: Free text search
        - **Match exact full name**: Select this check box to only return results which match exactly the resource name you entered in the **Name** field.
    - **Type**: Displays resources that belong to families of the selected type.
    - **Family**: Displays resources that belong to the selected resource family.
    - **Model**: Displays resources of the selected model.
    - **Availability**: Displays resources that were available for use within a specified time range. Select this check box and specify a time range.
    - **Add Attribute**: Displays resources that match the specified filters (you can specify multiple attributes as well as multiple values of the same attribute).
        
        1. From the dropdown list, select an attribute.
        2. Choose the appropriate option.
            
            - For **String** attributes, supported options are: Equals, Is not Equal, Contains, Does Not Contain, Starts With, and Ends With.
            - For **Numeric** attributes, supported options are: `!=, <, >, <=, and >=`.
            - For other types of attributes, select Any to allow any value for the attribute (as long as the resource has it) or select '=' to set a specific value.
        3. Specify the value to match (case-sensitive).
            
            Partial attribute values are supported (applies to String attributes).
            
        4. Click the **'+'** button.
        
        You can add additional attribute filters to the search. To delete an attribute filter, hover over it and click the "x" icon.
        
        :::info
        Multiple values of the same attribute have an OR relationship while multiple attributes have an AND relationship.
        :::
        
        For example, filtering resources that have a Duplex value of Full or Half, and are set to automatically power on:
        
        ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/MultipleAttributeSearch.png)
        
2. Click **Search**.
    
    The search criteria area collapses to display the search results. To change your search criteria, click **Modify Search**.
    

## Search within a resource

When performing a simple search, results may include resources at all levels of the hierarchy. For example, search results may include a traffic generator along with its blades and ports.

### Searching within a resource

If the appropriate top level resource is found, you can optionally perform an additional search within the resource.

**To search within a resource:**

1. Click the arrow link in the top right hand corner of the resource.
    
    A window displaying the resource's details pops up.
    
2. Click the **Search Within** button.  
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/WorkingWithResources2_New.png)
    
    The resource's internal resources are displayed in the **Add Resource** pane and can be dragged in to the diagram.