---
sidebar_position: 8
---

# 'Unexpected error' when installing Quali Server

## Error Message

In Quali Server configuration wizard:

:::danger &nbsp;
Unexpected error.  
Check the log file for more details:  
Service 'Quali Server' status: 'Stopped', failed to set status: 'Running'
:::

Windows Event Viewer>Application reports Erlang appcrash in "Crypto.dll":

![](/Images/Troubleshoot/CryptoCrash.png)

## Description

When installing Quali Server, RabbitMQ service crashes after start or fails to start during the RabbitMQ configuration step.

## Possible Causes

The Erlang version installed with Quali Server is incompatible with the machine's CPU.

## Solution

To fix this issue, you need to install Erlang version 23.3 (or above) and reconfige RabbitMQ to work with the new version.

**To resolve this issue:**

1. Download [https://erlang.org/download/otp\_win64\_23.3.exe](https://erlang.org/download/otp_win64_23.3.exe) and install.
2. Add/update the following System Variable paths:
    
    **ERLANG\_HOME** (Default before change: `C:\Program Files\erl10.3` – find matching path in new version)
    
    **ERLANG\_SERVICE\_MANAGER\_PATH** (Default before change: `C:\Program Files\erl10.3\erts-10.3\bin` – find matching path in new version)
    
3. Restart the **Quali Server** service.
4. install Quali Server.
