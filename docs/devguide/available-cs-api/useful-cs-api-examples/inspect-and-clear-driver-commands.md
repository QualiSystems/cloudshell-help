---
sidebar_position: 10
---

# Inspecting and Clearing Driver Commands on a Resource

Starting with CloudShell 2026.1, four Automation API methods let you see which resource driver commands are queued or running and cancel them. They exist to solve a specific problem: a resource that is exclusive and does not allow concurrent commands stays blocked while a command runs on it, and that command often belongs to a *previous* — possibly already ended — sandbox. A new sandbox waiting behind it has no way to see the command, let alone cancel it, because everything it can reach is scoped to its own reservation.

The methods come at two levels:

| Scope | Inspect | Cancel |
| --- | --- | --- |
| One reservation | `GetRunningCommands` | `CancelResourceCommand` (one command, by id) |
| One resource, across all reservations | `GetResourceCommandExecutions` | `ClearResourceCommands` (all of them) |

:::warning
All four methods require **system administrator** permissions. Cancelling a driver command mid-run leaves the device in whatever state the command reached, so treat `ClearResourceCommands` as a recovery tool rather than part of a normal flow.
:::

## Inspecting

`GetRunningCommands(reservationId)` lists the resource driver commands queued or running in one reservation. `GetResourceCommandExecutions(resourceFullName)` lists them for one resource across *every* reservation — this is the one that reveals the command left behind by a previous sandbox.

| Parameter | Type | Description |
| --- | --- | --- |
| `reservationId` | string | The reservation's unique identifier. |
| `resourceFullName` | string | The resource's full name, for example `ResourceName/Port`. |

Both return a response with a `Commands` list. Each entry has:

- `ExecutionId` — the command execution's id. Pass this to `CancelResourceCommand`.
- `ResourceFullName` — the resource the command is running on.
- `CommandName` — the driver command's name.
- `Status` — whether the command is queued or running.
- `StartTime` — when the command started.
- `ReservationId` — the reservation the command belongs to.

## Cancelling

`CancelResourceCommand(commandId)` cancels a single command by its `ExecutionId`. A command that is still queued is removed from the queue; one that is already running is cancelled.

`ClearResourceCommands(resourceFullName)` cancels every command queued or running on a resource, across all reservations, and returns the same `Commands` list describing what it cleared. Queued commands are removed from the queue and running commands are cancelled out-of-band, so the call does not wait behind the very command it is clearing — which matters, because that command is usually the reason you are calling it.

Because it does not block, `ClearResourceCommands` is safe to call from a Setup script to guarantee a sandbox starts with no residual commands on its resources.

## Python example

Find and clear whatever is blocking a resource. As this uses the CloudShell Automation API package, make sure to first install it by running `pip install cloudshell-automation-api` from command-line.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

RESOURCE = "Chassis1/Port1"

session = CloudShellAPISession(host="localhost", username="admin",
                               password="admin", domain="Global")

# what is holding the resource, in any reservation?
running = session.GetResourceCommandExecutions(RESOURCE)

if not running.Commands:
    print("Nothing queued or running on {}".format(RESOURCE))
else:
    for command in running.Commands:
        print("{} '{}' status={} started={} reservation={}".format(
            command.ExecutionId, command.CommandName, command.Status,
            command.StartTime, command.ReservationId))

    # cancel one specific command...
    session.CancelResourceCommand(running.Commands[0].ExecutionId)

    # ...or clear all of them
    cleared = session.ClearResourceCommands(RESOURCE)
    print("Cleared {} command(s)".format(len(cleared.Commands)))
```

To inspect only the current sandbox — for example from an orchestration script — use the reservation-scoped call instead:

```python
running = session.GetRunningCommands(reservation_id)
for command in running.Commands:
    print(command.ResourceFullName, command.CommandName, command.Status)
```

## Related Topics

- [Performing Actions on Resources in a Sandbox](./peform-actions-on-rsrc-in-sandbox.md)
- [Undeploying Apps in a Sandbox](./undeploy-apps-in-sandbox.md)
