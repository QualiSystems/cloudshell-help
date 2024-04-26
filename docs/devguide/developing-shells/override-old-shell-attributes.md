---
sidebar_position: 13
---

# Overriding Old/Deprecated Shell Attributes

By default, CloudShell does not allow updating a shell if the newer version is missing attributes that exist on the old version. However, you can remove this limitation to allow the update of an old shell containing attributes that have been deprecated or are no longer in use.

## Allowing overriding attributes on the shell's root

1. Open the `shell-definition.yaml` in your preferred IDE:
2. Add the `capability_types` code block to the root level of the file:
    
    ```css
    capability_types:
      cloudshell.capabilities.DeprecateProperties:
        derived_from: tosca.capabilities.Root
        properties:
          allow_deprecate_properties:
            type: boolean
            default: true
    ```
    
    For example:
    
    ![](/Images/Devguide-shells/Override-Shell-Attributes-Snippet.png)
    
3. Add the following under the `node_types` > `vendor` > `capabilities` section:
    
    ```css
    deprecate_properties:
            type: cloudshell.capabilities.DeprecateProperties
            properties:
              allow_deprecate_properties:
                type: boolean
                default: true
    ```
    
    For example:
    
    ![](/Images/Devguide-shells/Override-Shell-Attributes-Snippet-2.png)
    
4. Import the shell:
    
    ```javascript
    shellfoundry install
    ```
    

## Allow overriding attributes on a sub-resource

1. Open the `shell-definition.yaml` in your preferred IDE.
2. Make sure you have performed the steps in [Allowing overriding attributes on the shell's root](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Override-old-shell-attributes.htm?Highlight=Overriding%20Old/Deprecated%20Shell%20Attributes#Allowing).
3. Under the node\_types section, create a vendor section for the sub-resource with the following code:
    
    ```javascript
    derived_from: cloudshell.networking.nodes.GenericPort
    capabilities:
      deprecate_properties:
        type: cloudshell.capabilities.DeprecateProperties
        properties:
          allow_deprecate_properties:
            type: boolean
            default: true
    ```
    
    For example:
    
    ![](/Images/Devguide-shells/Override-Shell-Attributes-Snippet-3.png)
    :::note-one-line
    Make sure to change "GenericPort" if needed.
    :::
4. Import the shell:
    
    ```javascript
    shellfoundry install
    ```
    

## Points to consider

- Abstract templates are not updated when a published attribute is removed and must be removed in CloudShell Portal's **Inventory > Abstract Templates** page.
    
    Abstract templates containing deleted published attributes are indicated with a yellow triangle:
    
    ![](/Images/Devguide-shells/Abstract-template-error.png)
    
    When editing the abstract template, the bad attributes have a fine red frame:
    
    ![](/Images/Devguide-shells/abstract-template-error-2.png)
    
- When several attributes are removed and the properties are used in abstract resources in blueprints, each time the shell is imported into CloudShell, only one attribute will be listed with a list of the blueprints that need to be edited.
