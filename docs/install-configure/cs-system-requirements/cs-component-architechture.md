---
sidebar_position: 1
---

# CloudShell Component Architecture

This article illustrates a basic CloudShell deployment. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load. For details about the ports required for communication between the components, see [CloudShell Port Requirements](./cs-port-requirements.md). For details about CloudShell in High Availability mode, see [Deployment Types (High Availability)](../../install-configure/ha-deployment/deployment-types-ha).

:::note Notes about the diagram below:
- A <span style={{ color: 'green' }}>green</span> frame denotes components related to the New Job Scheduling.
- Components in <span style={{ color: 'orange' }}>orange</span> are 3<sup>rd</sup> party tools/technologies.
- The Insight, QualiX and Portal machines are typically installed outside the private data center in the DMZ network.
:::

![](/Images/IG2/CloudshellComponents2021.1.png)
The CloudShell components are described in the following table:

<span style={{ color: 'red' }}>\*</span> TestShell, CloudShell Authoring and Job Scheduling are CloudShell paid add-on solutions.

| Component | Description |
| --- | --- |
| CloudShell Authoring<span style={{ color: 'red' }}>\*</span> | Code-free hardware interface editor for quick driver development for any blueprint, supporting full equipment interchangeability and automatic documentation for easy collaboration. |
| CloudShell Execution Server | Remotely executes setup, teardown and sandbox commands. It can also execute test suites and jobs from the Job Scheduling dashboard. This component adds to CloudShell Portal's total execution capacity. Execution servers can be either Windows or Linux-based. |
| CloudShell License Server | Manages network license distribution. The License Server can be installed on any machine, and should be installed before installing client components. |
| CloudShell Portal | A self-service web client that enables you to manage your resources, create and manage blueprints and sandboxes, as well as manage and schedule your automated testing.<br />You can leverage CloudShell’s extensive automation capabilities to run blueprint and resource commands as well as automate business use cases within Sandboxes. |
| CloudShell Resource Management Client | Use CloudShell Resource Manager to manage resources and usage. For an example of using this component, see [Import User Definitions from an Active Directory (Optional)](../cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad.md). |
| CloudShell Runtime | Supports the execution of CloudShell flows and drivers. |
| CloudShell Sandbox API | The CloudShell Sandbox API is a REST API that enables you to consume and interact with CloudShell sandboxes. Using Sandbox API, it is possible to integrate CloudShell with software interfaces to develop and automate Continuous Integration/DevOps processes. For example, you can use API functions to view details about blueprints and sandboxes related to a particular user domain and user permissions, and the available actions that can be performed on the blueprints and sandboxes.<br />The Sandbox API consists of three components, which reside on the CloudShell Portal machine: <ul><li>**CloudShell Server Proxy** - communicates with Quali Server, and communicates internally with CloudShell Sandbox API Gateway</li><li>**CloudShell Sandbox API Gateway** - communicates internally with CloudShell Sandbox API</li><li>**CloudShell Sandbox API** - communicates with API Client</li></ul> |
| Database Servers | CloudShell uses SQL and MongoDB. <br />SQL for CloudShell-related data such as blueprints, user identities, inventory resources, configurations, Apps and Insight data for BI analysis. <br />MongoDB is an open source database used to store sandbox events, New Job Scheduling-related data (suites, jobs, tests, reports, etc.) and permitted user identities.MongoDB instances for Quali Server and Sandbox Service are installed as part of the Quali Server installation. There's also an option to use an existing MongoDB Server or cluster. |
| Elastic Search | The 64-bit version of Java is required when using a 64-bit version of Windows. |
| PyPi Server | CloudShell manages driver and script dependencies using PyPi Server. |
| Quali API | The Quali API library provides access to job scheduling operations from outside of the Job Scheduling dashboard, as well as functions related to sandboxes, for example, attach file to sandbox and import and export of blueprints. |
| Quali Server | Runs the CloudShell framework and manages CloudShell data. |
| QualiX | Used for remote desktop gateway (must be accessible from CloudShell Portal and the browsers) |
| Sandbox Service | Sandbox Service is a Python service that comes in two flavors: Windows service (embedded) delivered as part of Quali Server and Linux service included with the New Job Scheduling on Kubernetes (this second flavor supports extremely large deployments, up to hundreds of new sandboxes every few minutes). As such, we also recommend moving the Sandbox Service to the Kubernetes cluster option even for high load deployments without the New Job Scheduling. <br />This service performs two key functions: <ul><li>Processes, prioritizes and invokes all sandbox creation requests against Quali Server. As such, starting with CloudShell 2020.2, Sandbox Service replaces the reservation creation mechanism that was used in pre-2020.2 CloudShell versions, also in deployments that do not use the New Job Scheduling. The Windows flavor of the service includes a healthcheck mechanism that actively monitors and restarts the service in the event of a failure.</li><li>Acts as the communication layer between Job Scheduling and Quali Server when handling New Job Scheduling operations. In deployments that use New Job Scheduling, the Kubernetes-based service needs to be used instead of the Sandbox Service that comes out-of-the-box with Quali Server. For details, see [Modify CloudShell to Use the Kubernetes-based Services](../cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell.md).</li></ul> **For upgrades in CloudShell environments that have Docker**, Sandbox Service will be installed externally on Docker and the `UseEmbeddedSandboxService` configuration key needs to be used to configure the deployment to use this external Sandbox Service. |
| Sisense | CloudShell Insight (BI Server). |
| TestShell API | The TestShell API library comprises functions for interacting with Quali Server. For example, you can use API functions to create and configure resources, blueprints, routes, and Sandboxes. This API library also provides a set of lab management batch operation functions. |
| TestShell Remote Runner<span style={{ color: 'red' }}>\*</span> | Executes TestShell-specific automation steps or complete scenarios on remote stations, enabling the launch of any script or protocol on a remote machine, without requiring complex infrastructure. |
| TestShell Studio<span style={{ color: 'red' }}>\*</span> | Desktop applications for GUI based test authoring and execution. (Studio and Runner are automatically installed with TestShell Studio.) |
| | **New Job Scheduling<span style={{ color: 'red' }}>\*</span> Components:** |
| ELK | ELK (*Elasticsearch, Logstash and Kibana*) is a 3rd party tool that can be used to store CloudShell logs. These logs can then be used to investigate deployment issues and bugs, and trace their causes. |
| External Test Repository | Online GitLab test repository that contains tests of a specific type. For example, GitLab. |
| Identity Service | Identity Service is our authentication engine for the New Job Scheduling and creates users based on Quali’s identity management mechanism, allowing these users to access and use the Job Scheduling Portal and REST API clients. |
| Job Scheduling Portal | REST API-driven UI client that is used to interact with New Job Scheduling. Job Scheduling Portal is separate from CloudShell Portal. |
| Job Scheduling Service | **Job Scheduling Service** is a high-performance test automation framework that allows organizations to create, manage and execute test batches. The service is hosted on a Kubernetes cluster and uses Quali Server to extract user, blueprint and sandbox data. |
| RabbitMQ | Open source message queuing tool used by Sandbox Service to manage sandbox creation requests coming from the Job Scheduling Portal and APIs. If needed, *RabbitMQ* is installed as part of the Quali Server. |
| Test Discovery Service | Test Discovery Service is responsible for discovering tests of a specific type. A Test Discovery Service can only discover tests of a specific type in a specific repository. For more information, see [Test Discovery Service](../cloudshell-suite/new-jss-install-config/test-discovery-service/index.md). |
| Test Execution Service | Test Execution Service is responsible for running tests discovered by the Test Discovery Service. For more information, see [Test Execution Service](../cloudshell-suite/new-jss-install-config/test-execution-service/index.md). <br />**Important:** Test Execution Service does not handle shell and script commands. CloudShell Execution Servers are required to handle such operations. |
