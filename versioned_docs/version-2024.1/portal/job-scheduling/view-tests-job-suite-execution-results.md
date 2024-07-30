---
sidebar_position: 6
---

# Viewing Test, Job and Suite Execution Results

## Automation Suite execution results

To see a suite's execution results:

- In the **Job Scheduling** dashboard, click the suite's **Details** button on the right.
    

![](/Images/CloudShell-Portal/Scheduling-Jobs/ExecutionResultSuite.png)

The results are:

- **Succeeded** - all jobs ended (completed) or passed
- **Failed to start** - (for recurring automation suites) suite failed to enter the queue at the scheduled start time
- **Failed** - one or more tests failed
- **Error** - suite was stopped or one or more tests encountered an error

## Job execution results

To see a job execution's result:

- In the **Job Scheduling** dashboard, open the suite's job.
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/ExecutionResultJob.png)
    

The job execution's results are:

- **Not Started** - job was cancelled (deleted from the queue)
- **Completed** \- all tests ended (completed)
- **Passed** \- all tests passed
- **Failed to start** - (for recurring automation suites) job failed to enter the queue at the scheduled start time
- **Failed** \- one or more tests failed
- **Ended with Errors** \- one or more tests encountered an error
- **Ended with an Exception** - At least one test resulted as "Terminated Unexpectedly"
- **Manually Stopped** \- user manually stopped the job's execution via UI or API
- **Terminated** - The last test ended with "Terminated"

## Test execution results

**To see a test execution's result:**

- In the **Job Scheduling** dashboard, open the suite's job and click the test's more info button.
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/ExecutionResultTest.png)
    

The possible results are:

- **Fail**
- **Pass**
- **Completed**
- **Error**
