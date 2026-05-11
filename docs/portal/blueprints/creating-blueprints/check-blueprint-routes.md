---
sidebar_position: 12
---

# Check Blueprint Routes

This action detects problematic L1 routes that contain an abstract resource endpoint in the blueprint.

Unlike the existing **Check Blueprint** option, this action runs a "deep check" that may take some time to complete and is especially useful for highly complex blueprints containing tens or hundreds of routes. It only checks if a possible solution exists and not if the solution is currently available.

This option is enabled using the `DetectFailedRoutes` key.

**To check a blueprint's routes:**

- From the **Blueprint** menu, select **Check Blueprint Routes**.
    
    An "operation in progress" indication message is displayed.
    
    If any abstract routes cannot be resolved, an error message is displayed, listing each problematic route's alias (if it exists) and source and target endpoints (resource/port). For example:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/CheckBlueprintRoutes.png)