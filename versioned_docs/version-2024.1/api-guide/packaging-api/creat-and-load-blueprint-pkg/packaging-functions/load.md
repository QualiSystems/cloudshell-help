---
sidebar_position: 2
---
# Load (a Blueprint Package for Modification)

**Description:** Load a package from the specified path and prepare it for edit. This function must be called before any other function that modifies the package.

**Signature:** `load(path)`

**Parameters:**

| Name | Direction | Required | Description | 
| --- | --- | --- | --- |
| path | In | Yes | The folder path where the package zip file is stored |


**Sample:**

```javascript
`packageEditor.load('c:\\temp\\TestPackage.zip')`
```