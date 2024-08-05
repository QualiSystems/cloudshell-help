---
sidebar_position: 4
---

# Add the Playbook to an App

Now that we have tested and debugged our playbook, the next step is to add it to an App template. For details, see [Adding App templates](../../../admin/cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates).
:::note
The playbook runs once during the **Setup** phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way.
:::
1. In CloudShell Portal, open the **Manage>Apps** page.
    
2. Edit or create an App.
    
3. Open the **Configuration Management** tab.
    
4. From the **Select Tool** drop-down list, select **Ansible**.
    
5. Select the **Connection** Method, depending on the VM’s operating system. Select **Windows Remote Management** for Windows machines, or **SSH** for Linux.
    
6. Specify the URL to the playbook YAML or ZIP file. Make sure you specify the raw version of the URL (GitHub, GitLab and BitBucket are supported). For example: `https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip`
    
    The playbook can be a yaml file for a single playbook or a zip file containing several playbooks. For simple tasks, a single yaml file should be enough, but for more complex configuration logic, and for using roles, a zip file may be required (for a sample zip file, click [here](https://github.com/QualiSystems/app-starter-pack/blob/dev/Playbooks/wordpress-rhel7.zip)). The zip file must contain a least one yaml (if there are several yaml files, the main one must be named site.yaml). In order to use roles, include in the zip a folder named roles, and add the roles to it.
    :::important
    If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open **Resource Manager Client>Resource Families>Configuration Services (Ansible Configuration or Custom Script Configuration)** and set the **Verify Certificate** attribute to **False**.
    :::
7. If the URL is protected, specify the **Username** and **Password**, or **Token**.
    
8. In the **Inventory Groups** field, specify the inventory groups, separated by semicolons ";”. For details, see the [Inventory Groups](./ansible-playbook-examples.md#inventory-groups) example.
    
9. To add parameters to the playbook, click **Add Parameter**, and enter each parameter’s name and value. Repeat for additional parameters.
    

Note that the parameters are added to the App template.

![Discovery Dialog](/Images/Devguide-configuration-management/Adding-the-Playbook-to-an_2_624x444.png)

You can add parameters to the App template in the following ways:

- Provide the value as part of the App template, making it the default value for every instance of this App template.
- Specify a static value in the App in the blueprint.
- Specify a dynamic value in the App in the blueprint, linking the parameter to one of the blueprint’s Global Inputs. To do so, just enter the global input’s name in curly brackets as the parameter value, or click the "plus” button to select an available Global Input.
- Pass a value using the API, as illustrated in this [Parameters](./ansible-playbook-examples.md#parameters). This will replace any value provided in the App template or in the blueprint.

1.  Open the **App Resource** tab, and enter the VM’s access credentials.
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Config-manage-Adding-Your_5_624x444.png)
    
2.  Click **Done**.