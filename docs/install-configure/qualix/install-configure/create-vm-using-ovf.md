---
sidebar_position: 1
---

# Create VM using the OVF Template (vSphere)

Use the following steps to use vSphere to deploy the QualiX template and create a VM.

**To create a VM by deploying the OVF template:**

1. In your local machine, login to vSphere with administrator credentials.
2. Click **File > Deploy OVF Template**.
3. In the **Deploy OVF Template** window, click **Browse**. Navigate to the directory where the installation files are located.
4. In the **Deploy from a file or URL** field, navigate to and then select the required OVF file.
5. Click **Next**. View the summary of the OVF template. If the displayed details are correct, click **Next**.
    
    The **End User License Agreement** page is displayed with the details of license agreements that are associated with the software that is installed in the OVF template.
    
6. Accept the license agreements to deploy the OVF template. If no license agreements are associated with the installed software, this screen does not appear. Click **Next**.
7. Enter the name for the deployed OVF template. The length of the name can be up to 80 characters long and should be unique within the VM folder. Names are case sensitive.
8. Select the folder location within the inventory for the virtual appliance. Click **Next**.
9. Specify **Thin Provision**. Click **Next**.
10. When the deployment has completed, click **Power On**.
11. Right-click the VM and select **Open Console**.
12. In the VM console window, check the **Settings Screen** to make sure that it uploaded without errors.
    
13. After installing the QualiX VM, continue with [Post Installation Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Post-Instl-Cnfg.htm).