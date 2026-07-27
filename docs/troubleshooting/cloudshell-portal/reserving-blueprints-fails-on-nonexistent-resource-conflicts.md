---
sidebar_position: 13
---

# Reserving blueprints fails on nonexistent resource conflicts

## Description

Reserving a blueprint that has resources displays errors relating to resource conflicts, event though all of the blueprint's resources are available for the reservation's time slot.

## Possible Causes

- Search engine is not in sync with the database
- There's a corruption in the Quali database (rare)

## Solutions

See [Unable to Locate a Resource](./unable-to-locate-a-resource.md).

## Reading the resolution diagnostics

When a blueprint reservation fails, CloudShell tries to match each of the blueprint's abstract requirements to a real resource in your domain (and to find valid routes between them). Depending on *why* the match failed, the failure notification gives you one of two different tools for understanding what went wrong.

### When abstract requirements cannot be resolved at all

If the reservation fails because one or more abstract requirements have **no matching resource in the domain** — that is, nothing exists that meets the requirement's family, model, or attribute restrictions — the failure notification includes a **View Details** link with a detailed resolution diagnostic.

Click **View Details** to see a breakdown of the reservation attempt, organized into the following categories:

- **Unresolvable** – the abstract requirements that could not be matched to any resource, so no candidate exists to reserve.
- **Conflict-blocked** – requirements that *did* match one or more resources, but every matching resource is currently reserved by another sandbox.
- **Resolved** – the requirements that were successfully matched, shown together with the resource each was bound to.
- **Routes** – any route or L1 connectivity requirements that could not be satisfied, such as when two resolved endpoints have no valid path between them.

Use this breakdown to remediate the specific cause. For example, an **Unresolvable** entry usually means the required resource type, model, or attribute value does not exist in your domain, is excluded, is not searchable, or is not associated with your domain — see [Unable to Locate a Resource](./unable-to-locate-a-resource.md). A **Routes** entry points to missing network connectivity rather than to a missing endpoint resource.

:::tip
If a reservation used to succeed and now reports missing resources, it is often because the search engine has fallen out of sync with the database. Re-index the search engine before investigating further — see [Search engine is not in sync with the database](./unable-to-locate-a-resource.md#search-engine-is-not-in-sync-with-the-database).
:::

### When matching resources exist but are reserved

The detailed **View Details** diagnostic appears **only** when there are truly unresolvable requirements — requirements with no matching resource in the domain.

If, instead, matching resources *do* exist but are all currently reserved by other sandboxes (a conflict-only failure), CloudShell does **not** show the detailed diagnostic. It shows the standard **conflict resolver** dialog, which lists each conflicting resource and who is using it until when. From there you can wait for the resources to free up, choose a different time slot, or, if permitted, **Reserve with conflicts**.

:::note
Because these two paths are distinct, not every failed reservation shows the **View Details** diagnostic. A reservation that fails purely on reserved (but existing) resources will surface the conflict resolver dialog rather than the resolution breakdown.
:::
