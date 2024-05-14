# High-level installation flow

The New Job Scheduling uses a microservices architecture, which includes several services, each deployed over a scalable group of containers that are hosted on a Kubernetes cluster. This infrastructure is deployed using Helm, which is a modern orchestration platform for deploying microservices-based software on Kubernetes.

In order to deploy the New Job Scheduling, you will need the following:

- kubectl Kubernetes management utility installed on a client machine and configured with admin access on the Kubernetes cluster. For details on the required Kubernetes cluster configuration, see [Requirements (New Job Scheduling)](../requirements.md).
    
- Helm CLI tool installed on the kubectl machine
    
- CloudShell.tgz Helm package. Please download from [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
    

The high-level installation flow is as follows:

1. Install and configure CloudShell (CloudShell Server installation wizard, MSSQL Server, MongoDB server, etc.)
2. [Customize the Deployment of the New Job Scheduling Infrastructure](./customize-deployment/index.md)
    1. [Customize the Deployment Configuration Parameters](./customize-deployment/customize-deployment-config-params.md)
    2. [Set the Mongo, Rabbit and Sandbox Services to Use Static IPs](./customize-deployment/set-static-ip.md)
3. [Modify CloudShell to Use the Kubernetes-based Services](./modify-cloudshell.md)
4. [Deploy the New Job Scheduling Infrastructure using Helm](./deploy-jss-with-helm.md)
5. Review [New Job Scheduling Administrative Actions](../../../install-configure/cloudshell-suite/new-jss-install-config/admin-action) for additional useful configurations.