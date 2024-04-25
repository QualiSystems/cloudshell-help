---
sidebar_position: 2
---

# Setup/Teardown scripts failed to run with exit code -1073741502

## Error Message

:::danger-one-line
Script runner exited with exit code: -1073741502
:::

The application failed to initialize properly. Indicates that the application has been launched on a Desktop to which current user has no access rights. Another possible cause is that either gdi32.dll or user32.dll has failed to initialize.

## Description

The sandbox's Setup/Teardown scripts failed to run. Either `gdi32.dll` or `user32.dll` failed to initialize on the CloudShell Execution Server machine possibly due to exhausting Windows Non-Interactive desktop memory heap.

This may happen on high throughput installations running a high number of scripts simultaneously on CloudShell Execution Server machines.

## Solution

**To resolve this issue:**

1. Exclude the CloudShell Execution Server. For details, see [Including/excluding execution servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Exctn-Srv-Servers.htm#Includin).
2. Wait for any running processes on the CloudShell Execution Server to complete.
    
    When excluding a CloudShell Execution Server, the server follows through with the execution of any currently running processes.
    
3. Increase the machine's defined Non-interactive desktop heap size number. This is explained in the Resolution section of this troubleshooting article: [https://knowledgebase.progress.com/articles/Article/18726](https://knowledgebase.progress.com/articles/Article/18726)
4. Restart its CloudShell Execution Server machine.
5. Include the CloudShell Execution Server.
