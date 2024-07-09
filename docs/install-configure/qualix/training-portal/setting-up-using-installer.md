---
sidebar_position: 1
---

# Setting up Training Portal Using the Installer (Over the Shoulder)

## Prerequisites

- NodeJS 14
- CloudShell 2020.1 GA or higher
- QualiX 3.2 or higher

## Installation

**To install and configure Training Portal:**

1. Download and extract the Training Portal installation package from [https://github.com/QualiSystemsLab/Training\-Portal](https://github.com/QualiSystemsLab/Training-Portal).
    
2. Set the Sandbox API endpoint by creating the following environment variable:
    - Variable name: QS\_SANDBOX\_API
    - Variable value: http://\<Sandbox-API-IP\>:\<Sandbox-API-Port\>
        
        For example: http://192.32.4.122:82
        
3. In Command-Prompt, navigate to the root folder of the Training Portal and run:
    
    ```javascript
    npm install
    ```
    
    ```javascript
    npm run-script build
    ```
    
    ```javascript
    node index.js
    ```
    

## Customization options

1. Perform the desired customization:
    - White-labeling: Override the `\training-portal\src\assets\white-label-logo.png` image file with the new logo (keep the same file name).
    - Instructions pane width:
        
        1. Open the `\training-portal\src\components\Instructions.js` file.
        2. Locate the line:
            
            ```javascript
            export const instructionsDrawerWidth = '350px';
            ```
            
        3. Set the desired instructions pane width, in pixels.
        4. Save the file.
2. Rerun:
    
    ```javascript
    run-script build
    ```
    :::tip
    In some cases, like changing packages, you might need to re-run the `npm install` as well.
    :::
3. Restart the **CloudShell Portal IIS** service.

## Configuration

1. In the Quali Server machine, open the following file in a text editor:
    
    `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml`.
    
2. Do the following under the `<ConfigurationSection name="LinkApplications">` tag:
    
    1. Copy the appropriate Full link(s):
        :::important
        Make sure to use these links and not the ones in [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](../post-installation-config/configure-remote-access.md).
        :::
        **SSH Full link:**
        
        ```javascript
        <key name="SSH - Full" pattern="http://<QualiX IP>/remote/#/client/c/ssh{qid}?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}" icon-key="SSH" />
        ```
        
        **RDP Full link:**
        
        ```javascript
        <key name="RDP - Full" pattern="http://<QualiX IP>/remote/#/client/c/rdp{qid}?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />
        ```
        
    2. Copy the appropriate Read only or Full access link from the sections below:
        
        **Read only links**
        
        In "read only" mode, the user can only view the session but not move elements or click buttons and links on the connected device.
        
        ```javascript
        <key name="SSH - ReadOnly" pattern="http://<Qualix IP>/remote/#/client/c/ssh{qid}sharedr?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}&amp;shared=true&amp;readonly=true" icon-key="SSH" />
        ```
        
        ```javascript
        <key name="RDP - ReadOnly" pattern="http://<Qualix IP>/remote/#/client/c/rdp{qid}sharedr?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true&amp;shared=true&amp;readonly=true" icon-key="RDP" />
        ```
        
        **Read/Write access links**
        
        A full access connection grants the user full permissions on the device or VM's OS. However, since this is a shared link, it can only access existing connections but not create them.
        
        ```javascript
        <key name="SSH - ReadWrite" pattern="http://<Qualix IP>/remote/#/client/c/ssh{qid}shared?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}&amp;shared=true&amp;readonly=false" icon-key="SSH" />
        ```
        
        ```javascript
        <key name="RDP - ReadWrite" pattern="http://<Qualix IP>/remote/#/client/c/rdp{qid}shared?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true&amp;shared=true&amp;readonly=false" icon-key="RDP"/>
        ```
        
    3. In each link, eplace `<QualiX IP>` with the QualiX Server hostname or IP address.
3. Save the file.
4. Restart the **Quali Server** service.
5. In Resource Manager Client, create a user for the trainee with access to the appropriate domain.

## Setting up a new training session

1. In REST API, create an access token for the training session:
    
    1. Open the Training Portal's live documentation page:
        
        ```javascript
        http://\[CloudShellPortalAddress\]:82/api/explore/#/
        ```
        
    2. Log in to the user's domain.
    3. Expand the **POST /token** API method.
        
        ![](/Images/QualiX/TrainingPortalRestApi_499x248.png)
        
    4. Click inside the **Model Schema** area to load the request body.
        
        ![](/Images/QualiX/TrainingPortalModelSchema.png)
        
    5. In the **body** area, replace **user.name** with the trainee's CloudShell user name (do not remove the quotes).
        
        For example:
        
        ![](/Images/QualiX/TrainingPortalRequestBody.png)
        
    6. Click **Try it out!**.
        
        A Response Code of "200" indicates success.
        
    7. Copy the access token from the **Response Body**, without the quotes.
2. Build the training portal link:
    
    ```javascript
    http://<TrainingPortaUrl>:3001/<SandboxId>?access=<AccessToken>
    ```
    
    Where:
    
    - **\<TrainingPortalUrl\>** is the url defined in the `package.json` ("3001" is the default Training Portal port)
    - **\<SandboxId\>** is the sandbox ID (taken from the sandbox's URL)
    - **\<AccessToken\>** is the access token you copied from the POST /token API's **Response Body**
    
    For example:
    
    ```javascript
    http://112.78.85.27:3001/645b57f6-9ea3-4968-aa92-900bf3ee5be8?access=NEapY8Cnqk6JYPNAt7il5w2
    ```
    :::tip Tips
    - By default, when starting the Training Portal with the `node index.js` command, it will start listening on port 3001. This is a value that is coming from inside the `index.js` file. If you prefer a different port, you should edit the file.
    - Use a tool like pm2 to make the process run as a service ([https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)).
    :::
    The trainee uses this link to work in the sandbox, which looks something like this:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/TrainingSandbox.png)
    
    Over-the-shoulder users access the trainee's QualiX session from the sandbox, via the resource or App's remote access links.
    

## HTTPS Configuration

1. Prepare the Certificate Files:
    1. Obtain or generate the server certificate key and PEM files.
    2. Copy the files to the Training Portal server.
2. Ensure you have the full path to the PEM and key files.
3. Stop the Training Portal server.
4. Open a command prompt window.
5. Run the appropriate commands to create the necessary environment variables:
    
    - For Windows:
        
        ```javascript
        set PROTOCOL=https
        set SSL_CRT_FILE=C:\qs\Training-Portal\cert\server.pem
        set SSL_KEY_FILE=C:\qs\Training-Portal\cert\server.key
        ```
        :::warning
        Make sure to replace the path and name with the actual full path and name to the certificate files on your system.
        :::
    
    - For Linux:
        
        ```javascript
        export PROTOCOL=https
        export SSLCRTFILE=./server.pem
        export SSLKEYFILE=./server.key
        ```
        
6. Start the Training Portal server.
7. Run
    
    ```javascript
    node index.js
    ```
    

## Related Topics

- [Welcome to your training session!](./welcome-to-your-training-session.md)