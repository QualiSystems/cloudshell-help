# New Job Scheduling

The **New Job Scheduling** is available as an add-on. For details, contact your account manager.

:::info
*The New Job Scheduling is the 2<sup>nd</sup> Gen version of CloudShell’s existing Job Scheduling solution and features a streamlined user experience, improved performance and support for bigger loads.*
:::

The New Job Scheduling is a high-performance test automation framework that allows organizations to create, manage and execute test batches.

Each test batch, called a suite, contains jobs. Each job can run multiple tests, sequentially using a defined blueprint. When a job starts running, a sandbox based on the job’s blueprint is created specifically for the job’s execution and torn down when the job completes. As such, a suite can have several jobs, each running tests on different sandbox environments.

:::note Important
Robot tests are supported out of the box, but the New Job Scheduling can be extended to support additional test types on request. To support a testing framework, you need to configure two dedicated services, a [Test Discovery Service](../install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index.md) for retrieving the tests from the test repository and a [Test Execution Service](../install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/index.md) for running the tests of this type.
:::

With the New Job Scheduling, you get:

- Test automation and execution capabilities
- Support for on-demand/scheduled executions
- Out-of-the-box support for Robot Framework tests
- Test Execution Servers assigned to specific domains
- Capability to manage the rapid execution of hundreds of jobs in parallel through API and UI specifically designed to handle such loads
- Dedicated sandbox environment spun up per job with the required infrastructure, applications and networks
- User-friendly UI allowing you to set up and execute suite templates in minutes
- RESTful API for automation and integration with CI/CD tools
- Reports per test execution
