---
sidebar_position: 3
---

# Requirements (New Job Scheduling)

- Quali Server installed and configured, with a working MongoDB instance or cluster and properly defined connection strings. For details, see [Install CloudShell](../complete-install/install-cloudshell/index.md) and [Configure the MongoDB Database Connection](../configure-products/config-mongodb-connection.md).
- Kubernetes installation: The Docker containers that will host the New Job Scheduling components and services need to be deployed over Kubernetes. Therefore, before installation, you will need to prepare a Kubernetes cluster with the basic capabilities (Storage allocation, internal and external networking, etc.). For additional information, see [Hardware requirements for Kubernetes (for New Job Scheduling)](../../cs-system-requirements/min-requirements-for-cs.md#hardware-requirements-for-kubernetes-for-new-job-scheduling).
- Load balancer:
    
    - A network load-balancer implementation.
    - If the system is not hosted on one of the public clouds that has a native load balancing solution, we recommend using an on-prem solution such as metalLB. For details on how to install and configure metalLB, see this Stack Overflow article:
        
        [https://stackoverflow.com/questions/60320429/installation-nginx-ingress-for-kubernetes-cluster-on-premise-with-centos7](https://stackoverflow.com/questions/60320429/installation-nginx-ingress-for-kubernetes-cluster-on-premise-with-centos7)