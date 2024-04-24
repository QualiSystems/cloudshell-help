---
sidebar_position: 3
---

# Configuring ARR to Support SSL Offloading

**To configure ARR to support SSL offloading:**

1. On the ARR machine, open the IIS manager.

2. Open the ARR server farm and double-click **Routing Rules**.
    
    ![](/Images/HA1/Configuring-ARR-to-support_1_1_454x172.png)
    

3. Make sure the **Enable SSL offloading** check box is selected.
    
    ![](/Images/HA1/Configuring-ARR-to-support_1_2_513x183.png)
    

4. Repeat steps 1-3 with all the ARR machines.

## Recommendations

- Use **Centralized SSL Certificate** to share the same customer certificate between all ARR machines. For more information, see [IIS 8.0 Centralized SSL Certificate Support: SSL Scalability and Manageability](http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-centralized-ssl-certificate-support-ssl-scalability-and-manageability).
- Use **IIS Shared Configuration** to share the IIS configuration between the servers. For more information, see [Shared Configuration with IIS 7](http://www.iis.net/learn/manage/managing-your-configuration-settings/shared-configuration_264).
- Use **URL rewrite** to redirect users from http to https. For more information, see [URL Rewrite](http://www.iis.net/downloads/microsoft/url-rewrite).
- Basic ARR configuration information, see [Define and Configure an Application Request Routing Server Farm](http://www.iis.net/learn/extensions/configuring-application-request-routing-arr/define-and-configure-an-application-request-routing-server-farm).