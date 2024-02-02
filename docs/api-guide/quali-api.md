---
sidebar_position: 5
---

# Quali API

The Quali API enables users and administrators to control the scheduling and queuing of the execution of TestShell suites and jobs, which may be using CloudShell to provide Sandboxes-as-a-Service. In addition, administrators can use this API to integrate CloudShell scheduling and queuing with external Continuous Integration (CI) systems.

For additional information, see the following Quali API guides:

- **Quali API Library**: is available by default in the TestShell Studio tools and can be added as a DLL asset to a project in CloudShell Authoring, the driver builder.

For the complete list of Quali API Library functions, see [Quali API Library Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20API%20Library.html).  

- **Quali C# API**: for .NET
    
    For the complete list of Quali API C# functions, see [Quali API C# Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20cSharp%20API.html "Quali API C# Reference Guide").
    
- **Quali REST API**: for APIs using the REST client
    
    For the complete list of Quali API REST functions, see [Quali API REST Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20REST%20API.html "Quali API REST Reference Guide").
    
    :::note Notes for Quali REST API:
    - Input parameters must be in JSON format.
    - The header must include the application/json content type. For example:
        
        `headers = {'Authorization': Basic auth_code, 'Content-Type': 'application/json`
    :::
    

The default port for Quali API in Quali Server is 9000.

## Related Topics

- [Configuring Quali API to Work in HTTPS Mode](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/quali-api-https.htm).