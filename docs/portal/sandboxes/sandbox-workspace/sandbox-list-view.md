---
sidebar_position: 19
---

# Sandbox List View

List view displays a flat hierarchy of the sandbox's elements. Unlike in Diagram view, List view enables you to see all elements in the sandbox, including sub-resources, such as blades and ports.

Here, you can filter and sort the sandbox's elements, view their general and connection details, and search for specific elements on the list.

**Note:** The default view mode can be changed using the `ShowListViewByDefault` key.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/SandboxListView_624x275.png)

By default, List view includes the following columns:

| Column | Description |
| --- | --- |
| 1 | The full name of the component. For sub-resources, the full name contains the resource name and the path starting with the root resource. For example: Switch 1\Blade 2\Port 34 |
| 2 | The type of component. Possible values: **Resource**, **Service**, or **Application**. |
| 3 | The IP address of the component. For sub-resources, this is the absolute address of the sub-resource, for example 1.2.3.4/1/7.
| 4 | The resource model. |
| 5 | The components to which this component is connected. |
| 6 | The values of the component's attributes. |
| 7 | Indicates if the element can be shared with other sandboxes at the same time. Possible values: **Shared**, **Unshared**. |
| 8 | Actions menu. |

The last column includes the Actions menu. For reserved resources, this column also displays the resource's live status indication.

You can rearrange the columns by dragging a column to the desired location. The left-most column's content is displayed in bold font.

The Actions menu enables you to perform actions on a specific resource, App or service in the list.

**To perform an action on an element in the sandbox:**

1. Click the row's ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) button.
2. Select the appropriate action:

- **Share/unshare reserved resources**: Configure elements in the sandbox to be available or unavailable for other sandboxes by choosing to share or unshare them. For more information, see [Share Reserved Resources](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Blprnt-Shr.htm).
- **Telnet/SSH/RDP**: Connect remotely to a resource via RDP, SSH, or Telnet from CloudShell. For more information, see [Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Sndbx-Rmt-Cnct.htm).
- **Remove** to remove the selected resource or App from the sandbox.

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

1. Click the column's ![](/Images/CloudShell-Portal/Lab-Management/Environments/ActionsButton.png) button and select the Columns option.
2. Unselect the columns you want to hide.
    
    The **Full Name** column cannot be hidden.
    

**To filter items on the list:**

1. Click the column's ![](/Images/CloudShell-Portal/Lab-Management/Environments/ActionsButton.png) button and select the Filter option.
2. Set the filter criteria. You can set up to two criteria.

    ![](/Images/CloudShell-Portal/Lab-Management/Environments/LV-Filter.png)

Elements that match the filter criteria are displayed.