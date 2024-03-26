# Connected Commands

In some scenarios, a command that runs on a specific resource logically requires the use of a different resource. These types of commands are called connected commands. They are executed on a resource in CloudShell but in reality run on the connected resource that performs the action.

For example:

- A command that powers on/off a router actually runs on a PDU power switch. For additional information, see [Power Management](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnctvt-Ctrl-Pwr-Swch.htm).
- A command that modifies a resource's settings may run on the server that performs the modifications

For instructions on setting up connected commands, see the CloudShell Dev Guide's [Defining a connected command (which runs on another resource)](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Common-Driver-Recipes.htm#Defining).