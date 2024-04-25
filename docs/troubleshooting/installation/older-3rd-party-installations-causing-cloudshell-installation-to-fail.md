---
sidebar_position: 12
---

# Older 3rd-party Installations Causing CloudShell Installation to Fail

## Error Message

:::danger-one-line
These CS installation components are failing to install
:::

:::danger-one-line
CloudShell server Proxy Configuration
:::

:::danger-one-line
CloudShell Sandbox API Configuration
:::

Additional indications:

The following services fail to start as part of the Quali Server installation:

When manually starting one of these services, the following error is displays in Windows event logs:

:::danger-one-line
Error 1067 - the process terminated unexpectedly.
:::

## Description

Installation Suites contain older 3<sup>rd</sup> party components (ie. Node.js etc). Having outdated versions of these components may tamper with the installation and result in an OS error.

## Solution

- Update the 3<sup>rd</sup> party component to latest.
    
    In this example, upgrade the Node.js to version 16.17: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
