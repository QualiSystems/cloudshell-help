---
sidebar_position: 3
---

# Minimum Requirements for CloudShell Servers and Clients

This article includes prerequisites and supported platforms that are required for CloudShell Server components, including Quali Server, Execution Server, QualiX Server, Insight BI and Linux Execution Server.

## Hardware requirements

### Hardware requirements for Quali Server
Hardware and software requirements change depending on the type and scale of your CloudShell deployment.

To help you understand the type of deployment you have, please consult the following table:

|   | POC environment | Team Tier | Premium Tier |
| --- | --- | --- | --- |
| Number of users | 1-5 | 5-50 | 50-500 |
| Number of concurrent sandboxes | 1-10 | 10-50 | 50-250 |
| Number of execution servers | 1-2 | 1-5 | 5-10 |
:::note
The above numbers are estimates intended to give you an idea of the type of deployment and resources you will need. For larger deployments, please contact your Technical Account Manager.
:::
The table below describes the minimum requirements for your Quali Server. Note that it is possible to exceed the deployment size given in the table below with machines that have more memory and cores.

|   | POC environment | Team Tier | Premium Tier |
| --- | --- | --- | --- |
| CPU | 4 logical cores | 8 logical cores | 16 logical cores |
| Memory | 8 GB | 16 GB | 32 GB |
| Storage (hard disk) | 20 GB | 40 GB (SSD) | 100 GB (SSD) |
| Network card |   | 1/10 GB, according to network load | 1/10 GB, according to network load |

### Hardware requirements for all other CloudShell servers/clients

The following table lists the minimum recommended requirements for all other (non-Quali Server) CloudShell server and client machines.

|   | CPU | Memory | Storage (hard disk) |
| --- | --- | --- | --- |
| CloudShell Portal | 6 logical cores | 16 GB | 20 GB (SSD recommended) |
| Windows Execution Server | 4 logical cores | 8 GB | 60 GB |
| Linux Execution Server | 2 logical cores | 4 GB | 60 GB |
| QualiX Server | 2 logical cores | 4 GB | 15 GB |
| Insight BI Server | For details, please contact your Technical Account Manager. |
| Resource Manager Client<br />TestShell Studio<br />CloudShell Authoring<br />TestShell Remote Runner | 4 logical cores | 8 GB | 10 GB |

:::note Execution Server Recommendations around Test and Shell automation
Execution Server requirements vary according to the required usage. For example, in a scenario where 16 CPU-intensive tests are run at any given time, an optimal environment would be a machine with 32 CPU cores, with capacity set to 16, or 2 machines with 16 CPU cores, with capacity set to 8 for each machine. In another scenario where 8 memory-intensive tests are run at any given time, an optimal environment would be a machine with 16 GB RAM, with capacity set to 8.
:::
### Hardware requirements for Kubernetes (for New Job Scheduling)

The Kubernetes cluster must have three 2GB memory pods. This is required for the RabbitMQ that is installed on the cluster.

## Windows OS requirements

The following table lists Windows OS requirements for each CloudShell server and client. For specific software requirements and 3rd party tools, see the [Related Topics](#related-topics) section at the bottom of this page and the [3rd Party Software](./third-party-software.md) article.

| Requirements | Description |
| --- | --- |
| Quali Server<br />CloudShell Portal<br />Windows Execution Server | Any of the following Windows Server versions: <ul><li>Server 2012 64 bit Standard or Datacenter edition</li><li>Server 2012 R2 64 bit Standard or Datacenter edition</li><li>Server 2016 Standard or Datacenter edition</li><li>Server 2019 Standard or Datacenter edition</li><li>Server 2022 Standard</li></ul>**Notes:**<br /><ul><li>Windows Servers 2012/2016/2019 support High Availability (HA) solutions.</li><li>Windows Server 2012 editions are not supported with MongoDB 6 and above.</li></ul> |
| Linux Execution Server | CentOS 7.2 and up |
| QualiX | <ul><li>Ubuntu 20.04 (Default)</li><li>RedHat 8</li></ul> |
| Insight BI | Please consult Sisense official documentation at: [https://documentation.sisense.com/latest/getting-started/minimum-requirements.htm](https://documentation.sisense.com/latest/getting-started/minimum-requirements.htm) |
| Resource Manager Client<br />TestShell Studio<br />CloudShell Authoring<br />TestShell Remote Runner<br />CloudShell Monitor | Any of the following Windows versions: <ul><li>10 Pro edition</li><li>11 Pro edition</li><li>Any of the above supported Windows Server versions</li></ul> |
## Related Topics

- [Software Requirements (Linux VA)](../linux-virtual-appliance/linux-es-va-overview/sw-requirements.md)
- [Requirements (High Availability Deployment)](../ha-installation/overview/requirements.md)
- [Requirements (QualiX)](../qualix/qualix-overview/qualix-requirements.md)
- [Requirements (CloudShell SDK)](../cloudshell-sdk/overview/requirements.md)
- [Requirements (Insight BI)](../cs-insight-bi/install-insight/requirements.md)
- [Requirements (New Job Scheduling)](../cloudshell-suite/new-jss-install-config/requirements.md)