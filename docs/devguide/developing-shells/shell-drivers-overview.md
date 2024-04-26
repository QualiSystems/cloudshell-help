---
sidebar_position: 2
---

# Shell Drivers Overview

## What are Shells again?

Shells are a way to extend CloudShell by adding support for different types of sandbox elements such as apps, virtual appliances or physical resources. A shell can contain the bare minimum required to be able to model the sandbox element in CloudShell, how categorize it or which unique attributes it possesses. The Shell can also define the interface through which users can orchestrate or configure an app or a resource by executing commands. Example commands would be saving, restoring, restarting, performing health checks, administrative operations or scaling up or down.

## What are Shell drivers

A Shell driver is an optional component in the Shell project that allows adding commands to Shells. CloudShell creates and manages dedicated instances of the driver to communicate with each physical resource or app. When the user executes a command, either from the Sandbox UI or the API, CloudShell ensures a driver for the target resource or app is currently running, then sends the command to the driver and relays back the response.

The driver can contain multiple files and folders but only one file contains a class which is considered to be the main driver class. This main class defines the Shell commands the driver provides. The default Shellfoundry template will generate the main driver class and place it inside the `driver.py` file located in the `/src` directory. The generated class name will correspond to the Shell name, which is also the CloudShell convention.

## How CloudShell manages the Shell drivers

When the user executes a command for the first time on a deployed app or inventory resource in the Sandbox, CloudShell will initialize a driver object from the Shell driver class. The object will be created in its own isolated process, separate from other object instances of that same driver which may be driving other shell instances - other devices or apps. The Python process will initialize the driver class as a new object and will from that point on communicate with it to handle any commands.

Inventory and app shell drivers behave a bit differently in terms of their lifecycle:

- **App Shells** - As apps are deployed in the scope of the sandbox, the app shell driver is also instanced for the deployed app in the sandbox. Each app deployed in a sandbox will have its own driver instance managed by CloudShell. This means that if there are currently twenty active sandboxes and a MySql app has been deployed in each one, twenty shell driver instances will be created, one to talk with each app in the sandbox.
    
    ![Shell Commands](/Images/Devguide-shells/Shell-Drivers-Overview_624x441.png)
    
- **Inventory Shells** - For inventory Shells, a dedicated driver is managed per Inventory Shell resource instance. If you take for example a shell for physical switch like the NX-OS shell for Cisco switches, a shell driver instance will be created for each managed Cisco switch in your inventory. In this case, since the switch is a permanent inventory item and not created per sandbox, the driver is also instantiated per device.
    
    ![Shell Commands](/Images/Devguide-shells/Shell-Drivers-Overview_1_624x421.png)
    

Whether a deployed app or an inventory component, CloudShell will handle routing commands to the right driver instance. When the user executes a command on a shell instance, CloudShell will first check if a driver instance is already running for the Shell instance, find on which execution server is running, and send the command to that driver to handle. If a driver is not yet running, for that inventory resource or app, a new driver instance will be launched.

## Python virtual environment

The first time a driver instance is created for a specific driver, CloudShell will create a virtual environment for that driver on the execution server machine. All driver instances will then share that virtual environment. As a part of setting up the virtual environment, the execution server will try to install all of the driver dependencies listed in the `requirements.txt` file, located in the src directory. If a newer version exists for one of the driver requirements, a new virtual environment will be created the next time a driver instance is initialized with the updated packages.

## The Shell driver instance lifecycle

A driver instance is started the first time a command is sent to the resource or deployed app. As a part of the driver initialization the *initialize* function of the driver is called. This function is guaranteed to be the first command executed on the driver and no other command is allowed to run until it completes successfully. Once complete, the driver can handle commands normally.

After a certain duration of inactivity, the CloudShell Server can opt to stop the driver instance until its needed again. When the driver instance is stopped the *cleanup* function is first called, allowing any cleanup code to run and prepare the driver for shutdown.

The *initialize* and *cleanup* functions have a simple interface. If you generated your Shell project using Shellfoundry they should already be included in the generated `driver.py` file.

```python
def initialize(self, context):
    """
    Initialize the driver session, this function is called every time a new instance of the driver is created
    This is a good place to load and cache the driver configuration, initiate sessions etc.
    :param InitCommandContext context: the context the command runs on
    """
    pass

def cleanup(self):
    """
    Destroy the driver session, this function is called every time a driver instance is destroyed
    This is a good place to close any open sessions, finish writing to log files
    """
    pass
```

The *initialize* function is a good place to add code you expect to be called once during the lifecycle of the driver object. You should take into account that the driver is not guaranteed to run forever. The Quali server might choose to stop the driver instance due to inactivity. In general, it is recommended to keep the driver as stateless as possible, this will remove a lot of the complexity of cleanup and state recovery.

The *cleanup* function will be called whenever the driver instance is stopped. You can place any code that persists the current state of the driver, disconnects sessions or stop any external processes here.

![Shell Commands](/Images/Devguide-shells/Shell-Drivers-Overview_2_624x226.png)

## Commands Concurrency

By default, CloudShell will run Shell drivers in sequential mode. This means that CloudShell will send out commands to the driver one at a time and maintain a queue of pending commands if multiple executions are initiated. However, the shell can be configured to handle commands concurrently as well, in which case it becomes the responsibility of the driver developer to handle the concurrency and introduce mutexes where required. We’ll review that option and how to configure it in the [Commands Visibility and Usability](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm).

## Conclusion

Hopefully this section provided a good overview of what shells are and how drivers fit into the picture. How drivers are scoped, what entities they are assigned to and what their basic lifecycle is.
