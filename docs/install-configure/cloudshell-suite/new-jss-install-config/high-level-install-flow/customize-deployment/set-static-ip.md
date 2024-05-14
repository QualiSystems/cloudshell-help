---
sidebar_position: 2
---

# Set the Mongo, Rabbit and Sandbox Services to Use Static IPs

:::note
This article explains how to set static IPs for the CloudShell services in a local Kubernetes deployment. For cloud-managed Kubernetes: Specify empty values `loadBalancerIP: ""`, and in the mongodb section, specify an empty array: `loadBalancerIPs: []`.
:::

Network providers such as Calico and MetalLB are used out-of-the-box to provide CloudShell's Kubernetes-based services with basic networking and to expose their external endpoints to the “outside” network. However, whenever one of these services is deleted and then recreated, there is a chance that the external address will change. To ensure this does not happen, make sure to set these CloudShell services to use static IPs.

The services are:

- Sandbox Service: Used by the Quali Server to start sandboxes.
- Mongo: Can be exposed for DB-related activities, such as debugging, remote access and maintenance.
- RabbitMQ: Used by Quali Server to relay messages to the Sandbox Service.
- Nginx Ingress: Allows external users to access the New Job Scheduling Portal, REST API and the REST API live documentation page.

**To set static IPs for CloudShell services:**

1. In the customer.values.yaml file, set the load balancer IP(s). Make sure to add any missing tags to code according to the following code examples:
    
    **Sandbox Service section:**
    
    Accessed by Quali Server and resides outside of the Kubernetes cluster on a Windows machine. `loadBalancerIP` exposes and allocates an external IP using the installer L2 providers (for example MetalLB) used for the Sandbox Service.
    
    ```python
    sandbox-service:
      sandboxService:
        service:    # external address (out of k8s) for the sandbox service
          loadBalancerIP: 192.168.74.84
    ```
    
    **MongoDB section:**
    
    If Mongo is enabled in the Helm chart, use the `loadBalancerIP` parameter to expose and allocate an external IP using the installer L2 providers (for example MetalLB) used for the MongoDB replicaset. The Quali Server can be configured to use this MongoDB instance.
    
    ```python
    mongodb:
     enabled: true
     externalAccess:
      service:
       loadBalancerIPs:# array of addresses, per the number of replicas to be used
        - "192.168.74.45"
        - "192.168.74.31"
    ```
    
    **RabbitMQ section:**
    
    Use the `loadBalancerIP` parameter to expose and allocate an external IP using the installer L2 providers (for example MetalLB) used for the RabbitMQ cluster.
    
    ```python
    rabbitmq:
     enabled: true
     service:
      loadBalancerIP: "192.168.74.78" # single address
    ```
    
    **Nginx Ingress section:**
    
    The ingress controller exposes port 80 by default. On top of the ingress controller, you can configure a certificate or SSO.
    
    ```python
    ingress-nginx:
     controller:
      service:
       loadBalancerIP: "192.168.74.8" # single address
    ```
    
2. Save the file.
3. Next, [Deploy the New Job Scheduling Infrastructure using Helm](../deploy-jss-with-helm.md).