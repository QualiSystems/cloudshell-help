---
sidebar_position: 2
---

# Delete a Saved Sandbox

*Deleting a saved sandbox is part of the Save and Restore paid add-on. Contact your account manager to purchase a license.*

When deleting a saved sandbox, CloudShell deletes all artifacts associated with the saved sandbox. A saved sandbox is deleted from CloudShell only when all these artifacts are successfully deleted. Note that BI data related to the saved sandbox is note removed from CloudShell and can be displayed in custom Insight dashboards. For additional information about Save and Restore, see [Sandbox Save and Restore Overview](../sandbox-save-and-restore-overview.md).

:::note
In order to delete a saved sandbox that is associated with an active or pending sandbox, you must first end or delete the sandbox. To find all active/pending sandboxes that are associated with a saved sandbox, see [Show Restored Sandboxes](./show-restored-sandboxes.md).
:::

**To delete a saved sandbox:**

1. In the **Saved Sandboxes** dashboard, click the **Actions** button at the end of the row and select **Delete**.
    
    A "Deletion in progress" message is displayed next to the name of the saved sandbox.
    
    CloudShell deletes the sandbox, its components and VM artifacts both from CloudShell and the cloud providers that host the sandbox's VMs. Note that this may take some time since some aspects of this process take place outside of CloudShell.
    

## Deletion failure

If deleting a saved sandbox fails, CloudShell will keep the saved sandbox in the **Saved Sandboxes** dashboard and mark it as “Deletion failed". Such a sandbox cannot be restored, since some of its components may have already been deleted. You are advised to try again to delete the saved sandbox.

To display a detailed error log of the deletion process, click on the **Deletion failed** button.
