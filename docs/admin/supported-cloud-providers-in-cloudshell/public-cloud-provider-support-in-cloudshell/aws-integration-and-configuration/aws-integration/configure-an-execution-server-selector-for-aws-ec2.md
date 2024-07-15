---
sidebar_position: 6
---

# Configure an Execution Server Selector for AWS EC2

*This article explains how to associate an Execution Server to AWS EC2 App deployments and command executions. To learn how to associate an Execution Server to resources, Apps and blueprints, see [Setting Up Execution Servers to Run Commands](../../../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).*

The management VPC contains two Execution Servers: the **es-shells** Execution Server has a configured IAM role, which enables it to communicate with AWS and create the necessary elements, such as instances, networking etc. (as well as run any configuration management operations defined on the App), and the **es-commands** Execution Server is used to run custom code on the instances and has an empty IAM role, which restricts it from altering configurations on AWS services. The reason we have two Execution Servers is to ensure that custom code is launched in a safe and isolated manner, preventing misuse of the AWS account. As these are Linux Execution Servers, they do not support Suite executions.

The **es-shells** Execution Server in CloudShell needs to be associated with the AWS EC2 cloud provider resource while the **es-commands** Execution Server needs to be associated with the deployed App's shell, allowing it to launch the shell's commands inside the sandbox VPC. This link is achieved by using an attributes that has the **Execution Server Selector** rule.

For information about managing, troubleshooting and upgrading Execution Servers on AWS, see [Managing AWS EC2 Execution Servers](../managing-aws-ec2-execution-servers.md).
:::note
The below procedure assumes you're using the out-of-the-box **Execution Server Selector** attribute. However, in order to use this attribute, you will need to assign it the **Execution Server Selector** rule in Resource Manager Client's **Attributes** tab. For details, see [Defining attribute rules](../../../../setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md#defining-attribute-rules).
:::
**To configure the Execution Server Selector attribute:**

1. In **CloudShell Portal**, configure the Execution Server:
    
    1. Open the **Manage>Execution Servers>Servers** page.
    2. Click the **es-shells** Execution Server.
    3. Select the **Execution Server Selector** check box and enter a unique value, such as "us-east-1-es1”.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/AWS-deployment-type-Installation_1_428x153.png)
        
2. Click **Done**.
3. If you are using a deployed App shell that has a custom driver, repeat the above process to configure the **es-commands** Execution Server with a different **Execution Server Selector** value.
    
    To complete the link, in the App's **App Resource** page, specify the same value on the **Execution Server Selector** attribute.
    :::important
    If you are setting up AWS integration in High Availability mode, repeat this process for the backup Execution Servers (**es-shells-b** and **es-commands-b**).
    :::
4. Next, [Add an AWS EC2 Cloud Provider Resource](./add-an-aws-ec2-cloud-provider-resource.md).
