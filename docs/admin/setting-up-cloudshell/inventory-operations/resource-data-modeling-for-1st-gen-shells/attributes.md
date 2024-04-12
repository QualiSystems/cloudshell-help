---
sidebar_position: 2
---

# Attributes

Attributes allow you to add information about resources, Apps, and services. This may include information intended for the user and/or data to be used by the shell, such as the firmware version of the physical device or cloud provider to be used for App deployments. CloudShell components inherit the attributes defined in their family and model. For example, a router resource has the Port attribute defined in that router's model.
:::note
Components based on 2nd Gen Shells inherit their settings from their Shells. For additional information, see [Shells Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Shells.htm).
:::
## Creating an Attribute

**To create an attribute:**

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Attributes**.
    
    The attributes list is displayed.
    
3. To add a new attribute, in the toolbar, click **Add**.  
    ![](/Images/Admin-Guide/Resource-Data-Modeling/Add-Attribute.png)
4. Enter the following information:

<table>
    <thead>
        <th>Attribute</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>
            Enter the attribute name. The name field is mandatory.

Attribute name must begin with a letter and can contain alpha numeric characters, spaces and underscores.
            </td>
        </tr>
        <tr>
            <td>Attribute Type</td>
            <td>
            Select the attribute type from the drop down list. There are five types of attributes: **String**, **Password**, **Numeric**, **Boolean** (Yes/No), and **Lookup**. For additional information, see [Attribute Types and Values](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Attrb.htm?Highlight=Attributes#Attribut) below.
            </td>
        </tr>
        <tr>
            <td>Read-only</td>
            <td>Select this check box to prevent this attribute from being edited by the user.</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>Enter a description of the attribute. Add keywords to help identify the attribute and to use as search criteria.</td>
        </tr>
        <tr>
            <td>Properties</td>
            <td>Enter the required property values. Specify attribute values and default values. Each attribute has its own set of attributes</td>
        </tr>
    </tbody>
</table>

5. Click **OK**.

### Attribute Types and Values

There are five types of attributes: Boolean, Numeric, Password, String and Lookup.

The following table explains how to configure each attribute type:

<table>
    <thead>
        <th>Attribute Type</th>
        <th>Description</th>
        <th>Valid Values</th>
    </thead>
    <tbody>
        <tr>
            <td>String</td>
            <td>In the **Default Value** field, specify the initial attribute value and clear the **Read-only** check box.</td>
            <td>alphanumeric characters</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>
            In the **Default Value** field, specify the initial attribute value and clear the **Read-only** check box.

Password text is displayed as hidden characters in functions.
            </td>
            <td>alphanumeric characters</td>
        </tr>
        <tr>
            <td>Numeric</td>
            <td>In the **Default Value** field, specify the initial attribute value and clear the **Read-only** check box.</td>
            <td>numbers</td>
        </tr>
        <tr>
            <td>Boolean</td>
            <td>In the **Default Value** field, specify the initial attribute value and clear the **Read-only** check box.</td>
            <td>True/False</td>
        </tr>
        <tr>
            <td>Lookup</td>
            <td>
            Click the **Add lookup value** icon to specify a list of values.

To add lookup values, click the **Add lookup value** button in the **Properties** area.

It is possible to add only **String** lookup values.
:::note
The first added value automatically becomes the default. To specify a different value as the default, click it and select **Set Default**.
![](/Images/Admin-Guide/Resource-Data-Modeling/AttribTypesandVal.png)
:::
            </td>
            <td>list of values</td>
        </tr>
    </tbody>
</table>
:::note
By default, all attributes are of type **String**. To change the type, select another type from the **Attribute Type** dropdown list.
:::

## Defining attribute rules

Attribute rules allow administrators to define different behaviors for attributes in the application.

**To assign rules to an attribute**:

1. Click the **Admin** ribbon.
2. In the **Configuration** section, click **Attributes**.
    
    The attributes list is displayed.
    
3. Select an attribute from the list and click the toolbar's **Rules** button.
    
    The **Set Attribute Rules** dialog box is displayed.
    
4. Select the required rules.
    
    ![](/Images/Admin-Guide/Resource-Data-Modeling/St_Atrbt_Rules.png)
    
5. Click **OK**.

The following table details the attribute rules:

<table>
    <thead>
        <th>Rule</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Configuration</td>
            <td>
            Displays the attribute in the resource's **Configuration** tab in **Resource Manager Client**, for resources associated with the family or model.

Configuration attributes are visible only to admins.
            </td>
        </tr>
        <tr>
            <td>Setting</td>
            <td>
            Enables any user that can view the resource to view and/or edit the attribute's value. In addition, attributes with this rule are displayed as filters in the search window in CloudShell Portal (both in the **Add Resources** pane and **Inventory** page).

Displays the attribute in the Resource Manager Client's **Settings** tab and in CloudShell Portal. For example, in the Attribute drop down list of the Advanced Search (if the attribute has a value), and in the blueprint/sandbox diagram's **Attributes** pane for resources associated with the family or model.
            </td>
        </tr>
        <tr>
            <td>Displayed In Diagram</td>
            <td>Displays the attribute on the resource box in the blueprint and sandbox diagrams in CloudShell Portal and in the domain tab's **Diagram** page in Resource Manager Client. By default only the resource name, address and model are visible in the diagram.</td>
        </tr>
        <tr>
            <td>Link Configurations</td>
            <td>(Applies to L1 routes) Displays the attribute in the **Inventory** tab of the **Resource Connections** dialog box and in the **Connection Properties** side pane. This enables users to specify a specific attribute value (such as Speed) that will apply only to this specific route when it is connected in a sandbox. For details, see [Configure Physical Network Connectivity Requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Rsc-Cnct/Phys-Ntwrk-Cnfg.htm).</td>
        </tr>
        <tr>
            <td>Variable Capability</td>
            <td>
            Defines an attribute with a number of potential values which should be taken into account when searching for a possible route.

The final value is ultimately set by the system.
            </td>
        </tr>
        <tr>
            <td>Constant Capability</td>
            <td>Defines an attribute that has a specific value which should be taken into account when searching for a possible route.</td>
        </tr>
        <tr>
            <td>Displayed in route creation</td>
            <td>
            Displays the attribute as an additional column in the **Resource Connections** dialog box. You can use **Displayed in route creation** attributes to ensure that all ports in a route have the same protocol type and speed.

![](/Images/Admin-Guide/Resource-Data-Modeling/DefAttribRules_2.png)
            </td>
        </tr>
        <tr>
            <td>Available For Abstract Resources</td>
            <td>Only attributes with the **Available For Abstract Resource** rule are available as possible requirements or additional information when creating or editing abstract resources.</td>
        </tr>
        <tr>
            <td>Displayed In Search Filters</td>
            <td>Enables CloudShell users to search CloudShell elements by specific attribute values.</td>
        </tr>
        <tr>
            <td>Execution Server Selector</td>
            <td>
            Enables admins to limit the execution of a resource or App to a specific execution server (or group of execution servers) instead of just using the first available execution server. For more information, see [Setting Up Execution Servers to Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc.htm).

:::note Notes:
- If the Execution Server Selector attribute is missing from the execution server's details page, make sure the attribute has the **Execution Server Selector** rule attached to it, in Resource Manager Client's **Attributes** tab.
- Attributes with this rule are displayed in the Inventory dashboard's resource discovery form.
- This does not apply to job suites as they provide the option of associating specific execution servers to the execution of the job. For more information, see [Add jobs to an automation suite](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/JOB-SCHDL/New-Autmt-Suite.htm#Add2).
:::
            </td>
        </tr>
        <tr>
            <td>Monitor Modifications</td>
            <td>
            Enables admins to monitor the value of a specific **Numeric** attribute/s in real time.

This requires setting the `MonitorTaggedAttributes` configuration key.
            </td>
        </tr>
        <tr>
            <td>Admin Only</td>
            <td>Enables only CloudShell admins (domain admins and system admins) to edit the attribute's values in CloudShell Portal. The attribute is still visible to other users, but they may not be able to edit them.</td>
        </tr>
        <tr>
            <td>Displayed in Insight</td>
            <td>
            Enables displaying attributes in CloudShell Insight BI, enable filtering dashboards data according to attribute values.

See [Displaying attributes in BI](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Attrb.htm?Highlight=Attributes#Display).
            </td>
        </tr>
        <tr>
            <td colspan="2" style={{ backgroundColor: 'lightblue', color: 'black' }}>
            **Important:** The **Editable After Run** rules below apply to TestShell Studio and TestShell Runner but are associated to attributes in Resource Manager Client. Once configured, you must associate the attributes to test modules in either Studio or Runner, and enable the privileged user (depending on the rule that is used) to change the attribute's value, either from TestShell Studio or Resource Manager Client, after the test is executed.
            </td>
        </tr>
        <tr>
            <td>Editable After Run (System Administrators)</td>
            <td>Enables system administrators to edit the attribute's value.</td>
        </tr>
        <tr>
            <td>Editable After Run (Everyone)</td>
            <td>Enables any TestShell user to edit the attribute's value.</td>
        </tr>
    </tbody>
</table>

### Displaying attributes in BI

**To display attributes in CloudShell Insight BI, and to enable filtering of dashboards data according to attribute values:**

1. In the **Set Attribute Rules** dialog box, select the rule **Displayed in Insight**.
:::note
Attribute named "model" will be automatically assigned with the rule **Displayed in Insight**.
:::
2. After setting the attribute rule in Resource Manager, the attribute will be added to the insight database (Table: ResourceAttributesValuesSummary). To use it in BI dashboards you need to refresh and rebuild the elastic cube, as explained in ["Refresh Insight ElastiCube" on page 1](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/rfrsh-insght-elsticube.htm).
:::tip
For performance reasons, the Insight database adds new attributes once every 24 hours, so you need to wait 24 hours before completing the next steps
:::
## Related Topics

- [](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Associating_an_attribute_to_a_family_or_model "Associating an attribute to a family or model")[Associating an attribute to a family or model](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Adding)
- [Restricting values for an associated attribute](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Restricting_values_for_an_associated_attribute)
- [Configuring attribute inheritance settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Configuring_attribute_inheritance_settings)
- [](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Configur "Configuring associated attribute rules")[Configuring associated attribute rules](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Configur)
