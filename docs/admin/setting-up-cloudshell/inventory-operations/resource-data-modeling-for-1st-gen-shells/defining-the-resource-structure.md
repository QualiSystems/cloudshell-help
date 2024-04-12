---
sidebar_position: 4
---

# Defining the Resource Structure

:::important
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Shells.htm).
:::

If the device you are modeling has sub-resources, such as ports or jacks, you can associate the resource model of the device with the models of its sub-resources. This enables you to add sub-resources that are based on the associated models to the resource you are creating.

The resource structure is created automatically for any imported resource definitions.
:::note
The **AutoLoad** process enables you to quickly create or update the internal resource structure of a resource to that of the physical device, For more information, see [Inventory Drivers and Utilities](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Invn-Drvrs-n-Utls.htm).
:::
**To define the resource model structure**:

1. Click the Admin tab's **Resource Structure** icon to open **Resource Structure**.  
    ![](/Images/Admin-Guide/Resource-Data-Modeling/DefineReStruct.png)

    The **Resource Structure** consists of two panes.

    ![](/Images/Admin-Guide/Resource-Data-Modeling/DefineReStruct_1.png)

    The left pane displays the current data model hierarchy.

    The right pane available models for the selected resource family.

2. Choose the relevant family from the left panel and mark the model you would like to build.
3. Select any models that you wish to add to the resource structure and click **Add**.
    :::important Example structure:
    
    OnPath Switch 3912 (Part of L1 Switch Family)  
    S-Blade (Part of L1 switch blade family)  
    Port S-Blade (Part of L1 switch port family)
    :::