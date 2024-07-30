---
sidebar_position: 1
---

# Failure Trigger

The application services that are monitored are listed in the following table:

| Component | Monitor |
| --- | --- |
| Quali App server | Quali Server service |
| License server | License server service |
| Web Server – Basic and Performance setup | IIS services, CloudShell IIS Application Pool and CloudShell IIS site |
| Web server - Advanced | ARR performs a health test of a diagnostic page inside the  CloudShell portal |
| Execution server | Execution server not responding |

Before actual failover, one attempt is made to restart the failed service on the local server (Windows) for the Quali App server and License server components.

Additionally, the HA Plugin also detects if the entire node fails (is non-responsive).