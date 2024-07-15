---
sidebar_position: 3
---

# Set the MongoDB Connection Strings

1. In the Additional Services window, set the MongoDB connection strings.
    
    ![](/Images/IG2/ConfiguringMongoDBConnectionStrings.png)
    
2. If you selected to use your organization’s Mongo DB (**Mongo DB Server or cluster** option in the CloudShell Setup wizard) and require authentication, perform the steps in the [Creating a dbOwner user on the MongoDB databases](#creating-a-dbowner-user-on-the-mongodb-databases) section below.
    
3. Specify the locations for the three MongoDB databases:
    
    - Reservations Database
    - Events Database
    - Sandbox Service Database
        
    :::note
    In a Kubernetes deployment, the Sandbox Service database is not created even though it was configured in the Quali Server configuration wizard.
    :::
        
    
    Use the default connection strings provided by the Quali Server configuration wizard if you installed MongoDB on the Quali Server machine. If you’re using your organization’s Mongo DB, use the following syntax:
    
    **Syntax**:
    
    `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`
    
    Where:
    
    - `host1[:port1][,...hostN[:portN]` allows specifying multiple DBs for cluster configurations
    - \[`defaultauthdb]` is required if the Mongo DB uses authentication
    
    **Example - connection string for Quali Mongo DB database:**
    
    `mongodb://QualiAdmin:QualiAdminPassword@localhost:27017/Quali?authSource=admin`
    
    CloudShell supports these MongoDB connection formats – **Standard Connection String Format** and **DNS Seedlist Connection Format**. For details, see this official MongoDB docs article: [https://docs.mongodb.com/manual/reference/connection-string/](https://docs.mongodb.com/manual/reference/connection-string/).
    
4. Click Next and proceed to [Select Where to Install CloudShell](../select-install-location.md).

## Creating a dbOwner user on the MongoDB databases

When using an external Mongo DB that requires authentication, you must create a user with "dbOwner” rights on the Mongo DB databases. Note that you don’t need to create the databases beforehand as Quali will do that for you.

To create the dbOwner user on the Mongo DB databases:

1. Connect to the Mongo DB server and open a Mongo shell instance.
2. Run the following:
    
    ```js
    use admin
    db.createUser({
        user: "QualiAdmin",
        pwd: "QualiAdminPassword",
        roles: [
        { role: "dbOwner", db: "Quali" },
        { role: "dbOwner", db: "QualiLog" },
        { role: "dbOwner", db: "QualiSandboxService" },
        ]
    })
    ```
    
    
    For additional information, see these official MongoDB docs articles:
    
    - [https://docs.mongodb.com/manual/tutorial/enable-authentication/](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
    - [https://docs.mongodb.com/manual/tutorial/create-users/](https://docs.mongodb.com/manual/tutorial/create-users/)
3. Click Next.
4. If prompted, click Next to perform a database upgrade.
    
    ![](/Images/IG2/DatabaseUpgrade.png)
    
5. Click Next and proceed to [Select Where to Install CloudShell](../select-install-location.md).