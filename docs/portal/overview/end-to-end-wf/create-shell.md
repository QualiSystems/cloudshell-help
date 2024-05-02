---
sidebar_position: 1
---

# Creating and Using Shells in CloudShell

This article explains the end-to-end flow for creating and using Shells in CloudShell. For layer 1 switch Shells, see [L1 Switches](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-L1-Swch.htm).

To create and use a Shell:

1. Check for a suitable OOTB Shell in the [Quali Repositories](https://github.com/orgs/QualiSystems/repositories) page.
2. If a suitable Shell exists, import the Shell into CloudShell, as explained in [Importing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm#Adding), and proceed to step 6.
3. If you find a Shell but need to extend or change it, see CloudShell Dev Guide's [Customizing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Customizing-Shells.htm).
4. If a suitable Shell doesn't exist, create a new Shell from our standard pool:
    1. Install Shellfoundry - see [Installing or Updating Shellfoundry](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm#Installi) in the CloudShell Dev Guide.
    2. Associate CloudShell to Shellfoundry - see [Configuring CloudShell Connection Settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm#Configur) in the CloudShell Dev Guide.
    3. Get a list of all available standard templates - see [Setting the Standard](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Modeling-with-TOSCA.htm#Setting) in the CloudShell Dev Guide.
        
        Every standard has a dedicated GitHub repo with documentation to help you find the Shell that is most suitable for the type of resource you want to model. To see our standards, click [here](https://github.com/orgs/QualiSystems/discussions?discussions_q=label%3AStandard+).
        
    4. Create a new Shell from a suitable template and name it after the device's model - see [Setting the Standard](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Modeling-with-TOSCA.htm#Setting).
5. Package and import the Shell into CloudShell's inventory - see [Packaging and importing a Shell into CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Shellfoundry.htm#Packagin) in the CloudShell Dev Guide.
6. Create new CloudShell items as appropriate - see [Adding Inventory Resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Add-Rsrc-Tmplt.htm).
7. For layer 2 switch resources, model the switch's connections in CloudShell - see [Define the Resource Connections of the Switch or Patch Panel](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Rsc-Cncts.htm).