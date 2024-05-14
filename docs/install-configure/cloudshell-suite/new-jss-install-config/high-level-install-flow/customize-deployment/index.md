# Customize the Deployment of the New Job Scheduling Infrastructure

The New Job Scheduling functionality comprises several microservices that need to be deployed on Kubernetes. The services are:

- Sandbox Service
- Job Scheduling Service
- Identity Service
- Test Discovery Service
- Test Execution Service

The CloudShell Kubernetes deployment is done via Helm, which deploys the above services and interconnections.

:::note Notes
- It is also possible to deploy the Sandbox Service locally on a dedicated machine for high throughput deployments.
- If you plan on using an on-premise self-managed cluster, we recommend you follow the official Kubernetes documentation and install 3rd party components such as Calico to manage the different infrastructure aspects.
:::

## Related Topics

- [New Job Scheduling Architecture](../../new-jss-architecture.md)
- [Customize the Deployment Configuration Parameters](./customize-deployment-config-params.md)
- [Deploy the New Job Scheduling Infrastructure using Helm](../deploy-jss-with-helm.md)