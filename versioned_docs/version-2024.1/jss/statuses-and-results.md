---
sidebar_position: 3
---

# Statuses and results

Below are the possible statuses and descriptions for suite, job and test executions.

Note that every API method responds with the standard HTTP error codes (200, 300, 400…) but also includes a response body for errors. Within the error body, it is possible to find the list of errors in a human-readable manner together with an internal application error code that can help Quali when debugging an issue. For example, trying to stop an already finished suite will result in a 400 HTTP error code with the following JSON response body:

```javascript
{
   "errors":[
      {
         "message":"Suite execution already completed",
         "name":"SuiteExecutionCompleted",
         "code":1006
      }
   ]
}
```

In the above response, **1006** is the internal application error code for the specific use case and the **message** is the human-readable error description

## Suite statuses

| API Status | Status | Description |
| --- | --- | --- |
| 0 | Not started | Triggered. None of the suite’s jobs have started running, waiting for either slot or sandbox. |
| 1 | Running | At least one job started running. |
| 2 | Succeeded | All tests in all jobs have executed with test result either COMPLETED or PASSED. | 
| 3 | Failed | All tests in all jobs have executed with at least 1 test with test result FAILED. |
| 4 | Terminated | At least one test has test result TERMINATED. |
| 5 | Automatically Cancelled | Option 1 - sandbox error (active with error, didn't find a sandbox in the retries). Option 2 - no test slot found |
| 6 | Manually Cancelled | Suite execution was cancelled manually. |

## Job statuses

<table>
<thead>
    <th>API Status</th>
    <th>Status</th>
    <th>Description</th>
</thead>
<tbody>
    <tr>
        <td>0</td>
        <td>Not Started</td>
        <td>Triggered. Job has not started running, waiting for either slot or sandbox.</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Running</td>
        <td>Test execution is in progress (test has not failed/terminated).</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Succeeded</td>
        <td>All tests have been executed with COMPLETED or PASSED result.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Failed</td>
        <td>All tests have been executed. At least 1 test with result FAILED.</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Terminated</td>
        <td>At least 1 test with result TERMINATED.</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Automatically Cancelled</td>
        <td>
        Job was automatically cancelled.

        Possible reasons are:

        - Validation of job test data failed            
        - Max retry count limit exceeded when trying to find an available slot            
        - Max retry time limit exceeded when trying to find an available slot            
        - Teardown started while tests are running            
        - Job details:            
          - Job's blueprint was deleted or modified in the online repository
          - CloudShell detected that the job's test(s) was deleted or modified
          - Job duration was reached while some of the job’s tests did not execute

        - Sandbox errors:            
          - Sandbox creation took too long (configurable value ~35 minutes)
          - Sandbox cannot be used (has errors or failed to be created)

        - Connection errors:            
          - Test Execution Service was unable to load blueprint details due to Quali Server connection failure
          - Job Scheduling Service was unable to send tests to Test Execution Service for execution
          - Job Scheduling Service was unable to publish the sandbox request to RabbitMQ
        </td>
    </tr>
    <tr>
        <td>6</td>
        <td>Manually Cancelled</td>
        <td>The job was cancelled manually while in progress (Not Started, Running).</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Waiting for Job Slot</td>
        <td>Job is waiting for a suitable test execution server slot to become available.</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Waiting for Sandbox</td>
        <td>Job is waiting for sandbox to become Active.</td>
    </tr>
</tbody>
</table>

## Test results

<table>
<thead>
    <th>API Result</th>
    <th>Result</th>
    <th>Description</th>
</thead>
<tbody>
    <tr>
        <td>0</td>
        <td>Completed</td>
        <td>Test finished execution.</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Passed</td>
        <td>Test completed successfully.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Failed<span style={{color:'red'}}><sup>*</sup></span></td>
        <td>An error during the test’s execution caused it to fail.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Terminated<span style={{color:'red'}}><sup>*</sup></span></td>
        <td>
        Possible reasons are:

        - Test execution was stopped by the user or job status is "Automatically Cancelled”
        - The Test execution service failed to start the test:
        - API request failed
        - Test execution service failed to clone/pull repository (failed to create workspace)
        - Test execution service failed to create virtual environment
        - Requirements file is missing
        - Test execution failed/aborted on the Test execution service
        - Test execution service, which had a running job, was deleted from the Job Scheduling portal
        </td>
    </tr>
    <tr>
        <td>4</td>
        <td>FailedToStart<span style={{color:'red'}}><sup>*</sup></span></td>
        <td>
        Job triggered. Test failed to execute.

        Possible reasons:

        - Test execution service failed to clone/pull the repository (= failed to create workspace)
        - Test execution service ES failed to created virtual environment
        - Test's requirements file is missing
        </td>
    </tr>
</tbody>
</table>


<span style={{color:'red'}}>*</span> Test execution failure does not stop the job from running its other tests.