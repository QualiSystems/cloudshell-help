# High-level installation flow

The New Job Scheduling uses a microservices architecture, which includes several services, each deployed over a scalable group of containers that are hosted on a Kubernetes cluster. This infrastructure is deployed using Helm, which is a modern orchestration platform for deploying microservices-based software on Kubernetes.

In order to deploy the New Job Scheduling, you will need the following:

- kubectl Kubernetes management utility installed on a client machine and configured with admin access on the Kubernetes cluster. For details on the required Kubernetes cluster configuration, see [Requirements (New Job Scheduling)](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-prerequisites.htm).
    
- Helm CLI tool installed on the kubectl machine
    
- CloudShell.tgz Helm package. Please download from [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
    

The high-level installation flow is as follows:

1. Install and configure CloudShell (CloudShell Server installation wizard, MSSQL Server, MongoDB server, etc.)
2. [Customize the Deployment of the New Job Scheduling Infrastructure](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-cstmz-dply.htm)
    1. [Customize the Deployment Configuration Parameters](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-cstmz-dply-cnfg.htm)
    2. [Set the Mongo, Rabbit and Sandbox Services to Use Static IPs](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-static-mongo-rbbt-sndbx.htm)
3. [Modify CloudShell to Use the Kubernetes-based Services](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-use-k8s-srvcs.htm)
4. [Deploy the New Job Scheduling Infrastructure using Helm](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-helm-install.htm)
5. Review [New Job Scheduling Administrative Actions](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-additional-actions.htm) for additional useful configurations.