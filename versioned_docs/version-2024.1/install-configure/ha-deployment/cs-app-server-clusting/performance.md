---
sidebar_position: 2
---

These are the expected retry and failover times in deployments using the minimum hardware and software requirements defined in [Minimum Requirements for CloudShell Servers and Clients](../../cs-system-requirements/min-requirements-for-cs.md).

| Component | Retry Time (since fail is discovered to operational status on the same node) - seconds | Full Failover (since fail is discovered to operational status on another node) - seconds |
| --- | --- | --- |
| Quali App server | 30 | 40 |
| License server | 10 | 15 |
| Web Server | 15 | 20 |