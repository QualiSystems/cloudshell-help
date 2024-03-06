---
sidebar_position: 3
---

# Configure Sisense SSO in CloudShell

SSO integration is a two-step process. First, you configure Sisense SSO in CloudShell and then you set up the Sisense SSO.

**Prerequisites:**

- [Grant Data Security Permissions to ElastiCube Name](../install-insight/insight-configuration/grant-permissions)

**To set up Sisense SSO in CloudShell:**

1. Log into CloudShell Portal as administrator.
2. Click **Manage>Integrations>Sisense Settings**.
3. Do the following:
    
    - For legacy dashboards, set **Integration Type** to **Legacy**.
    - For new dashboards (dashboards provided for CloudShell 2021.2 and up), specify the following:
        
        1. Set **Integration Type** = **New**
        2. Specify the **BI Host Address** hostname or IP address in the format `https://x.x.x.x:443`.
            
            Click **Test Connection** to verify connectivity to the BI host.
            
        3. Sisense Admin credentials:
            - Sisense administrator **User Name** and **Password**
            - **Admin token**: Click **Generate** (Click **Revoke** to prevent users from accessing Insight)
4. Click **Submit**.