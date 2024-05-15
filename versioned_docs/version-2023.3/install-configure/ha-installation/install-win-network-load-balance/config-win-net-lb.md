---
sidebar_position: 1
---

# Configuring Windows Network Load Balancing

This section describes how to configure Windows Network Load Balancing using the NLB Manager.

**To configure Windows Network Load Balancing:**

1. Click **Start > Administrative Tools > Network Load Balancing Manager** or from the command prompt, type **NLBMgr** and then press **Enter**).
    
    ![](/Images/HA1/Configuring-Windows-Network_459x315.png)
    

2. Right click **Network Load Balancing Clusters**.
    
    ![](/Images/HA1/Configuring-Windows-Network_1_253x73.png)
    

3. Select **New Cluster**.
    
    ![](/Images/HA1/Configuring-Windows-Network_2_339x321.png)
    

4. In the **Host** field, enter the details of the ARR servers and then click **Connect**.
    
    ![](/Images/HA1/Configuring-Windows-Network_3_407x386.png)
    
5. Select the client's network and click **Next**.
    
    :::note
    Due to a limitation, the network card must use a static IP address and not DHCP. (see [Known Issues and Limitations (High Availability)](../known-issues-and-limitations.md)).
    :::
    

6. In the **New Cluster: Host Parameters** window, click **Add**.
    
    ![](/Images/HA1/Configuring-Windows-Network_4_377x359.png)
    

7. In the **New Cluster: Cluster IP Addresses** window, click **Add**.
    
    ![](/Images/HA1/Configuring-Windows-Network_5_409x378.png)
    

8. In the **Cluster Parameters** section, add the cluster "full Internet name" and click **Next**. This name is used in the DNS as the Virtual front name.
9. In the **Port Rules** section, click **Edit**.
10. Select the port range to use in the cluster. This is the port range that is redirected in the cluster to other hosts.
    
    - Usually http users use from: 80 to:80
    - Usually SSL users use from:443 to:443

11. Under **Filtering mode**, select **Single host** and click **OK**.
12. Click **Finish**.