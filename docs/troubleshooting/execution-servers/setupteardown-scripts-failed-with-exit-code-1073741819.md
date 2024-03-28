---
sidebar_position: 3
---

# Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)

## Error Message

:::danger &nbsp;
Faulting application name: python.exe, version: 0.0.0.0, time stamp: 0x5560ad83  
Faulting module name: python27.dll, version: 2.7.10150.1013, time stamp: 0x5560ad81  
Exception code: 0xc0000005  
Fault offset: 0x000f07c3
:::

## Description

The execution of the sandbox's Setup/Teardown scripts failed. This is related to the Python version being used by the Setup/Teardown scripts (Python 2).

## Solution

**To resolve this issue:**

1. Go to CloudShell Portal’s **Manage>Scripts>Blueprint** page.
    
2. Click the Setup script.
    
3. Change the **Type** to **Python 3**.
    
4. Click **Save**.
    
5. Repeat steps 1-4 for the Teardown script.
    
6. Reserve the sandbox to verify.
