---
sidebar_position: 2
---

# Add an App to the Sandbox

This article explains how to add an App to a sandbox.

:::tip
You can also add deployed Apps (Apps deployed in another sandbox) to your sandbox as shared resources, cutting App deployment time. For example, you could have a "master" sandbox containing a pool of deployed Apps, which can be added to other sandboxes as resources or to blueprints as abstract resources. Note that such Apps can be deleted only from the master blueprint, but you can still power them on/off in the secondary sandboxes.
:::

:::note
For Apps connected to a subnet, all Apps in the same subnet must use the same cloud provider resource.
:::

**To add an App to the diagram:**

1. In the blueprint or sandbox workspace, click **App / Service**.
2. In the **Add App / Service** pane, click the ‘**+**’ icon of the App or drag it from the pane into the diagram.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Apps/Working-with-Apps_3.png)
    
3. If the App has multiple deployment options in this domain, the **Select Deployment Path** window is displayed, prompting you to select the deployment option to use. For example:
    
    ![](/Images/CloudShell-Portal/Lab-Management/AppSelectDeploymentPath.png)
    
    The App is added to the diagram.
    

## Related Topics

- [Apps in Sandboxes](../../../../portal/sandboxes/sandbox-workspace/apps)
- [Apps in Blueprints](../../../../portal/blueprints/creating-blueprints/apps)