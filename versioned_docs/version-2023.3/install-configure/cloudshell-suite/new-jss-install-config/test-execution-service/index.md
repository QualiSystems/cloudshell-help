# Test Execution Service

**Test Execution Service** is a lightweight Python service that is responsible for executing tests that were scheduled and invoked by the new New Job Scheduling. The tests must reside in a Git repository and be discovered by a [Test Discovery Service](../test-discovery-service/index.md).

:::note
Test Execution Service does not support running shell and script commands nor TestShell Studio tests. Such capabilities are handled by CloudShell Execution Servers.
:::

## Extensibility

Test Execution Service is a generic implementation that can be extended on demand to support new and advanced types of tests, inputs and testing frameworks. For more information, please contact Quali Customer Success.

## Related Topics

- [New Job Scheduling Architecture](../new-jss-architecture.md)
- [Configure the Test Discovery Service](../test-discovery-service/config-test-discovery-service.md)
- [Get Test Execution Services](../../../../api-guide/new-jss-rest-api/get-test-execution-services.md)