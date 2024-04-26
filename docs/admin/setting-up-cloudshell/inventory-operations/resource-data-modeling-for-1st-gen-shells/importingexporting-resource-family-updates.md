---
sidebar_position: 3
---

# Importing/Exporting Resource Family Updates
:::important
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](../../../../intro/features/shells.md).
:::
## Importing resource family updates

Changing and updating families has a significant impact on the QualiServer and should be done with care.

The system.xml configuration file contains updates to the default families, models and attributes.

**To update the Resource Families:**

1. In the Admin ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    

2. Right-click the **Resource Families** root and select **Import** from the context menu.
    
    ![](/Images/Admin-Guide/Resource-Data-Modeling/ImportResFamilies.png)
    

3. Navigate to the Resource Management Additional files > **Configuration** folder, select the XML file containing the resource family updates, and click **Open**.
    :::note Note about attributes referenced in the XML:
    Referencing attributes whose names contain unsupported characters may cause unexpected behavior. For details about attribute names, see [Creating an Attribute](./attributes.md#creating-an-attribute).
    :::
4. Repeat the process to import updated Resource Family samples, L1 switches configuration files, and traffic family libraries.

## Exporting resource families

You can save a resource family's structure to an XML file that can be later used to update the settings of resource families, models and attributes.

**To export a resource family structure**:

1. Right-click the **Resource Families** root folder and select **Export** from the context menu.
    
    ![](/Images/Admin-Guide/Resource-Data-Modeling/ImportResFamilies_1.png)
    

2. In the **Export Configuration** dialog, specify the file name and location.
3. Click **Save**.
    
    The updates are saved to the XML file.
