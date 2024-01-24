---
sidebar_position: 3
---

Bugs Fixed
==========

The table below lists all the bugs reported by customers, that were resolved in version 2023.2. All releases may include additional resolved issues, which are not included in this list.

| Support Case # | Internal WI # | Description | Fixed in Version |
| --- | --- | --- | --- |
| 55499 | 12371 | Sandbox Setup failed and returned the following error: "General Execution. Failed to start execution: Server is unavailable" | 2023.2 |
| 55312 | 12262 | Resources in blueprint are not displayed if there are too many sub-resources | 2023.2 |
| 54496 | 12239 | Suite fails with "does not have sufficient permissions to be the sandbox owner". | 2023.2 |
| 54315 | 12027 | CloudShell installation granted elevated privileges to Authenticated Users. The elevated privileges are rolled back automatically by the installation process when they're no longer needed. | 2023.2 |
| 52848 | 10909 | Naming convention for New Job Scheduling suite executions is different from the old Job Scheduling | 2023.2 |
| 52321 | 9975 | Cannot delete deployed app after cloud provider resource has been deleted | 2023.2 |
| 53004 | 10403 | Handled an infrequent error in Testshell, which would cause tools to fail unexpectedly, and in particular would cause session-based tools to exit unexpectedly. | 2023.1 |
| 50993 | 9357 | Copying sandbox data to clipboard would fail if certain characters were present in the data. For example '/n'. | 2023.1 |
| 53222 | 10700 | Could not delete blueprint with resources containing attribute changes | 2023.1 |
| 52650 | 10238 | Cable Physical connection did not displayed properly | 2023.1 |
| 52767 | 10442 | GetReservationDetails would not show attributes for Apps, if they were attributes for a logical resource and were still with the default value. | 2023.1 |
| 53180 | 10617 | Provide API capability to modify permitted editors on blueprints (In rare cases, calling GetTopologyDetails would fail with an unreadable error message) | 2023.1 |
| 53470 | 10829 | (Old and New Job Scheduling) Blueprint reservations were delayed by 5 minutes and as a result could not schedule test runs (CloudShell erroneously identified some of the blueprint's resources as being reserved, causing the tests to fail on reservation conflicts) | 2023.1 |
| 52803 | 10126 | (New Job Scheduling) Job execution got Automatically Canceled because test was not found | 2023.1 |