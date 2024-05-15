# New Job Scheduling REST API

The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process.

## Live documentation page

The New Job Scheduling live documentation page allows you to test and experiment with the API. It is accessed directly from the Job Scheduling Portal, by clicking the REST API tab on the left. For details, see [REST API Page](./jss-api-login.md).

To use the API's methods, you must pass an authentication token. To obtain the token, execute the [New Job Scheduling API Login](./jss-api-login.md) method. There's also a [Refresh login](./refresh-login.md) method for situations where your token's validity period has expired and you need to renew it.

The following New Job Scheduling REST API methods are available:

**Account:**

- [New Job Scheduling API Login](./jss-api-login.md)
- [Revoke login](./revoke-login.md)
- [Refresh login](./refresh-login.md)

**Suite Executions:**

- [Get suite execution](./get-suite-execution.md)
- [Stop suite execution](./stop-suite-execution.md)

**AdHoc Suites:**

- [Start adhoc suite execution](./start-adhoc-suite-execution.md)

**Suite Templates:**

- [Get suite templates](./get-suite-templates.md)
- [Get suite template details](./get-suite-template-details.md)
- [Delete suite template](./delete-suite-template.md)
- [Get suite template executions](./get-suite-template-executions.md)
- [Change suite owner](./change-suite-owner.md)
- [Start suite execution](./start-suite-execution.md)

**Test Discovery Servers:**

- [Delete Test Discovery Service](./delete-test-discovery-service.md)
- [Get Test Discovery Services](./get-test-discovery-services.md)

**Test Execution Servers:**

- [Delete Test Execution Service](./delete-test-execution-service.md)
- [Get Test Execution Services](./get-test-execution-services.md)

**Test Executions:**

- [Get test execution report](./get-test-execution-report.md)

## Related Topics

- [API Support for New Job Scheduling and Job Scheduling (1st Gen)](./api-support-for-jss-and-js.md)
- [New Job Scheduling REST API Response Codes](./jss-rest-api-response-codes.md)