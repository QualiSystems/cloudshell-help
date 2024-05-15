---
sidebar_position: 2
---

# Modify CloudShell to Use the Kubernetes-based Services

Once the New Job Scheduling infrastructure deployment completes, you need to do the following in order to configure CloudShell Server to use its components:

- Enable the Kubernetes cluster components to receive inbound communication from the Quali Server.
- Configure CloudShell to use these Kubernetes-based services instead of the out-of-the-box versions that are embedded in Quali Server

**To modify CloudShell to use the Kubernetes-based services:**

1. Verify the External IP addresses of the `sandbox-service-svc` and `cloudshell-rabbitmq-ha` Kubernetes services. This can be achieved by running the following command:
    
    ```python
    kubectl get svc -n cloudshell
    ```
    
    From the below output example, you will need the **External IP** and **Port(s)** details for the above services:
    
    ![](/Images/IG2/ExternalIps.png)
    
    For more details about `kubectl get`, see the official Kubernetes documentation at: [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get)
    
2. Open the C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config file.

1. Add the following keys and set the external IPs:
    
    ```xml
    <add key="UseEmbeddedSandboxService" value="False"/>
    <add key="SandboxServiceHost" value="<sandbox-service-svc-external-ip>"/>
    <add key="SandboxServiceRestPort" value="<port-number>"/>
    <add key="RabbitHostname" value="<cloudshell-rabbitmq-ha-external-ip>"/>
    <add key="RabbitPort" value="<port-number>"/>
    ```
    
    For example:
    ```xml
    <add key="UseEmbeddedSandboxService" value="False"/>
    <add key="SandboxServiceHost" value="192.168.70.204"/>
    <add key="SandboxServiceRestPort" value="8888"/>
    <add key="RabbitHostname" value="192.168.70.201"/>
    <add key="RabbitPort" value="5671"/>
    ```
    
2. Save the file.
3. Rerun the Quali Server configuration wizard.