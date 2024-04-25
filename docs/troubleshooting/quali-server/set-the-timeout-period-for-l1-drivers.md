---
sidebar_position: 2
---

# Set the Timeout Period for L1 Drivers

## Error Message

:::danger-one-line
An error occurred trying to execute a command on a resource at this address: xxx.xxx.xx.xx. The error was: No response received from agent
:::

## Description

CloudShell manages the execution of L1 resource commands using a dedicated process for each L1 driver on the Quali Server machine. The process is named after the driver and is created when running the first command of an L1 driver in the sandbox, after restarting Quali Server or if the driver's previous process was terminated due to an unexpected error.

Note that even if you replace the driver with a new one, you will have to end all processes that are running. A process runs for each L1 resource using that driver initiated by the server, to allow an L1 command to run on this resource.

## Possible Causes

Some drivers, especially Python-based drivers, may require a longer startup time than the default two second timeout period defined in CloudShell. If the driver does not respond within the defined period, the following error message is displayed: "No response received from agent".

## Solution

Note that even though the first command returned an error and failed to execute, the driver process started, and will run any subsequent L1 commands.

**To resolve the issue described above, follow these steps to set a longer timeout period in CloudShell:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Add the following key, and set the value in seconds (the default is 2 seconds):

`<add key="L1DriverProcessStartupTime" value="1"/>`

Note: The recommended value is 3 seconds.

5. Restart the **Quali Server** service. 

## Related Topics

[L1 Switches](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-L1-Swch.htm)