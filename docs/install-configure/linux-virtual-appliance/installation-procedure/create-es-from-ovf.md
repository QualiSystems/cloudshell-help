---
sidebar_position: 1
---

# Create VM using the OVF Template (vSphere)

Use the following steps to use vSphere to deploy the OVF template and create a VM.

**To create a VM by deploying the OVF template:**

1. Make sure you have the Linux Execution Server installation files in a temporary location. For details, see [Downloading the Linux Virtual Appliance Image](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Dwnld-Lnx-VM-Img.htm).
    
2. In your local machine, login to vSphere with administrator credentials.
3. Click **File > Deploy OVF Template**. The **Deploy OVF Template** dialog box is displayed.
    
    ![](/Images/Linux2/vSphereSource_418x400.png)
    
4. Click **Browse** and navigate to the directory where the installation files are located.
5. In the **Deploy from a file or URL** field, select the required OVF file
    
6. Click **Next**. View the summary of the OVF template. If the details are correct, click **Next**.
    
    The End User License Agreement page is displayed with the details of license agreements that are associated with the software that is installed in the OVF template.  
    
7. You must accept the license agreements to deploy the OVF template. If no license agreements are associated with the installed software, this screen will not appear. Click **Next**.
    
    ![](/Images/Linux2/vSphereNameAndLocation_418x400.png)
    
8. Enter the name for the deployed OVF template.
    
    The length of the name can be up to 80 characters long and should be unique within the VM folder. Names are case sensitive.
    
9. Select the folder location within the inventory for the virtual appliance. Click **Next**.
    
    ![](/Images/Linux2/vSphereDiskFormat_418x400.png)
    
10. Specify **Thin Provision**. Click **Next**.
11. When the deployment has completed, click **Power On**.
12. Right-click the VM and select **Open Console**.
13. In the VM console window, check the **Settings Screen** to be sure that it uploaded without root errors.
14. Next, [Log into the VM](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Login.htm).