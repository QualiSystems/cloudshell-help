---
sidebar_position: 2
---

# Add an App to the Blueprint

This article explains how to add an App to your blueprint.
:::tip
You can also add deployed Apps (Apps deployed in another sandbox) to your sandbox as shared resources, cutting App deployment time. For example, you could have a "master" sandbox containing a pool of deployed Apps, which can be added to other sandboxes as resources or to blueprints as abstract resources. Note that such Apps can be deleted only from the master blueprint, but you can still power them on/off in the secondary sandboxes.
:::

:::note
To enable the deployment of Apps based on a public cloud like AWS EC2 or Azure, make sure the blueprint is configured to run a setup script that can prepare connectivity in the sandbox, like CloudShell's out-of-the-box Default Sandbox Setup script, and add at least one public cloud App to the blueprint to initiate the script's connectivity process for the cloud provider during the Setup phase of the sandbox. For additional information, see [Configure Blueprint Orchestration](../blueprint-properties/configure-orchestration.md).
:::
**To add an App to the diagram:**

1. In the blueprint or sandbox workspace, click **App / Service**.
2. In the **Add App / Service** pane, click the ‘**+**’ icon of the App or drag it from the pane into the diagram.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Apps/Working-with-Apps_3.png)
    
3. If the App has multiple deployment options in this domain, the **Select Deployment Path** window is displayed, prompting you to select the deployment option to use. For example:
    
    ![](/Images/CloudShell-Portal/Lab-Management/AppSelectDeploymentPath.png)
    
    The App is added to the diagram.
    

## Related Topics

- [Apps in Blueprints](../../../../portal/blueprints/creating-blueprints/apps)
- [Apps in Sandboxes](../../../../portal/sandboxes/sandbox-workspace/apps)
