---
sidebar_position: 8
---

# Blueprint Templates

## About blueprint templates

Blueprint templates enable your organization to define a uniform standard for new blueprints. A blueprint template consists of a predefined set of elements (resources, connections, inputs, properties etc.). Users can repeatedly create new blueprints based on existing templates, in a quick and easy way, effortlessly maintaining the organization’s standard.

Blueprint templates can be viewed and created by system and domain administrators. Domain administrators can view and create templates for their permitted domains only.

CloudShell includes a default out-of-the-box blueprint template, **CloudShell Sandbox Template**, on which all new blueprints are based. You can create additional blueprint templates, according to your needs. For more information, see [Creating a new blueprint template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm?Highlight=Blueprint%20Templates#Creating).

You can enable users to create empty blueprints that are not based on a template and do not include orchestration scripts. For more information, see [Allowing users to create new empty blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm?Highlight=Blueprint%20Templates#Allowing).

## CloudShell Sandbox Template

The **CloudShell Sandbox Template** is provided out-of-the-box by CloudShell and is configured to run CloudShell's **Default Sandbox Setup**, **Default Sandbox Teardown**, **Default Sandbox Restore**, and **Default Sandbox Save** scripts during the sandbox lifecycle. **Save and Restore** is a paid add-on that requires a license.

The CloudShell Sandbox Template performs the following important operations as part of the sandbox lifecycle:

- Deploy and tear down Apps and their VMs from the cloud provider
- Enable the use of Apps based on public clouds (like AWS EC2 and Azure) by running connectivity procedures that set up the cloud network and subnet for the sandbox
- Connect and disconnect virtual network and physical connectivity routes (L1 and L2 ) between resources and/or Apps
- Enable the save and restore functionality, which is part of the **Save and Restore** paid add-on
:::note
Starting with CloudShell 2022.1, the out-of-the-box **CloudShell Sandbox Template** includes orchestration scripts that support the deployment of Apps with multiple configuration management scripts/playbooks. If you're upgrading from an older CloudShell version, your existing blueprints will continue using the old orchestration scripts while new blueprints will be created with the new template and therefore will have the new script versions.
:::
## Managing blueprint templates

### Creating a new blueprint template

**To create a blueprint template**:

1. Open the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. In the toolbar, click the **\+ Add New** button.   
    The **Add New Template** dialog box is displayed.
4. Enter the required information in the new blueprint template. 
    :::note
    To expose the template to all domains, select the **Global** domain.  
    :::
5. Click **Save**.   
    The new blueprint template is displayed in the **Templates** list.
6. Use the **Diagram** and **Blueprint** links to set up the template's canvas and properties, same as with a regular blueprint.

### Associating a blueprint template with a domain

Users can only see and use blueprint templates that are either global or are associated with their domain.

**To associate a blueprint with a domain:**

1. Click the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. Click the template's name.
    
    The **Edit Template** dialog box is displayed.
    
4. In the **Domains** drop-down list, select the required domain and click **Save**.

### Editing a blueprint template
:::important
The **CloudShell Sandbox Template** is provided by default and is updated by CloudShell from time to time. DO NOT edit this template.
:::
**To edit a blueprint template's general settings:**

1. Click the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. Click the name of the blueprint template. Alternatively, click the blueprint template's More Actions button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Edit**.
    
    The **Edit Template** dialog box is displayed.
    
4. Edit the settings as appropriate.
5. Click **Save**.

**To update the elements of the blueprint template:**

1. Click the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. In the relevant template row, click the **Diagram** link.
    
    The diagram of the blueprint template is displayed.
    
4. Update the blueprint template.
    
    The changes you perform are saved automatically.
    

**To update the properties of the blueprint template:**

1. Click the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. In the relevant template row, click the **Properties** link.
    
    The **Properties** page of the blueprint template is displayed.
    
4. Update the properties and click **Save**.

All non-administrator users can now create blueprints from the templates(s) you created. For step-by-step instructions on how to create a blueprint from a template, see the help topic: [Creating a blueprint from a template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-New.htm#Creating).
:::note
The owner of the blueprint template is the administrator who created the template.
:::
### Saving an existing blueprint as a blueprint template

**To create a template from an existing blueprint**:

1. In the **Blueprints Catalog**, open the blueprint.
2. Click the **Blueprint** menu.
3. Select **Save as a Template**. 
    
    A new blueprint template is created and the diagram of the template opens for editing.  
    
4. Rename the template.
5. Update the blueprint template’s components as required. Update the blueprint template’s components as required.

Changes you perform on the diagram of the template are saved automatically.   
For administrators, the blueprint template is listed in the **Manage** dashboard in the **Blueprint Templates** page.   
For users, the blueprint template is now available for creating a new blueprint based on the new template.

All non-administrator users can now create blueprints from the templates(s) you created. For step-by-step instructions on how to create a blueprint from a template, see the help topic: [Creating a blueprint from a template](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-New.htm#Creating).
:::note
The owner of the blueprint template is the administrator who created the template.
:::
### Allowing users to create new empty blueprints

By default, when creating a new blueprint, it will be based on the CloudShell Sandbox Template. If multiple templates were defined, users must select a template on which to base the blueprint. However, the Admin can enable users to create blueprints that are not based on a template. For more information, see [Enabling the creation of empty blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Cnfg-Ky.htm#Enabling)
:::note
Changes to the configuration file affect the entire system.
:::
### Filtering the display of the blueprint templates list

**To filter the display of the blueprint templates list by domain:**

- In the toolbar, click the **Domain** drop-down list and select the required domain.

### Deleting blueprint templates

This section explains how to delete blueprint templates from CloudShell.
:::note
It is not possible to delete the **CloudShell Sandbox Template** that comes out of the box with CloudShell. If you no longer need it, edit the template and disassociate it from any domains.
:::
**To delete blueprint templates:**

1. Open the **Manage** dashboard.
2. In the page navigation bar, click **Blueprint Templates**.
3. Select the check box next to the template(s) to delete.
4. In the toolbar, click ![](/Images/CloudShell-Portal/Manage/Management_3.png)
