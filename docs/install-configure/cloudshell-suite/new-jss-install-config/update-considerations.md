---
sidebar_position: 4
---

# Upgrade Considerations for New Job Scheduling

To upgrade the New Job Scheduling, run the `helm upgrade` command as explained in [Deploy the New Job Scheduling Infrastructure using Helm](./high-level-install-flow/deploy-jss-with-helm.md).

Before upgrading from earlier versions of the New Job Scheduling, do the following. Please note that you only need to do this once, so if you already upgraded to a previous version of the New Job Scheduling, just run the `helm upgrade` command.

- Run this command on the Kubernetes client machine:
    
    ```css
    kubectl delete secret cloudshell-acr -n cloudshell
    ```
    
- Starting with CloudShell 2021.2, the Kubernetes-based Mongo deployment is no longer exposed outside the Kubernetes cluster for security reasons. Therefore, if you're using Mongo hosted within the Kubernetes cluster you will no longer get an external IP for the Mongo cluster instance. If external access is required, the `externalAccess` tag can be added under the Mongo configuration in the customer-values.yaml in the following way:
    
    ```css
    mongodb:
      enabled: true
      externalAccess:
        enabled: true
    ```