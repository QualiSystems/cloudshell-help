---
sidebar_position: 1
---

# Setting up the Development Environment

In this section we’ll go over the recommended steps for setting up a development environment for developing CloudShell Shells and orchestration scripts.

## Get the latest Python 3.9.x

![Python](/Images/Devguide-intro/Intro-Setting-up-the-Development.png)

Download and install the latest version of Python 3.9.x from the [official website](https://www.python.org/downloads/). We also recommend installing pip (even though technically its included in the latest versions of Python): pip 21.2.4 and up for Python 3.7 and pip 19.2.3 for Python 2.7.18. Python 2.7.x is supported for older shells. Follow the instructions on this website: [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/)
:::tip
CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:

- Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see [https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html). To do this via CLI, see [https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv).
- [Downloading separate installers](https://www.python.org/downloads/) for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine’s PATH system variable) for any dev work being done.
:::
## Pick and install an IDE

In the scope of this guide we’ll discuss developing shells and scripts using standard Python, which means that there are many great options for an IDE. Some free IDEs to consider:

- [Microsoft Visual Studio Code](https://code.visualstudio.com/)
    
- [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
    
- [GitHub Atom](https://atom.io/)
    
- [Sublime Text](https://www.sublimetext.com/)
    

These are all great IDEs. At this point we recommend using PyCharm simply because you’ll be able to use Quali’s developer plugin developed for that IDE in the community. This plugin is not a must but will make your life a little easier by automating some steps required to upload your driver or set it up for debugging.

## Install Git

![Git](/Images/Devguide-intro/Intro-Setting-up-the-Development_1.png)

Some CloudShell developer tools require Git to be installed.  
Follow the installation instructions on the [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Install ShellFoundry (for Shells development)

To shorten the Shell development cycle and reduce much of the boilerplate of setting up new shell projects we recommend installing the [Shellfoundry](https://github.com/QualiSystems/shellfoundry) package. To install Shellfoundry, simply open a new command line window and type in the following:

```python
python -m pip install shellfoundry
```

For additional information, see [Shellfoundry](./reference/shellfoundry.md).

## Install and setup the CloudShell SDK

![CloudShell](/Images/Devguide-intro/Intro-Setting-up-the-Development_2.png)

To deploy, test and debug your automation you’ll need to have a working CloudShell SDK. The CloudShell SDK is free for developers and can be downloaded from our [community website](https://info.quali.com/cloudshell-developer-edition-download). Follow the instructions on the [download page](http://info.quali.com/cloudshell-developer-edition-download) to get a local development installation of CloudShell up and running. Please make sure you use an SDK version that matches your CloudShell production version for which you are developing Shells and Orchestration.

## (Optional) Install the CloudShell PyCharm plugin (PyCharm)

If you’ve selected to use PyCharm as your IDE, you can take advantage of the community contributed CloudShell plugin. Follow the installation instructions on the [project repo](https://github.com/QualiSystemsLab/CloudShell-PyCharm-Plugin). From the *Step-by-step installation guide* section perform steps 1-6 only. Don’t continue to configure the plugin usage further yet, we’ll get to that part later in this guide.

## Where to next?

This guide contains three main areas depending on the type of development or integration you wish to do with CloudShell:

- [Developing Shells](./developing-shells/index.md)
- [Developing Orchestration Scripts](./develop-orch-scripts/index.md)
- [Developing Configuration Management Scripts for Apps](./develop-config-management-scripts-for-apps/index.md)
- [Developing Custom Cloud Provider Shells](../devguide/develop-custom-cloud-provider-shells/)
- [Available CloudShell APIs](./available-cs-api/index.md)
