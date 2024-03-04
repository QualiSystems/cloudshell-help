---
sidebar_position: 3
---

# Requirements (New Job Scheduling)

- Quali Server installed and configured, with a working MongoDB instance or cluster and properly defined connection strings. For details, see [Install CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Complete%20Installation/instl-cs-intro.htm) and [Configure the MongoDB Database Connection](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-MongoDB.htm).
- Kubernetes installation: The Docker containers that will host the New Job Scheduling components and services need to be deployed over Kubernetes. Therefore, before installation, you will need to prepare a Kubernetes cluster with the basic capabilities (Storage allocation, internal and external networking, etc.). For additional information, see [Hardware requirements for Kubernetes (for New Job Scheduling)](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm#Hardware2).
- Load balancer:
    
    - A network load-balancer implementation.
    - If the system is not hosted on one of the public clouds that has a native load balancing solution, we recommend using an on-prem solution such as metalLB. For details on how to install and configure metalLB, see this Stack Overflow article:
        
        [https://stackoverflow.com/questions/60320429/installation-nginx-ingress-for-kubernetes-cluster-on-premise-with-centos7](https://stackoverflow.com/questions/60320429/installation-nginx-ingress-for-kubernetes-cluster-on-premise-with-centos7)