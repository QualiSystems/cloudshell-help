---
sidebar_position: 2
---

# Tips and Tricks for Custom Scripts

Please take the following under consideration when developing your script:

- Make sure the Execution Server can access the script’s raw URL.
    
- If the VM is loaded with a user that does not have the necessary permissions but you have a stronger user, pass that user to the App as a parameter to use it in the script as an environment variable (see the  [Parameters](../custom-script-dev-for-apps/index.md#parameters) example).
    
- If the App’s VM takes a long time to fully load, you may want to adjust the maximum time for the machine to respond by setting the **Timeout Minutes** attribute on the **Custom Script Configuration** resource model (in Resource Manager Client’s **Resource Families** explorer).
    
- To use a bash or sh script on a Windows VM, make sure WinRM is configured and loaded automatically to allow the custom script to communicate with that VM. A script for this is provided in [Enable WinRM on Windows VMs to Support Configuration Management](../../enable-winrm-on-win-vm-for-cfg-mng.md).