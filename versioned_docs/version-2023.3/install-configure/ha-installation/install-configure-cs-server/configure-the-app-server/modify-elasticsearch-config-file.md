---
sidebar_position: 1
---

# Modifying the elasticsearch.yml configuration File

**To modify the elasticsearch.yml configuration file:**

1. Save the extracted `elasticsearch.yml` file under the name "**elasticsearch.yml.old**". Keep this file as a backup.
2. Save the `elasticsearch.yml` file in `~\Server\QuickSearch\config`.
3. Open the `elasticsearch.yml` file in a text editor.
4. In the cluster section, modify the value of **cluster.name** to your cluster name. Use a unique name to distinguish between CloudShell environments in your network. For example:
    
    ```yaml
    ############################## Cluster ###############################
    
    # Cluster name identifies your cluster for auto-discovery. If you're running multiple clusters on the same network, make sure you're using unique names.    
    #
    
    cluster.name: QS-CS-Local10.qualisystems.local
    ```