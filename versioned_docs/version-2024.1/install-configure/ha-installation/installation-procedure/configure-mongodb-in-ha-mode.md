---
sidebar_position: 4
---

# Configure MongoDB in HA Mode (Cluster)

Using MongoDB in high availability mode requires the use of MongoDB replica sets. A replica set is a group of mongod processes that manage the same data set, providing redundancy and high availability. For additional information, see the official MongoDB documentation: [https://docs.mongodb.com/manual/replication/](https://docs.mongodb.com/manual/replication/).

**To configure the MongoDB cluster:**

1. Install MongoDB on all the nodes in your cluster.
2. Stop the MongoDB Server Service (if running).
3. Run Command Prompt as administrator, navigate to the MongoDB Server's `\bin` directory (usually at `C:\Program Files\MongoDB\Server\4.2\bin\`) and run this command:
    
    ```javascript
    mongod --dbpath "C:\Program Files\MongoDB\Server\4.2\data" --logpath "C:\Program Files\MongoDB\Server\4.2\log\mongod.log" --port 27017 --replSet rsTest -–bind_ip 0.0.0.0
    ```
    
    or for multiple nodes:
    
    ```javascript
    mongod --dbpath "C:\Program Files\MongoDB\Server\4.2\data" --logpath "C:\Program Files\MongoDB\Server\4.2\log\mongod.log" --port 27017 --replSet rsTest -–bind_ip localhost, <IP1>, <IP2>, <IP3>…
    ```
    
    :::note Notes:
    - You can change all variables in the command and also run the command through a config file.
    - Make sure you set **\--bind\_ip** to 0.0.0.0 or include the IPs of the machines that need to access the MongoDB, including the other machines in the cluster. For details, see this MongoDB docs article: [https://docs.mongodb.com/manual/core/security-mongodb\-configuration/](https://docs.mongodb.com/manual/core/security-mongodb-configuration/).
    :::
4. Repeat steps 2 and 3 for each node in the cluster.
5. In one of the nodes, connect to the Mongo shell from a different Command-Prompt and run the following command:
    
    ```javascript
    rs.initiate( {
       _id : "rsTest",
       members: [
          { _id: 0, host: "<1st_node_ip>:27017" },
          { _id: 1, host: "<2nd_node_ip>:27017" },
          { _id: 2, host: "<3rd_node_ip>:27017" }
       ]
    })
    ```
    :::note-one-line
    **Note:** Host addresses must be either all IPs or all hostnames.
    :::
6. To verify the state of the replica set and set configurations, run:
    
    ```javascript
    rs.status()
    ```
    
7. On each secondary node, connect to the mongo shell from a different Command-Prompt and run the following command:
    
    - On MongoDB 4.2:
        
        ```javascript
        rs.slaveOk()
        ```
        
    
    - On MondoDB 4.4 and up:
        
        ```javascript
        rs.secondaryOk()
        ```
        
8. Later on in the High Availability installation process, you will also need to install a MongoDB cluster as part of the Quali Server installation and specify the cluster's connection strings. This is all explained in [Select the Database Type](../../cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md) and [Configure the MongoDB Database Connection](../../cloudshell-suite/configure-products/config-mongodb-connection.md).
    

## Related Topics:

- [Best Practices for MongoDB](../../cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb.md)
- [Known Issues and Limitations (High Availability)](../known-issues-and-limitations.md)