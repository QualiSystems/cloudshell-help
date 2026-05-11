---
sidebar_position: 1
---

# Add a Blueprint

**Description**: Add a new blueprint to the package.

**Signature**: `add_topology(topology_name, is_public, image_file_path, default_duration, instructions, categories, diagram_zoom)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint that you want to add |
| `is_public` | In | Yes | Specify whether the blueprint is public or private |
| `image_file_path` | In | Yes | Specify a path to the image file that you want to use in the blueprint |
| `default_duration` | In | Yes | Specify a default duration that will be used when users reserve the blueprint |
| `instructions` | In | No | Specify instructions for the blueprint |
| `categories` | In | No | Specify the catalog categories, where you want the blueprint to be shown |
| `diagram_zoom` | In | Yes | Specify the default zoom that will be used in the diagram view of this blueprint |


**Sample**:

```javascript
packageEditor.add_topology('Blueprint1',True,'C:\\Users\\james.v\\Pictures\\image.png',1,'This is an instruction',['CatA'],120)
```