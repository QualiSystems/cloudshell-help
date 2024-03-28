---
sidebar_position: 1
---

# Automation Suite Execution Remains in "Pending" State

## Description

A job's execution stays in "Pending" state even though there are available job slots on the Execution Server.

## Possible Causes

As a general rule, if CloudShell cannot run the suite or an Execution Server is unavailable, the suite will remain in a "Pending" state until CloudShell is able to run it.

Here are several possible reasons:

- The Execution Server is excluded/offline.
- For scheduled automation suites: A job is defined to start a sandbox but the suite's running user has reached their scheduled sandboxes capacity.
- For automation suites that have jobs defined to start a sandbox:
    
    - Licensing: The domain has reached the maximum number of concurrent reservations.
    - The suite's running user has reached their concurrent sandboxes capacity.
    
    - A resource on the blueprint is currently unavailable (for example, the resource is excluded or exclusively reserved in another sandbox).
    
    :::note Notes:
    - Items in the queue that are not scheduled will be removed by default after the configured timeout (~ 8 hours by default).
    - Having pending jobs/suites does not necessarily mean other jobs cannot be scheduled successfully.
    :::
    

## Solution

- If the Execution Server is excluded/offline, restart it. It will run the job within a few moments.
- If the issue is related to the running user's scheduled sandboxes capacity, CloudShell will eventually run the job when it is possible to create a scheduled sandbox for that user. Alternatively, as admin, you can increase the user's scheduled sandboxes capacity.
- If the issue is related to the running user's concurrent sandboxes capacity, CloudShell will eventually run the job(s) defined to start a sandbox when it is possible to create a sandbox for that user. Alternatively, as admin, you can increase the user's concurrent sandboxes capacity.
- If a resource on the sandbox is unavailable, CloudShell will automatically execute the automation suite only when all of the blueprint's resources become available for the duration of the sandbox.

In addition, please consider setting a timeout limit on the automation suite to allow CloudShell to automatically delete pending executions if they are waiting for too long. You can set the timeout in the automation suite's **Advanced options>Scheduling>Remove old jobs from queue**. For details, see [Adding Automation Suites](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/JOB-SCHDL/New-Autmt-Suite.htm).
