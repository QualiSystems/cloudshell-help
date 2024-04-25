---
sidebar_position: 7
---

# Commands Visibility and Usability

The Shell driver commands are accessible to CloudShell users via the portal as well as to orchestration scripts running on the sandbox. In this section we’ll explore the different ways in which these commands can be customized in their appearance and behavior. The following customization options will be reviewed:

- [Changing the shell’s Python version](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#Changing)
- [Changing the function’s display name and description](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#customize_names)
- [Setting “admin only” functions](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#admin-only)
- [Optional parameters and default values](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#customizing_optional_parameters)
- [Restricting input to a specific set of possible values](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#customizing_lookup_values)
- [Adding categories](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#customizing_categories)
- [Orchestration only commands (hidden commands)](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Commands-Visibility.htm?Highlight=Commands%20Visibility%20and%20Usability#customizing_orchestration_only_commands)

If you haven’t done some already it is recommended to go through the [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm) tutorial before continuing to get a better understanding of the overall process of creating and using a shell. We also assume you’ve gone through the steps described in the [Setting up the Development Environment](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Intro/Setting-up-the-Dev-Env.htm) section of this guide.

## Setting up

We’ll start by creating a new shell that we’ll use in this example. In the [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm) tutorial we used the Shellfoundry CLI tool to generate a working shell to get started quickly. In this section we’ll also be using the Shellfoundry to create an example shell, only this time we’ll use a different project template. The *resource-clean* template is similar to the default template we’ve used previously only it doesn’t contain any example driver functions. This will make it easier for us to really go through the experience of starting from a clean slate.

From the command line, navigate to a folder under which you’ll want the new shell to be created and type in the following:

```python
shellfoundry new customization-example
cd customization_example
```

A new project with an empty driver is created.

Let’s start by creating a function we can experiment on. Open the driver file. The file is named `driver.py` and is located in the `src` folder of the shell project. Add the following function to the shell driver class and save it:

```python
def user_facing_function(self, context, some_parameter, some_other_parameter):
    """
    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext
    :type some_parameter: str
    :type some_other_parameter: str
    """
    return "Thank you for calling this function."
```

We’ve now created a shell with a single command. Similar to the flow covered in the [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm) tutorial, the next steps would be to create a resource instance of this shell in CloudShell and add it to a sandbox so we can experiment with it. You should refer to the [Getting Started with Shell Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Getting-Started.htm) tutorial for any question on how to accomplish the three steps below:

1. Install the shell by running the following from the shell directory: `shellfoundry install`
    
2. Create a resource instance from the CloudShell inventory.
    
3. Create a new sandbox and drag the resource instance into it. Open the **Commands** pane.
    

At this point the **Commands** pane should look something like this:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_624x263.png)

As you can see, we didn’t need to specify any additional details to get our Python functions to be visible as shell commands in the CloudShell sandbox, however the commands appear if a very ‘code’ like manner so our next step would be making them a bit more presentable.

The information on how to display the driver functions in CloudShell is stored in the `drivermetadata.xml` file located in the driver's `/src` directory.

## Changing the shell’s Python version

To change the shell’s default Python version, open the `drivermetadata.xml` file and in the Driver line, add the `PythonVersion` property with the new version (2, 3). For example:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CloudService2Driver" Name="CloudService2Driver" Version="1.0.0" PythonVersion="3">
```
:::note
Shells without the `PythonVersion` property are considered Python 2.
:::
## Changing the function’s display name and description

For the first round of customizations, we’ll work on the user facing function and improve the naming of the command and its parameters as they appear to the user in CloudShell. Open the `drivermetadata.xml` file and add the following text to it:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function">
        </Command>
    </Layout>
</Driver>
```

Each *Command* element in the xml above customizes a single Python function specified by the **Name** attribute. The **DisplayName** and **Description** attributes determines the name of the command as it appears to the user and the description appearing next to it, respectively.

Reinstall the Shell in CloudShell by running the following command-line and check the **Resource Commands** panel again.

```python
shellfoundry install
```

The shell commands should now look like this:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_1_624x378.png)

Please note that changing the display name of a function will affect only how its visually rendered in the UI. Code trying to execute this command using the CloudShell API will need to still refer to it by the command *name*.

## Setting “admin only” functions

It is also possible to set certain functions to only be accessible to admins. This is done using the **Visibility** attribute, which determines which user types can see the command in the blueprint or sandbox. Options are **AdminOnly** and **Everyone**. By default, all commands are accessible to everyone.

In the `drivermetadata.xml` file, add the `Visibility="AdminOnly"` attribute to the command:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Command Description="This command is for the user" DisplayName="Admin-only Command" Name="user_facing_function" Visibility="AdminOnly">
        </Command>
    </Layout>
</Driver>
```

## Optional parameters and default values

For each of the command parameters, we may want to specify whether that parameter is mandatory for the user to supply, and whether there should be a default value in case the user didn’t enter any value.

In the following example, we will make the first parameter mandatory by setting the **Mandatory** attribute to **True**. Users will be required to enter a value for parameters before being able to run the command. The second parameter is optional but now has a default value which we will set using the **DefaultValue** attribute:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >
            <Parameters>
                    <Parameter Name="some_parameter" Mandatory = "True"
                               DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>
                    <Parameter Name="some_other_parameter" Mandatory = "False"
                               DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="None"/>
                </Parameters>
        </Command>

    </Layout>
</Driver>
```

Re-installing the shell will update the commands pane accordingly:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_2_624x240.png)

## Restricting input to a specific set of possible values

For certain parameters, you might want the user to select between a pre-determined set of values, rather than leave the inputs as a free text entry. To set that up, you need to add that information to the parameter XML:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >
            <Parameters>
                    <Parameter Name="some_parameter" Mandatory = "True"
                               DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>
                    <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"
                               DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>
                </Parameters>
        </Command>

    </Layout>
</Driver>
```

In the xml above, we’ve specified that the second parameter must be selected out of a specific set of possible values. We did that by adding the **Type** attribute to the parameter element and setting it as *Lookup*. To define the possible values, we’ve added the **AllowedValues** attribute, which sets the possible values for this parameter, represented as a comma separated list. In this case, the possible values are **Yes** and **No**. We’ve also changed the default value to conform to the possible options.

After re-installing the shell, the **Commands** pane now reflects the parameter new value restriction:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_3_624x225.png)

## Adding categories

As you add more commands to the resource, it can be useful to visually group them into categories and improve the usability of the commands panel. These categories will appear as folders which the user can navigate. To demonstrate this capability, let’s first add additional commands to the shell. Open the `driver.py` file located in the `/src` directory and add the following two functions:

```python
def backup(self, context):
    """
    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext
    """
    return "Backing up..."

def restore(self, context):
    """
    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext
    """
    return "Restoring..."
```

Grouping together commands under a category is pretty strait forward: Simply add a *Category* element and nest the relevant commands under it. In this case, we’ve added a category called *Operate* for the previous operation we’ve implemented and a category named *Management* for the new save and restore functions:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Category Name="Operate">
            <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >
                <Parameters>
                        <Parameter Name="some_parameter" Mandatory = "True"
                                   DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>
                        <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"
                                   DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>
                    </Parameters>
            </Command>
        </Category>

        <Category Name="Management">
            <Command Description="Backs up the current device state" DisplayName="Backup" Name="backup" />
            <Command Description="Restores the last saved device state" DisplayName="Restore" Name="restore" />
        </Category>

    </Layout>
</Driver>
```

After re-installing the shell we get the following command panel layout:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_4_624x291.png)

## Orchestration only commands (hidden commands)

Sometimes, you may wish to create commands that are intended to be used as a part of an orchestration flow, for example to be called during setup, but want these commands to be inaccessible to users \[hidden\] from the UI. For example, a command that is called during a sandbox’s Setup process. To support this use case, CloudShell supports a special category, the *Hidden Commands* category, which allows you to omit commands from the web portal UI while allowing them to be invoked via the API.

To demonstrate this capability, let’s first add a new function to our driver class in the `driver.py` file:

```python
def api_only_function(self, context):
    """
    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext
    """
    return "You didn't see this on the web interface..."
```

Next, let’s add the special category to the `drivermetadata.xml` file and nest that command under it:

```javascript
<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">
    <Layout>
        <Category Name="Operate">
            <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >
                <Parameters>
                        <Parameter Name="some_parameter" Mandatory = "True"
                                   DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>
                        <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"
                                   DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>
                    </Parameters>
            </Command>
        </Category>

        <Category Name="Management">
            <Command Description="Backs up the current device state" DisplayName="Backup" Name="backup" />
            <Command Description="Restores the last saved device state" DisplayName="Restore" Name="restore" />
        </Category>

        <Category Name="Hidden Commands">
            <Command Description="An API only function" DisplayName="Run me VIA API" Name="api_only_function" />
        </Category>
    </Layout>
</Driver>
```

After re-installing the shell you’ll see the new function doesn’t appear in the **Commands** pane: 

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_5_624x436.png)

Note that the **Visibility** attribute we discussed earlier in this article does not apply to commands in this category and will be ignored.

However, if you query the list of commands on the shell via the API, you’ll be able to see it as well as invoke it:

![](/Images/Devguide-shells/Commands-Visibility-and-Usability_6_624x160.png)

## Summary

In this section we reviewed different ways in which its possible to customize the appearance and behavior of commands and command parameters from the user’s perspective. If you have feedback or additional suggestions for features and improvements be sure to post them on our idea box. We’re always looking for new ideas!
