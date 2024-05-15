---
sidebar_position: 4
---

# Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram

## Description

When adding a CloudShell component to the diagram, nothing happens. In other words, the component is not added, and no indication or error is displayed on the screen.

## Possible Causes

- Resource is already included in the blueprint but outside of the canvas view.
- The CloudShell Portal's IIS site has the following filtering rules disabled: PUT and DELETE. *Note that in Windows Server 2016, the relevant verbs are GET, POST and PUT*.

## Solution

**To see if the resource is already in the blueprint:**

- In the blueprint canvas, switch to **List** view and check if the resource is included.

**To configure the request filtering:**

1. On the CloudShell Portal machine, open IIS Manager.
2. Click the CloudShell Portal IIS site and select **Request Filtering**.
    
    ![](/Images/Troubleshoot/Request-Filtering.png)
    
3. Click **HTTP Verbs** and make sure the PUT and DELETE verbs are enabled.
    
    In Windows Server 2016, make sure GET, POST and PUT verbs are enabled.
