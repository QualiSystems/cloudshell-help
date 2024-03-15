---
sidebar_position: 9
---

# Known Issues and Limitations (High Availability)

- CloudShell application warm upgrade is currently not supported.

- The CloudShell BI solution is currently not supported in a high availability setup. It is possible to use CloudShell BI with CloudShell HA Plugin (version 6.3 EA and above).

- Where the NLB Manager is connected through a DHCP IP address, the network card must be connected to a static IP address.
- If the primary MongoDB node loses connection to both Quali Server and the other MongoDB nodes, there is a 10 second downtime. If the downtime period passes and the primary node is not back online, Mongo will elect a new primary.
    
    The downtime period is configurable via the **settings.electionTimeoutMilli** replica set configuration field. For details, see Mongo docs: [https://docs.mongodb.com/manual/reference/replica-configuration](https://docs.mongodb.com/manual/reference/replica-configuration)