---
sidebar_position: 2
---

# TestShell API

TestShell API allows you to automate CloudShell (in a similar manner as in [CloudShell Automation API](./cs-automation-api.md)), and is especially useful for writing drivers or tests, and to get information about CloudShell resources and blueprints. Administrators can use this API to create scripts and automation that run administrative tasks, such as moving resources between domains or updating relationships between user groups.

The TestShell API library is the main library of the lab management API. It supports most of the actions available in CloudShell Portal and in Resource Manager. The default port for TestShell API Library and TestShell C# API in the Quali Server is 8028. The default port for TestShell XML RPC API and TestShell TCL API in the Quali Server is 8029.

The TestShell API provided implementations are available from the following links:

- **TestShell API Library**: The TestShell API library is available by default in TestShell Authoring tools, and can be added as a DLL asset to a project in CloudShell Authoring, the driver builder.

For the complete list of TestShell API Library functions, see [TestShell API Library Reference Guide](pathname:///api-docs/2023.3/TestShell-API/TestShell%20API%20Library.html).

- **TestShell C# API**: It is possible to add the TestShell API library to a C# project and use its methods.
    
    For the complete list of TestShell API C# functions, see [TestShell API C# Reference Guide](pathname:///api-docs/2023.3/TestShell-API/TestShell%20cSharp%20API.html).
    
- **TestShell TCL API**: Each CloudShell version comes with a TCL client that supports all the TestShell API methods using TCL syntax. The TCL client can be found in `%InstallationFolder%\Integration\TestShell API\TestShell TCL API`.  
    
    For the complete list of TestShell API TCL functions, see [TestShell API TCL Reference Guide](pathname:///api-docs/2023.3/TestShell-API/TestShell%20TCL%20API.html "TestShell API TCL Reference Guide")
    
- **TestShell XML RPC API**: Direct XML (Remote Procedure Call) RPC commands are also supported for TestShell API methods. When using XML RPC API, the data needs to be wrapped in a specific way and sent to the relevant port in the server. To test XML RPC API, Quali uses an internal tool that creates this wrap automatically, and so you only need to insert the parameters for the various methods.  
    
    For the complete list of TestShell API XML RPC functions, see [TestShell API XML RPC Reference Guide](pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html "TestShell API XML RPC Reference Guide").
    

The TestShell API library is a DLL file that is loaded to the database. (You can view and edit the library file and version in the **Libraries** tab in the TestShell Studio while logged as an admin.)

Since TestShell API is a lab management client, it requires login credentials, therefore the session should include user credentials and a domain. Following the login step, it is possible write an automated flow of actions.

For example, you can create the following scenario:

1. Create a resource.
2. Create sub-resources to the resource.
3. Set the values of the resource’s attributes.
4. Update the physical connection of the resource/sub-resources to other connectable resources.
5. Get resource details (as a data matrix or XML).
6. Reserve the resource.
7. Add a route request and connect it.
8. Get the route segments.
9. End the sandbox.

Once the scenario is created, it can be run automatically.

:::note General notes about TestShell API:

- Some actions that are possible in Resource Manager and in CloudShell Portal are not supported in TestShell API. For example, you cannot create and edit a blueprint using TestShell API. There are other solutions for that, such as creating and editing a sandbox and then saving it as a blueprint or importing a Quali package.
- Many operations have two versions, a “single” version and a “bulk” version. For example, it is possible to create a single resource using the "CreateResource" method or to create many resources at once using the “CreateResources” operation. This is not always the fastest way performance-wise, but it is sometime easier to write and edit. The bulk operation usually gets a matrix as an input, and sometimes has special rules (such as the fact you cannot have the sub-resource creation line before the resource line).
- Any function that requires a resource full path can also get the resource name without the folders it is located in.
:::