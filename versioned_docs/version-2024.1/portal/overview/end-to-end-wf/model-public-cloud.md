---
sidebar_position: 4
---

# Modeling Public Cloud Services in CloudShell

In some scenarios, you may want to model a public cloud service or a SaaS product in the sandbox. For example:

- Modeling an AWS caching service as an element in a sandbox
- Modeling a Salesforce service to allow retrieving Salesforce information in sandbox orchestration. In this scenario, the Salesforce service doesn’t have to be an element in any sandbox.

This is done by creating a CloudShell service shell that contains all the relevant attributes, automation and logic required to access and use the cloud service. For this purpose, we’ve created the [Cloud Service Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Cloud%20Service%20Shell%20Standard.md), which provides the framework for implementing support for cloud services.

To create a cloud service:

1. Create a service shell using the `gen2/cloud-service` shell template. See [Creating a Shell from a template](https://qualisystems.github.io/devguide/reference/2023.2.0/shellfoundry-intro.html#creating-a-shell-from-a-template).
2. Add the relevant automation and attributes. See [Customizing Shells](https://qualisystems.github.io/devguide/shells/2023.2.0/customizing-shells.html).
3. Package and install the shell on CloudShell. See [Packaging and importing a Shell into CloudShell](https://qualisystems.github.io/devguide/reference/2023.2.0/shellfoundry-intro.html#packaging-and-importing-a-shell-into-cloudshell).
4. Expose the shell to the relevant domains. See [Associating categories to a service shell](https://qualisystems.github.io/devguide/shells/2023.2.0/customizing-shells.html#associating-categories-to-a-service-shell).
5. Optionally, set up orchestration scripts, which will use the shell’s commands, and add them to the relevant blueprints. See [Getting Started with Orchestration Scripts](https://qualisystems.github.io/devguide/orchestration/2023.2.0/getting-started.html).
    
    :::note
    It is also possible to create an admin-only service that is hidden from regular users in the sandbox. For this purpose, we created the `gen2/admin-only-custom-service` shell template.
    :::