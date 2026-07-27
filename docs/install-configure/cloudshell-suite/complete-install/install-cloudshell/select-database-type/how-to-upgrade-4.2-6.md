---
sidebar_position: 2
---

# How to Upgrade MongoDB From 4.2 to 7.0

Following security risks in earlier MongoDB versions, the MongoDB version bundled with CloudShell has been updated over successive releases. CloudShell 2026.1 bundles **MongoDB Server 7.0.30**.

## Disclaimer

The below instructions are for Cloudshell default installation with a standalone MongoDB installation only.

:::info Standalone vs. installer-managed MongoDB
When MongoDB was installed as part of the CloudShell installation (the **Local MongoDB instance** option), the CloudShell installer upgrades the bundled MongoDB Server automatically during a standard CloudShell upgrade — you do not need to run the steps in this article.

Follow this article only if you use a **standalone (non-installer-managed) MongoDB** deployment (the **Mongo DB Server or cluster** option), or an external MongoDB instance/cluster. In that case, you are responsible for upgrading MongoDB yourself before upgrading CloudShell.
:::

:::note MongoDB feature compatibility version
MongoDB requires upgrading through each major release in sequence (for example, 5.0 → 6.0 → 7.0). You cannot skip a major version. After each step, set the feature compatibility version (FCV) to the version you just moved to before proceeding to the next one, using:

```js
db.adminCommand( { setFeatureCompatibilityVersion: "<version>" } )
```

Only after MongoDB is running on 7.0 with its FCV set to `"7.0"` should you upgrade CloudShell to 2026.1. The CloudShell MongoDB .NET driver is unchanged in 2026.1, so no application-side database changes are required.
:::

:::note
MongoDB does not support Windows Server 2012. For details, see [Windows OS requirements](../../../../cs-system-requirements/min-requirements-for-cs.md).
:::

## Prerequisites

- RDP connection to Cloudshell server
- Cloudshell services down time
- Internet access to download all relevant files (can be done in a dedicated server and copied to Cloudshell server)

## Getting the files

1. Obtain the following MongoDB official files and place them in a temporary folder (referred to as "Downloads” in this guide) on the Cloudshell server:
    - [mongodb-windows-x86_64-4.4.22.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.22.zip)
    - [mongodb-windows-x86_64-5.0.18.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.18.zip)
    - [mongodb-windows-x86_64-6.0.6.zip](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.6.zip)
    - MongoDB shell: [mongosh-1.9.0-win32-x64.zip](https://downloads.mongodb.com/compass/mongosh-1.9.0-win32-x64.zip)

2. Enter the Cloudshell server and extract all files.

## Upgrade from 4.2 to 4.4

1. Start the MongoDB shell.
    - Navigate to `Downloads\mongosh-1.9.0-win32-x64\bin`
    - Double click the `mongosh.exe` executable.
    - Follow the instructions to connect to "localhost” (press enter).

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
    - Follow the instructions to connect to "localhost” (press enter).

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
    - Follow the instructions to connect to "localhost” (press enter).
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

    

## Upgrade from 6.0 to 7.0

CloudShell 2026.1 uses MongoDB Server 7.0. If your standalone MongoDB is on 6.0, upgrade it to 7.0 before upgrading CloudShell to 2026.1.

:::warning
Before starting, confirm that MongoDB is running on 6.0 and that its feature compatibility version (FCV) is already set to `"6.0"` (the last step of the previous section). MongoDB 7.0 refuses to start against data whose FCV is lower than `"6.0"`.
:::

The procedure mirrors the earlier steps — stop CloudShell and MongoDB, replace the `mongod.exe` binary with the 7.0 version, restart, verify, then raise the FCV — using the official MongoDB 7.0 binaries.

1. Obtain the official MongoDB 7.0 Windows binaries and a compatible MongoDB Shell (`mongosh`) from the MongoDB Download Center: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community). CloudShell 2026.1 is validated with MongoDB Server **7.0.30**.

2. Start the MongoDB shell and connect to `localhost`.

3. Validate the current feature compatibility version:
    ```js
    db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )
    // Expected response: { version: '6.0' }, ok: 1
    ```

4. Open **Task Manager > Services** and stop the **Quali Server** process (if running).

5. Shut down MongoDB by running:
    ```js
    use admin
    db.adminCommand( { shutdown: 1 } )
    // The shell connection closes. Close the shell window.
    ```

6. In File Explorer, open the extracted MongoDB 7.0 `bin` folder from your downloads.

7. In a second File Explorer window, open the `bin` folder of your MongoDB installation (for a default CloudShell install this is `C:\Program Files\MongoDB\Server\4.2\bin`).

8. Delete the existing `mongod.exe` from the MongoDB installation's `bin` folder.

9. Copy the `mongod.exe` from the MongoDB 7.0 `bin` folder into the MongoDB installation's `bin` folder.

10. Open **Task Manager > Services** and start the **MongoDB** service.

11. Start the MongoDB shell and verify the upgrade:
    ```js
    db.version()
    // Confirm a 7.0.x version is reported
    use Quali
    db.Reservation.countDocuments()
    // Confirm the reservation count matches the pre-upgrade count
    ```

12. (Optional) Start **Quali Server** and open the **Sandboxes** dashboard in CloudShell Portal to confirm data is intact, then stop **Quali Server** again.

13. Raise the feature compatibility version to 7.0:
    ```js
    db.adminCommand( { setFeatureCompatibilityVersion: "7.0", confirm: true } )
    ```
    :::note
    MongoDB 7.0 requires the additional `confirm: true` argument for `setFeatureCompatibilityVersion`. If your build of MongoDB 7.0 rejects `confirm`, rerun the command without it.
    :::

14. MongoDB is now on 7.0. Proceed to upgrade CloudShell to 2026.1.

For the authoritative, version-specific steps (including replica-set and sharded-cluster scenarios that are out of scope for this article), always follow MongoDB's official procedure: [Upgrade a Standalone to 7.0](https://www.mongodb.com/docs/manual/release-notes/7.0-upgrade-standalone/).

:::info Related 2026.1 prerequisite upgrades
Alongside MongoDB, CloudShell 2026.1 also upgrades other bundled prerequisites, which the CloudShell installer handles automatically: Node.js 22 → 24 LTS, Erlang OTP 25 → 26, and Apache httpd to 2.4.66. Note that Node.js 24 dropped 32-bit (x86) Windows support, so the x86 Node.js prerequisite has been removed from the installer; components requiring Node.js now run only on 64-bit Windows. For details, see [3rd Party Software](../../../../cs-system-requirements/third-party-software.md).
:::

## Related Topics

- [Select the Database Type](../select-database-type/index.md)
- [Best Practices for MongoDB](./best-practices-for-mongodb.md)