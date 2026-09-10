---
sidebar_position: 7
---

# CloudShell Server Events Queue

Cloudshell Server emits events when some operations occur in the backend.
System designers can subscribe to these events for audit or automation purposes.

This article describes how to configure this integration, as well as what events are available.

# Requirements

Cloudshell Server can publish to RabbitMQ.
The RabbitMQ Server needs to share a reliable network with Cloudshell Server.
RabbitMQ TCP listener port must be accessible by Cloudshell Server.

Cloudshell Server Events Queue has been tested with RabbitMQ version 3.11 but should work with RabbitMQ 3.X

To experiment with this, it is possible to emit messages to the RabbitMQ service used by an embedded Sandbox Service (which is installed with Cloudshell Server). 
[See example](#example-configuration).


## Configuring Cloudshell Server Events Queue

In RabbitMQ, make sure you have an exchange, and a queue.
Bind the queue to the exchange, with a routing key.

:::warning
Starting with CloudShell 2026.1, the `UseEmbeddedSandboxService` key defaults to `false`. If you are using the embedded Sandbox Service's RabbitMQ for the events queue (as in the [example below](#example-configuration)), make sure `UseEmbeddedSandboxService` is set to `True` in your `customer.config` so the embedded RabbitMQ is available. This does not affect deployments that use their own standalone RabbitMQ.
:::

In Cloudshell Server `customer.config`, set the following keys:

:::info[customer.config]
```xml
<add key="EnableServerEventsMQ" value="True"/>
<add key="ServerEventsMQHost" value="rabbitMq_hostname_or_ip"/>
<add key="ServerEventsMQPort" value="rabbitmq_tcp_listener_port"/>
<add key="ServerEventsMQUser" value="user"/>
<add key="ServerEventsMQPassword" value="password"/>
<add key="ServerEventsMQRabbitExchange" value="exchange"/>
<add key="ServerEventsMQRabbitRoutingKey" value="key"/>
```
:::

### Whitelisting events

It is possible to determine which events will be published by Cloudshell Server.
To do so, create a file titled ServerEventsWhiteList.csv in the application directory (next to QsTeamServer.exe). 

Typically this is `%Program Files(x86)%\Qualisystems\Server`
The contents of the CSV should be the events you *allow* to be published

:::note
ServerEventsWhiteList.csv should be line-break separated, not comma separated.
:::

[See](#supported-events) which [events](#supported-events) are supported (all are sent by default)

:::warning Use the event name, not the .NET class name
Each entry must be the event's **name** as listed in [Supported Events](#supported-events) — for example `UserCreated`, not `UserCreatedEvent`. Names that do not match an entry in that list are ignored, and CloudShell Server writes a warning to its log:

```
Could not subscribe to event '<name>'. Please make sure the event name is spelled correctly in your whitelist file
```

If every name in the file is unrecognized, no events are published at all.
:::

:::info[Example csv]
```
UserCreated
UserGroupsListUpdated
Login
```
:::

In the above example, Cloudshell Server would only emit events related to new users created, or modification to user groups (adding or removing users) or to logins


## Example Configuration

:::info[Example for embedded sandbox service]
```xml
<add key="EnableServerEventsMQ" value="True"/>
<add key="ServerEventsMQHost" value="localhost"/>
<add key="ServerEventsMQPort" value="5671"/>
<add key="ServerEventsMQUser" value="rabbitmq_user"/>
<add key="ServerEventsMQPassword" value="rabbitmq_password"/>
<add key="ServerEventsMQRabbitExchange" value="exchange"/>
<add key="ServerEventsMQRabbitRoutingKey" value="key"/>
```
:::


## Supported Events

The name in bold is the event's name: use it in `ServerEventsWhiteList.csv`, and expect it in the `EventType` field of the published message.

**UserCreated**:   This event is triggered when a new user is created.

**UserDeleted**:   This event occurs when a user is deleted.

**UserGroupsListUpdated**:   This event is fired when the list of user groups is updated.

**UserUpdated**:   This event happens when a user's details are updated.

**Login**:   This event is triggered when a user logs in. *Since CloudShell 2024.1.0.2596*, login events are also generated for SSO (Single Sign-On) logins. Previously, login events were only created for direct authentication.

**GroupAdded**:   This event occurs when a new user group is added.

**GroupDeleted**:   This event is fired when a user group is deleted.

**GroupDomainsUpdated**:   This event is triggered when the domains of a user group are updated.

**GroupUpdated**:   This event happens when a user group is updated.

**JobEnded**:   This event occurs when a job ends.

**JobSetEnded**:   This event is fired when a job suite ends.

**ResourceAvailabilityChanged**:   This event is triggered when the availability of a resource changes.

**BlueprintCreated**:   This event occurs when a new blueprint is created.

**BlueprintUpdated**:   This event is fired when a blueprint is updated.

**BlueprintDeleted**:   This event is triggered when a blueprint is deleted.

**BlueprintRenamed**:   This event happens when a blueprint is renamed.

**DeployResource**:   This event occurs when a resource is deployed.

**ResourceIncluded**:   This event is fired when a resource is enabled (included).

**ResourceExcluded**:   This event is triggered when a resource is disabled (excluded).

**ResourceAdded**:   This event occurs when a resource is added.

**ResourceDeleted**:   This event is fired when a resource is deleted.

**ResourceMoved**:   This event happens when a resource is moved.

**ResourceRenamed**:   This event occurs when a resource is renamed.

**ResourceUpdated**:   This event is fired when a resource is updated.

**ResourcesReserved**:   This event is triggered when resources are reserved.

**ResourceUnlocked**:   This event occurs when a resource is unlocked.

**BulkResourcesAdded**:   This event is fired when multiple resources are added in bulk.

**SandboxCreated**:   This event is triggered when a sandbox is created.

**SandboxDeleted**:   This event occurs when a sandbox is deleted.

**SandboxEnd**:   This event is fired when a sandbox ends.

**SandboxEndTimeChanged**:   This event is triggered when the end time of a sandbox is changed.

**SandboxRejected**:   This event happens when a sandbox is rejected (typically due to user or license restrictions).

**SandboxRenamed**:   This event occurs when a sandbox is renamed.

**SandboxSetupEnded**:   This event is fired when the setup of a sandbox ends.

**SandboxStartTimeChanged**:   This event is triggered when the start time of a sandbox is changed.

**SandboxUpdated**:   This event happens when a sandbox is updated.

**SandboxRouteConnected** *(Added in CloudShell 2024.1.0.2529)*:   This event is triggered when a route is connected in a sandbox.

**SandboxRouteDisconnected** *(Added in CloudShell 2024.1.0.2529)*:   This event occurs when a route is disconnected in a sandbox.

**SandboxCableConnected** *(Added in CloudShell 2024.1.0.2529)*:   This event is triggered when a cable is connected in a sandbox.

**SandboxCableDisconnected** *(Added in CloudShell 2024.1.0.2529)*:   This event occurs when a cable is disconnected in a sandbox.

**WorkOrderResourceUpdated**:   This event is fired when a work order resource is updated in an assembly lab sandbox.

**WorkOrderResourceSolved**:   This event occurs when a concrete resource is selected for a work order resource in an assembly lab sandbox.

**WorkOrderResourceCreated**:   This event is triggered when a work order resource is created in an assembly lab sandbox.

**WorkOrderResourceUnsolved**:   This event is fired when a concrete match for a work order resource is unselected in an assembly lab sandbox.

**WorkOrderResourceRemoved**:   This event happens when a work order resource is removed in an assembly lab sandbox.

**ResourceAttributeUpdated** *(Added in CloudShell 2024.1.0.2549)*:   This event is triggered when an attribute value is changed on a resource. Useful for monitoring attribute changes via MQ integration for audit or automation purposes.

## Domain ID in Events

*Added in CloudShell 2024.1.0.2596*

Certain server events now include a `DomainId` field in their message payload. This simplifies event handling and filtering by domain in MQ consumers, allowing subscribers to process only events relevant to a specific domain without additional API lookups.
