---
sidebar_position: 1
---

# Setting the Test Execution Report Template for Automation Suite Tests

This key enables you to set the template to use when generating execution reports for tests that were executed as part of an automation suite in the **Job Scheduling** dashboard.

**To set the report template for tests:**

1. Close Testshell Runner, if it is open.
2. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="DefaultReportTemplate" value="<template name>"/>`
    
    The report templates that come out of the box are `Test Results` (default), `Test Steps`, `Detailed Report` and `Failure Report`.
    
    :::tip
    To see all available report templates, in **TestShell Studio**, in the **Home** ribbon, click the **View Report** button and expand the **Template** drop-down list in the **Execution Query** tab.
    :::
    
3. Restart the **CloudShell Portal IIS** service.