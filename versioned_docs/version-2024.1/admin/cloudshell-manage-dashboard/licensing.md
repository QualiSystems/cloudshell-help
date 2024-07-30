---
sidebar_position: 5
---

# Licensing

CloudShell's licensing mechanism is based on the amount of concurrent sandboxes. For better management of the licenses, the system administrator can create license pools – the total capacity is equal to the amount of purchased sandboxes. Licenses in CloudShell are managed in **Licensing** page, which is available to Admins only.

## License types

Licenses are required for each of the following:

| License name | Description | Type |
| --- | --- | --- |
| CloudShell Team / Premium Tier | Quali server.<br/>CloudShell Premium Tier supports High Availability, SSO, sandbox environment automation and enhanced orchestration. | 1 per Quali Server |
| Concurrent Environment for Team / Premium Tier | Concurrent Sandboxes | 1 per active sandbox |
| Concurrent Authoring | TestShell Studio, CloudShell Authoring | 1 per open application |
| Concurrent Execution | TestShell Runner, Execution Server (Running TestShell Tests) | 1 per open application |
| Remote Agent | TestShell Remote Runner | 1 per open application |
| Staging Environment | Additional permanent Quali Server for dev/staging activities (doesn’t include Concurrent Environment licenses). More than one may be purchased. | 1 per Quali Server |
| CloudShell Runtime | Required by all Quali Product components, and included out-of-the-box with every license package |  |

| Licensed features | Description |
|---|---|
| Save and Restore | Save and Restore plugin | 
| Job Scheduling | Job Scheduling. This holds true for both the original Job Scheduling used for TestShell Studio test suites and the New Job Scheduling that works with Robot tests. |

**Each license can be one of the following types:**

- **Floating**: Configured in the License Server, which is accessible to each product component. This license types requires an ongoing connection to the License Server. Disconnection will result in a temporary loss of the license, until the connection is resumed.
- **Seat**: Configured separately on each machine.
- **Commuter**: (Applies to the Studio, Runner and Authoring applications) Configured to temporarily use a floating license as a seat license on a single machine. This license allows you to continue working with the application in cases you have no access to the License Server (e.g. when you are out-of-office and your PC is not connected to any domain).

A new license is required when installing CloudShell, or upgrading to a major (8.0, 9.0, etc.) or minor (8.1, 8.2, etc.) version. Patches do not require a new license.

All license types have an expiration date.

A license is provided in one of the following formats: 

- **License file**: This format requires the fingerprint of the machine on which the license is configured. For a Floating license, the fingerprint of the License Server required. For a Seat license, the fingerprint of the machine on which the license in configured, is required.
- **Activation token**: This format requires an internet connection only. The license locks for the specific machine from which you activate the license.

## Configuring a license

**To configure a Floating license:**

1. If the License Server has an internet connection, a token will be provided for you.
    1. Run CloudShell License Server's configuration wizard.
    2. In the **Welcome** page, click **Next** and in the **License server settings** page click **Next**.
    3. In the **Configure a License** page, click **Specify Token**, enter the activation code, and click **Send**.
    4. Click **Next** and then **Finish**.
2. If the License Server doesn’t have an internet connection,
    1. Acquire the fingerprint of the Quali Server:
        1. Run CloudShell License Server's configuration wizard.
        2. In the **Welcome** page, click **Next** and in the **License server settings** page click **Next**.
        3. In the **Configure a License** page, click **Specify Token** and under **Email Fingerprint**, click **Generate and Copy Fingerprint to Clipboard**.
    2. Provide the copied fingerprint via a Quali Support License request ticket.
    
        You will receive a `.lsn` file containing your license entitlement.
    
    3. Save the file in a location accessible to the CloudShell License Server.
    4. To load the license file, in the **Configure a License** page, click **Browse** and point to the provided `.lsn` file.
3. Once the license is loaded, run the configuration wizard of each installed product component and do the following:
    1. In the **Select a License** page, select the **License Server** checkbox.
    2. In the **License server (enter address of your license server)** field, enter the server's IP address or name.
    3. Click **Next** and then **Finish**.

**To configure a Seat license:**

