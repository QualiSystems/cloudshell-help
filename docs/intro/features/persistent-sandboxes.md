---
sidebar_position: 7
---

# Persistent Sandboxes Overview

There are two types of sandboxes in CloudShell and both are displayed and managed from the **Sandboxes** dashboard: regular and persistent.

- **Regular sandboxes** are time-based sandboxes and are great for testing, demos and DevOps.
- **Persistent sandboxes** have no end time. Persistent sandboxes are deployed from persistent blueprints.

## Configuration

Blueprints defined as persistent blueprints can be deployed either as regular time-limited sandboxes or as persistent sandboxes with no end time.

**To configure a persistent blueprint:**

1. Log in to CloudShell.
2. In the blueprint workspace, open the blueprint properties.
3. In the **General** page, select the **Enabling the checkbox will allow this blueprint to be reserved either as a persistent sandbox with no end time, or as a regular sandbox** check box.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/PermanentBlueprintConfiguration.png)
    
4. Click **Update** at the bottom.

## Deployment

**To deploy a persistent sandbox:**

1. Reserve the blueprint.
2. In the **Reserve** dialog box, select **Persistent Sandbox**.
3. Click **Reserve**.

## Who can view and manage persistent blueprints/sandboxes

Persistent blueprints/sandboxes are much the same as regular ones in this regard.

- Regular users, domain admins and system admins can view and manage persistent blueprints.
- External users defined as permitted users on the persistent sandbox can view and access it.
- To deploy a persistent sandbox, the user's **Reservation Duration limit** setting must be cleared in their user profile.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ReservationDurationLimit.png)
    

## How are persistent blueprints presented in CloudShell

- The following indications in the **Sandboxes** dashboard and in the sandbox workspace are displayed:
    
    **Sandboxes dashboard:**
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/PermanentEnvironmentIndication1.png)
    
    - Status changes to "Unplanned End" for active persistent sandboxes in the **Sandboxes** dashboard and more info window (![](/Images/CloudShell-Portal/Lab-Management/Environments/MoreInfoButton_15x16.png)). Running persistent sandboxes also don't have a progress bar.
    
    **Sandbox workspace:**
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/PermanentEnvironmentIndication2.png)
    
    - Sandbox indication changes to "Persistent Sandbox" and sandbox status is "No End Time"

## Restrictions

The following features and options are unavailable for persistent blueprints/sandboxes:

- Job Scheduling, New Job Scheduling: Persistent blueprint attached to a job is deployed as a regular sandbox and ends when the job's execution ends
- Save and Restore
- Duration
- **Extend** duration
- Sandbox's **Export Calendar Event (ICS)** option
- Sandbox's **Deploy/Update** dialog boxes:
  - **Schedule**, **Recurrence**
  - **Before end** email notification