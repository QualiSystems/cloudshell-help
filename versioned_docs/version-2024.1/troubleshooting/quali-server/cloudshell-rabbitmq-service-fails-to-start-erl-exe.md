---
sidebar_position: 9
---

# CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)

## Error Message

Event Viewer shows that `erl.exe` had an access violation on the `crypto.dll` module:

![](/Images/Troubleshoot/RabbitLogError.png)

## Description

The CloudShell RabbitMQ service fails to start when trying to start RabbitMQ service or CloudShell Server

## Possible Causes

There is a known error in crypto.dll error that uses OpenSSL for processors that support Intel SHA extensions, affecting all Windows users.

## Solution

Disable SHA extensions by setting the environment variable `{{OPENSSL_ia32cap}}` to `{{~0:~0x20000000}}`.

For details, see GitHub issue 4115: [https://github.com/erlang/otp/issues/4115](https://github.com/erlang/otp/issues/4115).