1. If the machine has an internet connection:
    1. Run the Configuration Wizard of the relevant product component:
    2. In the **Select a License** page, click **Get License File**.
    3. Enter the activation code and click **Send**.
    4. Confirm the rest of the process.
2. If the machine hasn’t an internet connection:
    1. Run the configuration wizard of the relevant product component:
    2. In the **Select a License** page, click **Get License File**, under **Email Fingerprint** click **Generate** and then click **Copy Fingerprint to Clipboard**.
    3. Provide the copied fingerprint via a Quali support license request ticket.
    
        You will receive a `.lsn` file which contains your license entitlement.
    
    4. Save the file in a location accessible to the relevant machine.
3. To load the license file, in the configuration wizard of the relevant product component, in the **Configure a License** page, click **Browse** and point to the provided `.lsn` file.
4. Click **Next** and then **Finish**.

**To configure a Commuter license:**
:::note
Commuter license is available for the following product components only: CloudShell Authoring, TestShell Studio TestShell Runner and Remote Runner.
:::
1. In the client, on which the relevant product component is installed, browse to the following folder: `C:\Program Files(X86)\Qualisystems\CloudShell\LicenseServer\Commute`.
2. Run the **WCommute.exe** utility on the relevant product component machine.
3. Connect to the License Server in one of the following ways :
    1. Click **Single Server** and enter the License Server's address (DNS or IP).
    
        -or-
    
    2.  Click **Search Subnet** to scan the network for it.
4. In the left pane, select the feature relevant to the license you require:
    
    | Feature | Description |
    | --- | --- |
    | QS\_Procedure\_Editor | For TestShell Studio or CloudShell Authoring licenses |
    | QS\_RemoteRunner | For a Remote Runner (execution) license |
    | QS\_Studio\_Runner | For a TestShell Runner license |
    | QS\_TestShellRuntime | Required license for any product component |
:::note    
The QS\_TestShell\_Runtime is required. Make sure to configure this license along with any other required license.
:::
5. Click **Check Out**.
6. On the same client, access the Configuration Wizard and in the **Select a license** page, select the **Commuter License** checkbox.
7. Click **Refresh**.
8. A validation message displays, indicating which commuter license was configured. Click **OK** to close the message box.
9. In Select a License page, click **Next**.
10. In the **Folder and file migration** page, click **Close**.

To convert the license back to floating:

1. Run the **WCommute.exe** utility on the relevant product component machine.
2. Connect to the License Server in one of the following ways :
    1. Click **Single Server** and enter the License Server's address (DNS or IP).
    
        -or-
    
    2. Click **Search Subnet** to scan the network for it.
    
3. In the left pane, select the relevant checked-out feature and then click **Check In**.

## Monitoring the license usage

In the **Licensing** page, the system administrator can monitor the current usage in each pool – how many concurrent sandboxes are in use in each pool.

![](/Images/CloudShell-Portal/Manage/LcnsManagement_611x170.png)

It includes the following information, which refers to the image above:

1. Active concurrent sandboxes allowed - total number of sandboxes in the system
2. Current usage – total number of active sandboxes in the system that are in one of the following statuses: active/setup/teardown/overtime
3. License expiration date
4. For each license pool:

    - Pool name
    - Domains using this pool
    - Pool size
    - Pool usage (total number of active sandboxes)

The status page is automatically refreshed at a set period. However, you can use the **Refresh** button to immediately refresh the **Licensing** page.

## Release license after idle time has elapsed

The applications specified below automatically release the license after the idle time has elapsed. The idle time is specified by the administrator by updating the `IdleLicenseReleaseWatchdog.IdleTimeInMinutes` key in the `customer.config` file. The application remains open and when focus is returned to the application, a new license is retrieved. However, if no licenses are available, a message is issued to notify the user that the license is missing. By default, when the application has been lying idle for 65 minutes, the license is released.

In the following conditions, idle time is not counted:

    - When TestShell Runner is under external control.
    - When a Test or function is either running or has paused.
    - When a seat license is being used.

The relevant applications are:

    - TestShell Studio
    - TestShell Runner
    - CloudShell Authoring

## Related Topics

- [Manage Dashboard Overview](../../admin/cloudshell-manage-dashboard/manage-dashboard-overview.md)
