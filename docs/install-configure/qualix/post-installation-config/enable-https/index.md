# Enable HTTPS Connection Between QualiX and CloudShell Portal

This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes.
:::note Notes
In order to connect to a device or VM from CloudShell Portal, the resource of the element must include the **User** and **Password** attributes. To learn how to add the attributes to a resource, see [Prepare and Reserve Blueprint](../../prepare-and-reserve-blueprint.md).

To connect using a service, the service must include an **Address**.
:::
**To enable SSL connection to sandbox elements:**

1. Make sure to perform the procedure in [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](../configure-remote-access.md).
2. In Quali Server, open the following file in a text editor:
    
    `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml`
    
3. Scroll down to the `<ConfigurationSection name="LinkApplications">` tag.
    
4. In the `pattern` element of each remote access terminal line, do the following:
    
    - To secure connections between the web browser and CloudShell Portal, replace `pattern="http` with `pattern="https`.
    - To hide the password from CloudShell end-users, replace `password={Password}` with `password=secure`.
    - Note that starting with QualiX 3.0, connections between CloudShell Portal and the QualiX Server are secure by default (`qualixType=https`).
    
    For example:
    
    ```javascript
    <key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />
    ```
    :::note
    The `qtoken` & `qid` keys are automatically filled out by the server and are related to CloudShell security enhancements. You do not need to configure anything related to these keys.
    :::
5. Save the file.
6. Restart the **Quali Server** service to apply the changes.
7. (Optional) To change the SSL certificate, see [https://tomcat.apache.org/tomcat-8.0-doc/ssl-howto.html](https://tomcat.apache.org/tomcat-8.0-doc/ssl-howto.html).