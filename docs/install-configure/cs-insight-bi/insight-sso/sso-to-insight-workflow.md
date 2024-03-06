---
sidebar_position: 1
---

# SSO to Insight Workflow

In Sisense, the SSO option must be enabled. Thereafter:

- When a user accesses a Sisense dashboard, Sisense requests CloudShell to provide the user’s credentials (identity).

- CloudShell returns the user's email address (user emails are mandatory for Sisense SSO).

The flow of information between CloudShell Portal and Sisense is depicted in the following diagram:

![SSO1.png](/Images/BI/SSO-Workflow_520x343.png)

Authenticating the user’s SSO profile:

- If the user's SSO profile is already defined in Sisense, the user is immediately authenticated.

- If this is a first time login and the user is not yet defined in Sisense, Sisense first creates the user’s SSO profile and then proceeds to authenticate the user.

:::note
The Sisense license limits the number of user profiles. The creation process might therefore result in an error if the maximum available user profiles is reached.
:::

The authentication steps between CloudShell and Sisense is depicted in the following flowchart:

![SSO2.png](/Images/BI/SSO-Workflow_1_280x299.png)