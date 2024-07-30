---
sidebar_position: 3
---

# The Cloud Provider Shell Model

In this article, we’ll learn about the Cloud Provider shell’s model.

The [Cloud Provider Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/cloud_provider_standard.md) defines two elements: the Cloud Provider shell and the Deployment Type service. The Cloud Provider shell is responsible for accessing the cloud provider and executing the App’s automation commands (like deploy VM, power on, power off, refresh IP). And the deployment type service shell sets the deployment path on the App template, including the VM’s definition. The service contains the attributes of the deployment type, but has no driver since the automation commands are defined in the Cloud Provider shell’s driver.

- The cloud provider model extension includes the attributes that control the behavior of the cloud provider as a whole. For example the region name and default values for elements created in the cloud.
    
- The deployment type extension needs to include the attributes that are needed for every deployment method in this cloud. You can set these attributes to be visible in the **Deployment Paths** tab of the App template dialog box (we’ll learn how to do this later on this chapter).
    

The Cloud Provider shell is created using the gen2/cloud-provider shellfoundry template. The project folder includes a shell-definition.yaml file for the cloud provider model definition, and a skeleton of the cloud provider model. Inside the **Deployments** folder, there is a deployment-path.yaml file for the deployment type model. If more than one deployment type is needed, additional yaml files may be added to this folder.

The association between the cloud provider and its relevant deployment types is implicit.