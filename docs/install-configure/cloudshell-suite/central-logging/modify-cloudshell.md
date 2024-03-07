---
sidebar_position: 2
---

# Configure Elastic Stack for Central Logging

After you configure the log4net appenders, install and configure Elastic Stack to pull data from FileBeat.

**To configure Elastic Stack:**

1. Install Elastic Stack version 7.14, as explained in this official Elastic doc: [https://www.elastic.co/guide/en/elastic-stack-get-started.](https://www.elastic.co/guide/en/elastic-stack-get-started)
2. If Elasticsearch is installed outside the New Job Scheduling Kubernetes cluster, ensure connectivity between Elasticsearch and the cluster.
3. Install FileBeat version 7.14 as explained in this official Elastic doc: [https://www.elastic.co/guide/en/beats/filebeat/current/running-on-kubernetes.html](https://www.elastic.co/guide/en/beats/filebeat/current/running-on-kubernetes.html). FileBeat allows the transmission of logs from the Kubernetes-based New Job Scheduling services to Elastic Stack.
    :::tip Important
    Make sure to specify your Elastisearch host and username/password in the `filebeat-kubernetes.yaml`.
    :::
4. In the Elastic application, go to **Manage>Index Management** and make sure some log data has been collected.
    
    ![](/Images/IG2/CentalLoggingViewData.png)
    
5. Define an index pattern.
    1. Scroll down to Kibana, click **Index Patterns** and then click **Create index pattern**:
        
        ![](/Images/IG2/CentralLoggingIndexPatterns.png)
        
    2. In the **Index pattern name** field, specify **filebeat-\*** and click **Next step**.
        
        ![](/Images/IG2/CentalLoggingCreateIndexPattern.png)
        
    3. Select **@timestamp** from the **Time field** dropdown list and click **Create index pattern**.
        
        ![](/Images/IG2/CentalLoggingCreateIndexPattern2.png)
        
        This concludes the Elastic Stack integration with CloudShell. At this point, CloudShell log data should be properly displayed in Elastic Stack. For details about consuming log data, see this official Elastic doc: [https://www.elastic.co/guide/en/kibana/current/discover.html.](https://www.elastic.co/guide/en/kibana/current/discover.html)