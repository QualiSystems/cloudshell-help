---
sidebar_position: 2
---

# Implementing Configuration Management in CloudShell

This article explains the end-to-end flow for implementing configuration management in CloudShell Apps. For detailed information and implementation examples, see the CloudShell Dev Guide's [Developing Configuration Management Scripts for Apps](../../../devguide/develop-config-management-scripts-for-apps/index.md) chapter.

To implement configuration management:

1. For Ansible configuration management, make sure you have a compatible execution server running on a Linux computer - see [Configure Execution Server for Ansible](../../../devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible.md).
2. Develop the configuration management script or playbook - see [Adding App templates](../../../admin/cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates).
3. Make sure it's compatible with CloudShell App deployment by running an App with the custom script or playbook, and fixing any issues that arise.
    
    :::note
    To run configuration management on a Windows VM, the VM must have WinRM enabled. See [Enable WinRM on Windows VMs to Support Configuration Management](../../../devguide/enable-winrm-on-win-vm-for-cfg-mng.md).
    :::