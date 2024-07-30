---
sidebar_position: 5
---

# Customize Remote Access Terminals

You can both customize the default access terminals, and add and customize your own access terminals in order to access your devices remotely from CloudShell Portal. You can also control which access terminals are available for which sets of equipment, and more.

## Adding new remote access terminals

**To add new remote access terminals:**

1. Go to the `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml` file.
2. Under the `<ConfigurationSection name="LinkApplications">` tag, add the new remote access terminals.
    
    For example, to grant access to a webpage of a device, copy one of the default access terminals (for example, RDP/Telnet as shown in the [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](./configure-remote-access.md)), and simply change the settings described in the following steps.
    
3. Perform the following steps in the line of the appropriate remote access terminals:
4. Change the entire `pattern` value to be the URL of the desired webpage.
5. Change the `name` to be the name you want to display for the remote access terminal in CloudShell Portal (for example `company site`).
    
    For example: `<key name="Company site" pattern="``http://quali.com``" icon-key="Web" />`
    
    The specified link (in this case `Web`) is displayed in the **More Options** list in CloudShell Portal (together with the predefined links to the default access terminals):
    
    ![](/Images/QualiX/Customizing-remote-access.png)
    
    When you click the ("Web”) link in an active sandbox, the desired URL (quali.com for example) is displayed.
    

## Customizing access terminals based on specific equipment

This section explains how to create an access terminal to a specific resource, service or App (component). This is done by setting, in the remote access terminal's connection string, the name of an attribute that is on the component so that when connecting to the device, the attribute value on the resource will be used.

Furthermore, only components that have all of the connection string's attributes will include its access terminal.

**To customize access terminals according to particular sets of equipment:**

1. In Quali server, open the following file in a text editor `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml` file.
    
2. Embed attributes in the connection string in order to make it flexible according to the device from which you are trying to open an access terminal.
    
    You may embed any attribute inside the connection string in order to make it dynamic and based on the device from which you need the access. Any attribute you have existing in **CloudShell Resource Manager Client** may be referenced inside the connection string by placing it inside curly brackets \{\}.
    
    For example, you can edit:
    
    `<key name="Web" pattern="``http://quali.com``" icon-key="Web" />`
    
    with dynamic attributes like this:
    
    `<key name="Web" pattern={web_URL_attribute} icon-key="Web" />`
    
3. Save the file.
4. In **Resource Manager Client**, create and attach your custom attribute to the resource models/families for which you would like to use the customized connection string.
    :::important
    To customize the common access terminals to specific sets of equipment, do the following:
    
    1. For each access to the device, create a unique set of attributes:
        
        - \{access type\} User (for example, SSH User)
        - \{access type\} Password (for example, SSH Password)
    2. Attach the attributes to the specific resource models for which you would like to have this access option.
    :::

2. Save your changes.
    
3. Return to the `ServerUniversalSettings.xml` file, and add the attributes in \{\} inside the matching connection string.
    
    For example, attributes **SSH User** and **SSH Password**:
    
    ```javascript
    <key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={SSH User}&amp;password={SSH Password}" icon-key="SSH" />
    ```
    
4. Keep the original `User` and `Password` attributes in a resource model if you need some server-side operations on it (connecting routes/auto load, etc.).
5. Restart the **Quali Server** service to apply the changes.

## Customizing the look and feel of the remote access links

The below customization options are available. Simply add them to the remote access terminal line like any other parameter (qtoken, port, username, etc.) in the format:

```javascript
&amp;<param-name>=<value>
```

### RDP:

**color-depth** - The color depth to request, in bits-per-pixel. This parameter is optional default value is 16. If specified, this must be either 8, 16, or 24.

### SSH:

- **font-name**: Default value is "monospace".
- **font-size**: Default value is 12
- **color-scheme**: The color scheme to use for the terminal emulator used by SSH connections. This parameter accepts four special values as the color scheme parameter:
    - **black-white**: Black text over a white background.
    - **gray-black**: Gray text over a black background. This is the default color scheme.
    - **green-black**: Green text over a black background.
    - **white-black**: White text over a black background.
- **scrollback**: The maximum number of rows to allow within the terminal scrollback buffer. This parameter is optional. If not specified, the scrollback buffer will be limited to a maximum of 1000 rows.
- **server-alive-interval**: By default, the SSH client does not send "keepalive" requests to the server. This parameter allows you to configure the interval (in seconds) at which the client connection sends "keepalive" packets to the server. The default is 0, which disables sending the packets. The minimum value is 2.

### VNC:

- **color-depth**: If not specified dictated by the VNC server. The color depth to request, in bits-per-pixel. This parameter is optional. If specified, this must be either 8, 16, 24, or 32.

## Setting the QualiX remote connection browser's title

*This article does not apply to remote access terminals based on the new **vCenter Console Proxy** service.*

It is possible to customize the title of the browser tab that opens when clicking the remote access link.

**To set the caption of the browser tab:**

1. Use the `title` tag to specify a CloudShell string attribute on the resource.
    
    The attribute's value will be used as the browser tab's title.
    
    For example, **Tag Title**:
    
    ```javascript
    <key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={SSH User}&amp;password={SSH Password}&amp;title={Tag Title}" icon-key="SSH" />
    ```
    
2. Restart the **Quali Server** service.
    
    This is how the title should look (assuming the attribute's value on the resource is "new title"):
    
    ![](/Images/QualiX/QualiXTabTitle.png)