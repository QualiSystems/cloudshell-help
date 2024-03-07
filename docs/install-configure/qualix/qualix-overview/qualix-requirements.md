---
sidebar_position: 2
---

# Requirements (QualiX)

## General requirements

The general requirements apply to all QualiX deployment modes (vCenter and Docker).

- At least 1 CPU with 1 GB memory. See [Modify Number of CPUs and Allocated Memory](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Mdfy-no-CPUs-allctd-mem.htm).
- Make sure network connectivity is established between the QualiX machine and the CloudShell Portal machine, and that the QualiX machine is accessible to all end users.
- Make sure the QualiX machine's UTC time matches the UTC time defined on the Quali Server. See [Setting QualiX to UTC Time](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Set-UTC-Time.htm).
- Ports 443 and 80 must be accessible from CloudShell Portal and the browsers.

## For QualiX deployed on vCenter

- General requirements (listed above)
- Ubuntu/RedHat machine - see [Minimum Requirements for CloudShell Servers and Clients](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm)
- VMWare (For Windows users)
- vSphere versions 5.5 - 6.5, 6.7, 7

## For QualiX deployed on Docker

- General requirements (listed above)
- Ubuntu/RedHat machine - see [Minimum Requirements for CloudShell Servers and Clients](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm)
- Linux Docker host (on any Linux distribution (RHEL, CentOS, etc., not supported for Windows hosts)
- Docker CE or EE 17.03.0 or greater
- **Docker for Windows** is not supported.
    

## Related Topics

- [Minimum Requirements for CloudShell Servers and Clients](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm)