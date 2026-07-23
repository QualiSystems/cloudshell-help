---
sidebar_position: 2
---

CloudShell Release History
==========

## Version 2026.1

### Maintenance Window By Domain
Administrators can define maintenance windows scoped to individual domains. This enables planned downtime or restricted access for specific teams without affecting other domains.

### Deprecate Properties Capability — All Standards
The `deprecate_properties` capability is now recognized across all CloudShell resource standards. Previously only supported on a subset of core standards.

### Security Updates
Updated bundled third-party components:
| Component | Previous | New |
|-----------|----------|-----|
| Apache httpd (+OpenSSL) | 2.4.65 | 2.4.66 |
| Node.js | 22.15.0 | 24.14.0 (LTS) |
| Erlang OTP | 25.2.3 | 26.2.3 |
| MongoDB | 6.0.4 | 7.0.30 |

:::warning Breaking Change
Node.js 24 dropped 32-bit (x86) Windows support. The x86 Node.js prerequisite has been removed from the installer.
:::

### Export Diagram as PNG
Export sandbox diagrams as PNG images directly from the browser. Available in the diagram toolbar under Export → PNG.

### AI Chat Integration
Configurable AI Assistant menu item in the Portal. Administrators can set a URL template to integrate with AI chat services.

### Portal Session Resilience
Portal users — including those signing in via SSO/SAML — are no longer logged out when the Portal application pool recycles. CloudShell rebuilds the session from the existing sign-in cookie, so open tabs and background page refreshes keep working without a forced re-login, and a transient CloudShell Server outage no longer signs users out. Controlled by the `EnableSessionRehydration` setting (enabled by default).

### Custom PyPI Repository Honored at Execution Server Setup
A configured custom PyPI repository (`RequirementsRepository`, `RequirementsTrustedHost`, `RequirementsExtraRepository`) is now used during Execution Server setup and default-environment bootstrap, not only when running driver commands. Environments with a private or HTTPS-only PyPI index can complete Execution Server setup against a reachable custom index without a workaround.

### Server Default Changes
- `UseRabbitServer` now defaults to `false`
- `UseEmbeddedSandboxService` now defaults to `false`
- Job Scheduling now follows the global `UseRabbitServer` setting instead of an independent default, so scheduled and manually launched reservations take the same messaging path

### Docker Execution Server
- Consolidated Dockerfile with Python 3 virtualenv and TLS/Kerberos compatibility
- Support for passing Execution Server Selector attributes to Docker containers

### Application Links Management API
New TestShell API methods for managing application links (SSH, Telnet, RDP, etc.) on resources programmatically. Administrators can disable specific links per resource or set family-wide defaults:
- `SetResourceApplicationLinks` — Set which application links are disabled for a specific resource
- `GetResourceApplicationLinks` — Get the current application links configuration for a resource
- `SetFamilyDefaultApplicationLinks` — Set default disabled links for an entire resource family
- `GetFamilyDefaultApplicationLinks` — Get the family-level default configuration

### GetResourceReservations API
New TestShell API method that returns the list of reservations (current and historical) associated with a given resource.

### Improved Abstract Resource Resolution Diagnostics
When a blueprint reservation fails due to unresolvable abstract resources or route conflicts, the error message now includes detailed diagnostics — showing which resources could not be resolved, which routes failed, and the specific conflicts that prevented resolution.

### Bug Fixes
- Fixed an issue where App deployment could retry unnecessarily on certain internal errors instead of failing fast with clear diagnostics.
- Fixed SSO (SAML) users being bounced to the login page in a loop, instead of seeing the maintenance page, when signing in during a maintenance window. Aborted logins no longer leave a half-authenticated session.
- Fixed an active maintenance window being left stranded open when its end time was edited to a past time. Such edits are now rejected — use **Stop** to end an active window immediately.
- Fixed the RabbitMQ messaging service failing to start after an Erlang upgrade. CloudShell now validates and refreshes stale Erlang location settings automatically.
- Fixed abstract resource port names in Assembly Lab work order fields and route tooltips intermittently truncating to the leaf port name instead of the full path.
- Fixed the Sandbox API crashing on the Node.js 24 runtime when handling conditional (cache-revalidation) requests to the explore endpoints.
- Restored the full Ansible package (with bundled collections) in the Docker Execution Server image, fixing playbooks that failed with missing-module errors.
- The About dialog now shows the full four-part product version, including the build number (for example, `2026.1.0.52`).

---

## Version 2025.1

### RemoveEntitiesFromTopology API
New API method for programmatically removing services and abstract resources from a topology/blueprint.

### PostgreSQL Database Support (Beta)
CloudShell now supports PostgreSQL as an alternative database backend. Contact Quali Support for evaluation access.

---

## Post-2024.1 GA Patch Releases

### 2024.1.0.2534 (October 2024)
- **Abstract Editor: Collapse Nodes** — Collapse abstract nodes in the diagram editor for cleaner visualization
- **Reservation State Filter** — Now visible for all domain types in the Reservations Dashboard
- **L1 Port Filter** — Filter resources by L1 ports when adding resources to a reservation
- **Block Recurring Sandboxes in Assembly Lab** — Recurring reservations are blocked in Assembly Lab domains

### 2024.1.0.2540 (November 2024)
- **Sticky Notes Activity Feed** — When updating sticky notes, a notification appears in the reservation activity feed
- **Work Order Enhancements** — Block connectivity changes in pending state; show full abstract port names in Blueprint route editor

