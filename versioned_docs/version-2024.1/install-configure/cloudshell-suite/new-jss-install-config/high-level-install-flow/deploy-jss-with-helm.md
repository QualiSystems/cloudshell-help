---
sidebar_position: 3
---

# Deploy the New Job Scheduling Infrastructure using Helm

**To install the Helm chart:**

1. In a command-line terminal, navigate to the folder containing the CloudShell.tgz package you downloaded from [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
    
    ```python
    cd <cloudshell-helm-charts-folder>
    ```
    
2. Deploy the Helm package using the customized parameters file:
    
    ```python
    helm upgrade --install cloudshell cloudshell.tgz -f customer.values.yaml --namespace cloudshell
    ```
    
    Where:
    
    - "cloudshell.tgz" is the name of the helm chart package
        
    - "customer.values.yaml" is the parameters file name
        
    - "cloudshell" is the name of the logical namespace in which the deployment will reside. To install CloudShell on the default namespace, remove `--namespace cloudshell` flag from the command.
        
    
    The command output should look like this:
    
    ![](/Images/IG2/HelmOutput.png)
    

**To query the CloudShell services status:**

- Use kubectl, Kubernetes Dashboard or your preferred Kubernetes UI.