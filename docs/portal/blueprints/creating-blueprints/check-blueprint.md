---
sidebar_position: 10
---

# Check Blueprint

This action runs a quick check to see if there is a possible solution to the blueprint's connectivity and abstract resource requirements. It only checks if a possible solution exists and not if the solution is currently available.
:::tip
If you are checking a highly complex blueprint, you may want to run a more thorough check of your blueprint's connectivity routes, as explained in [Check Blueprint Routes](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Chck-Blprnt-Rts.htm).
:::
**To check if a solution exists for a blueprint:**

- From the **Blueprint** menu, select **Check Blueprint**.
    
    A "Blueprint is valid" indication message is displayed.
    
    However, if any of the blueprint's routes cannot be resolved, a "Blueprint is invalid" indication message is displayed. For example, a connection between Router 1>Port 1 and Router 2>Port 1 cannot be resolved:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/CheckBlueprintInvalid.png)