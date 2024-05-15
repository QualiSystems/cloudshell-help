---
sidebar_position: 1
---

# Using License Pools

## About License Pools

A license pool defines the maximum number of active concurrent sandboxes that can be created by users and domain administrators in the domain. License pools are defined by the system administrator and the same pool can be assigned to multiple domains. The domain's license pool limit does not apply to the system administrator.

The License Pools in the system are:

| Pool Type | Description |
| --- | --- |
| Global License Pool | Holds the total amount of concurrent active sandboxes allowed in the system. The size of the Global License Pool cannot be modified. |
| License Pool | Holds the number of concurrent sandboxes that can be created in the domain that is using this pool. |
:::note
The Global License Pool is added, by default, to all new domains. When migrating from an earlier version, the global license pool is added to all domains.
:::
A License pool can be assigned to multiple domains.

## Managing License Pools
:::note
Every domain must have a license pool.
:::
### Creating license pools

**To create a new license pool:**

1. In the **Resource Manager**, click the **Admin** tab and then click ![](/Images/Admin-Guide/Setting-Up-CloudShell/Setting-up_24x34.png) **License Pools**.
    
    The **License Pools** page is displayed, listing the maximum number of licenses that are available and the number of used licenses.
    
2. Click **New**.
3. Enter the required information in the following fields:
    
    | Field | Required | Description |
    | --- | --- | --- |
    | Name | Mandatory | The name of the license pool. |
    | Description | Optional | A meaningful description of the license pool. |
    | Number of Licenses | Mandatory | The number of permitted concurrent sandboxes. The value must be at least 1 and the highest amount is the number that is set by the concurrent sandbox license.<br/>**Note:** The permitted number of sandboxes is the license pool limit plus 1. For example, if the license pool is set to 3 licenses, the domain's users can have up to 3 concurrent sandboxes. |
    | Domains | Optional | Licenses can be assigned from the pool to, or removed from, existing domains. Multiple selections are supported. A license pool can be assigned to a single domain or multiple domains. You can also assign a pool to a domain from the **Properties** page of the selected domain. |
    

4. Click **OK**.
    
    The details of the license pool are displayed in the **License Pools** page and the number of used licenses is updated accordingly.
    

### Deleting license pools

Before deleting a license pool, make sure it is not assigned to any domains.

**To delete a license pool:**

1. In the **License Pools** page, select the required license pool.
2. Click **Delete**.
    
    A confirmation message informs you that the specified license pool will be deleted and that domains that used that license pool will now be linked to the global pool.
    
3. Click **OK**.
    
    The details in the **License Pools** page and the number of used licenses is updated accordingly.
    

### Editing license pools

**To edit the details of a license pool:**

1. In the **License Pools** page, double click the license pool or select it and click **Edit**.
2. Edit the required fields in the **New License Pool** window.
3. Click **OK**.

## Validating Licenses

A license pool is a subset of the global license pool. The validation is done both for license pool size and global pool size.

The size of the license pool is strictly maintained. When the license pool limit is reached, any new sandbox is rejected.

### User Notifications

When the permitted concurrent active sandboxes amount is exceeded, the following notifications are issued:

<table>
    <tbody>
        <tr>
            <td>**When the domain license pool limit is reached**</td>
            <td>The license sandbox owner is notified by way of a warning message. An external user receives a general message. Notification email messages are also sent automatically to the user, domain administrator and system administrator.</td>
        </tr>
        <tr>
            <td>**When using the global license pool and the maximum number of licenses is reached**</td>
            <td>If the sandbox owner is a domain administrator or system administrator, he is notified by a warning message popup. In addition a notification email is sent automatically to the system administrator.</td>
        </tr>
    </tbody>
</table>
