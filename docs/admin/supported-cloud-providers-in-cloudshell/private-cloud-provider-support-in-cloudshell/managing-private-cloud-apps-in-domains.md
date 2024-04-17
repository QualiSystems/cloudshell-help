---
sidebar_position: 3
---

# Managing Private Cloud Apps in Domains

*The procedures in this article apply to Apps hosted on a private cloud provider, like vCenter or OpenStack. For public cloud Apps like AWS EC2 or Azure, see [Managing Public Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Pblc-Cld-Apps-in-Dmns.htm).*

In order to improve performance and stability in CloudShell deployments that include multiple geographically distributed sites, administrators need to configure the deployment process of the App to be carried out in the domain of the cloud provider (i.e. configure the App to be deployed using the execution server closest to the lab in which the cloud provider resides).

This is done by associating the App and cloud provider to the domain, to make sure domain users use the Apps and cloud providers allocated to their domain, and setting the **Execution Server Selector** attribute on the execution server, cloud provider resource and App, and giving it the same value on these elements to ensure the actual drivers will run physically near the cloud provider.

This is a five-step process:

1. [Create a cloud provider resource set to the domain](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm?Highlight=Managing%20Private%20Cloud%20Apps%20in%20Domains#Create)
2. [Configure the Execution Server to support Ansible operations](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm?Highlight=Managing%20Private%20Cloud%20Apps%20in%20Domains#Associat2)
3. [Associate the Execution Server Selector attribute to the deployed App's family](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm?Highlight=Managing%20Private%20Cloud%20Apps%20in%20Domains#Associat4)
4. [Associate the execution servers to the domain](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm?Highlight=Managing%20Private%20Cloud%20Apps%20in%20Domains#Associat)
5. [Associate the App's deployment to the domain](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm?Highlight=Managing%20Private%20Cloud%20Apps%20in%20Domains#Associat3)

## Create a cloud provider resource set to the domain

When creating the cloud provider resource, you need to specify the required domain in the **Execution Server Selector** attribute.
:::note
A cloud provider resource should be set to one domain only. For multiple domains, create additional cloud provider resources.
:::
**To set the cloud provider resource to the domain:**

1. As administrator in the required CloudShell domain, create the cloud provider resource.
    
2. In the **Resource Discovery Information** page, in the **Execution Server Selector** attribute, specify the name of the domain. For example, "London".
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServerSelectorNewResource.png)
    
3. Complete the resource creation process.

## Configure the Execution Server to support Ansible operations
:::note
This section is only required for Ansible configuration management.
:::
To use Ansible to install and configure applications on Apps, the system administrator needs to perform several configurations on the Linux-based Execution Server that will be used to run the Ansible operations on the App's deployed VMs. For additional information, see [Ansible Playbook Development for Apps](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Ansible.htm).

## Associate the Execution Server Selector attribute to the deployed App's family

**To associate the Execution Server Selector attribute to the deployed App's family:**

1. Associate the **Execution Server Selector** attribute to the deployed App's family. For example, **Generic App Family**.
2. After you associate the attribute to the deployed App's family, make sure the **Attributes** list of the family displays the **Execution Server Selector** attribute. For example:
    
    ![](/Images/CloudShell-Portal/Manage/DeployedAppParameters.png)
    

## Associate the execution servers to the domain

This procedure explains how to associate, to the domain, the execution servers to be used to deploy Apps on the cloud provider to the domain (usually the execution servers that are physically closest to location of the cloud provider.) The **Execution Server Selector** attribute must have the **Execution Server Selector** rule enabled.

**To associate an execution server to the domain:**

1. In CloudShell Portal, click **Manage**.
    
    The **Manage** dashboard is displayed.
    
2. In the left sidebar, click **Execution Servers**.
    
3. In the left pane, under **Execution Servers**, click **Servers**.
    
    The execution server list is displayed.
    
4. Click the name of a server.
    
    The **Attributes** dialog box is displayed.
    
5. Select the **Execution Server Selector** check box and enter the name of the domain. For example, London:
    
    ![](/Images/CloudShell-Portal/Manage/AddAttribute.png)
    
6. Click **Done**.
7. Repeat these steps to associate additional execution servers to the domain.

## Associate the App's deployment to the domain

To configure the App to be deployed in a specific domain, you need to associate the App's family to the domain, as well as the domain category to make it available to members of that domain. This domain both includes the App's cloud provider and is closest to the execution servers that will deploy the App.

**To associate an App's deployment to a domain:**

1. In the **Manage** dashboard, in the left sidebar, click **Apps**.
    
    The **Apps** page is displayed.
    
2. Create a new App or edit an existing one, as explained in [Managing App Templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm).
    
    The App's configuration wizard is displayed.
    
3. To make the App available to members of this domain, from the **Categories** dropdown list, select the categories associated to the domain. For details about creating domain categories, see [Managing domain categories](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Blprnt-Ctlg-Ctgs.htm#Managing2).
    
    For example, "London":
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServerAppTemplate5.png)
    
4. If this is a new App, in the **Deployment Paths** page, create a deployment path for the cloud provider. Make sure to select the cloud provider resource you created in the required CloudShell domain.

5. In the **App Resource** page, in the **Execution Server Selector** attribute, specify the value you specified in the **Execution Server Selector** attribute of the cloud provider resource. For example, "London":
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServerAppTemplate4.png)
    
6. Click **Done**.

## Related Topics

- [Manage Dashboard Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Ovrv.htm)
- [Managing App Templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm)
- [Apps Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Apps.htm)
