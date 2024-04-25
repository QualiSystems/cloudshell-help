---
sidebar_position: 3
---

# Add a Kubernetes Cloud Provider Resource

The Kubernetes Cloud Provider 2nd Gen shell enables the deployment of Kubernetes instances on a Kubernetes cluster.

**To add a Kubernetes resource:**

1. Log in to CloudShell Portal as administrator.
2. Import the Kubernetes shell into CloudShell. For details, see [Importing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm#Adding).
    
    ![](/Images/Admin-Guide/KubernetesDownloadShell.png)
    
3. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
4. Click **\+ Add New**.
5. In the **Create New Resource** dialog box, select the **Kubernetes Cloud Provider Shell 2G** cloud provider template.
6. Enter a **Name** for the Kubernetes resource.  
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
7. Click **Create**.
    
    The **Resource** dialog box is displayed.
    
    ![](/Images/Admin-Guide/KubernetesResourceDiscovery.png)
    
8. Enter the required information.
    
<table>
    <thead>
        <th>Attribute</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Config File Path</td>
            <td>
            Full path to a standalone kubernetes `config` file containing all the relevant information for authentication. The file must reside on the Execution Server machine. To generate a portable config file, as Kubernetes administrator, run this command from your Kubernetes client:

```python
 kubectl config view --flatten
```
            </td>
        </tr>
        <tr>
            <td>AWS CP Resource Name</td>
            <td>(Optional - EKS only) The CloudShell resource name for the AWS Cloud Provider Resource</td>
        </tr>
        <tr>
            <td>External Service Type</td>
            <td>The service type the shell will create for external services. LoadBalancer type should be used when the Kubernetes cluster is hosted on a supported public cloud provider like AWS and Azure. Use NodePort when the cluster is self-hosted.</td>
        </tr>
        <tr>
            <td>Execution Server Selector</td>
            <td>
            (Optional) This attribute points to a pre-defined group of execution servers (grouped by a common **Execution Server Selector** value). To make the association, enter the same value you specified on the execution server.
:::tip
The Execution Server Selector attribute does not come with the shell out-of-the-box. If you want to use it, add it to the shell in the **Manage>Shells** page and make sure the attribute has the **Execution Server Selector** rule, in Resource Manager Client's **Attributes** tab.
:::
            </td>
        </tr>
    </tbody>
</table>
    
9. Click **Start Discovery**.
    
    When the discovery process completes, a confirmation message is displayed. The cloud provider resource is displayed in the Inventory dashboard in CloudShell Portal and in Resource Manager Client.
    
    To customize the App deployment types and publish App orchestration parameters, see [Customizing App Deployment Types](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-App-Dply-Types.htm).
    
10.  Next, [Add a Kubernetes App Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-App.htm).
