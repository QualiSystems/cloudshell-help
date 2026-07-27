---
sidebar_position: 3
---

# Managing Resource Application Links

Application links are the remote-access shortcuts (such as **SSH**, **Telnet**, and **RDP**) that CloudShell displays for a resource that allows remote connections. Starting in CloudShell 2026.1, the TestShell API lets administrators control which of these links are available, either on an individual resource or as a default for an entire resource family. This is useful when you want to hide connection methods that are not relevant, not permitted, or not supported for certain equipment.

The feature is exposed through four TestShell API methods:

| Method | Purpose |
| --- | --- |
| `SetResourceApplicationLinks` | Set which application links are disabled for a specific resource. |
| `GetResourceApplicationLinks` | Get the current application links configuration for a resource. |
| `SetFamilyDefaultApplicationLinks` | Set the default disabled application links for an entire resource family. |
| `GetFamilyDefaultApplicationLinks` | Get the family-level default configuration. |

These methods are TestShell API methods, available across the TestShell API library, C#, TCL, and XML RPC implementations described in [TestShell API](./testshell-api.md). They are administrator operations and require an administrator session.

## How disabled links are identified

An application link is identified by its **application name** — the name of the remote-access application, for example `SSH`, `Telnet`, or `RDP`. Both `Set` methods take an array of these application names. The array is a list of the links you want to **disable**; any link whose application name is not in the array remains enabled.

The set of link names that actually exist for a resource comes from the application links configured in your CloudShell system, and depends on the resource's attributes (for example, a link is only shown if the attributes it needs, such as address and credentials, are present) and on the resource's family allowing remote connections. Rather than assume a fixed list, retrieve the current configuration first (see [Get the links currently configured on a resource](#get-the-links-currently-configured-on-a-resource)) to discover the exact application names available in your environment before disabling them.

:::note
Setting the disabled links is a **replace-all** operation. The array you pass completely replaces the previous list of disabled links — it is not merged with it. To change one link, send the full list of links that should be disabled after the change.
:::

## Resource-level configuration

`SetResourceApplicationLinks(resourceFullPath, disableApplicationLinks)` controls the disabled links for a single resource, where:

- `resourceFullPath` — the full path of the resource (as with other TestShell API resource methods, you can also pass just the resource name without its folders).
- `disableApplicationLinks` — an array of application names to disable.

A resource has three possible states, determined by the value you pass:

| Value passed | Meaning |
| --- | --- |
| An array of application names | Those links are disabled on this resource; all other links are enabled. This overrides the family default. |
| An empty array | All links are enabled on this resource, overriding the family default. |
| No value (null) | The resource clears its own setting and inherits the family default. |

## Family-level default configuration

`SetFamilyDefaultApplicationLinks(familyName, disableApplicationLinks)` sets a default for the whole family, where:

- `familyName` — the name of the resource family.
- `disableApplicationLinks` — an array of application names to disable by default.

The family default applies to any resource in the family that has not been individually configured (that is, a resource still inheriting from its family). Passing an empty array (or no value) clears the family default, so that by default no links are disabled for the family.

A resource-level setting always takes precedence over the family default. Once you call `SetResourceApplicationLinks` on a resource with an array (including an empty array), that resource stops following the family default until you explicitly return it to the inheriting state.

## Reading the current configuration

`GetResourceApplicationLinks(resourceFullPath)` and `GetFamilyDefaultApplicationLinks(familyName)` both return a response containing:

- `DisabledApplicationLinks` — the list of application names that are currently disabled. For a resource that is inheriting, this reflects the family default that is in effect.
- `InheritingFromFamily` — for `GetResourceApplicationLinks`, indicates whether the resource is currently inheriting the family default (`true`) or using its own explicit setting (`false`).

## Common tasks

The parameter names and values below are the same regardless of which TestShell API implementation (library, C#, TCL, or XML RPC) you use. When calling through XML RPC, wrap the `disableApplicationLinks` array as a string vector according to the XML RPC conventions of your CloudShell version.

### Get the links currently configured on a resource

Call `GetResourceApplicationLinks` with the resource's `resourceFullPath` (for example, `MyRouter`). Do this first, both to see which links are disabled and to discover the exact application names available for the resource. In the response, `DisabledApplicationLinks` lists the currently disabled application names, and `InheritingFromFamily` tells you whether the resource is following its family default.

### Disable a single link on a resource

Call `SetResourceApplicationLinks` and pass the full list of links that should be disabled. To disable only the SSH link, pass `resourceFullPath` = `MyRouter` and `disableApplicationLinks` = `["SSH"]`. Because this is a replace-all operation, the array must contain every link you want disabled, not just the one you are changing.

### Enable all links on a resource (override the family default)

Call `SetResourceApplicationLinks` with `resourceFullPath` = `MyRouter` and an empty `disableApplicationLinks` array. This enables every link on the resource and stops it from inheriting the family default.

### Set a family-wide default

Call `SetFamilyDefaultApplicationLinks` with `familyName` = `Router` and `disableApplicationLinks` = `["Telnet"]` to disable the Telnet link by default for every resource in the `Router` family that has not been individually configured. New resources created in the `Router` family, and existing resources still inheriting from the family, will have their Telnet link disabled. Any resource that already has its own resource-level setting is unaffected.

:::note
These methods require an administrator session. If the resource or family cannot be found, the call returns an "entity not found" error.
:::
