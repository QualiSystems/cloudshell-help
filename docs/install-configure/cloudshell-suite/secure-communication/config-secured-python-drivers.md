---
sidebar_position: 2
---

# Configure Python Drivers and Scripts to Run in HTTPS Mode

The feature allows secure communication (https) between any Python driver/script that uses CloudShell Automation API and Quali Server.
:::warning Important
Once HTTPS mode is enabled, Quali Server will only respond to HTTPS communication when using XML RPC or TCL.
:::
This is a three-step process:

- [Bind a new certificate to the Quali Server port](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Creating)
- [Enable HTTPS mode on Quali Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Enable)
- [Enable HTTPS mode on Linux Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Enable2)
- [Set python drivers and scripts to create an HTTPS session](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Set)

## Bind a new certificate to the Quali Server port

To bind a new certificate, first obtain the certificate and then bind it to the Quali Server port.

### Creating a mock certificate

If you don't have a certificate, use the below procedure to create a mock certificate. If you already have a certificate, skip this section and continue with [Binding the certificate to the Quali Server port](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Binding).

**To create a mock certificate:**

1. On the Quali Server machine, open command-prompt as administrator.
2. Run this command to create a base certificate:
    
    ```javascript
    makecert.exe -sk RootCA -sky signature -pe -n CN=<Quali-Server-hostname/IP> -r -sr LocalMachine -ss Root MyCA.cer
    ```
    
3. Run this command to create a client certificate based on the base certificate:
    
    ```javascript
    makecert.exe -sk server -sky exchange -pe -n CN=<Quali-Server-hostname/IP> -ir LocalMachine -is Root -ic MyCA.cer -sr LocalMachine -ss My MyCA2.cer
    ```
    
4. Add the location of the `makecert.exe` file to the path environment variables (system):
    
    ![](/Images/IG2/HttpsModePathVar.png)
    

### Binding the certificate to the Quali Server port

**To bind the certificate to the Quali Server port:**

1. On the Quali Server machine, in the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Certificates` folder, double-click the `MyCA2.cer` file.
2. In the **Details** tab, scroll down and select **Thumbprint**.
3. Copy the entire hex value to notepad.
4. Remove any spaces and copy the updated hex value.
5. Open command-prompt as administrator and run the following command with the updated value:
    
    ```javascript
    netsh http add sslcert ipport=0.0.0.0:8029 certhash=PASTE_THE_HEX_VALUE_HERE appid={1b1e7a9d-1af7-4922-88b9-8220e09cc071}
    ```
    

## Enable HTTPS mode on Quali Server

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ResourceManagerAPIHostAddress" value="https://localhost:{0}/ResourceManagerApiService"/>`
    :::note
    \{0\} will be populated by CloudShell.
    :::
2. Restart the **Quali Server** service.

## Enable HTTPS mode on Linux Execution Servers

If you are using any Execution Servers on Linux machines, do the following to allow those Execution Servers to use HTTPS without a certificate:

- Set the QS\_PYTHON\_SETUP\_TEARDOWN\_DRIVER\_IGNORE\_SSL\_ERRORS environment variable with the value "true" on the Execution Server machines.
    
    This will disable SSL errors.
    

## Set python drivers and scripts to create an HTTPS session

To use the CloudShell Automation API with a server configured to work in HTTPS, the client should create a session with a matching connection method.

For example, instead of using this method, which was used before CloudShell 8.2:

```javascript
session = api.CloudShellAPISession(context.connectivity.server_address, context.reservation.domain, token_id=context.connectivity.admin_auth_token)
```

Use this method in your drivers and scripts:

```javascript
session = api.CloudShellAPISession(context.connectivity.server_address, context.reservation.domain, token_id=context.connectivity.admin_auth_token,  cloudshell_api_scheme="https")
```

Alternatively, you can use the `cloudshell_scripts_helpers.get_api_session()` out-of-the-box script helper that uses the orchestration script context from the Execution Server and connects with the suitable method.

To know the correct API scheme (HTTP or HTTPS), we extended the driver context and orchestration script context to include the `tsAPIScheme` property. This propery is placed in the connectivity info JSON and will be populated by the Execution Server according to the server configuration method.