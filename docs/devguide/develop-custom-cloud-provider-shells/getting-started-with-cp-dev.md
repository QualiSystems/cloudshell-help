---
sidebar_position: 1
---

# Getting Started with Cloud Provider Development

In this chapter, we’ll learn how to create a Cloud Provider shell. The goal is to demonstrate the end-to-end cycle, from generating a new shell project to implementing the cloud provider interface and automation processes, as well as testing the shell in CloudShell.

## What is a Cloud Provider shell?

The Cloud Provider shell standard is a project used to define a new cloud provider in CloudShell. The Cloud Provider shell is used to extend the system, allowing deployment of applications to an additional L2 or L3 cloud. The Cloud Provider Standard may also be used to implement deployment of applications as part of deployment containers.

A Cloud Provider shell may include more than one deployment type, allowing a variety of options to base the virtual instance on (for example, selecting the image from the marketplace or loading a custom one).

## How is a Cloud Provider shell created?

The basic creation and implementation process is as follows:

1. Create a new Cloud Provider shell.
    
2. Set up the Cloud Provider interface. In other words, implement the cloud provider driver that will be called by the server when interaction with the cloud provider is needed.
    
3. If the shell requires the use of Python dependencies, which aren’t available in the public PyPi repository, add them to the local PyPi Server repository. See [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).
    
4. Debug the shell.
    
5. Install the shell on CloudShell.
    
6. In CloudShell, create a resource based on the new shell and make sure it works.
    

Before developing your shell, please watch the following video to determine whether you need to create a new shell or customize an existing one:

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/a8yEgOG7-bI" title="Creating or Extending Shells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Supported versions - CloudShell v9.0 and up

As of version 9.0, CloudShell supports the ability to define custom cloud providers (using the `cloud_provider` shell template), as well as the out-of-the-box cloud providers VMware vCenter, AWS EC2 and Microsoft Azure. Note that the out-of-the-box cloud provider shells cannot be modified.

## Prerequisites

- [Get CloudShell](http://info.quali.com/cloudshell-developer-edition-download): Download the latest CloudShell SDK and run it on your machine.
    
- [Python](https://www.python.org/downloads/): Make sure the appropriate Python version - 2.7.x and/or 3.x - (latest recommended) is installed on your machine.  
    Starting with CloudShell 9.3, CloudShell comes with out-of-the-box support for Python 3 for shells.
    
    Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
    :::tip
    CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:
    
    - Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see [https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html). To do this via CLI, see [https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv).
    - [Downloading separate installers](https://www.python.org/downloads/) for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine’s PATH system variable) for any dev work being done.
    :::

- **IDE/Text Editor**: Your preferred IDE editor. We recommend using PyCharm (which offers a free community edition) because of the tooling we’ve already created for that IDE, including a CloudShell developer plugin.
    
- **Shellfoundry: Shellfoundry** is our CLI tool that allows you to quickly and easily generate and distribute Shells. Make sure to install it on your machine. See [Installing or Updating Shellfoundry](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm#Installi) for details.