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

:::info[Example csv]
```
UserCreatedEvent
UserGroupsListUpdatedEvent
LoginEvent
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
**UserCreatedEvent**:   This event is triggered when a new user is created.

**UserDeletedEvent**:   This event occurs when a user is deleted.

**UserGroupsListUpdatedEvent**:   This event is fired when the list of user groups is updated.

**UserUpdatedEvent**:   This event happens when a user's details are updated.

**LoginEvent**:   This event is triggered when a user logs in.

**UserGroupAddedEvent**:   This event occurs when a new user group is added.

**UserGroupDeletedEvent**:   This event is fired when a user group is deleted.

**UserGroupDomainsUpdatedEvent**:   This event is triggered when the domains of a user group are updated.

**UserGroupUpdatedEvent**:   This event happens when a user group is updated.

**JobEndedEvent**:   This event occurs when a job ends.

**JobSetEndedEvent**:   This event is fired when a job suite ends.

**ResourceAvailabilityChangedDomainEvent**:   This event is triggered when the availability of a resource changes.

**TopologyCreatedEvent**:   This event occurs when a new blueprint is created.

**TopologyUpdatedEvent**:   This event is fired when a blueprint is updated.

**TopologyDeletedEvent**:   This event is triggered when a blueprint is deleted.

**TopologyRenamedEvent**:   This event happens when a blueprint is renamed.

**DeployResourceEvent**:   This event occurs when a resource is deployed.

**ResourceEnabledEvent**:   This event is fired when a resource is enabled.

**ResourceDisabledEvent**:   This event is triggered when a resource is disabled.

**ResourceAddedEvent**:   This event occurs when a resource is added.

**ResourceDeletedEvent**:   This event is fired when a resource is deleted.

**ResourceMovedEvent**:   This event happens when a resource is moved.

**ResourceRenamedEvent**:   This event occurs when a resource is renamed.

**ResourceUpdatedEvent**:   This event is fired when a resource is updated.

**ResourcesReservedEvent**:   This event is triggered when resources are reserved.

**ResourceUnlockedEvent**:   This event occurs when a resource is unlocked.

**BulkResourcesAddedEvent**:   This event is fired when multiple resources are added in bulk.

**ReservationCreatedEvent**:   This event is triggered when a sandbox is created.

**ReservationDeleteEvent**:   This event occurs when a sandbox is deleted.

**ReservationEndEvent**:   This event is fired when a sandbox ends.

**ReservationEndTimeChangedEvent**:   This event is triggered when the end time of a sandbox is changed.

**ReservationRejectedEvent**:   This event happens when a sandbox is rejected (typically due to user or license restrictions).

**ReservationRenamedEvent**:   This event occurs when a sandbox is renamed.

**ReservationSetupEndedEvent**:   This event is fired when the setup of a sandbox ends.

**ReservationStartTimeChangedEvent**:   This event is triggered when the start time of a sandbox is changed.

**ReservationUpdateEvent**:   This event happens when a sandbox is updated.

**WorkOrderResourceUpdatedEvent**:   This event is fired when a work order resource is updated in an assembly lab sandbox.

**WorkOrderResourceSolvedEvent**:   This event occurs when a concrete resource is selected for a work order resource in an assembly lab sandbox.

**WorkOrderResourceCreatedEvent**:   This event is triggered when a work order resource is created in an assembly lab sandbox.

**WorkOrderResourceUnsolvedEvent**:   This event is fired when a concrete match for a work order resource is unselected in an assembly lab sandbox.

**WorkOrderResourceRemovedEvent**:   This event happens when a work order resource is removed in an assembly lab sandbox.
