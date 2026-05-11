---
sidebar_position: 1
---

# Define the Blueprint's Properties

This section explains how to set the blueprint's properties, including name and description, image to be displayed in the Blueprint Catalog, the default duration for sandboxes based on this blueprint, owner and orchestration processes.

**To define the blueprint's properties:**

1. From the **Blueprint** menu, select **Properties**.
    
    The **Edit Blueprint** page is displayed, in the **General** tab.
    
2. Edit the blueprint's properties, as follows:
    
    | Property | Description |
    |---|---|
    | Image | The blueprint's image displayed in the **Blueprint Catalog**. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB). |
    | Name | The blueprint's name. |
    | Created  | (Read only) The blueprint's creation and last modification times.  |
    | Owner | The blueprint's owner. Only users in the blueprint’s domain that aren’t external can be set as blueprint owner.  |
    | Permitted Editors | The blueprint's permitted editors. You can only add users with permissions to create/edit blueprints (regular users, domain admins and admins). These users can access the blueprint even if it is private. <br />**Notes:** <br /><ul><li>Permitted users cannot change the blueprint's owner.</li><li>Non-admin permitted users cannot delete the blueprint.</li></ul>   |
    | Description | The blueprint's description. |
    | Delete | Deletes the blueprint.  |
    | Default Duration  | The default duration for new sandboxes. By default, the sandbox duration is 2 hours.  |
    | Set Max Duration  | The **Set Max Duration** check box enables you to set the maximum duration for the active sandbox. For example, to prevent users from over-using any valuable resources the sandbox may contain. <br />**Note:** If there is a maximum duration set for the user, the shorter duration prevails.  |
    | Drivers / Scripts | Select the **Python Setup & Teardown** driver (if you are not using the out-of-the-box setup and teardown scripts). Select scripts to be added to the blueprint. For additional information, see [Configure Blueprint Orchestration](./configure-orchestration.md). |
    | Categories        | Select the blueprint categories in which the blueprint is displayed. Once a category is selected, select the relevant sub-category, if there is one. For additional information, see [Managing Categories](../../../../admin/cloudshell-manage-dashboard/managing-categories.md). |
    | Save Sandbox      | (Unavailable for persistent blueprints) This area applies to the **Save and Restore** add-on.<ul><li>**Enable Sandbox Save:** Make sure this check box is selected if you want to allow end-users to save sandboxes created from this blueprint. If the check box is enabled, the **Save the Sandbox** button is displayed in the active sandbox and you will be able to save the sandbox. For additional information, see [Save a Sandbox](../../../sandboxes/sandbox-workspace/save-sandbox.md).</li><li>**Use abstract template save behavior**: Determine how the blueprint's abstract resources will behave in the saved sandbox. Options are:<ul><li>**Use abstract template save behavior**:(Default) Use the save behavior defined on each abstract resource in the blueprint.</li><li>**Return all resources to abstract**: Revert all selected resources back to their abstract states.</li><li>**Keep resolution for all resources**: Save the selected resources as is. In other words, do not revert them back to abstract.</li></ul></li></ul> |
    | Persistent Sandbox | Select the **Enabling the checkbox will allow this blueprint to be reserved either as a persistent sandbox with no end time, or as a regular sandbox** checkbox to allow this blueprint to be deployed either as a regular time-limited sandbox or as a persistent sandbox with no end time. Persistent blueprints are used for deploying continuous environments with no end time. For details, see [Persistent Sandboxes Overview](../../../../intro/features/persistent-sandboxes.md). |
    | Requires Approval  |  Select **Require users to request approval** to require launch approval from the blueprint's approval team, which comprises the blueprint owner and admins by design, but can also include a selected user group in the domain. This is useful for high cost sandboxes or those containing sensitive information.<ul><li>**When request is approved or rejected, notify the requester**</li><li>**When new approval request created, notify the blueprint owner** activates approval request notification emails for the owner.</li><li>**When new approval request created, notify users with group** allows you to add a user group to the domain's approval team. The team members will get a notification email whenever an end-user requests approval to reserve a blueprint, prompting them to **Approve** or **Reject** the request.</li></ul>**Note:** If you do not plan on using the Approval Request feature, you can hide its elements from your users. This is done by disabling the `EnableApprovals` configuration key. |
    
3. Click Update.