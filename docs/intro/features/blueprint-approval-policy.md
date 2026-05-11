---
sidebar_position: 4
---

# Blueprint Approval Policy

Blueprint designers can configure certain blueprints to require approval before reservation. This is especially beneficial for high-cost or sensitive environments, as it adds an extra layer of control over their usage. If an end-user attempts to launch such a blueprint, an email notification is sent to the approval members, giving them the option to Accept or Reject the request.

:::note Notes
- End-users cannot change the duration of approved sandboxes. However, admins can extend the duration.
- Note that regular users can save a copy of the blueprint and bypass the request approval configuration. To prevent such occurrences, we strongly suggest using "External Extended" roles for end users. For details, see [Enabling extended permissions for external users](../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#enabling-extended-permissions-for-external-users).    
- You can remove Blueprint Approval content from CloudShell Portal using the `EnableApprovals` admin configuration key.
- Approval blueprints can be used in the original and New Job Scheduling. However, they will be reserved as regular blueprints.
:::

## High-level flow

1. Blueprint designer configures the blueprint as an approval blueprint and specifies its approval team (**Blueprint > Properties**).
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/RequiresApproval.png)
    
    Blueprint's **Reserve** button is replaced with a **Request** button.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/RequestApprovalButton_467x316.png)
    
2. End-user submits an approval request.
3. A notification email is sent to the approval team, prompting them to either accept or reject the request.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ApproveReject.png)
    
4. A member of the blueprint's approval team approves the request, optionally providing a comment.
5. End-user receives a notification email informing them their request was approved.
6. End-user opens the **Sandboxes > Approval Requests** page and reserves the blueprint.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReserveApprovalBlueprint.png)
    
## Related Topics

- [Blueprint Catalog](../../portal/blueprints/blueprint-catalog.md)
- [Define the Blueprint's Properties](../../portal/blueprints/creating-blueprints/blueprint-properties/blueprint-properties.md)