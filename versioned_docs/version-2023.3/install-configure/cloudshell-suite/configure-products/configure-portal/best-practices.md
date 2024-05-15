---
sidebar_position: 2
---

# Best Practices for CloudShell Portal

## Manage IIS log file storage

There are several things you can do in this regard. For details, see this Microsoft Docs page: [https://docs.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/managing-iis-log-file-storage](https://docs.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/managing-iis-log-file-storage)

## Enable dynamic compression on your IIS settings

Dynamic compression can provide faster transmission times between IIS and CloudShell Portal by compressing files from CloudShell Portal to the browser (HTML, js, css, tc).

**To enable dynamic compression:**

1. Install dynamic content compression on your IIS.
    
    Follow the instructions on [https://www.iis.net/configreference/system.webserver/httpcompression#003](https://www.iis.net/configreference/system.webserver/httpcompression#003).
    
2. Open the `c:\windows\system32\inetsrv\config\applicationHost.config` file and add the following keys:
    
    - Under `<dynamicTypes>`:
        
        `<add mimeType="application/xml" enabled="true" />`
        
        `<add mimeType="application/json" enabled="true" />`
        
    - Under `<staticTypes>`:
        
        `<add mimeType="application/x-javascript" enabled="true" />`
        
3. Next, create the IIS website.

## Enhance IIS website security

You can enhance your IIS website's security by only allowing cookies that come from an HTTP source.

**To do so:**

1. Edit the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\Web.config` file.
2. Add the following:
    
    ```python
    <system.web>
      ...
      <httpCookies httpOnlyCookies="true" requireSSL="true" />
      ...
    </system.web>
    ```
    
3. Save the file.
4. Restart the IIS website.

## Protect against CSRF attacks

Enhance the security of your IIS website by enabling Cross-Site Request Forgery (CSRF) protection. This feature adds a CSRF token to all requests exchanged between the browser and the portal, ensuring the validity of user requests and safeguarding against CSRF attacks.

**To do so:**

1. Edit the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file.
2. Add the following key:
    
    ```python
    <add key="VerifyAntiForgeryToken" value="True" />
    ```
    
3. Save the file.
4. Restart the IIS website.