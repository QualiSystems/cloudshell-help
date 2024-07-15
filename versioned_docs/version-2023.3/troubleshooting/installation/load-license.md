---
sidebar_position: 7
---

# Load License

## Error Message

:::danger &nbsp;
Some of the features in the license file were loaded successfully.

However the following errors occurred:

Error\[0xc800100d\]: Feature "UNKNOWN" cannot run anymore because the license expiration date has reached. Check your machine's date, then contact your software source.

Error\[93\]: The given license code is already added to the "Unknown" license server.
:::

## Description

When running the CloudShell License Server Configuration Wizard, the above error may appear when you load a license and already have a valid license or multiple licenses loaded into the same License Manager. In this case, the latest license to be loaded will be used. When it expires, CloudShell will check if the next one in line is valid and use that one, etc.

## Solution

This is a known issue and you can ignore the error message. Your license will be loaded successfully.
