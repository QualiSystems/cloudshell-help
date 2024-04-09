---
sidebar_position: 3
---

# Optimizing Execution Provisioning

This article provides guidelines on how to optimize execution provisioning in CloudShell, taking into account the number of execution servers to include, command/job slots, types of executions to handle (commands, test jobs, Python/Authoring drivers), test runtimes and their load on the system.

## How CloudShell selects job/command slots for execution assignments

When a new job or command execution is needed, CloudShell finds an execution server with an available slot based on these several factors:

- Number of available execution servers (only execution servers that are both Online and Included can be used)
- Maximum job/command slot capacity of each execution server (how many tests/commands it can run in parallel. These are defined when installing or configuring an execution server, as explained in [Configure the Execution Server](../../install-configure/cloudshell-suite/configure-products/config-execution-server.md).
- Is the execution associated with a specific execution server or group of execution servers. For example, the resource is associated with a specific execution server via an **Execution Server Selector** attribute.
- Number of job/command executions in the queue
- Availability of resources (for jobs configured to run in a sandbox)

## How to maximize execution capacity and performance

You can maximize available execution capacity by installing additional execution servers, increasing job/command capacities of the execution server, and adding more CPU/RAM to the execution servers.

- **Number of machines that can be allocated for execution provisioning**: Execution servers have no capacity limits and do not require a license, but it's more about what the execution server can handle. In most cases, you'll start with one execution server for the commands, and monitor the performance. Then, either add more power to the same machine or just add more execution servers for better redundancy (if one of the servers fails, it's always good to have others available). For details, see [Distributed provisioning](../../admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning.md).
    
    In addition, you can also **associate groups of resources and Apps to specific execution servers for improved performance**. This is extremely useful if you have geographically distributed sites in your organization and you want the infrastructure of each site to be handled by one or more execution servers that are physically located at or near that site. For details, see [Setting Up Execution Servers to Run Commands](../../admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).
    
- **Types of automation to be run (Python-based or Authoring drivers)**: Execution servers are used for commands and orchestration, which are Python-based in most cases but also support Authoring drivers. The runtime for Authoring drivers takes more RAM/CPU than Python so limit the number of concurrent jobs to 5.
- **App deployment requires additional command slots**: For details, see [Configuring Execution Servers to Deploy vCenter Apps](../../admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#configuring-execution-servers-to-deploy-vcenter-apps)
- **To optimize run-time performance for individual tests**: Quali recommends setting each execution server's **Job slot capacity** to 1 (**Command slot capacity** is set to 20 by default). A job slot capacity of 1 ensures that maximum resources are always available to the running instance. For example, if there is some software/hardware that is installed on this machine that is required for the tests, and you cannot use it concurrently.
    
    That said, the runtime for Job Scheduling suites is heavier (more RAM/CPU) than python, but the execution server can still run a few tests concurrently if they are all independent and run against some remote targets. For example, if there is some software/hardware that is installed on this machine that is required for the tests, and you cannot use it concurrently, then you will need to limit the job slots on this execution server to 1. *This applies to the original Job Scheduling, the New Job Scheduling is specifically designed to handle high loads in the hundreds of concurrent executions.*
    
- **Total number of job slots cannot exceed number of Runner licenses**: If you’re running TestShell Studio tests using the original Job Scheduling, then each test that starts consumes a runner license. These tests are also executed on the execution server and use a job slot. As such, you need to make sure the total number of job slots you allocate in the different execution servers does not exceed the number of Runner licenses you have. If this limit is reached and another test is executed, it will fail and exclude the execution server until an available license is found.
- **Test execution time and load on the system**:
    
    - How heavy are the tests to be executed (simple/complicated/short/long)?
    - If the time it takes to execute each test is less important than the time it takes to run a series of tests, you can set execution server capacity according to the number of cores or the number of RAM on each machine.
