---
sidebar_position: 2
---

# Create VM using the qcow2 Image File (KVM)

Use the following steps to create a VM on your Centos 7 machine (CentOS 7.2 and up).
:::note
Your CPU must have hardware virtualization support (Intel VT-x or AMD-V) to be able to use KVM.
:::
**To create a VM by deploying the OVF template:**

1. Make sure you have the Linux Execution Server installation files in a temporary location. For details, see [Downloading the Linux Virtual Appliance Image](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Dwnld-Lnx-VM-Img.htm).
2. Login to your machine as root user.
3. Navigate to the directory where the installation files were downloaded. Create a backup copy of the qcow2 image file.

4. Move the qcow2 image file to the directory where you want to place the VM.
5. In the Linux desktop, open Virt-manager ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_74x57.png) and click **Create a new virtual machine** ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_1.png).
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_2.png)
    

6. In the **New VM** window, in the **Name** field, enter a name for the VM.
7. Select **Import existing disk image** and click **Forward**.
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_3.png)
    

8. Click **Browse** and navigate to the path of the `qcow2` image file. Select the image file and click **Open**. Click **Forward**.
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_4.png)
    

9. For memory and CPU settings, specify values that match your system. For the purposes of this procedure, the values 4 GB RAM (4096 MB) and 4 CPUs are used. Click **Forward**.
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_5_334x328.png)
    

10. Select **Customize configuration before install**. Click **Finish**.
    
    The details of the VM to be created are displayed.
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_6_389x327.png)
    

11. From the left pane, select **IDE Disk 1**. Click **Advanced** options.
    
    ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_7_223x136.png)
    

12. Ensure that IDE is selected in the **Disk bus** field.
13. In the **Storage format** field, select qcow2. Click **Apply**.
14. Click ![](/Images/Linux2/Creating-a-VM-using-the-qcow2_8_76x14.png).
    
    The VM is created.
    
15. Next, [Log into the VM](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Login.htm).