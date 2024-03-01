---
sidebar_position: 2
---

# How to Upgrade MongoDB From 4.2 to 6.0

Following security risks in MongoDB 4.2, it was about time to update the version used by Cloudshell.

## Disclaimer

The below instructions are for Cloudshell default installation with a standalone MongoDB installation only.

:::note
MongoDB does not support Windows Server 2012. For details, see [Windows OS requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm#Software).
:::

## Prerequisites

- RDP connection to Cloudshell server
- Cloudshell services down time
- Internet access to download all relevant files (can be done in a dedicated server and copied to Cloudshell server)

## Getting the files

1. Obtain the following MongoDB official files and place them in a temporary folder (referred to as “Downloads” in this guide) on the Cloudshell server:
    - [mongodb-windows-x86_64-4.4.22.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.22.zip)
    - [mongodb-windows-x86_64-5.0.18.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.18.zip)
    - [mongodb-windows-x86_64-6.0.6.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.6.zip)
    - MongoDB shell: [mongosh-1.9.0-win32-x64.zip](https://downloads.mongodb.com/compass/mongosh-1.9.0-win32-x64.zip)

2. Enter the Cloudshell server and extract all files.

## Upgrade from 4.2 to 4.4

1. Start the MongoDB shell.
    - Navigate to `Downloads\mongosh-1.9.0-win32-x64\bin`
    - Double click the `mongosh.exe` executable.
    - Follow the instructions to connect to “localhost” (press enter).

2. Validate dependencies by running in the shell:
    ```js
    db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
    // Expected response: { version: '4.2' }, ok: 1
    ```

3. Get reservation count for reference after upgrade:
    - Switch to the Quali database:
        ```js
        use Quali
        db.Reservation.countDocuments()
        ```

4. Open **Task Manager > Services**.
5. Stop the **Quali Server** process.
6. Shut down MongoDB by running:
    ```js
    use admin
    db.shutdownServer()
    // Expected response: MongoNetworkError: connection 3 to 127.0.0.1:27017 closed
    // Then close the shell window
    ```

7. Navigate to the downloaded 4.4 bin folder in File Explorer:
    ```plaintext
    Downloads\mongodb-win32-x86_64-windows-4.4.22\bin
    ```

8. In a separate File Explorer window, open the MongoDB installation's bin folder:
    ```plaintext
    C:\Program Files\MongoDB\Server\4.2\bin
    ```

9. Delete the mongod.exe file from C:\Program Files\MongoDB\Server\4.2\bin.
10. Copy the new mongod.exe file from the 4.4\bin folder to C:\Program Files\MongoDB\Server\4.2\bin.
11. Open **Task Manager > Services**.
12. Start the **MongoDB** service.
13. Start the **MongoDB** shell and validate the version:
    ```js
    db.version()
    ```

14. (Optional) Start the **Quali Server** process and check sandboxes.
15. Stop **Quali Server** (if running).
16. Update MongoDB capabilities:
    ```js
    db.adminCommand({ setFeatureCompatibilityVersion: "4.4" })
    ```
    

## Upgrade from 4.4 to 5.0

1. Start the MongoDB shell.
    - Navigate to `Downloads\mongosh-1.9.0-win32-x64\bin`
    - Double click the `mongosh.exe` executable.
    - Follow the instructions to connect to “localhost” (press enter).

2. Validate dependencies by running in the shell:
    ```js
    db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
    // Expected response: { version: '4.4' }, ok: 1
    ```

3. Open **Task Manager > Services**.

4. Stop the **Quali Server** process.

5. Shut down MongoDB by running:
    ```js
    use admin
    db.shutdownServer()
    // response should look like: MongoNetworkError: connection 5 to 127.0.0.1:27017 closed
    // close the shell window
    ```

6. Enter the downloaded 5.0 bin folder in File Explorer:
    ```js
    Downloads\mongodb-win32-x86_64-windows-5.0.18\bin
    ```

7. In a different File Explorer, open the bin folder of MongoDB installation:
    ```js
    C:\Program Files\MongoDB\Server\4.2\bin
    ```

8. Delete the mongod.exe file in C:\\Program Files\\MongoDB\\Server\\4.2\\bin.

9. Copy the new mongod.exe file from the 5.0.18\\bin folder to C:\\Program Files\\MongoDB\\Server\\4.2\\bin.

10. Open **Task Manager > Services**.

11. Start the **MongoDB** service.

12. Start the **MongoDB** shell.
    - Validate version:
        ```js
        db.version()
        ```
    - Validate reservations are still there:
        ```js
        use Quali
        db.Reservation.countDocuments()
        ```

13. (Optional) Start the **Quali Server** process and enter the **Sandboxes** dashboard in CloudShell Portal.

14. Stop **Quali Server** (if running).

15. Update MongoDB capabilities:
    ```js
    db.adminCommand({ setFeatureCompatibilityVersion: "5.0" })
    ```

    

## Upgrade from 5.0 to 6.0

1. Start the MongoDB shell.
    - Navigate to `Downloads\mongosh-1.9.0-win32-x64\bin`
    - Double click the `mongosh.exe` executable.
    - Follow the instructions to connect to “localhost” (press enter).
2. Validate dependencies by running in the shell:
    ```js
    db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )
    // Expected response: { version: '5.0' }, ok: 1
    ```
3. Open **Task Manager > Services**.
4. Stop the **Quali Server** process (if running).
    :::warning
    From this step, there are differences from previous upgrade flows.
    :::
5. Shut down **mongoDB** by running:
    - Run  
        ```js
        db.adminCommand( { shutdown: 1 } )
        // response should look like: MongoNetworkError: connection 5 to 127.0.0.1:27017 closed
        // close the shell window
        ```

6. Ensure that the 5.0-series binaries are in your System PATH. To confirm your binary version, run the following command:
    - Open command line window.
    - Run
        ```js
        mongod --version
        ```
    - If 'mongod' is not recognized, add the bin folder to the system path:
        - Open **Environment Variables**.
        - Under **System Variables**, locate and select the **Path**.
        - Click **Edit**.
        - Click **New**.
        - Enter `C:\Program Files\MongoDB\Server\4.2\bin`.
        - Click **OK** in all windows.
        - Open a new command line window and retest.

7. Enter the downloaded 6.0 bin folder in File Explorer:
    ```plaintext
    Downloads\mongodb-win32-x86_64-windows-6.0.6\bin
    ```

8. In a different file explorer, open the bin folder of mongoDB installation:
    ```plaintext
    C:\Program Files\MongoDB\Server\4.2\bin
    ```

9. Delete the `mongod.exe` file from `C:\Program Files\MongoDB\Server\4.2\bin`.
10. Copy the new `mongod.exe` file from the `6.0.6\bin` folder to `C:\Program Files\MongoDB\Server\4.2\bin`.
11. Open **Task Manager > Services**.
12. Start the **MongoDB** service.
13. Start the **MongoDB** shell.
    - Validate version:
        ```js
        db.version()
        ```
    - Validate reservations are still there:
        ```js
        use Quali
        db.Reservation.countDocuments()
        ```

14. (Optional) Start **Quali Server** and enter the **Sandboxes** dashboard in CloudShell Portal.
15. Stop **Quali Server** (if running).
16. Update **MongoDB** capabilities:
    ```js
    db.adminCommand( { setFeatureCompatibilityVersion: "6.0" } )
    ```

    

## Related Topics

- [Select the Database Type](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Complete%20Installation/slct-db-typ.htm)
- [Best Practices for MongoDB](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/mongoDB-best-prctc.htm)