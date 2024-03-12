---
sidebar_position: 3
---

# Edit an App's Details in the Blueprint
:::note
For Apps connected to a subnet, all Apps in the same subnet must use the same cloud provider resource.
:::
**To change an App's deployment path in the diagram:**

1. Open the diagram.
2. Hover over the App. From the context menu, select **Change deployment**.

**To edit an App in the diagram:**

1. Open the diagram.
2. Hover over the App. From the context menu, select the **Edit** option.
    
    The **App** dialog box is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/EditAppDialog.png)
    
3. In the **General** page, you can edit the App's **Name**, **Description** and **Icon**.
    :::note
    The App's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
4. In the **Deployment Paths** page, you can change the settings of the virtual machine to be deployed.
    
    1. Select which deployment path to use. Note that only deployment paths that are based on cloud provider resources in your domain are displayed.
    2. Additional deployment settings are provided depending on the deployment path you selected, but you need to be an admin to edit them.
5. In the **Configuration Management** page, you can add, remove and configure the parameter values to be used by the configuration management tool.
    
    If the blueprint has global inputs, you can also set the parameter to receive the value that the sandbox end-user specifies for a global input when reserving a sandbox containing the App. To do this, enter a meaningful name for the parameter, click the parameter's "\{+\}" button and select the global input. The global input is displayed in the parameter's value, surrounded by curly brackets "\{\}". In the image below, the App's blueprint has a global input called "global input 3":
    
    ![](/Images/CloudShell-Portal/Manage/ConfigurationManagementGlobalInput.png)
    
6. In the **App Resource** page, you can select a different Shell for the deployed App.
7. Click **Done**.

## Related Topics

- [Apps in Blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Blprnt-Use-Apps.htm)
- [Apps in Sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Use-Apps.htm#top)