---
sidebar_position: 2
---

# Insight dashboard error: "redirected you too many times."

## Error Message

:::danger-one-line
192.168.85.24 redirected you too many times.
:::

where "192.168.85.24" is the Quali Server's IP address

## Description

Due to an internet browser limitation, iframes are not displayed in internet browsers over HTTP.

## Solution

Since **Insight** dashboards are based on iframes, you will need to configure CloudShell Portal and Sisense to work over HTTPS to allow the dashboards to display in these browsers. The steps below apply to Sisense version 8.2 and up. For additional information, see this official [Sisense knowledgebase article](https://support.sisense.com/kb/en/article/breaking-changes-with-google-chrome-80-samesitenone-secure-cookie-settings-updated-march-12-2020).

**To resolve the issue:**

1. Perform the steps in [Configuring CloudShell Portal to Work in HTTPS Mode](../../install-configure/cloudshell-suite/secure-communication/config-secured-portal.md).
2. Open Sisense Configuration Manager (URL: `<sisense hostname/IP>:3030`) select the following 2 checkboxes:
    
    - **Enable SSL**
    - **Force secure cookies attribute**
    
    ![](/Images/BI/SisenseSSL.png)
    
3. Upload the SSL certificate.
4. Set the port number.
5. Click **Save**.
6. Confirm services restart if prompted.
    
7. Open the Sisense web app and click **Admin>Security Settings**.
8. Change **Support Cross Site Cookies for Embedding** to **None**.
    
    ![](/Images/BI/CrossSiteCookiesForEmbedding.png)
    
9. Click **Close** in the confirmation message.
10. Click **Save**.
11. In Chrome, go to **Settings>Privacy and security>Cookies and other site data** and select **Allow all cookies** or at least **Block third-party cookies in Incognito**.
    
    ![](/Images/BI/ChromeSettings.png)
    

## Related Topics

- [Configure HTTPS Connection Between CloudShell Portal and Sisense](../../install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https.md)
