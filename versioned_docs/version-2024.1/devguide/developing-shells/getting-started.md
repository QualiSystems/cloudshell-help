---
sidebar_position: 1
---

# Getting Started with Shell Development

In this section, we’ll go through the basic steps of creating a new Shell and customizing an existing one. The goal is to demonstrate the end-to-end cycle, from generating a new Shell project to creating Shell resources and running commands in CloudShell.

Before developing shells, please familiarize yourself with CloudShell by taking [Quali U courses](http://courses.quali.com/). These courses also include installation instructions for the CloudShell SDK package that deploys a developer edition of CloudShell on which you can perform your training and development activities.

## What is a shell?

A Shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A Shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check. Each 2nd Gen Shell is modeled after a CloudShell standard, from which the shell inherits its default settings, attributes and driver.

In our [community](https://github.com/orgs/QualiSystems/repositories), you can find both officially released shells and shells developed in our developer community. If you find a shell that fits your needs, you’re welcome to use it as is, or, you can customize its settings and automation, as explained in [Customizing Shells](./customize-shells.md). If you can’t find the shell you’re looking for, you’re welcome to create a new one from scratch using one of our shell standard templates and contribute it to the community for others to use it as well.

Historically, we have had two types of shells in CloudShell, 1st Generation shells and 2nd Generation shells. While 1st Gen shells are still used, all new shells are released only as 2nd Generation shells and this developer guide focuses on this type of shells. For additional information, see [Shells Overview](../../intro/features/shells.md).

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/AWgSUgJub90" title="What are Shells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Supported versions - CloudShell v.8.0 and up

As of version 8.0, CloudShell supports 2nd Gen Shells. This guide includes instructions on developing **2nd Gen Shells** only.

For information on developing 1st Gen Shells, see the CloudShell Developer Guide for version 7.1.

To learn more about the different versions of the Shells used by CloudShell and how to upgrade a 1st Gen Shell, see [Migrating 1st Gen Shells to 2nd Gen](../reference/migrate-1st-gen-shell-to-2nd-gen-shell.md).

## Prerequisites

- [Get CloudShell](http://info.quali.com/cloudshell-developer-edition-download): Download the latest CloudShell SDK VM and deploy it.
- [Python](https://www.python.org/downloads/): Make sure the appropriate Python version - 2.7.x and/or 3.x - (latest recommended) is installed on your machine. *Starting with CloudShell 9.3, CloudShell comes with out-of-the-box support for Python 3 for shells*.
    
    Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
    
    :::tip
    CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:
    
    - Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see [https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html). To do this via CLI, see [https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv).
    - [Downloading separate installers](https://www.python.org/downloads/) for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine’s PATH system variable) for any dev work being done.
    :::
    
- **IDE/Text Editor**: Your preferred IDE editor. We recommend using PyCharm (which offers a free community edition) because of the tooling we’ve already created for that IDE, including a CloudShell developer plugin.

## Installing or Updating Shellfoundry

To create the Shell project, we’ll use [Shellfoundry](../reference/shellfoundry.md), a CLI tool for generating and distributing Shells.

:::note
Shellfoundry cannot work if there’s a proxy server present between the shellfoundry machine and the remote Quali Server machine.
:::

**To install Shellfoundry:**

Run the following in your local Command Line:

```python
python -m pip install shellfoundry
```

For windows users, it is recommended to add the path (to the shellfoundry installation folder) to your local environment variables. For example, C:\\Python27\\Scripts. This will enable us to run the Shellfoundry commands from any folder of the Shell project.

**To update Shellfoundry:**

If Shellfoundry is already installed, run the following command to update:

```python
python -m pip install shellfoundry --upgrade
```

For first time configuration of Shellfoundry, run the shellfoundry config, as explained in [Shellfoundry](../reference/shellfoundry.md).

## Configuring CloudShell Connection Settings

In order to use Shellfoundry, we’ll need to first configure your CloudShell connection settings in Shellfoundry.

**To configure CloudShell settings:**

1. Run the following command in your command Line to see all the available configuration parameters:
    
    ```python
    shellfoundry config
    ```
    
    ![Directory Structure](/Images/Devguide-shells/Shells-Getting-Started.png)
    
    The configuration includes some default settings that you can change.
    
2. To update a default setting, run the config command with two arguments: the parameter name and the new value.
    
    For example, changing the username to "John”:
    
    ```python
    shellfoundry config username John
    ```
    

Normally, you would need to set the CloudShell admin user/password and the server address. For details, see [Shellfoundry](../reference/shellfoundry.md).

## Setting the default python version for new shells

Starting with CloudShell 9.3, the `DefaultPythonVersion` admin key allows you to control the Python version in which all new shells are created. For details, see [Advanced CloudShell Customizations](../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md). Note that this key also applies to orchestration scripts.

You can also change this default for your shell in the shell project’s drivermetadata.xml file, but we’ll discuss that later on.

## Creating the Shell Project

Before developing your shell, please watch the following video to determine whether you need to create a new shell or customize an existing one:

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/a8yEgOG7-bI" title="Creating or Extending Shells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**To create a new project:**

1. Run the following command in your local Command Line:
    
    ```bash
    shellfoundry new linux-server-shell
    cd linux-server-shell
    ```
    
    A new sub folder containing the basic Shell project’s structure and files will be created.
    
    Note that by default, the shell is based on Python 2. To use Python 3, create the shell with the \--python 3 tag as follows:
    
    ```bash
    shellfoundry new linux-server-shell --python 3
    ```
    
2. Navigate to the new folder. The following files have been created for you:
    
    ![Directory Structure](/Images/Devguide-shells/Shells-Getting-Started_1.png)
    
    The generated folder contains all of the basic scaffolding needed for the new Shell. We will review the Shell project’s structure in a more in-depth manner in later stages of this guide.
    
3. Run the following command from the root of the project folder
    
    ```bash
    python -m pip install -r .\src\requirements.txt
    ```
    
    This command makes sure all of the basic package requirements for the Shell are satisfied.
    

## Testing the basic workflow

**To test the basic workflow:**

1. Make a minor change to the driver  
    
2. Install the Shell to your local CloudShell  
    
3. Create an instance of your Shell resource in the local CloudShell inventory  
    
4. ‘Hello world’
    

### Make a minor change to the driver

The source control for the Shell is managed under the src folder. When importing the project template, Shellfoundry already created a driver template under this folder. To make sure everything is in working order, we’ll implement an example command in the `driver.py` file. We’ll also want to add basic metadata including an alias and description. The way to do that is by editing the `drivermetadata.xml` file located in the src folder. For example, we can add a new command category under the Layout element.

**To make changes to the driver:**

1. Open the `driver.py` file in your preferred IDE. You’ll see that it already contains a driver for the Shell with some example commands already in place.
    
2. Add a simple ‘hello world’ command to the driver:
    
    ```python
    def say_hello(self, context, name):
        """
        :param ResourceCommandContext context: the context the command runs on
        :param str name: A user parameter
        """
        return "hello {name} from {resource_name}".format(name=name, resource_name=context.resource.name)
    ```
    
3. Open the `drivermetadata.xml` file in your preferred IDE and replace the highlighted section so that it matches the test below:
    
    ```xml
    <Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.LinuxServerShellDriver" Name="LinuxServerShellDriver" Version="1.0.0">
        <Layout>
            <Category Name="Samples">
                <Command Description="Simple hello world function" DisplayName="Say Hello" Name="say_hello" >
                    <Parameters>
                        <Parameter Name="name" Type="String" Mandatory = "True" DefaultValue="" DisplayName="Your name"
                                   Description="Enter your full name here"/>
                    </Parameters>
                </Command>
            </Category>
        </Layout>
    </Driver>
    ```
    
    There is no need to get into too many details at this stage. We’ll dive more deeply into the `drivermetadata.xml` file in a later section of this guide. For now it’s sufficient to understand that we use this file to provide more CloudShell-specific information regarding how to interpret and display the driver’s commands and their parameters.
    
4. Save the `driver.py` and `drivermetadata.xml` files.
    
    We’re now ready to install the new Shell.
    

### Install the Shell on CloudShell

Shellfoundry provides an easy and convenient way to create the Shell package and install it on your CloudShell server.

- To package the Shell and install it on your local CloudShell server, run the following command:
    
    ```bash
    shellfoundry install
    ```
    

### Create an instance of your Shell resource in the local CloudShell inventory

The Shell is installed in your development CloudShell. We can now create resources of that Shell in our inventory.

1. Log in to your CloudShell Portal.  
    
2. Click the **Inventory** menu.  
    
3. In the **Inventory** dashboard, click **Add New**, select the **LinuxServerShell**.  
    
4. Provide a name and an address for the shell resource, for example "HelloWorld\_Shell”. For now, since we don’t have an address of an actual server, you can provide any value for the address.  
    
5. Click **Create**.  
    
6. Click **Start discovery** to complete the operation.
    
    ![Shell Discovery](/Images/Devguide-shells/Shells-Getting-Started_2_624x426.png)
    

### ‘Hello world’

Now that we’ve added the Shell resource, we can finally add it to a blueprint and reserve it as a sandbox.

1. In CloudShell Portal, from the main menu, click **Lab Management > Blueprints**.  
    
2. Create a new blueprint or open an existing one. To create a new blueprint, click the **+ Create Blueprint** link.  
    
3. Click the toolbar’s **Resource** button and drag the new Shell resource into the diagram.  
    
4. Click **Reserve** to create a new sandbox.  
    
5. In the **Sandbox** workspace, hover over the Shell resource and select **Commands**. The **Resource Commands** pane is displayed.  
    
6. To run the Say Hello command, in the **Resource Commands** pane, click the play button next to the command.
    
    ![Shell Discovery](/Images/Devguide-shells/Shells-Getting-Started_3_624x295.png)
    
    The common output is displayed in the **Output console**.  
      
    ![Shell Discovery](/Images/Devguide-shells/Shells-Getting-Started_4_624x403.png)
    

## Development process summary

In this tutorial we’ve covered the basic steps to develop a Shell. The process is illustrated in the below diagram:

![Context Object](/Images/Devguide-shells/Shells-Getting-Started_5_624x481.png)

The basic flow is:

1. Set the CloudShell Server and user credentials in Shellfoundry. You need to do this only once as Shellfoundry remembers the settings for future sessions.  
    
2. Create a new Shell project by running shellfoundry new.  
    
3. Configure the Shell in the `shell-definitions.yaml` file located in the Shell project’s root folder.  
    
4. Import the Shell to the development server using `shellfoundry install`.  
    
5. If the shell requires the use of Python dependencies, which aren’t available in the public PyPi repository, add them to the local PyPi Server. See [PyPi Server - Managing Python Shell and Script Dependencies](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).  
    
6. Create a resource of the Shell for testing:
    
    - For an inventory resource Shell: Create a Shell inventory resource in CloudShell using its Resource Template.
        
    - For a deployed app Shell: Define the App template in CloudShell including the deployment type and parameters, set the App model to the Shell model.
        
7. Create a sandbox for testing in the development server: either add the inventory resource to the sandbox or deploy the App in the sandbox.  
    
8. Make incremental changes to the Shell and update the development server each time with the changes by running `shellfoundry install`.  
    
9. Rinse and repeat!
    

For more information on how to deploy the Shell to production, refer to the [Deploying to Production](./deploy-to-prod.md) section.

## What’s next

We’ve successfully gone through the steps of adding a basic, working Shell. In the following sections, we’ll review all of these steps in depth as well as the concepts, available options and customizations, and see how they interface with CloudShell.
