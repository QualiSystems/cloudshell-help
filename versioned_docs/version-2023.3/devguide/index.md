# The CloudShell DevGuide

Welcome! In the following pages you will learn all you need to know to become an expert CloudShell developer. The guide is intended both for developers taking their first steps with the platform and seasoned CloudShell developers.

***Before developing shells and scripts, please familiarize yourself with CloudShell by taking [Quali U courses](http://courses.quali.com/). These courses also include installation instructions for the CloudShell SDK package that deploys a developer edition of CloudShell on which you can perform your training and development activities.***

## How this guide is organized

The CloudShell developer guide is comprised of several distinct content areas. Each one describes a different branch of development or possible integration options with CloudShell. Each area of the guide is independent of the others and includes its own ‘getting started’ tutorials, examples, instructional videos and articles. You don’t have to follow a specific order so feel free to explore the areas that are relevant to your development. The areas of the DevGuide are:

- **[Developing Shells](./developing-shells/index.md): Extending CloudShell support for your lab devices**
    
    Developers can extend CloudShell’s capabilities to provide additional functionality for Apps or physical devices by creating Shells. This includes better modeling for these components as well as custom commands that can be used in the sandbox to integrate the component in CloudShell. This area of the guide covers the end-to-end flow of creating new Shells and importing them into CloudShell.
    

- **[Developing Orchestration Scripts](./develop-orch-scripts/index.md): Implementing sandbox workflows**
    
    Orchestration scripts are a feature in CloudShell that enables the implementation of sandbox workflows. CloudShell has built-in flows for setup and teardown, which deploy and tear down Apps, resources and connections between components in the sandbox without having to add additional code. Users can extend or fork these scripts, as well as implement additional workflows for save/restore operations, scaling, or more use case-specific workflows for anything from performance testing to failover simulation or traffic generation.
    

- **[Developing Configuration Management Scripts for Apps](./develop-config-management-scripts-for-apps/index.md): Developing configuration scripts for App VMs**
    
    Configuration management extends CloudShell Apps by allowing the running of scripts, which install applications on virtual machines (VMs) deployed in the sandbox or run post-deployment configuration. This configuration can be executed as part of the sandbox setup, or later on in a live sandbox. Configuration management operations can be performed using custom scripts or Ansible playbooks.
    

- **[Developing Custom Cloud Provider Shells](./devguide/develop-custom-cloud-provider-shells): Implementing support for cloud providers**
    
    CloudShell 9.0 provides support for the Cloud Provider shell, which enables you to integrate CloudShell with the cloud provider of your choice. CloudShell provides out-of-the-box support for cloud providers AWS EC2, Microsoft Azure and VMware vCenter. However, to deploy VMs on other cloud providers, such as Kubernetes or Oracle Cloud, or create a modified version of one of our out-of-the-box cloud providers, you will need to create a shell that allows this to happen.
    

- **[Available CloudShell APIs](./available-cs-api/index.md)**
    
    This chapter describes the different APIs CloudShell offers, the uses for each as well as useful links and implementation examples.
    
    In addition, this area examines how CloudShell can be used in conjunction with other DevOps tools and within the DevOps pipeline. This includes CloudShell’s APIs as well as existing Open Source projects for integrating CloudShell with other products.
    

## Where to go next

The [Setting up the Development Environment](devguide/setting-up-dev-env) section contains important information for tooling and infrastructure you should install before starting development.

You can then proceed to any one of the development areas described above.