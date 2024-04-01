---
sidebar_position: 6
---

# QualiX: Remote Connection Attempt Opens CloudShell Login Page

## Description

When trying to remotely connect to a device from a sandbox using RDP, SSH or telnet, with a CloudShell Portal ID is different from the one defined in the `ServerUniversalSettings.xml` file (for example, you logged in with the hostname while the xml uses the IP), the connection will not go through and instead CloudShell Portal login screen will be displayed in another browser tab. After you log in with your CloudShell credentials, the device's OS will be displayed.

## Solution

To avoid this from happening:

- In order to remotely connect to the device from the sandbox, first make sure you logged into CloudShell Portal with the CloudShell Portal IP or hostname defined in the `ServerUniversalSettings.xml` file.
