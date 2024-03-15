---
sidebar_position: 7
---

# Controlling App Deployment Orchestration

In this article, we’ll learn how to customize the App’s behavior during the sandbox’s out-of-the-box Setup process. This article does not apply to Teardown, which by design powers off and deletes the App VMs from the cloud provider.

Customizing the App’s orchestration is done through the use of attributes, which are included with the App.

- **Auto Power On** powers on the VM at setup. Note that this attributes will affect the live status icon, so setting “Auto Power On = False” will result in the App not being powered on in the sandbox, and the App will have an offline live status icon.
    
- **Autoload** discovers the deployed App. This includes attribute values and the VM’s structure, if the VM represents a virtual device that has a resource structure like blades and ports. For example, vRouters and vSwitches.
    
- **Wait for IP** determines if CloudShell will refresh the VM’s IP after it is powered on. The decision depends on the cloud provider’s deployment behavior. In other words, does the cloud provider refresh the IP after the VM is powered on (for example VMware vCenter), or is the IP immediately available once the VM is created (like on AWS EC2).