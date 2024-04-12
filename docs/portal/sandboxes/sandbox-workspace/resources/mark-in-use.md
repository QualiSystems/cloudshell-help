---
sidebar_position: 7
---

# Mark Resources "in use"

*This option is enabled using the `HideMarkInUseAction` key.*

In some situations, you may want a certain resource to stay active even after the sandbox ends. By defining the resource as "in use", when the sandbox time ends, the sandbox will go into overtime and remain active until a privileged user manually removes the "in use" status from the resource or ends the sandbox. Overtime needs to be enabled using the `AutoEndReservation` key.

:::note
Only unshared resources can be marked "in use".
:::

**To mark or unmark a resource "in use":**

1. In **Diagram** view, hover over the resource. The **Actions** menu is displayed.
    
    In **List** view, in the required resource's row, click the **Actions** menu.
    
2. Select **Mark "In Use"/Mark Not In Use"**.