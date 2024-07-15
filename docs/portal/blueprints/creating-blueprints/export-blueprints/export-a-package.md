---
sidebar_position: 1
---

# Exporting a Blueprint Package

This topic describes how to export resources, blueprints and their dependencies as a package.

When exporting a blueprint package, the shells associated with the resources within the blueprint are not imported.

Examples of the use of export and import of packages are:

- Backup of a blueprint with all of its dependencies kept as archive copies which is then available to be restored when needed.
- As a means of providing solutions to other users, by exporting a package from one user or database and importing it into another user or database.

**To export a blueprint package:**

1. In CloudShell Portal, select the required blueprint.
2. In the diagram, click the **Blueprint** menu and **Export Blueprint Package**.
3. Save the package zip file in the required location.

## The exported package

A package is a zip file that contains folders and files that are needed to fully recreate the same contents that were exported.

The contents of each folder or file of a blueprint package are described in the following table:

| Folder/File | Description |
| --- | --- |
| App Templates folder | Contains App definition XMLs and images of the App templates.<br/>In order for the App to work, the cloud provider resource must exist in CloudShell. |
| Categories folder | Contains the `categories.xml` file and images of the categories, if images were assigned to the categories. |
| DataModel folder | Contains information about the data model (families, models, attributes, resource structure, respository asset, and family/model images) for each resource, service and App in the blueprint. |
| Resource Drivers folder(1st Gen shells only) | Contains resource drivers for each resource in the blueprint that has an assigned driver.<br/>**Note:** Resource drivers are supported for backwards compatibility only. |
| Resource Scripts folder | Contains a Python script file for each resource in the blueprint that has an assigned script. |
| Repository assets (referenced in DataModel xml) | Configuration Management (sh/ps1) script or Ansible playbook attached to the blueprint's components. |
| Resources folder | Contains XML files for each resource, service and App in the blueprint. The XML contains partial information about the resource, according to the usage in the blueprint. For example, if only 2 ports of a blade are in use, the export contains the whole blade and ports but other blades that are not in the blueprint are not exported.<br/>**Note:** Shells are not included in the blueprint package - see [Additional information](../export-blueprints/export-a-package.md#additional-information). |
| Topologies folder | Contains an XML file with the blueprint's properties, diagram layout (including x-y coordinates of each element), resource connection routes, and image file (if the blueprint has an image assigned to it). It also contains inventory resources associated with the blueprint, such as physical resources and cloud provider resources \[used by the blueprint's Apps\] and their share level in the blueprint. The share levels of the resources are included in the export, as defined in the blueprint. |
| Topology Drivers folder(1st Gen shells only) | Contains the blueprint driver's dll file, if the blueprint has a driver assigned to it. |
| Topology Scripts folder | Contains ZIP files of the blueprint's scripts, if the blueprint has scripts assigned to it. |
| `metadata.xml` file | This file contains information about the export time, server version and package type that is used by the server in the import process. |
:::note
The only folders included in the export are those that were part of the exported blueprint.
:::
## Additional information

- Abstract resources are included in the blueprint package.
- L1/Patch panel drivers are not exported or imported.
- *Shells are not included with the package. Therefore, if you do not have the correct shell versions installed, make sure to install them before importing the package. For details, see [Importing Shells](../../../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells)*.
- Access credentials to App configuration management scripts and playbooks are included (hashed).
- Labels are not included in blueprint packages.