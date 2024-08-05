---
sidebar_position: 2
---

# Cost Management of AWS EC2 Instances

To assist with your AWS EC2 cost management activities, AWS EC2 resources that are created by CloudShell Apps include the following tags: **Blueprint**, **CreatedBy**, **Domain**, **Name**, **Owner**, and **ReservationId**.
:::note Important
These tags should not be altered as this may cause unexpected behavior and inaccurate AWS budget reports.
:::
For example:

![](/Images/Admin-Guide/AWS-deployment-type/AWSTags.png)

## Creating budgets

Budgets are your way to manage your CloudShell AWS costs. Here are a few examples of how to use CloudShell tags in your budget:

- For a general budget, select the **CreatedBy** tag with the **CloudShell** value, and specify an amount.
- To limit specific users, select the **Owner** tag and specify the owner for whom to create a budget.
- To limit the number of times a blueprint can be reserved, select the **Blueprint** tag and select a specific blueprint.
- To limit the number of AWS instances that can be created per domain, select the **Domain** tag and select a certain domain.

For additional information on creating a budget, see [CloudShell AWS Cost Management](https://github.com/orgs/QualiSystems/discussions/289) on our Community forum.