### 2024.1.0.2596 (February 2025)
- **Attribute Changed Event** — Now publishable for MQ integration
- **SSO Login Event** — Login events are now created for SSO logins
- **Sandbox API: Schedule Future Reservations** — New `Start_Time` parameter to schedule reservations for a future time
- **Save As Template Confirmation** — Confirmation dialogs added for "Save As Template" and "Save a Copy" actions
- **Work Order Improvements** — Recursive state updates, alphabetical route sorting, sort resources by request name
- **Domain ID in Events** — Domain ID now passed in certain events to simplify handling

### 2024.1.0.2603 (March 2025)
- **Copiable Side Panel Text** — Text in side panels (activity feed, resource info) is now selectable and copiable
- **Sandbox API: Cancel Pending Reservation** — API now supports canceling pending reservations, not just stopping active ones
- **Assembly Lab: Exclusive Requirements** — Exclusive requirements now solved only by the device itself, not the entire graph
- **Performance Improvements** — Faster entity path queries, optimized published properties retrieval

### 2024.1.0.2624 (April 2025)
- **Smart Route Creation** — When creating routes between concrete devices, the system prioritizes using existing L1 infrastructure segments (patch panels, Layer 1 switches). Falls back to a provisional direct connection if no valid route exists
- **Node.js Upgrade** — Bundled Node.js upgraded from 18.13.0 to 22.15.0
- **Security: L1 Driver Logs** — Passwords redacted from Layer 1 driver logs
- **Performance** — Reduced CPU usage, faster resource deletion, reduced thread starvation, caching for high-frequency calls

### 2024.1.0.2634 (May 2025)
- **PostgreSQL Support (Experimental)** — Experimental database support for PostgreSQL. Contact Quali Support for details.

### 2024.1.0.2650 (June 2025)
- **Sticky Note Colors** — Choose color for sticky notes in sandboxes
- **New API: UndeployApps** — Remove an app from the cloud provider while keeping the CloudShell resource. Useful for bulk deletion scenarios.

### 2024.1.0.2669 (July 2025)
- **AllowUnicodeForCommandContext** — New configuration option to support passing unicode characters to script environment variables (useful when usernames contain unicode)

### 2024.1.0.2682 (August 2025)
- **Alias in Assembly Lab** — Resource alias now appearing in Assembly Lab reservations
- **Environment Variable Config Override** — Override `customer.config` values using environment variables
- **Permissions Screen Sort** — Groups sorted alphabetically in the Permissions screen
- **Connection Properties** — Side panel shows changes immediately after modification

### 2024.1.0.2686 (October 2025)
- **L1 Port Route Solving** — When solving an abstract in a route, if the solution is connected to an L1 port, the port is automatically added to the route
- **Per-Domain Notification Settings API** — New `UpdateDomainSetting` and `GetDomainSettings` API methods for managing notification settings per domain

---

## Version 2024.1

### Assembly Lab

A radically different mode of operation for CloudShell is now available!

- Manage devices on a part by part basis
    - Move sub resources from one device to another
    - Solve abstracts using parts from different devices

- Sandboxes can be partially solved by algorithm and partially by human involvement
    - Select solutions for abstract requests
    - Change solutions


#### For more information on Assembly lab, follow these links

- [Assembly Lab Overview](../admin/setting-up-cloudshell/assembly-lab/index.md)
- [Configure an Assembly Lab domain](../admin/setting-up-cloudshell/assembly-lab/configure-assembly-lab-domain.md)

### Capabilities

CloudShell's RBAC implementation, you can now associate user groups with capability sets.
Each capability set can specifically allow or block certain capabilities, overriding the defaults provided by the group role.

[Read more here](../admin/cloudshell-identity-management/managing-cloudshell-permissions/capabilities/index.md)

### Display attributes in Resource Search directly on cards

[Configure specific attributes](../admin/setting-up-cloudshell/cloudshell-configuration-options/resource-search-customizations.md) to appear directly on resource search results.

![SearchResultsWithAttribute](/Images/Admin-Guide/ResourceSearchCustomization/SearchResultsWithLocation.png)

### Filter sandboxes by user input and display the user input in Sandboxes Dashboard

- Configure an attribute to be displayed in sandbox dashboard
- Show only sandboxes which passed a particular value

![Sandbox Dashboard Customization](/Images/Admin-Guide/CustomizingSandboxesDashboard/filter.gif)

[For more details](../admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-sandboxes-dashboard.md)

### Minimum Lead Time

You now have the ability to establish a minimum lead time for reserving Sandboxes within a specific domain. This means that when this setting is configured, any sandbox reservations must be made for a date in the future, not for immediate use.

To implement this, you need to adjust the `MinimumLeadTimeMinutes` parameter via a specific API call. Detailed instructions on how to make this API call can be found in [this guide](../api-guide/cs-admin-rest-api/edit-domain.md).

### API Changes

#### GetResourcesAttributeValues 
Receives a list of resources and returns the values of all the attributes in bulk. This method can be more performant than calling GetResourceAttributeValues or GetResourceDetails in a loop.
Available in Cloudshell Automation API.

#### GetExecutionServers & DeleteExecutionServer

API calls for getting Execution Servers and removing them using automation.

#### GetResourceDetails changes

GetResourceDetails will now show Create & Modified Date for the resource.

---