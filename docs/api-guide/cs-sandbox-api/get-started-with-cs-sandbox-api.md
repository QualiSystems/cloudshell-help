---
sidebar_position: 1
---

# Getting Started with CloudShell Sandbox API

The following article explain the steps required for using CloudShell Sandbox API with CloudShell.

## CloudShell Sandbox API workflow

1. Install the CloudShell Sandbox API service (via the CloudShell Sandbox API installer available during the CloudShell Suite/Quali Server installation). For details, see the CloudShell Installation Guide.
    
    :::note
    The default port for the CloudShell Sandbox API in the Quali Server is 82. You can customize this port number in the CloudShell Configuration wizard - CloudShell Sandbox API configuration page. 
    :::
    
    Upon installation of the Quali Server, the CloudShell Server Proxy and CloudShell Sandbox API services will automatically start running. These services transmit requests and responses to and from the Quali Server database via the CloudShell Sandbox API, as follows:
    
    1. Developers use the CloudShell Sandbox API to send a request to the CloudShell Server Proxy service.
    2. The CloudShell Server Proxy service transmits the request to the Quali Server database.
    3. The Quali Server database returns a response to the CloudShell Server Proxy and CloudShell Sandbox API services, and finally to the developer code.
2. Install an API testing tool, such as the [Postman Chrome App](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), or [Swagger UI](http://swagger.io/swagger-ui/). This is recommended so that you can test the API before integrating it into your code.
3. Run the login method:
    
    - [login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm#login) method for version 1
    - [login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm#login) method for version 2

Once you have the authorization token (per the specified user and domain), you must include it in the method request header for any of the CloudShell Sandbox API methods on the public blueprints and sandboxes in the desired domain. For a complete list of the available methods access the relevant version:

For version 1, see [CloudShell Sandbox API Version 1 Reference Guide](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm).

For version 2, see [CloudShell Sandbox API Version 2 Reference Guide](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm).

### Common response codes

When running the methods, you may get some of the following response codes:

| Status Code | Message example | Description |
| --- | --- | --- |
| 200 | "Successful response" | Process completed successfully |
| 202 | "Accepted" (Note: This is not yet implemented in the live documentation) | The request has been accepted, but was not yet processed. |
| 400 | "Parameter is not a valid", "The request didn't contain authentication" | Invalid request - the request didn't contain one or more of the required elements. |
| 401 | "Login failed for user" | Authentication problems - User credentials are not in order. |
| 403 | "User is not allowed to view this entity" | The user does not have permission to access the information. |
| 404 | "Entity could not be found" | The element for which you request information was not found. <br/> Tip: CloudShell Sandbox API only works with public blueprints and sandboxes that are based on public blueprints. |

:::note
 For additional information about HTTP status codes, see [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).
:::

To use the live documentation pages, log in to the **Authentication API** page using your user credentials and the name of the appropriate CloudShell domain. Then, access the **Sandbox API** page to execute its methods on the public blueprints and sandboxes in the domain.

:::note
 Sandbox API can be configured to run in secure mode. See [Configuring Sandbox API to Work in HTTPS Mode](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/CS-Snbx-API-Https.htm).
:::
## Related Topics

- [CloudShell Sandbox API](http://localhost:3000/cloudshell-help/next/api-guide/cs-sandbox-api)