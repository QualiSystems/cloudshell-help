---
sidebar_position: 1
---

# Unable to login to CloudShell Portal

## Error Message

:::danger &nbsp;
Not enough storage is available to process this command. (Exception from HRESULT: 0x80070008) (Type: COMException)
:::
## Description

You are unable to login to CloudShell Portal.

![](/Images/Troubleshoot/CloudShell-Portal_315x351.png)

## Possible Causes

Temporary storage space allocated for software applications, including CloudShell, in Windows, was exceeded. This is not a CloudShell issue.

## Solution

To resolve the issue described above, reboot the machine releasing storage space for new operations or adjust allowed upper limits on temporary storage space.

:::note
Adjusting allowed upper limits on temporary storage space is not a recommended solution.
:::
