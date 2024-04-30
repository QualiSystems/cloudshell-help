---
sidebar_position: 2
---

# Troubleshooting Guacamole Services

This applies to the **qualix-tomcat** and **qualix-guacd** Apache Guacamole services that are created when installing QualiX over vSphere.

To run a command. First SSH to Qualix server.

**Commands for qualix-tomcat:**

- To enable the service: `systemctl enable qualix-tomcat`
- To start the service: `systemctl start qualix-tomcat`
- To disable the service: `systemctl disable qualix-tomcat`
- To stop the service: `systemctl stop qualix-tomcat`
- To check the service status: `systemctl status qualix-tomcat`

**Commands qualix-guacd:**

- To enable the service: `systemctl enable qualix-guacd`
- To start the service: `systemctl start qualix-guacd`
- To disable the service: `systemctl disable qualix-guacd`
- To stop the service: `systemctl stop qualix-guacd`
- To check the service status: `systemctl status qualix-guacd`

**Logs**

- [Collecting Logs](../troubleshooting-overview/collecting-logs.md).
