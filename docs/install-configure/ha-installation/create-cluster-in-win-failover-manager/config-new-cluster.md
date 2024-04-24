---
sidebar_position: 2
---

# Configuring a New Cluster

**To configure a new cluster:**

1. Open **Windows Failover Cluster Manager**.
2. In the main page, click **Validate configuration**. This opens a wizard that helps testing the cluster configuration and generates a report.
3. In the wizard, click **Next**.
4. Enter the names of the cluster nodes and click **Next**.
    
    ![](/Images/HA1/Configuring-a-new-cluster_493x339.png)
    

5. Select **Run all tests** and click **Next**.
6. Click **Next** to run the tests. This could take a few minutes.
    
    After the tests have run, inspect the resultant report and see if there are errors. Do not consider errors that relate only to the storage section as the CloudShell HA Plugin does not use shared storage. To help with the examination of the results, you can open the html version of the report by clicking **View report** ![](/Images/HA1/Configuring-a-new-cluster_1_140x21.png).
    
    ![](/Images/HA1/Configuring-a-new-cluster_2_511x343.png)
    

7. Select the **Create the cluster now using the validated nodes** check-box and click **Finish**.
    
    ![](/Images/HA1/Configuring-a-new-cluster_3_273x33.png)
    
    The **Create cluster** wizard opens.
    

8. In the first page of the wizard, click **Next**.
9. Enter a cluster name. This name is published to the DNS. Click **Next**.
10. In the **Confirmation** page, click **Next**.
11. Click **Next**. The wizard concludes.
    
    The cluster is now configured.
    
    Cluster related information can be seen in the cluster tree in the left pane inside **Failover Cluster Manager**.
    
    ![](/Images/HA1/Configuring-a-new-cluster_4.png)