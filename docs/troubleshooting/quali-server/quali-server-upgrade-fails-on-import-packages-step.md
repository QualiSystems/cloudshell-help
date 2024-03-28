---
sidebar_position: 6
---

# Quali Server upgrade fails on Import Packages step

## Description

When upgrading Quali Server, some of the existing installation's packages may not be compatible with the new CloudShell version. The Quali Server configuration typically removes these old packages and imports the new ones. However, in some cases, Quali Server configuration is unable to replace the old packages with the new versions. This causes the **Import Packages** step to fail, listing the packages that were not imported.

![](/Images/Troubleshoot/PackageImportFailed.png)

## Solution

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Config\Packages` folder.
2. Move the folder's contents to a backup folder
3. Rerun the Quali Server Configuration Wizard.
4. Optionally delete the backup folder when the configuration ends successfully.
