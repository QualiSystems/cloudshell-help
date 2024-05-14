# Test Discovery Service

**Test Discovery Service** is responsible for communicating with the customer's external test repository and does the following:

- Discovers the structure and properties of each test in the (Git) test repository and arranges the tests per domains using the `.cs_domains` file associated with the test.
- Sends the tests to the new New Job Scheduling for future use at pre-defined intervals. This way, the end-user only sees the tests in their domain (when launching the suite, Job Scheduling will look for an available slot on a [Test Execution Service](../test-execution-service/index.md) that both supports the test's framework and is in the test's domain).

A single Test Discovery Service is responsible for handling a specific remote test repository (also a single test type), so integrating with multiple repositories requires several Test Discovery Services.

:::note Notes
- Test Discovery Service doesn't need to be associated to a domain. For each test, it checks which domain it applies to using the `.cs_domains` file in the test’s online repository and passes this information to the New Job Scheduling, which assigns the execution of the test to an available Test Execution Service in the test’s domain.
- Only tests that will be discovered by the new New Job Scheduling will be presented in the Job Scheduling Portal and supported by the system.
- The New Job Scheduling currently supports the use of a pre-defined interval, but we are considering adding support for a webhook.
:::

## Extensibility

Test Discovery Service is a generic implementation that can be extended on demand to support other types of tests, inputs and source-control systems. For more information, please contact Quali Customer Success.

## Related Topics

- [New Job Scheduling Architecture](../new-jss-architecture.md)
- [Configure the Test Discovery Service](./config-test-discovery-service.md)
- [Get Test Discovery Services](../../../../api-guide/new-jss-rest-api/get-test-discovery-services.md)
- [Associating Tests to Different Domains](../test-repository-config/associate-tests-to-domains.md)