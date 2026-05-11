---
sidebar_position: 8
---

# JIRA Integration with CloudShell

*To purchase this feature, please contact your Account Manager. For assistance with first time configuration, please contact your Technical Account Manager*

CloudShell integration with JIRA enables users to leverage JIRA defect management to manage failed CloudShell tests by associating Jira issues with specific CloudShell test executions.

To illustrate how this feature can be used, consider the following scenario: A tester investigates an automation suite failure, discovers the originating test (or tests) and opens a JIRA bug to pass to the company's developers so they can fix the problem. Once the bug is resolved, the tester manually reruns the failed job or suite to make sure the bug is fixed.
:::note
This feature is supported for JIRA version 7.4.0 and above.
:::

## JIRA Integration with CloudShell

**To integrate CloudShell with JIRA:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Add the following keys, and set each key's value accordingly:
    
<table>
    <thead>
        <tr>
        <th>Key</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`<add key="JiraBaseUrl" value="<URL>"/>`</td>
            <td>
            JIRA server base URL. Make sure you include "http://” or https://, as appropriate.

For example, http://jira-srv:8080/jira.
            </td>
        </tr>
        <tr>
            <td>`<add key="JiraAdminUser" value="<username>"/>`</td>
            <td>
            JIRA admin user that is authorized to create and modify issues in all related projects. CloudShell will use this user to automatically authenticate CloudShell users when they create or associate JIRA issues to a test execution.
:::note
This user is only used for the authentication. The reporter of the bug in JIRA will be the logged in CloudShell user who initiated the request.
:::
            </td>
        </tr>
        <tr>
            <td>`<add key="JiraAdminPassword" value="<password"/>`</td>
            <td>JIRA user's password</td>
        </tr>
        <tr>
            <td>
            `<add key="JiraProjectsListCacheTimeInSeconds" value="1800"/>`

`<add key="JiraIssueTypesListCacheTimeInSeconds" value="1800"/>`
            </td>
            <td>
            Jira project and issue cache timeout periods, in seconds. Default is 30 minutes.

When integrating CloudShell with a new Jira project or issue type, the Jira [project or issue] cache on the Quali Server needs to be restarted. This can be done by manually restarting the **Quali Server** service or setting a shorter cache timeout period using these keys.

To disable the cache, set the appropriate key's value to "0".
            </td>
        </tr>
    </tbody>
</table>
    
    For example:
    
    ```javascript
    <add key="JiraBaseUrl" value="http://my-jira-base.com"/>
    <add key="JiraAdminUser" value="john.e"/>
    <add key="JiraAdminPassword" value="PassKey@15"/>
    <add key="JiraProjectsListCacheTimeInSeconds" value="150"/>
    <add key="JiraIssueTypesListCacheTimeInSeconds" value="150"/>
    ```
    
3. Restart the **Quali Server** service.

## Additional Requirements

- The CloudShell domain in which the test is executed must have the same name as the JIRA project ID.
- The CloudShell user must have a corresponding Jira user that has access to the Jira project defined by the CloudShell domain.
- A ‘Bug' issue type must include the "Environment" field and be associated with the JIRA project.
- CloudShell Server IP address must be white listed in Jira configuration.
- Adjustments of CloudShell to your JIRA environment - to be performed by a Quali Customer Success representative.

## Troubleshooting

### Setting the logging level for communication between CloudShell and Jira

CloudShell logs errors related to communication with Jira out of the box. However, in some cases, you may need to drill down into the communication level.

**To change the logging level to debug:**

1. On the Quali Server, go to `C:\Program Files (x86)\QualiSystems\CloudShell\Server`.
2. Edit the `log4net.config` file.
3. Search for `<logger name="ExternalIssues.JiraIntegration"`.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/JiraLogging.png)
    
4. In the `<level value="ERROR" />` line that follows, change "ERROR" to "DEBUG".
    
5. Save the file and restart the **Quali Server** service.
    

## Related Topics

- [Associating JIRA Issues with Test Executions](../../portal/job-scheduling/associate-jira-issues-with-test-executions.md)
