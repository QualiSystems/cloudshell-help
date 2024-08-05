---
sidebar_position: 5
---

# Configure the MongoDB Database Connection

## Configure access to a MongoDB database

**To configure access to a MongoDB database:**

1. In the **Additional Services** window, set the MongoDB connection strings.
    
    ![](/Images/IG2/ConfiguringMongoDBConnectionStrings.png)
    
2. If you selected to use your organization’s Mongo DB (**Mongo DB Server or cluster** option in the CloudShell Setup wizard) and require authentication, before you continue, perform the steps in [Creating a dbOwner user on the MongoDB databases](./config-mongodb-connection.md#creating-a-dbowner-user-on-the-mongodb-databases) below.
    
3. Specify the locations for the three MongoDB databases:
    
    - Reservations Database
    - Events Database
    - Sandbox Service Database
        :::note
        In a Kubernetes deployment, the Sandbox Service database is not created even though it was configured in the Quali Server configuration wizard.
        :::
    
    Use the default connection strings provided by the Quali Server configuration wizard if you installed MongoDB on the Quali Server machine. If you’re using your organization’s Mongo DB, use the following syntax:
    
    **Syntax:**
    
    ```javascript
    mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
    ```
    
    Where:
    
    - `host1[:port1][,...hostN[:portN]` allows specifying multiple DBs for cluster configurations
    - `[defaultauthdb]` is required if the Mongo DB uses authentication
    
    **Instance example - connection string for Quali db (with authentication):**
    
    ```javascript
    mongodb://QualiAdmin:QualiAdminPassword@localhost:27017/Quali?authSource=admin
    ```
    
    **Cluster example - connection string for QualiLog db (containing a replica set with 3 nodes):**
    
    ```javascript
    mongodb://192.142.15.7:27017, 192.142.15.12:27017, 192.142.15.31:27017/QualiLog?replicaSet=rsTest
    ```
    
    CloudShell supports these MongoDB connection formats – **Standard Connection String Format** and **DNS Seedlist Connection Format**. For details, see this official MongoDB docs article: [https://docs.mongodb.com/manual/reference/connection\-string/](https://docs.mongodb.com/manual/reference/connection-string/).
    
4. Click **Next**.
5. If prompted, click **Next** to perform a database upgrade.
    
    ![](/Images/IG2/DatabaseUpgrade.png)
    

## Creating a dbOwner user on the MongoDB databases

When using an external Mongo DB that requires authentication, you must create a user with "dbOwner” rights on the Mongo DB databases. Note that you don’t need to create the databases beforehand as Quali will do that for you.

**To create the dbOwner user on the Mongo DB databases:**

1. Connect to the Mongo DB server and open a Mongo shell instance.
2. Run the following (use admin):
    
    ```javascript
    db.createUser(
      {
        user: "QualiAdmin",
        pwd: "QualiAdminPassword",
        roles: [
          { role: "dbOwner", db: "Quali" },
          { role: "dbOwner", db: "QualiLog" },
          { role: "dbOwner", db: "QualiSandboxService" },
          { role: "dbOwner", db: "JobScheduling" },
          { role: "dbOwner", db: "Scheduler" },
          { role: "dbOwner", db: "IdentityService" },
        ]
      }
    )
    ```
    
    For additional information, see these official MongoDB docs articles:
    
    - [https://docs.mongodb.com/manual/tutorial/enable-authentication/](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
    - [https://docs.mongodb.com/manual/tutorial/create-users/](https://docs.mongodb.com/manual/tutorial/create-users/)

## Related Topics

- [Best Practices for MongoDB](../complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb.md)