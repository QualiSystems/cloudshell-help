---
sidebar_position: 1
---

# Job Scheduling Terminology

- **Discovery Server** (sometimes called Discovery Service or DS) is a server that discovers the tests. It is associated with a single test repository. It checks the repository for changes every x time, and re-imports the tests if any changes are detected.
- **Job** is a collection of tests. The job’s duration is calculated in the following way: sum (job’s tests duration) + buffer. Every job is associated with a single blueprint that is launched as part of the job’s execution, and all tests in a job share the same sandbox for execution.
- **Job duration** – This value is calculated as the sum of all the test duration values a job contains, plus an additional buffer value that is configured.
- **Suite** is a collection of jobs. This is an execution unit. Job or test cannot be executed outside the suite context.
- **Suite execution** is a single execution of a particular suite. By default, the system retains suite executions only from the last month.
- **TES Slot** – Each TES has a predefined number of slots that indicates how many tests it can run in parallel (the default is 1). Each TES slot can be in one of the following states
    - **Free**
    - **Leased** \- in this state the slot is considered busy. The job execution has started, the system waits for the sandbox.
    - **Running** \- in this state the slot is considered busy. Test is running on the slot.
- **Test** is an individual unit of work defined by the user that is executed on a designated sandbox. Tests are associated with a test type and a single job and return test status results such as "PASSED”, "FAILED”, etc. Multiple tests in the same job are run sequentially (in their defined order) on the job’s sandbox. Tests have defined durations.
- **Test execution server** (sometimes called Test Execution Service or TES) is a server that runs the tests. You define in the configuration how many TES servers your deployment needs. Each TES is associated with one or more spaces in CloudShell, and is configured to run a specific type of test, such as Robot, Selenium, etc. By design, only one test type (of your choosing) can be used across all your suites in CloudShell.