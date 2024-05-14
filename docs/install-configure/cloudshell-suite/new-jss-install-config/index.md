# New Job Scheduling Installation and Configuration

This article explains how to integrate the classic components of CloudShell, which are Windows OS-based, with the Kubernetes services required for the new CloudShell Job Scheduling services to work.

Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load.

:::note Notes
- CloudShell provides a "Kubernetes deployment" option that defines the deployment.
- The components of the Kubernetes-based New Job Scheduling are packaged as Docker images and reside in an online Docker registry.
:::

:::tip
This section relates to the New Job Scheduling, which provides enhanced performance and support for different testing frameworks. For the original Job Scheduling, see [Job Scheduling](../../../portal/job-scheduling/index.md). 
:::