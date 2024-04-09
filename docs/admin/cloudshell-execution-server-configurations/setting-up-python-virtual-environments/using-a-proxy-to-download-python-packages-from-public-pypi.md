---
sidebar_position: 3
---

# Using a Proxy to Download Python Packages from Public PyPi

If the CloudShell Server resides on your internal network, you may need to set up an outbound proxy server to allow it to access [Public PyPi](https://pypi.org/) for downloading Python packages required by your scripts and shells.

There are different ways to do this, and we'll cover using a configuration file or environment variables.

## Using configuration file

1. On the Execution Server machine, create a file called `pip.ini` under `C:\programdata\pip\`.
2. In `pip.ini` specify the proxy server's address as follows:
    
    ```javascript
    [global]
    proxy = http://[username:password@]proxyserver:port
    ```
    
    No need to specify the port if it's 80 for HTTP or 443 for HTTPS.
    

The process may differ if you're on a Linux Execution Server. For details, see the pip official documentation: [https://pip.pypa.io/en/stable/user\_guide/#using\-a-proxy\-server](https://pip.pypa.io/en/stable/user_guide/#using-a-proxy-server).

## Using environment variables

1. Depending on the proxy's communication protocol, create an environment variable on the Execution Server machine:
    
    `http_proxy` or `https_proxy variables`
    
2. Set the variable's address in the format:
    
    ```javascript
    http://[username:password@]proxyserver:port
    ```
    
    No need to specify the port if it's 80 for HTTP or 443 for HTTPS.
    

## Points to consider

- In the proxy, sometimes not all internet access is allowed. In such cases, make sure at least these 2 addresses are allowed (both are over HTTPS and therefore use port 443):
    
    [https://pypi.org](https://pypi.org/)
    
    [https://files.pythonhosted.org](https://files.pythonhosted.org/)
    
- When setting the proxy to use, the Execution Server will also try to reach out to the Quali Server (where the local PyPi Server is installed) using this proxy information, so if the proxy needs to allow access to the Quali Server machine, this is something you might want to consider adding to the proxy.
    
- If you cannot add the Quali Server to the proxy, one option is to use the environment variables, and only set the `https_proxy` variable, which will be used to access the online Python repositories. However, this will not be used for HTTP access to the local PyPi Server on Quali Server.
    
    Note that only using the `https_proxy` variable will not work if the local PyPi Server is also secured and uses HTTPS. In this case, you need to either apply the changes to the proxy as mentioned in the note above, or use the offline mode (i.e. copy all packages to the local PyPi repository).
    

## Related Topics

- [Configuring CloudShell to Execute Python Commands in Offline Mode](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md)
- [Configuring PyPi Server to Work in Secure Mode](../../../install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md)
