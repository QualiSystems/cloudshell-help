# Select the Database Type

CloudShell uses two databases for storing data:

- SQL Server is used like before for storing CloudShell data such as resource, user and blueprint data.
- MongoDB is used to store data related to the New Job Scheduling , including information related to suites, jobs, tests, reports as well as permitted user identity information. Starting with CloudShell 2020.2, sandbox events data is stored on MongoDB. MongoDB data will be included in Insight in future versions.

For more information, see [New Job Scheduling Architecture](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/JSS/jss-architecture.htm).

1. In the **Database Type** window, select the database types to use with CloudShell.
    
    ![](/Images/IG2/Select-an-installation-option_3_1.png)
    
2. Select the SQL Server to use.
    
    - **Microsoft SQL Server** to install CloudShell's databases on an existing SQL Server.
        
        :::tip
        To use AWS RDS with CloudShell, contact your Customer Success Representative.
        :::
        
    - **Microsoft SQL Express** if you already have SQL Server 2019 Express. If a database server is not installed or is not available from a remote machine, select the **Install Microsoft SQL Server 2019 Express** checkbox to allow CloudShell to install SQL Server 2019 Express for you.
        
    :::tip
    For high load systems, we recommend using an SQL Server that is hosted on a separate machine (not Quali Server).
    :::
    
3. Select the MongoDB to use (create on-the-fly on the Quali Server or use an external MongoDB instance/cluster). CloudShell officially supports Mongo 4.2 and above (Community and Enterprise editions).
    
    - If your system administrator has a centralized MongoDB instance or cluster that can be utilized for CloudShell, select the **Mongo DB Server or cluster** option (Supported for MongoDB 4.2 and above).
        
        :::tip
        If you want to use a higher version of MongoDB, make sure to first upgrade to the relevant MongoDB version, as explained in [How to Upgrade MongoDB From 4.2 to 6.0](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Appendices/mongoDB-upgrade-4.2-6.0.htm).
        :::
        
    - If there is no external MongoDB, select **Local MongoDB instance** to enable CloudShell installer to use an existing instance of MongoDB. If you don't have an existing MongoDB instance or cluster, select **Install MongoDB Server 6.0.4** to install and configure a local MongoDB Server 6.0.4 instance (Community edition).
    
    :::tip
    For high load systems, we recommend using a cluster/instance that is hosted on a separate machine (not Quali Server). For additional information, see [Best Practices for MongoDB](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Appendices/mongoDB-best-prctc.htm).
    :::
    
4. Click **Next** and proceed to [Set the MongoDB Connection Strings](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-addt-srvcs.htm).

## Related Topics

- [Database Prerequisites](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Overview/db-prereqs.htm)
- [Configure the SQL Server Database Connection](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-sql.htm)
- [Configure the MongoDB Database Connection](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-MongoDB.htm)