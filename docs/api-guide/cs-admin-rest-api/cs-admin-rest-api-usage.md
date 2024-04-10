---
sidebar_position: 0
title: How to use
---

# CloudShell Administration REST API Usage

1. To use the API's methods, you must pass an authentication token. To obtain the token, execute the login method with a CloudShell system admin's credentials:
    
    PUT `http://<CloudShell Server>:<CloudShell Server port>/Api/Auth/Login`
    
    ```javascript
    {
        "Username": "admin",
        "Password": "admin",
        "Token": null,
        "Domain": "Global"
    }
    ```
    
    For example:
    
    ![](/Images/API/RM-API-login.png)
    
2. And feed the token you got in the response into the API requests as a Bearer Token:
    
    ![](/Images/API/RM-API-bearer-token.png)