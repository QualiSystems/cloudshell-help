---
sidebar_position: 1
---

# Configure CloudShell Portal to Work in HTTPS Mode

This article explains how to set CloudShell Portal to run over HTTPS. The full procedure is extensively detailed in [Configure the Self-Service Portal](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-cs-portal.htm).

**Prerequisites:**

- IIS 8.0 installation on the CloudShell Portal machine

**To configure CloudShell Portal over HTTPS:**

1. Manually create the IIS website. Make sure to:
    
    1. Set the **Binding Type** to **https**.
    2. Set the **SSL certificate**.
2. In the CloudShell Portal configuration wizard, in the **IIS configuration** page, select the **Enable HTTPS communication** checkbox.
3. Make sure you can browse to and use CloudShell Portal over HTTPS.