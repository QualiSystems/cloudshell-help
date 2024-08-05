# Source Control: Using Local Tests in Automation Suites

If you are working with local tests and assets, it is recommended to manage them through a source control solution, to help you track changes in your tests and resolve conflicts.

As illustrated below, in a source controlled deployment, the TestShell Studio Clients push test updates and additions to the source control server, which synchronizes the Execution Servers and Quali Server with the latest updates, allowing you to use the latest test versions when running your tests and automation suites.

![](/Images/Admin-Guide/Setting-Up-CloudShell/SourceControlArchitecture.png)

- For local tests executed in TestShell Studio, Runner and Authoring, see [Setting Up Source Control for TestShell Tests](./setting-up-source-control-for-testshell-tests.md).
- For an end-to-end example explaining how to use GitLab source control to sync tests for **Job Scheduling** automation suites, see [TestShell Integration with GitLab](./testshell-integration-with-gitlab.md).
- For offline deployments, use an on-prem source control solution like GitLab, Apache Subversion or Microsoft Team Foundation Server. For details, see [TestShell Integration with GitLab](./testshell-integration-with-gitlab.md).