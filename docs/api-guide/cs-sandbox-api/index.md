# CloudShell Sandbox API

CloudShell Sandbox API allows developers to use CloudShell via software interfaces. The CloudShell Sandbox API is a RESTful API that can be used to provide sandboxes as a service for a Continuous Integration/DevOps process, or for integration of Quali's software with external software and processes.

CloudShell Sandbox API allows developers to quickly connect to Quali Server and get details about blueprints and sandboxes related to particular domains, and their contents.

Developers can use the CloudShell Sandbox API to retrieve information and automate the deployment of CloudShell sandboxes and their components for testing and development purposes. Thus, developers can quickly analyze the required data in order to optimize development of sandboxes as services and continuous integration processes, and run, test, and validate their code as required. Continuous integration can be done automatically using Jenkins or via command line.

:::note
CloudShell Sandbox API only works with public blueprints.
:::

For more information, see [Automating CloudShell Sandboxes for DevOps](http://localhost:3000/cloudshell-help/next/devguide/available-cs-api/automate-cs-sandboxes-for-devops).

## CloudShell Sandbox API live documentation page

The CloudShell Sandbox RESTful API live documentation page allows you to test and experiment with the APIs, providing information on its different methods and parameters.

The CloudShell RESTful API live documentation has two page versions. Version 1 (CloudShell version 7.0 and up) includes methods to get basic information about blueprints and sandboxes, create a sandbox from a specific blueprint, and to tear it down. Version 2 (CloudShell version 8.0 and up) also includes information about sandbox components, and blueprint and resource commands.

The API live documentation pages for both API versions are installed with CloudShell. To access them, browse to the relevant default addresses:  

- Login method (for both versions): **http://\[CloudShellPortalAddress\]:82/api/explore/.**
- Blueprint and sandbox methods: **http://\[CloudShellPortalAddress\]:82/api/v1/explore/** (for version 1) <br/> and **http://\[CloudShellPortalAddress\]:82/api/v2/explore/ (for version 2).**

If you are accessing the links from the machine on which CloudShell Portal is installed, or from the CloudShell SDK edition machine, you can use “localhost” or “127.0.0.1”.

:::note
The default port for the CloudShell Sandbox API on the CloudShell Portal machine is 82. You can customize this port number, as required, in the CloudShell Configuration wizard - CloudShell Sandbox API configuration page.  
The default port for the Quali Proxy is 8033 and is not configurable (this port provides access to the proxy via HTTP protocol and is used by CloudShell Portal).
:::

To use the live documentation page, log in to the page with your credentials and the relevant domain name.

![](/Images/API/SWAGGER-login2.png)