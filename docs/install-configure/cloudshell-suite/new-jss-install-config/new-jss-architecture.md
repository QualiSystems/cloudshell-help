---
sidebar_position: 1
---

# New Job Scheduling Architecture

The following diagram illustrates the architecture of a CloudShell deployment with the new **New Job Scheduling**, including the different components, interconnections and ports. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load.

:::note Note about the diagram below
Components with a <span style={{ color:'green' }}>green</span> frame denote components related to the New Job Scheduling. *For details about existing CloudShell components, see* [CloudShell Component Architecture](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-compnts.htm).
:::
![](/Images/IG2/JssArchitecture.png)

:::note Notes
- The New Job Scheduling services are installed on Kubernetes. These include Job Scheduling Service, Identity Service, Test Discovery Service, Test Execution Service and Sandbox Service. However, Sandbox Service can be installed externally as part of the Quali Server installation.
- Sandbox Service comes in two flavors, each using a different MongoDB:
    
    - Service embedded on the Quali Server machine that uses MongoDB over port 27017.
    - Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling.
    
    For details, see [CloudShell Port Requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-reqd-ports.htm).
:::    

| Component | Description |
| --- | --- |
| ELK | ELK (Elasticsearch, Logstash and Kibana) is an out-of-the-box 3<sup>rd</sup> party tool that is used to store CloudShell logs. These logs can then be used to investigate deployment issues and bugs, and trace their causes. |
| External Test Repository | Online test repository that contains tests of a specific type. |
| Identity Service | Identity Service is our authentication engine for the Job Scheduling Service and creates users based on Quali’s identity management mechanism, allowing these users to access and use the Job Scheduling Portal and REST API clients. |
| Job Scheduling Portal | REST API-driven UI client that is used to interact with Job Scheduling Service. Job Scheduling Portal is separate from CloudShell Portal. |
| Job Scheduling Service | **Job Scheduling Service** is a high-performance test automation framework that allows organizations to create, manage and execute test batches. The service is hosted on a Kubernetes cluster and uses Quali Server to extract user, blueprint and sandbox data. |
| MongoDB | Open source database used to store New Job Scheduling\-related data (suites, jobs, tests, reports, etc.) as well as permitted user identity information. MongoDB is installed as part of the Quali Server installation. There's also an option to use an existing MongoDB. |
| RabbitMQ | Open source message queuing tool used by Sandbox Service to manage sandbox creation requests coming from the Job Scheduling Portal and APIs. If needed, RabbitMQ is installed as part of the Quali Server. |
| Sandbox Service | Sandbox Service is a Python service that comes in two flavors: Windows service (embedded) delivered as part of Quali Server and Linux service included with the New Job Scheduling on Kubernetes (this second flavor supports extremely large deployments, up to hundreds of new sandboxes every few minutes). As such, we also recommend moving the Sandbox Service to the Kubernetes cluster option even for high load deployments without the New Job Scheduling.<br/>This service performs two key functions:<ul><li>Processes, prioritizes and invokes all sandbox creation requests against Quali Server. As such, starting with CloudShell 2020.2, Sandbox Service replaces the reservation creation mechanism that was used in pre-2020.2 CloudShell versions, also in deployments that do not use the New Job Scheduling Service. The Windows flavor of the service includes a healthcheck mechanism that actively monitors and restarts the service in the event of a failure.</li><li>Acts as the communication layer between Job Scheduling and Quali Server when handling Job Scheduling Service operations. In deployments that use Job Scheduling Services, the Kubernetes-based service needs to be used instead of the Sandbox Service that comes out-of-the-box with Quali Server. For details, see [Modify CloudShell to Use the Kubernetes-based Services](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-use-k8s-srvcs.htm).</li></ul>**For upgrades in CloudShell environments that have Docker**, Sandbox Service will be installed externally on Docker and the `UseEmbeddedSandboxService` configuration key needs to be used to configure the deployment to use this external Sandbox Service. |
| Test Discovery Service | Test Discovery Service is responsible for discovering tests of a specific type. A Test Discovery Service can only discover tests of a specific type in a specific repository. For more information, see [Test Discovery Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tds.htm). |
| Test Execution Service | Test Execution Service is responsible for running tests discovered by the Test Discovery Service. For more information, see [Test Execution Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tes.htm).<br/>**Important:** Test Execution Service does not handle shell and script commands. CloudShell Execution Servers are required to handle such operations (e.g. setup, teardown, resource commands and sandbox commands). |