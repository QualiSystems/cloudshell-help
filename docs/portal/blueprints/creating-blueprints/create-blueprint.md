---
sidebar_position: 2
---

# Create a Blueprint

You can create an empty blueprint or base it on a blueprint template. It is recommended to use templates as they provide environment automation. For instance, the out-of-the-box CloudShell Sandbox Template template deploys Apps and connections on Setup, and deletes the Apps from their cloud providers on Teardown - see [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe) for details.

Each blueprint has an owner which by default is the user who created the blueprint, but it can be changed by the owner or by an admin.

## Creating an empty blueprint

**To create an empty blueprint:**

1. In the top left section of the **Blueprint Catalog**, click **+ Create Blueprint**. 
    
    By default, a new blueprint that is based on the out-of-the-box **CloudShell Sandbox Template** template is created.
    
    However, by disabling the `OnlyAllowNewEnvironmentsFromTemplates` configuration key, admins can choose to allow sandbox creators to select the blueprint template to use, if multiple templates are available, as illustrated in the next step.
    
2. (Occurs if there are multiple templates in CloudShell) From the drop-down list, select **Create Empty Blueprint**.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/CreateNewBlueprint.png)
    
    A new blueprint is created and a blank diagram workspace is displayed. 
    

## Creating a blueprint from a template

Blueprints that are created from a template inherit the template's settings, including resources, services, Apps, orchestration and connections. By default, users can create blueprints from templates only. As an admin you can enable your users to create blank blueprints by changing the configuration key value. See [Allowing users to create new empty blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#Allowing).

For step-by-step instructions on how to create a blueprint template, see [Creating a new blueprint template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#Creating).

**To create a new blueprint from a template:**

1. In the top left section of the Blueprint Catalog, click the **+ Create Blueprint** button.
2. From the Select from templates menu, select a blueprint template.
    :::note
    This menu is only displayed if you have two or more blueprint templates in the system.
    :::
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/CreateNewBlueprint.png)
    
3. If the template has inputs, the Create Template window is displayed, prompting you to configure the input settings and click Create to create a new blueprint based on this template.
4. Optionally, to create an empty blueprint from scratch, select the **+ Create New Blueprint** menu option.
5. Rename the new blueprint and perform any required changes to it.

## Related Topics

- [Creating Blueprints](../creating-blueprints/)