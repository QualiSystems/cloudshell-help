---
sidebar_position: 9
---

# Exporting and Importing Blueprints as XML

Starting with CloudShell 2026.1, the `ExportBlueprint` and `ImportBlueprint` APIs let you export a blueprint as its definition XML and import that XML into a CloudShell server. Unlike a full blueprint package (a zip file that can also carry the data model, drivers, scripts and categories), these APIs work with the blueprint definition only, as plain text. This makes them a good fit for:

- **Version control** - store blueprint definitions in Git (or any source control), diff changes between revisions, and restore a previous version by importing it back.
- **Promoting blueprints between servers** - move a blueprint from a development server to production without any risk of modifying the target server's data model or inventory.
- **Backup and bulk operations** - script the export of many blueprints at once.

The exported XML is the same blueprint definition XML CloudShell uses inside a blueprint package, with the `TopologyInfo` root element. Exporting an unchanged blueprint always produces identical XML, so source-control diffs only show real changes.

:::note
The XML contains the blueprint definition only. Scripts, drivers, resource families/models/attributes and categories are referenced **by name** but their content does not travel with the blueprint. This is by design - importing a blueprint can never modify system-wide configuration or inventory on the target server.
:::

## ExportBlueprint

`ExportBlueprint` accepts a single parameter:

| Parameter | Type | Description |
| --- | --- | --- |
| `topologyNames` | list of strings | One or more blueprint names to export. Include the full path from the root, separated by slashes, for example: `FolderName/Topologies/MyBlueprint`. |

The call returns a response object with a `Blueprints` list. Each entry has:

- `Name` - the blueprint's name.
- `Xml` - the blueprint's definition XML.

The same domain scoping as editing a blueprint applies - you can export the blueprints you can see in your domain. If any of the requested blueprints does not exist, the call fails.

## ImportBlueprint

`ImportBlueprint` accepts a single parameter:

| Parameter | Type | Description |
| --- | --- | --- |
| `blueprintXml` | string | The blueprint definition XML, as returned by `ExportBlueprint`. |

The call returns a response object with an `ImportedBlueprints` list containing the names of the blueprints that were imported.

Importing a blueprint creates it on the target server, or updates it if a blueprint with the same name already exists - equivalent to creating or editing the blueprint by hand. Note that:

- The call **fails** if any resource family, model, attribute, script, driver or category referenced by the blueprint does not already exist on the target server. Nothing is partially imported in that case.
- The call **fails** if the target blueprint has an active draft, to avoid the draft overwriting the imported changes. Promote or delete the draft first.
- Regular users can call `ImportBlueprint` - it is not restricted to administrators, since it can only do what creating or editing a blueprint by hand can do. Standard domain and folder rules apply.

## Python example

This script exports a blueprint to a local file and imports it into another CloudShell server. As this uses the CloudShell Automation API package, make sure to first install it by running `pip install cloudshell-automation-api` from command-line.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

BLUEPRINT = "MyBlueprint"

# export from the source server
source_api = CloudShellAPISession(host="dev-server", username="admin",
                                  password="admin", domain="Global")

exported = source_api.ExportBlueprint([BLUEPRINT])

for blueprint in exported.Blueprints:
    file_name = blueprint.Name + ".xml"
    with open(file_name, "w", encoding="utf-8") as xml_file:
        xml_file.write(blueprint.Xml)
    print("Exported '{}' to {}".format(blueprint.Name, file_name))

# import into the target server
target_api = CloudShellAPISession(host="prod-server", username="admin",
                                  password="admin", domain="Global")

with open(BLUEPRINT + ".xml", "r", encoding="utf-8") as xml_file:
    blueprint_xml = xml_file.read()

imported = target_api.ImportBlueprint(blueprint_xml)
print("Imported: {}".format(", ".join(imported.ImportedBlueprints)))
```

To export several blueprints in one call, pass all their names:

```python
exported = source_api.ExportBlueprint(["Blueprint A", "Folder/Topologies/Blueprint B"])
```

If you only need a zip package of the blueprint (for example, to import through CloudShell Portal), see [Exporting a Blueprint Package](../../../portal/blueprints/creating-blueprints/export-blueprints/export-a-package.md) instead. To automate changes to the data model itself, use the [Packaging API](../../../api-guide/packaging-api/index.md).
