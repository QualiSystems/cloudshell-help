---
sidebar_position: 3
---

# Running and Stopping Suite Executions

## Suite execution flow

![](/Images/JSS/JssTestExecutionFlow.png)

CloudShell does the following for every job in the suite (in parallel):

1. If the **SuiteExecutionSettings\_\_ValidateJobDataBeforeRun** environment variable is set to "true”, validate that the blueprints data and tests data is correct (= blueprints/tests were not deleted/modified since last suite edition). If validation fails, automatically cancel the job.
2. Lease the next available (free) test slot from the pool of available test execution servers (only included test execution servers that belong to the suite’s space and support the suite’s test type).
    
    :::note
    If the system cannot lease the slot, it will try **TesManagerSettings\_\_MaxRetries** times for the **TesManagerSettings\_\_RetriesTimeoutInMinutes** period. If the period ends and no slot is available, automatically cancel the job and free the slot on the Test execution service.
    :::
    
3. Send a sandbox reservation request to the sandbox service.
4. Wait for the response until timeout (See Define sandbox creation retries). If sandbox creation fails or timeout was reached, automatically cancel the job
5. Mark the test execution server’s slot as "Running”.
6. Send the test for execution to the test execution server. Once the test ends, send the next test in the job for execution on the same test execution server’s slot, using the same sandbox already created. In the same way, execute the job’s tests. If the job’s duration is reached and there is still a test running, stop the test and automatically cancel the job.
7. Once all tests have completed their execution, free the test execution slot and end the sandbox.

## Running a suite execution

A suite is run by the Test execution service, and can be initiated in one of the following ways:

- Manual user action in the Portal
- API call
- Automatically by the system when suite is configured with CRON expression

Tests are run sequentially in the order they were added to the job. However, the execution order of the tests may appear randomized if there is a lack of sufficient Test Execution Services.

**To run a suite execution:**

- In the **Job Scheduling** dashboard, click the suite’s **Run** button.
    
    ![](/Images/JSS/JssRunSuite.png)
    
    Once a suite's job starts running, the job's original settings will be used regardless of any interim modifications/deletions to the job or its tests.
    

## Stopping a suite execution

**To stop a suite execution:**

1. In the **Job Scheduling** dashboard, view a suite’s executions (either by expanding the suite execution or clicking its **View** button).
2. Click the execution’s Stop button.
    
    ![](/Images/JSS/JssStopSuite.png)