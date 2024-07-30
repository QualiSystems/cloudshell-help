---
sidebar_position: 1
---

# Integrating AWS with Cloud-based CloudShell Installation

It is possible to set up an AWS integration where CloudShell is Server is also installed on AWS.

The process is as follows

1. Deploy the **Main.yaml** CloudFormation template. For details, see [Create a Management VPC and Networks using CloudFormation](../create-a-management-vpc/index.md).
    
    :::note Important:
    - Make sure the **Network** parameter is set to either **NAT** or **Public**.
    - If you're deploying a public network, make sure **VPN Attachment** is not set to **No VPN**.
    :::
2. From AWS Marketplace, deploy a **Windows Server 2019 English Full Base** instance called **cloudshell-server** that is connected to the Execution Servers subnet.
3. In the instance's security group, set a rule to allow inbound RDP connections over IPv4 - see this [article](http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/authorizing-access-to-an-instance.html) for official instructions.
4. Log in to the Windows Server 2019 instance using Remote Desktop. To get the password, in the **EC2 Dashboard**, right-click the instance and select **Connect**, click **Get Windows Password**, browse to the keypair file you used in CloudFormation and select **Decrypt**.
5. On the instance, install the CloudShell suite that matches the CloudFormation template you are using. Make sure you install an execution server on this machine and configure it to run all sandbox orchestration scripts. For details, see [Controlling execution server selection for blueprint commands](../../../../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md#controlling-execution-server-selection-for-blueprint-commands).
6. Stop and start the **es-shells** and **es-commands** instances to allow the execution servers to register Quali Server.
7. If for whatever reason they didn't register, manually connect each execution server to the CloudShell Server, as explained in [Connecting the Execution Server to Quali Server](../../managing-aws-ec2-execution-servers.md#connecting-the-execution-server-to-quali-server).
8. In CloudShell Portal, in the **Manage** dashboard, open the **Execution Servers>Servers** page and make sure the two execution servers registered successfully and are online.
