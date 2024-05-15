---
sidebar_position: 6
---

# Grant Data Security Permissions to ElastiCube Name

This procedure limits CloudShell Portal users to only see Insight data that applies to their domains, and is a prerequisite for SSO integration with Sisense.

**To configure data security permissions:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="BiCube" value="CS_BI_Cube"/>`
    
2. In the "value" field of the BiCube key, specify the name of the Sisense elasticube.
    
3. Save the file.
4. Restart the **CloudShell Portal IIS** service.

## Related Topics

- [Configure Sisense SSO in CloudShell (Manage>Integrations page)](../../insight-sso/configure-sso-in-cs.md)