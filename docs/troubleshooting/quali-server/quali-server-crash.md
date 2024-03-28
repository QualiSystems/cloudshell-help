---
sidebar_position: 7
---

# Quali Server Crash

## Error Message

In CloudShell Portal:

:::danger &nbsp;
Service not available
:::

In Windows Event Viewer>Application (for crashes related to a MongoDB error):

:::danger &nbsp;
Application: QsTeamServer.exe  
Framework Version: v4.0.30319  
Description: The process was terminated due to an unhandled exception.  
Exception Info: System.TimeoutExceptionat MongoDB.Driver.Core.Clusters.Cluster.ThrowTimeoutException(MongoDB.Driver.Core.Clusters.ServerSelectors.IServerSelector, MongoDB.Driver.Core.Clusters.ClusterDescription)  
at MongoDB.Driver.Core.Clusters.Cluster+WaitForDescriptionChangedHelper.HandleCompletedTask(System.Threading.Tasks.Task
:::

## Description

Quali Server stops working, resulting in unresponsive CloudShell applications or a "Service not available" indication message when attempting to log into CloudShell.

## Possible Causes

A Quali Server crash may be caused by:

- A bad connection
- Database error - disconnect/timeout on MongoDB or a database failure in MSSQL

## Solution

- Check Quali Server connectivity.
- Restart **Quali Server** service.
- Check database connectivity and functionality for Quali Server databases Mongo/MSSQL.
