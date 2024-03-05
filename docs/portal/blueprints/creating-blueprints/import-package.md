---
sidebar_position: 18
---

# Import a Blueprint Package into CloudShell

This procedure describes how to import a blueprint package into CloudShell so that when deployed, the blueprint will work as it did before it was exported. The import procedure also applies to 1st Gen Shells, which are imported into CloudShell the same way.

Before importing a package, make sure to import (into CloudShell Portal) the shells associated with the blueprint's resources.

See [Exporting a Blueprint Package](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Exprt.htm) to get more information about how to create these packages.

:::note
When exporting a package, the complete zip file is exported. However, when preparing the zip file for import, you can change the contents of the package zip file. For instance, you can export a blueprint to generate a package, but remove the Topologies folder from the zip file so that only the resources and data model will be imported.
:::

**To import a package do one of the following:**

- From the **User** menu, select **Import Package** and then browse to the required zipped package file.
- Drag the zipped package file and drop it anywhere in the portal.

The following table describes which elements are imported into CloudShell.

| Contents | Process |
| --- | --- |
| `metadata.xml` | The validation process checks that the `metadata.xml` file exists, is valid (is of a known package type) and that the server version is less than or equal to the current server version. |
| Categories | Categories are updated for the imported blueprint only if these categories are already assigned to the current domain. |
| Drivers<br/>(1st Gen shells only) | Import all resource drivers (as part of the resource shells) in the package. If drivers that have the same names as existing drivers are added, the existing ones are overwritten, even if the imported package is from an older CloudShell Server version.<br/>**Note:** Resource drivers are supported for backwards compatibility only. |
| Blueprint scripts | Import Python scripts attached to the blueprint and to the blueprint's components. |
| Resource scripts / repository assets | Import Python scripts and repository assets (Configuration Management sh/ps1 scripts and Ansible playbooks) attached to the blueprint's components.<br/>**Note:** CloudShell identifies resource scripts and assets by their names. As such, CloudShell does not import a script or asset if one with the same name already exists in CloudShell. |
| Data model<br/>(1st Gen shells only) | Import new and update existing attributes, new families and models, drivers, and images.<br/>**Warnings:**<ul><li>VLAN and Subnet limitations apply to the importing of blueprints containing these services. For details, see [VLAN Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN.htm) and [Subnet Connectivity - Points to Consider](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Subnets-Cnsdr.htm).</li><li>If blueprints that have the same name as existing blueprints are added, the existing blueprints with the same name are overwritten, even if the imported package is from an older CloudShell Server version.</li></ul> |
| Resources | Import new and update existing resources and sub resources. IP addresses are only updated if the existing value is NA.<br/>Resources are searched for by unique ID. If not found, then the search is performed according to name.<br/>**Warning:** If data models that have the same names as existing data models are added, information that is overwritten includes the default value, description, read-only information and other properties. However, other elements are added, for example model attributes. In most cases information that is set in the database but not in the package is not deleted, like the attributes of a model.<br/>In addition, if any of the packaged resources are based on Shells or Shell versions that are missing from CloudShell, you will be prompted to import the required Shells first. |
| Abstract resources | Abstract resources are exported as is. |
| App Templates | Import new and update existing App templates. App templates are searched for by name.<br/>For admins the Apps are included in the blueprint. For regular users, the Apps are included in the blueprint if the regular user is the blueprint owner. |
| Topologies | Import new and update existing blueprints, including resources, connections, and blueprint properties.<br/>**Warning**: If blueprints that have the same name as existing blueprints are added, the existing blueprints with the same name are overwritten, even if the imported package is from an older CloudShell Server version. |

An indication message is displayed in CloudShell Portal to confirm the import.

## User permissions

The import process is limited by the user's permissions, as described in the following table:

| Role | Permissions |
| --- | --- |
| System Administration | System administrators can import whole packages. |
| Domain Administration | Domain administrators can only import blueprints and resources, even if the package contains drivers and data models. |
| Regular User | Regular users can only import blueprints. For example, in cases where packages contain a number of different folders and files, only the blueprints are imported. This process might therefore fail if it needs some of the dependencies that are in the package.<br/>Apps are not included in the imported packages. |
| External User | This user has the same permissions as the Regular User. |

## Additional information

- When a CloudShell admin imports a blueprint into CloudShell, the blueprint package may update or add certain management configurations in CloudShell, such as App templates, scripts and assets. However, when a regular user imports a blueprint package, unmatching configurations (such as Apps configured differently from ones in the **Manage > Apps** page) only apply to the blueprint.
- Each step in the import process has its own validation process. The import steps that follow do not start until the current step ends successfully.
- If part of the import fails, all the earlier parts are preserved. In this case, the completed part of the package remains in the database.
- L1/Patch panel drivers are not exported or imported.
- Access credentials to App configuration management scripts and playbooks are included (hashed).
- Labels are not included in blueprint packages.

## Related Topics

- [Creating Blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Blprnt-Crt.htm)