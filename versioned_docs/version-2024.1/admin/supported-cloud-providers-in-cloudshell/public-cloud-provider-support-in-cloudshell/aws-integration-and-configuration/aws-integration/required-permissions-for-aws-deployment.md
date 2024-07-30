---
sidebar_position: 2
---

# Required Permissions for AWS Deployment

Before creating the management VPC and networks, make sure you have the following:

- Admin user with permissions to the following services:
    
    - EC2
    - VPC
    - CloudFormation
    - S3
    - IAM
    - AWSLambda_FullAccess
        
- When creating the stack for the first time, the AWS account must be subscribed to the CentOS 7 [Marketplace image](https://aws.amazon.com/marketplace/pp/B00O7WM7QW).
- VPN address: Public IP address to your router
- Keypair on AWS: New or existing keypair to be used during the CloudFormation process
- On Premise CIDR: IP address range of a network behind the router
- VPC CIDR: Range of available IP addresses to be allocated to AWS EC2 VMs deployed by CloudShell