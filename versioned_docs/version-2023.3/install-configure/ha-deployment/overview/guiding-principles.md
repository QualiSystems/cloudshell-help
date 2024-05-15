---
sidebar_position: 1
---

# Guiding Principles

The HA architecture design follows a number of guiding principles that drive the choice of the deployment type for the HA Add-On:

| Aspect | Description |
| --- | --- |
| Cost | Consolidate applications components, use virtual environment for all components and leverage from existing infrastructure (compute/storage/network). |
| Performance | Have separate tiers for web/app/database, use load balance (when possible) and use physical servers. |
| Simplicity | Use a consistent solution across the system for ease of support, for example, Windows clustering. |
| Layering | No SPOF means layering redundancy at all levels (physical host, networking, hypervisor, OS, application services). This document focuses on application level redundancy and host failure. |
| SLA | Time to switch from active to standby should be minimal once a failure has been detected. |