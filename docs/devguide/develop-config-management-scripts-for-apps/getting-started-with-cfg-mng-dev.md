---
sidebar_position: 1
---

# Getting Started with Configuration Management Development

Configuration management allows you to run scripts that install applications on the virtual machines (VMs) deployed in the sandbox or run post-deployment configuration. This configuration can be executed as part of the sandbox setup, or later on in a live sandbox. Configuration management operations can be performed using custom scripts or Ansible playbooks. Custom scripts are typically used for simple operations, like installing a program on the VM or printing some messages, while Ansible is used for more complex tasks.

## Developing configuration management

The flow for developing configuration management is as follows, with minor differences depending on whether you’re using a script or playbook.

1. Write the script or playbook.
    
2. Manually simulate/debug the script or playbook.
    
3. Add the script or playbook to an App and deploy the App.
