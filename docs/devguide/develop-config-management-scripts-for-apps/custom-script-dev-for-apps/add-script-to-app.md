---
sidebar_position: 1
---

# Add Your Script to an App

Now that we have tested and debugged our script, the next step is to add it to an App template. For details, see [Adding App templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding).

1. In CloudShell Portal, open the **Manage>Apps** page.
    
2. Edit or create an App.
    
3. Open the **Configuration Management** tab.
    
4. From the **Select Tool** drop-down list, select **Script**.
    
5. Select the appropriate **Connection Method**, depending on the VM’s operating system. Select **Windows Remote Management** for Windows machines, or **SSH** for Linux.
    
6. Specify the script’s **URL**. Make sure you specify the raw version of the URL (GitHub, GitLab and BitBucket are supported).
    
    If the selected **Connection Method** is WinRM, the script file should have a .ps1 extension. Similarly, if **SSH** is selected, the script file extension can be either .sh or .bash.
    
    If the URL is protected by Basic Authentication, specify the **Username** and **Password**, or **Token**.
    :::important
    If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open **Resource Manager Client>Resource Families>Configuration Services** (**Ansible Configuration** or **Custom Script Configuration**) and set the **Verify Certificate** attribute to **False**.
    :::
7. To pass parameters to the script (as environment variables), click **Add Parameter** and enter each parameter’s name and value.
    
    You can add parameters to the App template in the following ways:
    
    - Provide the value as part of the App template, making it the default value for every instance of this App template
        
    - Specify a static value in the App in the blueprint
        
    - Specify a dynamic value in the App in the blueprint, linking the parameter to one of the blueprint’s Global Inputs. To do so, just enter the global input’s name in curly brackets as the parameter value, or click the “plus” button to select an available Global Input.
        
    - Pass a value using the API, as illustrated in [Parameters](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Custom-Scripts.htm#CustomScriptParams). This will replace any value provided in the App template or in the blueprint
        
        ![Discovery Dialog](/Images/Devguide-configuration-management/Config-manage-Adding-Your_4_624x444.png)
        

8. Open the **App Resource** tab, and enter the VM’s access credentials.
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Config-manage-Adding-Your_5_624x444.png)
    
9. Click **Done**.
