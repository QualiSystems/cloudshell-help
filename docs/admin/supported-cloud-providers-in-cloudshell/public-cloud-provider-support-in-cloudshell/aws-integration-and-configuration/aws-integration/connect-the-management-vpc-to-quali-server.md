---
sidebar_position: 5
---

# Connect the Management VPC to Quali Server

**To connect the Management VPC to Quali Server:**

1. To prepare Quali Server, configure the connection between the Management VPC and Quali Server via VPN, and register the Execution Servers on Quali Server.
2. To complete the configuration, perform the following steps:
    1. Open the AWS console and identify the Management VPC listed in the **VPN Connections** summary.
    2. Open the Management VPC's VPN connection created in [Create a Management VPC and Networks using CloudFormation](./create-a-management-vpc/index.md).
    3. Select the **Management VPC** and click **Download Configuration** according to the type of gateway you have on the Quali Server network side.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/AWSDeploymentTypeInstallation.png)
        
    4. Use the configuration information to configure VPN on the Quali Server network side.
3. Make sure you have an active VPN.
4. To register the Execution Server instances on the Quali Server:
    
    1. Log in to your AWS console.
        
    2. In the **EC2 Dashboard**, identify the two Execution Server instances associated with the Management VPC created when the Management VPC was created.
        
    3. Reboot the Execution Server instances (**es-shells** and **es-commands**): right click the instance and select **Instance State>Reboot**.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationRebootExecutionServers.png)
        
5. Next, [Configure an Execution Server Selector for AWS EC2](./configure-an-execution-server-selector-for-aws-ec2.md).
