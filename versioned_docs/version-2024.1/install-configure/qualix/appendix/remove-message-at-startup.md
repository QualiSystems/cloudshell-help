---
sidebar_position: 3
---

# (Optional) Removing Message at Startup

Perform these steps to remove a message stating that the VM is looking for a floppy drive at startup. These steps remove the floppy drive from the BIOS of the VM.
:::note
The functionality of the VM is not affected whether these steps are performed or not.
:::
**To modify the VM settings:**

1. In the desktop, open the VMware vSphere client.
2. Right-click the VM in the vSphere client and select **Edit Settings**.
3. Click the **Options** tab, select **Boot options**.
4. In the **Force BIOS Setup** area, select the option **The next time the virtual machine boots, force entry into the BIOS setup screen.**
    
    ![](/Images/QualiX/Optional-Removing-message.png)
    
5. Click **OK**.  
    
6. Restart the VM.
    
    On the restart of the VM, the **BIOS Setup Utility** is displayed.
    
    ![](/Images/QualiX/Optional-Removing-message_1.png)
    
7. In the **Main** tab, change the value of the default **Legacy Diskette A** to **Disabled**.
8. Select the **Boot** tab.
    
    ![](/Images/QualiX/Optional-Removing-message_2.png)
    
9. Modify the order that devices are set to boot. Move **Hard Drive** to the first position above **Removable Devices**.
10. Press **F10** to save and then exit the **Setup Utility**.