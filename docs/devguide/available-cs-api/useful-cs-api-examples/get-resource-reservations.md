---
sidebar_position: 6
---

# Getting a Resource's Reservations

The `GetResourceReservations` API returns the reservations (sandboxes) associated with a specific resource. This is useful for admin and reporting automation - for example, to check whether a resource is currently in use before taking it offline, to audit which users have reserved a resource, or to list its upcoming (scheduled) reservations.

The API returns three kinds of reservations for the resource:

- **Active** - a reservation that is currently running.
- **Pending** - a future (scheduled) reservation that has not started yet.
- **Completed** - a historical reservation that has already ended.

Results are paginated, so you can cap how many entries are returned while still learning the total number of matching reservations.

## How it works

`GetResourceReservations` accepts three parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| `resourceFullPath` | string | The full path/name of the resource whose reservations you want to retrieve. This is required. |
| `includeHistorical` | bool | When `true`, completed (ended) reservations are included in the results. When `false`, only active and pending (future) reservations are returned. Defaults to `true`. |
| `maxResults` | int | The maximum number of reservation entries to return. Defaults to `50`. Values of `0` or less fall back to `50`, and the server caps this at `200`. |

:::note
Setting `includeHistorical` to `false` filters out completed reservations only. Pending (future) reservations always appear in the results regardless of the `includeHistorical` value, since a future reservation is not historical.
:::

The call returns a response object with the following fields:

- `ResourceName` - the resource full path that was queried.
- `TotalCount` - the total number of reservations that match the query. This reflects **all** matching reservations, even when `maxResults` caps the number of entries actually returned - so you can detect when there are more reservations than the page you requested.
- `Reservations` - the list of reservation entries. Each entry has:
    - `ReservationId` - the reservation's id.
    - `ReservationName` - the reservation's name.
    - `Status` - `Active`, `Pending`, or `Completed`.
    - `OwnerName` - the username of the reservation's owner.
    - `StartTime` - the reservation's start time.
    - `EndTime` - the reservation's end time.

## Python example

This script starts an API session and prints the reservations for a target resource. Replace `resource name` with your resource's full path and set your CloudShell connection details. As this uses the CloudShell Automation API package, make sure to first install it by running `pip install cloudshell-automation-api` from command-line.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

# specify target resource full path
TARGET_RESOURCE = "resource name"

# api session details
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"

# start session
api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)

# retrieve the resource's reservations (active, pending and completed), up to 50 entries
response = api.GetResourceReservations(resourceFullPath=TARGET_RESOURCE,
                                       includeHistorical=True,
                                       maxResults=50)

print("Resource '{}' has {} reservation(s):".format(response.ResourceName, response.TotalCount))

for reservation in response.Reservations:
    print("  [{status}] {name} (id: {id}) - owner: {owner}, {start} to {end}".format(
        status=reservation.Status,
        name=reservation.ReservationName,
        id=reservation.ReservationId,
        owner=reservation.OwnerName,
        start=reservation.StartTime,
        end=reservation.EndTime))

# example: warn if the resource is currently in use
active = [r for r in response.Reservations if r.Status == "Active"]
if active:
    print("\nResource is currently active in {} reservation(s).".format(len(active)))
```

To retrieve only the resource's current and upcoming reservations (excluding completed ones), call the API with `includeHistorical=False`:

```python
# only active and pending (future) reservations
response = api.GetResourceReservations(resourceFullPath=TARGET_RESOURCE,
                                       includeHistorical=False,
                                       maxResults=50)
```

Because `TotalCount` reflects all matching reservations - not just the returned page - you can compare it against the number of returned entries to know when a resource has more reservations than the page you requested, and raise `maxResults` (up to `200`) accordingly.
