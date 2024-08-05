---
sidebar_position: 5
---

# Enable WinRM on Windows VMs to Support Configuration Management

To allow the Execution Server to run configuration management on a Windows VM, you need to configure the Windows Remote Management (WinRM) service on the App's cloud provider VM. The configuration needs to be included in the VM's image or VM template. However, if the image doesn't include this configuration, you can specify a script that performs this configuration on the deployed VM, as explained below.

:::note Notes
- The below procedure explains how to configure WinRM over HTTP. If you want to configure WinRM to run over HTTPS, visit this [Microsoft Docs article](https://docs.microsoft.com/en-us/troubleshoot/windows-client/system-management-components/configure-winrm-for-https). WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the **winrm\_transport** parameter to **ssl**.
- In CloudShell 8.0, we provide App Starter Packs that deploy Azure Windows VMs with this configuration. For details, contact [Quali Support](http://support.quali.com/).
:::
**To configure the connection:**

1. In the Windows VM, start the **Windows Remote Management** service and set the **Startup type** to **Automatic**.
2. Run command-line as administrator.
3. Run each of the following commands separately (you may need to acknowledge the running of some of these commands in the process):
    
    ```python
    winrm quickconfig
    winrm set winrm/config/service '@{AllowUnencrypted="true"}'
    winrm set winrm/config/service/Auth '@{Basic="true"}'
    ```
    :::note
    **If you encounter an error message stating that these commands are invalid, consider trying the commands without the single quotes.**
    :::
4. If the VM is not part of a domain, you need to make sure the deployed VM's newly created network is private. If the network is public, the firewall will not allow WinRM connections through.
    1. Open the Windows **Local Security Policy** window (secpol.msc in Command-Line) **\> Network List Manager Policies \> Unidentified Networks**.
    2. Set **Location type** to **Private**.

## Related Topics

- [Adding App templates](../admin/cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates)
