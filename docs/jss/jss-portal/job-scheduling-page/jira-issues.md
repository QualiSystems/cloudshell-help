---
sidebar_position: 6
---

# Associating Jira Issues to Test Executions

*This feature requires [JIRA Integration with CloudShell](../../../admin/setting-up-cloudshell/jira-integration-with-cloudshell.md).*

This article explains how to associate a New Job Scheduling test's execution with a JIRA issue. This includes associating a test execution with an existing Jira issue or creating a new JIRA bug on-the-fly for a test execution. This is useful if you want to use your JIRA platform to manage the troubleshooting process of failed tests.

## Prerequisites

- [JIRA Integration with CloudShell](../../../admin/setting-up-cloudshell/jira-integration-with-cloudshell.md)

## Viewing a test execution's Jira issues

**To view a test execution's linked issues:**

1. **View** the suite.
    
2. **View** the desired suit execution.
    
3. Expand the job containing the test.
    
4. From the test’s **Issues** drop-down list, select **Linked Issues**.
    
    ![](/Images/JSS/image.png)
    
    The **Linked Issues** dialog box is displayed, listing any linked issues.
    
    ![](/Images/JSS/JssLinkJira.png)
    

## Creating and associate Jira issues to a test execution

**To create or associate a Jira issue to a test execution:**

1. **View** the suite.
    
2. **View** the desired suit execution.
    
3. Expand the job containing the test.
    
4. From the test’s **Issues** drop-down list, select the appropriate option.
    
    ![](/Images/JSS/JssCreateLinkJira.png)
    
    <details>
    <summary>**New Issue** creates a new Jira issue and links it to the test execution</summary>
        
        Jira opens, displaying a new issue with the following details:
        
        - **Summary**: Test execution's name and execution name
        - **Issue** Type: Bug
        - **Reporter**: CloudShell user
        - **Description**: Link to the test execution's report
        - **Priority**: Medium
        - **Environment**: CloudShell sandbox on which the test ran
        
        For example:
        
        ![](/Images/JSS/JssNewJiraIssue.png)
    </details>

    <details>
    <summary>**Linked Issues** allows you to link a Jira issue to your test</summary>
    
    The **Linked Issues** dialog box is displayed, prompting you to link additional ones by entering their issue keys and clicking **Link**.

    ![](/Images/JSS/JssLinkJira.png)
    </details>
        
    