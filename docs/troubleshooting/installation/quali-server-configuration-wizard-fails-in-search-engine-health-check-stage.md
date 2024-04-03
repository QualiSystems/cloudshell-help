---
sidebar_position: 10
---

# Quali Server Configuration Wizard Fails in "Search Engine health check" Stage

## Description

During CloudShell upgrade, it’s possible for old files to remain in the `\Quicksearch\bin` folder, causing the process to fail because of a java error.

## Solution

To resolve the issue:

To resolve the issue:

1. Stop the **Quali Server** service.
2. Create a backup of the Quicksearch folder.
3. Delete the folder `~\CloudShell\Server\QuickSearch`.
4. Copy the QuickSearch folder from the installation package's `CloudShell\Data\Server\Qualisystems\Quali\Server` directory.
    
5. Place the folder under the Quali Server installation folder (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server`).
6. For High Availability, enter the cluster name again in the new `elasticsearch.yml` file.
7. Run the Quali Server configuration wizard again.
