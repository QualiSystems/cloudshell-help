# Test Execution Service

**Test Execution Service** is a lightweight Python service that is responsible for executing tests that were scheduled and invoked by the new New Job Scheduling. The tests must reside in a Git repository and be discovered by a [Test Discovery Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tds.htm).

:::note
Test Execution Service does not support running shell and script commands nor TestShell Studio tests. Such capabilities are handled by CloudShell Execution Servers.
:::

## Extensibility

Test Execution Service is a generic implementation that can be extended on demand to support new and advanced types of tests, inputs and testing frameworks. For more information, please contact Quali Customer Success.

## Related Topics

- [New Job Scheduling Architecture](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-architecture.htm)
- [Configure the Test Discovery Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tds-config.htm)
- [Get Test Execution Services](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tes.htm)