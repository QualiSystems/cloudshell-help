---
sidebar_position: 2
---

# Kubernetes Prerequisites

Before you set up your Kubernetes integration with CloudShell, make sure you have the following:

- Kubernetes cluster. For details, see the official Kubernetes installation docs.
    - Kubernetes `config` file with cluster administrator permissions. To generate a portable config file, run this command from your Kubernetes client machine:
        
        ```python
        kubectl config view --flatten
        ```
        
    - Configured LoadBalancer and/or NodePort for external ports
- Amazon EKS:
    - Existing AWS 2G shell resource
    - AWS region must have EKS already installed.
