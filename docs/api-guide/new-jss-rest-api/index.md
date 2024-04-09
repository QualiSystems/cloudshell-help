# New Job Scheduling REST API

The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process.

## Live documentation page

The New Job Scheduling live documentation page allows you to test and experiment with the API. It is accessed directly from the Job Scheduling Portal, by clicking the REST API tab on the left. For details, see [REST API Page](https://help.quali.com/Online%20Help/0.0/Portal/Content/JSS/jss-rest-api.htm).

To use the API's methods, you must pass an authentication token. To obtain the token, execute the [New Job Scheduling API Login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-accessToken.htm) method. There's also a [Refresh login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-refreshToken.htm) method for situations where your token's validity period has expired and you need to renew it.

The following New Job Scheduling REST API methods are available:

**Account:**

- [New Job Scheduling API Login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-accessToken.htm)
- [Revoke login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-revokeToken.htm)
- [Refresh login](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-refreshToken.htm)

**Suite Executions:**

- [Get suite execution](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-execution.htm)
- [Stop suite execution](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-stop-suite-execution.htm)

**AdHoc Suites:**

- [Start adhoc suite execution](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-start-adhoc-suite-execution.htm)

**Suite Templates:**

- [Get suite templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-templates.htm)
- [Get suite template details](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-details.htm)
- [Delete suite template](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-suite.htm)
- [Get suite template executions](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-executions.htm)
- [Change suite owner](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-changeowner.htm)
- [Start suite template](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-start-suite-execution.htm)

**Test Discovery Servers:**

- [Delete Test Discovery Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-tds.htm)
- [Get Test Discovery Services](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tds.htm)

**Test Execution Servers:**

- [Delete Test Execution Service](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-tes.htm)
- [Get Test Execution Services](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tes.htm)

**Test Executions:**

- [Get test execution report](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-test-execution-report.htm)

## Related Topics

- [API Support for New Job Scheduling and Job Scheduling (1st Gen)](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-comparison.htm)
- [New Job Scheduling REST API Response Codes](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-response-codes.htm)