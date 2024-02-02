---
sidebar_position: 1
---

# CloudShell API Overview

Quali's CloudShell APIs allow you to interact with and automate CloudShell for enhanced, customizable platform management, functionality, and usability.

CloudShell applications have multiple APIs, which enable you to get services from the Quali Server and to utilize CloudShell's capabilities for Shell automation, blueprint orchestration, sandbox deployment and test automation. Using Quali's CloudShell APIs, you can integrate between CloudShell and third-party applications in the DevOps ecosystem, such as a continuous integration solution like Jenkins (or any web application).

CloudShell APIs can be classified as outbound and inbound APIs. In other words, APIs that are used to serve CloudShell in a wider context (Sandbox API), like CI/CD processes, and APIs used to extend CloudShell automation and orchestration.

- **CloudShell Administration API**: Used for managing domains, identities and license pools
- **Sandbox API**: Used for consuming and interacting with public blueprints and sandboxes
- **Automation API**: Used for sandbox orchestration and administrative operations in CloudShell
- **Quali API**: Used for managing automation suites and sandbox attachments, and importing and exporting blueprint packages
- **Packaging API**: Used for modifying blueprint packages
- **New Job Scheduling API**: Used for managing New Job Scheduling servers and suite executions

For additional details about each API, see below.

## CloudShell Administration REST API

A RESTFul API that allows your admins to perform CloudShell administration tasks remotely, without having to open Resource Manager Client. As such, this API allows you to perform all the tasks provided by Resource Manager Client. This includes managing domains, groups, users, license pools, and also share blueprints/resources among different domains. For details, see [CloudShell Administration REST API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-ovrvw.htm).

## Sandbox API

A RESTful API designed to facilitate the consumption of public blueprints for CI and DevOps activities. It enables you to automate the deployment of CloudShell sandboxes and interact with sandbox components, and integrates with CI platforms such as Jenkins or Jetbrains TeamCity. CloudShell Sandbox API comes with an API gateway, which enables to interact with CloudShell without direct access to the server. For details, see [CloudShell Sandbox API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/CS-Snbx-API-Topic.htm).

## Automation API

This API is an official Python package utilizing XMLRPC protocol to communicate with CloudShell. It's designed to automate CloudShell from Python scripts and drivers. The CloudShell Automation API is based on the XML RPC API. For details, see the [CloudShell Automation API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pyth-API-Overvw.htm) article, or check out our API guides. The Python package [API guide](https://help.quali.com/Online%20Help/0.0/Python-API/) includes additional information like return objects and is intended for experienced Python developers, while for beginners, we recommend to use the [TestShell API Python Reference Guide](https://help.quali.com/Online%20Help/0.0/TestShell-API/TestShell%20Python%20API.html), which features an easy to understand format and code examples.

To learn how to implement this API in .NET or XML RPC, see [TestShell API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/TS-API.htm).

## Quali API

A RESTful API designed to control the scheduling and queuing of test automation suites. Quali API can be used in several protocols (C#, TCL). This API is also used for importing and exporting packages and Shells, getting sandbox attachments, and execution server details. For details, see [Quali API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Quali-API-Topic.htm), or check out the appropriate Quali API reference guide:

- [Quali API Library Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20API%20Library.html): is available by default in the TestShell Studio tools and can be added as a DLL asset to a project in CloudShell Authoring.
- [Quali API C# Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20cSharp%20API.html "Quali API C# Reference Guide"): for .NET
- [Quali API REST Reference Guide](https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20REST%20API.html "Quali API REST Reference Guide"): for APIs using the REST client

The default port for Quali API in the Quali Server is 9000.

## Packaging API

Designed to automate the creation and configuration of CloudShell blueprint packages. For details, see [Packaging API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pckg-API/PackagingAPI.htm).

## New Job Scheduling API

A RESTful API dedicated to CloudShell's New Job Scheduling tool. This API is used to automate the execution of test suites. For details, see [New Job Scheduling REST API](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-ovrvw.htm).

## Implementation Examples

Code examples are available in the Dev Guide's [Available CloudShell APIs](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/APIs/Available-CS-APIs.htm)
