---
sidebar_position: 3
---

# Configure PyPi Server to Work in Secure Mode

This article explains how to configure PyPi Server behind a reverse proxy for secure communication (SSL) between PyPi Server and the Execution Servers.

Note that this article provides the recommended configuration using **nginx** on a Windows machine, but such configurations can also be achieved using a different OS like Linux or using a separate machine.

## How PyPi Server works

**PyPi Server** is an independent Python process, which runs on the Python environment of the **Quali Server** machine. It is managed by the Quali Server process. Therefore, the below configuration procedure should be done on the machine where the Quali Server is running, and while it’s running, to ensure PyPi Server is up as well.

## Configuring the ngnix process
:::note
In this example, we are using nginx-1.12.2 as this was the latest suitable Windows version at the time of writing this article.
:::
1. On the Quali Server machine, create a containing folder for the nginx files and folders you will download. For example: `C:\nginx\nginx-1.12.2`
2. Download and extract nginx to the folder.
    
    The folder should contain the `nginx.exe` file and some other folders with config files and related docs.
    
3. Make sure you have a certificate pair for SSL connection - a file for the key and a file for the certificate (they can be PEM files). For illustration purposes, we’ll use the names “MyKey.pem” and “MyCert.crt”.
4. Create a new folder, `C:\nginx\nginx-1.12.2\pypi-config`.
5. Create a new file called `pypiConfig.conf` and save it with this content:
    
    ```javascript
    events {
           worker_connections 768;
       }
    http {
       upstream adam {
       server 127.0.0.1:8036;
     }
     server {
         listen 443 ssl;
         ssl_certificate           C:/MyCert1.crt;
         ssl_certificate_key       C:/MyKey1.pem;
         ssl_session_timeout  5m;
         ssl_protocols  SSLv3 TLSv1 TLSv1.1 TLSv1.2;
         ssl_ciphers HIGH:!ADH:!MD5;
         ssl_prefer_server_ciphers on;
     }
    }
    ```
    
    There are many more options that can be done with an nginx configuration, but this is the basic configuration.
    
    Note that “8036” is the default port for communication between PyPi Server and CloudShell. If you change this value using the `PypiServerPort` key, you must set the same value here.
    
6. To activate nginx, run the following in command-line:
    
    ```javascript
    C:\nginx\nginx-1.12-2\nginx.exe -c .\pypi-config\pypiConfig.conf
    ```
    

## Verification

To verify the configuration is working, open `https://localhost` in your browser and see that you get the PyPi Server welcome page.

## Troubleshooting

- The page in `https://localhost` still indicates that the connection is not secured. To correct this, add the certificate to the local certificate bank on the machine.
- If the certificates are not valid, try to create them using `openssl` and not `MakeCrt`, and use them as “PEM” files.
- If you get an error when starting the nginx, check your indentation in the `pypiConfig.conf` file. You can also verify the configuration file by running the following in command-line:
    
    ```javascript
    nginx.exe -t -c .\pypi-config\pypiConfig.conf
    ```
    

## Related Topics

- [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md)
- [Configuring CloudShell to Execute Python Commands in Offline Mode](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md)
- [Using a Proxy to Download Python Packages from Public PyPi](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/PyPi-Srvr-Proxy.htm)