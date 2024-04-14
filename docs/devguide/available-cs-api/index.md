# Available CloudShell APIs

In this article, we’ll discuss the different CloudShell APIs.

CloudShell applications have multiple APIs, which enable you to get services from the Quali Server and to utilize CloudShell’s capabilities for Shell automation, blueprint orchestration, sandbox deployment and test automation. CloudShell APIs can be classified as outbound and inbound APIs. In other words, APIs that are used to serve CloudShell in a wider context (our RESTful Sandbox API), like CI/CD processes, and APIs used to extend CloudShell automation and orchestration. For additional information, visit the [CloudShell API Guide](../../api-guide/cs-api-overview.md).

## CloudShell Sandbox API

**CloudShell Sandbox API** is a RESTful API that allows you to use CloudShell sandboxes as part of your CI/CD process. For example, you can start, extend and stop sandboxes, run sandbox orchestration and automation commands, and get information about your sandboxes and execution activity. For additional information, see [CloudShell Sandbox API](../../api-guide/cs-sandbox-api/index.md).

### Examples

For implementation examples, visit our [TeamCity](https://github.com/QualiSystems/Sandbox-TeamCIty-Plugin/blob/master/README.md) or [Jenkins](https://plugins.jenkins.io/cloudshell-sandbox) plugin documentation, which leverages CloudShell Sandbox API to automate the consumption of sandboxes as part of the devops cycle.

## CloudShell Automation API

CloudShell Automation API is a Python open source package you can use to develop CloudShell orchestration and automation capabilities. Using the CloudShell Automation API, you can design orchestration scripts that communicate and run operations on CloudShell, from administrative operations like adding users, to sandbox-level operations like provisioning resources, resolving connectivity and running health check on the sandbox’s elements. For additional information, see [CloudShell Automation API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pyth-API-Overvw.htm) and [CloudShell Automation API Reference Guide](pathname:///api-docs/2023.3/Python-API).

Note that since CloudShell Automation API can perform sandbox and CloudShell\-level operations, it mostly applies to orchestration scripts and is not recommended to be used in shells. Having said that, there are two methods in the API that apply directly to shells: WriteMessageToReservationOutput allows the driver to print messages in real time to the output console, and SetResourceLiveStatus allows the driver to indicate the resource’s state with an icon. For example, online and offline.

### Examples

See [Useful CloudShell Automation API Code Examples](./available-cs-api/useful-cs-api-examples/).

## TestShell API

The **TestShell API** allows designing orchestration and automation using C#, TCL API and XML RPC. It is intended for performing a wide variety of operations within CloudShell; from administrative tasks, such as managing inventory or users, to sandbox operations, such as executing commands and controlling both resource and sandbox live statuses. It is especially useful for writing tests, and obtaining information about resources, blueprints and sandboxes. TestShell API and CloudShell Automation API provide the same capabilities and functionality.

For additional information, see the appropriate TestShell API Reference Guide:

- [TestShell API Library Reference Guide](pathname:///api-docs/2023.3/testshell-api/TestShell%20API%20Library.html)
    
- [TestShell API C# Reference Guide](pathname:///api-docs/2023.3/testshell-api/TestShell%20cSharp%20API.html)
    
- [TestShell API TCL Reference Guide](pathname:///api-docs/2023.3/testshell-api/TestShell%20TCL%20API.html)
    
- [TestShell API XML RPC Reference Guide](pathname:///api-docs/2023.3/testshell-api/TestShell%20XML%20RPC%20API.html)
    

## Quali API

Quali API allows you to automate the scheduling and queuing of test automation suites. It can be used in C# and TCL, and is also used for getting sandbox attachments and execution server details.

For additional information, see the appropriate Quali API Reference Guide:

- [Quali API Library Reference Guide](pathname:///api-docs/2023.3/quali-api/Quali%20API%20Library.html)
    
- [Quali API C# Reference Guide](pathname:///api-docs/2023.3/quali-api/Quali%20cSharp%20API.html)
    
- [Quali API REST Reference Guide](pathname:///api-docs/2023.3/quali-api/Quali%20REST%20API.html)
    

## Packaging API

**CloudShell Packaging API** allows you to automate the creation configuration of CloudShell blueprint packages, which can be used for backup purposes and for sharing blueprints between different CloudShell deployments. For additional information and implementation examples, see the [Packaging API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pckg-API/PackagingAPI.htm).