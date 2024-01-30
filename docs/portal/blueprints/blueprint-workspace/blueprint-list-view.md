---
sidebar_position: 2
---

# Blueprint List View

**List** view displays a flat hierarchy of the blueprint's elements. Unlike in **Diagram** view, **List** view enables you to see all elements in the blueprint, including sub-resources, such as blades and ports.

Here, you can filter and sort the blueprint's elements, view their general and connection details, and search for specific elements on the list.

![](/Images/CloudShell-Portal/Lab-Management/Environments/BlueprintListView_624x286.png)

By default, **List** view includes the following columns:

| Column | Description |
| --- | --- |
| Full Name | The full name of the component. For sub-resources, the full name contains the resource name and the path starting with the root resource. For example: Switch 1\Blade 2\Port 34 |
| Type | The type of component. Possible values: **Resource**, **Service**, or **Application**. |
| Address | The IP address of the component. For sub-resources, this is the absolute address of the sub-resource, for example 1.2.3.4/1/7. |
| Model | The resource model. |
| Connected To | The components to which this component is connected. |
| Attributes | The values of the component's attributes.  |
| Status | Indicates if the element can be shared with other sandboxes at the same time. Possible values: **Shared**, **Unshared**. |
| Actions | Actions menu. For reserved resources, this column also displays the resource's live status indication. |

You can rearrange the columns by dragging a column to the desired location. The left-most column's content is displayed in bold font.

## Performing actions on a resource or App in the blueprint

The **Actions** menu enables you to perform actions on a specific resource, App or service in the list.

**To perform an action on an element in the blueprint:**

1. Click the row's ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) button.
2. Select the appropriate action:
   - **Share/unshare reserved resources**: Configure elements in the sandbox to be available or unavailable for other sandboxes by choosing to share or unshare them. For more information, see [Share Reserved Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Blprnt-Shr.htm).
   - **Remove**: to remove the selected resource or App from the blueprint.

## Searching the list

You can search for specific resources, sub-resource and Apps on the list.

**To search the list:**

- In the **Search in list** field, enter a word, number or phrase.

The list displays the matching elements.

## Sorting and filtering the list

The **Column Settings** menu enables you to sort the list and filter the elements according to a specific word, number or phrase, as well as to show or hide columns.

![](/Images/CloudShell-Portal/Lab-Management/Environments/LV-Column-Heading-Menu.png)

**To sort the list according to a certain column:**

- Click a column to sort the list in ascending or descending order.

**To hide columns:**

1. Click the column's ![](/Images/CloudShell-Portal/Lab-Management/Environments/ActionsButton.png) button and select the **Columns** option.
2. Unselect the columns you want to hide.
   <br/>The **Full Name** column cannot be hidden.
    

**To filter items on the list:**

1. Click the column's ![](/Images/CloudShell-Portal/Lab-Management/Environments/ActionsButton.png) button and select the **Filter** option.
2. Set the filter criteria. You can set up to two criteria.

![](/Images/CloudShell-Portal/Lab-Management/Environments/LV-Filter.png)

Elements that match the filter criteria are displayed.