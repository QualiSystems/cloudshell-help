# Developing Shells

Developers can extend CloudShell’s capabilities to provide additional functionality for Apps or physical devices by creating Shells. This includes better modeling for these components as well as custom commands that can be used in the sandbox to integrate the component in CloudShell. This area of the guide covers the end-to-end flow of creating new Shells and importing them into CloudShell.

## In this chapter

    - [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____1)
    - [Shell Drivers Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Shell-Drivers-Overview.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____2)
    - [The Shell Project Guide](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/The-Shell-Project.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____3)
    - [Modeling Shells with TOSCA](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Modeling-with-TOSCA.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____4)
    - [Managing the Shell’s Data Model](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Managing-Shell-Data-Model.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____5)
    - [How Shells Get Information from CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/How-Shells-Get-Info.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____6)
    - [Commands Visibility and Usability](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____7)
    - [Driver Deep Dive](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Driver-Deep-Dive.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____8)
    - [Auto-discovery for Inventory Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Auto-discovery.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____9)
    - [Discovering Inventory using SNMP](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Discovering-Inventory-SNMP.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____10)
    - [Debugging Shell Driver Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Debugging-Shells.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____11)
    - [Deploying to Production](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Deploying-to-Production.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____12)
    - [Customizing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Customizing-Shells.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____13)
    - [Overriding Old/Deprecated Shell Attributes](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Override-old-shell-attributes.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____14)
    - [Common Driver Recipes](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Common-Driver-Recipes.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____15)
    - [Tips and Tricks for Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Tips-and-Tricks.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____16)
    - [Sharing a Shell with the Community](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Sharing-Shells.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____17)
    - [1st Gen Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/1G-Shells.htm?TocPath=The%20CloudShell%20DevGuide|Developing%20Shells|_____18)