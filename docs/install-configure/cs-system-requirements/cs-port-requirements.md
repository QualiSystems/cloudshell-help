---
sidebar_position: 2
---

# CloudShell Port Requirements

This article illustrates the CloudShell suite component architecture and ports used by CloudShell.

In the diagram below, components with a <span style={{ color: 'green' }}>green</span> frame were added as part of CloudShell 2020.2's new architecture. For details, see [CloudShell Component Architecture](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-compnts.htm).
:::note Notes about the diagram below:

- A <span style={{ color: 'green' }}>green</span> frame denotes components related to the New Job Scheduling.
- The Insight, QualiX and Portal machines are typically installed outside the private data center in the DMZ network.
- Port directions (outbound/inbound) is illustrated in the diagram.
:::
![](/Images/IG2/ComponentPorts2021.1.png)

The following table describes the required ports for each server or machine on which the port needs to be made available.
:::tip
The descriptions for each server/machine indicate which components need outbound port access.
:::
:::note Notes: 
Sandbox Service comes in two flavors, each using a different MongoDB:

- Service embedded on the Quali Server machine that uses MongoDB over port 27017.
- Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling.

Port 27017 is mostly used while port 27020 is used in very specific use cases where Sandbox Service is installed externally to Quali Server.
:::
| Server/Machine                     | Protocol/Port      | Description |
|------------------------------------|--------------------|-------------|
| CloudShell Execution Server        | HTTPS/443          | Used by the execution servers in an online CloudShell environment. |
|                                    | None               | No configuration required for offline CloudShell environments. |
| CloudShell Insight (BI Server)     | TCP/8081           | Default Sisense Portal. |
|                                    | HTTPS/443          | Used by Sisense Portal SSL (if SSL is configured). |
| CloudShell Portal                  | HTTP – TCP/80      | Used by browsers to access the CloudShell Portal. |
|                                    | HTTPS/443          | Used by CloudShell Portal SSL (if SSL is configured). |
| External Test Repository           |                    | Port and protocol depend on the test repository to be used. |
| Job Scheduling Portal              | HTTP/80            | Used by browsers to access Job Scheduling Portal and used by Job Scheduling Portal to access Job Scheduling Service. |
|                                    | HTTP/443           | Used by CloudShell Portal SSL (if SSL is configured). |
| Job Scheduling Service             | HTTP/9000          | Used by Job Scheduling Service to access Quali Server. |
|                                    | HTTP/80            | Used by Job Scheduling Service to access Test Execution Service. |
|                                    | HTTP/5000          | Used by Job Scheduling Service to authenticate CloudShell user access to Job Scheduling portal and REST API clients. |
| Licensing Server                   | UDP/5093           | Used by Quali Server, CloudShell Resource Management Client, CloudShell Authoring, TestShell Studio, TestShell Runner, Execution Server. |
| MongoDB                            | 27017              | Used by Quali Server and Sandbox Service, which stores sandbox events data related to historic, active and future sandboxes. <br />**Tip:** This is the default port, but you can change it as appropriate (see [Configure the MongoDB Database Connection](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-MongoDB.htm)). Or, you can use a hosted MongoDB solution (on Kuberentes or your organization’s managed MongoDB solution).<br />**Note:** The Sandbox Service comes in two flavors: <br /><ul><li>Service embedded on the Quali Server machine that uses MongoDB over port 27017.</li><li>Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling.</li></ul>Port 27017 is mostly used while port 27020 is used in very specific use cases where Sandbox Service is installed externally to Quali Server. |
|                                    | 27018              | Used by Job Scheduling Service to store related data, including information relating to suites, jobs, tests, reports as well as permitted user identity information. |
|                                    | 27019              | Used by Identity Service to store CloudShell user data for access control within Job Scheduling Services. |
|                                    | 27020              | Used by Sandbox Service to store sandbox events data related to historic, active and future sandboxes. |
|                                    |                    | **Note:** These are the default ports, but you can change them as appropriate (see Configure the MongoDB Database Connection). Or, you can use a hosted MongoDB solution (on Kuberentes or your organization’s managed MongoDB solution) for the different CloudShell services. |
| Quali Server                       | TCP/8028           | Used by all CloudShell components to communicate with the Quali Server (CloudShell Portal, Authoring, Resource Manager Client, TestShell Studio, TestShell Runner). |
|                                    | TCP/8029 TCP/9000  | Used by API clients to communicate with the Quali Server. <br />Quali API port TCP/9000 can be changed using the `QualiApi.Port` configuration key. |
|                                    | HTTP/8034          | Used by the Sandbox API Web server (internal). |
|                                    | TCP/8031 TCP/8029  | Used by Execution Servers to communicate with the Quali Server. |
|                                    | HTTP/8030 TCP/8023 | Used by Studio and Runner. <ul><li>8023 is a file streamer service used by Quali Server to provide access to shared tests and assets. </li><li>8030 is a centralized HTTP service that Quali Server provides. It grants access to centralized Testshell reports (Used for sharing and downloading test reports).</li></ul> |
|                                    | HTTP – TCP/8036    | (PyPi Server) Used by the execution servers to access the local PyPi Server. |
|                                    | HTTPS/443          | Used in an online CloudShell environment to access the public Python repository. |
| QualiX                             | TCP/80             | Used for remote desktop gateway (must be accessible from CloudShell Portal and the browsers). |
|                                    | TCP/443            | |
|                                    | RDP/3389           | Used by QualiX to access the organization's labs. (physical devices and on-prem/cloud VMs). |
|                                    | SSH/22             | |
|                                    | Telnet/23          | |
| RabbitMQ                           | TCP/5671           | Default Rabbit MQ port. Used by Sandbox Service, Quali Server and Job Scheduling Service. |
| Remote Runner                      | TCP/8101           | Used by Studio to request test execution. |
| REST API Client                    | HTTP/80            | Used by REST API Client to access Job Scheduling Service. |
|                                    | HTTP/443           | |
| Sandbox API Web Server             | HTTP/82 HTTPS/3443 | Used by the API clients to connect and communicate with the API. |
|                                    | TCP/8034 TCP/8032 TCP/8027 | The Sandbox API Web Server consists of three components, which reside on the CloudShell Portal machine:<br/><ul><li>**CloudShell Server Proxy** - communicates with Quali Server over TCP 8034, and communicates internally with CloudShell Sandbox API Gateway over TCP 8033</li><li>**CloudShell Sandbox API Gateway** - communicates internally with CloudShell Sandbox API over TCP 8032</li><li>**CloudShell Sandbox API** - communicates with API Client over HTTP 82</li></ul>**Note:** The Sandbox API configuration wizard is a web-based configuration page that opens port 8027 on the machine hosting the CloudShell Sandbox API component. |
| Sandbox Service                    | TCP/8888           | Used by Sandbox Service to access Quali Server. |
| SQL Server                         | TCP/1433           | Used by Quali server to store and retrieve information.<br />For more info: [https://msdn.microsoft.com/en-us/library/cc646023.aspx](https://msdn.microsoft.com/en-us/library/cc646023.aspx). |
| Test Discovery Service             | HTTP/80            | Used by Test Discovery Service to access Job Scheduling Service. |
|                                    | HTTPS/443       | |
| Test Execution Service             | HTTP/80            | Used for bi-directional access between Job Scheduling Service and Test Execution Service. |
