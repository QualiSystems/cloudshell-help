---
sidebar_position: 3
---

# Known Upgrade Issues

| Application | Description |
| --- | --- |
| All | Although the CloudShell installer should leave all of your current configurations intact, it does overwrite your existing applications. This may inadvertently affect some of your current settings. It is therefore imperative to back up your databases before upgrading. |
| TestShell API | Updating drivers using TestShell API assets:<ul><li>After upgrading to CloudShell, you need to manually update the TestShell API asset in Authoring, and then recompile any drivers using the API methods.</li><li>Drivers using the API to update values in the Quali Server only require updating of the asset.</li></ul> |
| Check in all libraries prior to upgrading | Verify that all the libraries are checked in. Checked out libraries are indicated by a different color icon. The parent folder also indicates if the folder contains a checked-out library. |
| All | Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA.<br/>If you need to upgrade from an earlier version, contact [Quali Support](https://support.quali.com/hc/en-us).<br/>**Note:** Patches must be installed on GA versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database. |
| All | Real-time virus protection may affect performance. |
| All | CloudShell upgrade overrides custom configuration files, including `customer.config`, `webconfig.xml`, `Quali.vbs`, `WebPortal.vbs`, `httpd.conf` and `LanguagePortal.Override.xml`. Therefore, copies of the latest files need to be saved and applied after upgrade. |
| Insight | When upgrading Insight to a version that includes new dashboards and widgets, these new areas will be empty initially and populate with data over time. For example, when upgrading to Insight 2021.2, the following widgets will be affected:<br/>New **Users** dashboard widgets:<ul><li>Logged in users</li></ul>New **Sandboxes** dashboard widgets:<ul><li>Denied sandboxes</li><li>Activated sandboxes with setup failed</li></ul> |