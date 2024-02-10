# Upgrade Procedure

This article describes the required steps to upgrade to the latest version of CloudShell.

A new license is required when installing CloudShell, or upgrading to a major (8.0, 9.0, etc.) or minor (8.1, 8.2, etc.) version. Patches do not require a new license.

:::note
Starting with CloudShell 2020.2, sandbox events data is stored on MongoDB. As such, upgrade from an earlier CloudShell version may take longer than usual while this data is being copied from SQL Server to MongoDB.
:::

Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA.

If you need to upgrade from an earlier version, contact [Quali Support](https://support.quali.com/hc/en-us).

:::note
Patches must be installed on GA versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database.
:::

## General upgrade notes

- **If you're using Packaging API**, we recommend you upgrade your package editor version to the one included in this CloudShell release - [Getting Started with Packaging API](https://help.quali.com/Online%20Help/2023.3/Portal/Content/API/Pckg-API/Get-strtd.htm). The old package editor (pre-2022.1) will work with the new CloudShell but on different flows might behave unexpectedly in existing blueprints containing Apps.
    
- Starting with CloudShell 2020.2, **Sisense server cannot coexist with Quali Server** on the same machine and will need to be moved. For details, see [How to Migrate Sisense to a New Server](https://help.quali.com/Online%20Help/2023.3/Portal/Content/Troubleshooting/How-to-move-sisense-server.htm).
- **Changes made to CloudShell's out-of-the-box attributes will be overridden by the upgrade** (except for attribute rule associations which are not affected). These attributes serve the 1<sup>st</sup> Gen shells that are provided out of the box with CloudShell, including the cloud provider shells, Custom Script, Ansible and Networking shells. To fix these issues, do the following:
    - For cloud provider shell attributes: We recommend using the 2<sup>nd</sup> Gen shells instead. 2<sup>nd</sup> Gen shells use their own namespaced attributes and settings and therefore are unaffected by upgrades. Note that 2<sup>nd</sup> Gen versions of these shells are available for download from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
    - For the rest of the out-of-the-box attributes: Maintain custom minimal "DataModel only" shell packages that update just the default attributes and resource models as appropriate, and import into CloudShell Portal (as a blueprint package) after upgrade. This can be automated using the [Quali API](https://help.quali.com/Online%20Help/2023.3/Portal/Content/API/Quali-API-Topic.htm)'s **Import Package** method. The DataModel xml files are located at C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages.
    - Whenever you run the Quali Server configuration wizard, the out-of-the-box packages are reimported. So to avoid having to import the custom packages every time you run the wizard, remove the out-of-the-box packages from the default location. Please do this every CloudShell upgrade.
- **Before running the installer**, do the following:
    - Make sure no other users are logged in/have open sessions with the machines that will be upgraded.
    - Stop the service to avoid data change.
    - If Sandbox API was configured to run in secure mode, back up the files/folders added/updated in [Configuring Sandbox API to Work in HTTPS Mode](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Appendices/CS-Snbx-API-Https.htm), if the Sandbox API was configured to run in secure mode.
- **If Sandbox API was configured to run in secure mode**, after upgrading CloudShell to a new version or patch, make sure these files/folders were not overwritten/deleted:
    - C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\conf\\httpd.conf
    - C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\win64\\ssl
- **If you're using the New Job Scheduling**, make sure to upgrade it as well. See [Upgrade Considerations for New Job Scheduling](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/JSS/jss-upgrade.htm).

## Related topics

- [Upgrade Preparation](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgd-prep.htm)
- [Upgrade the Validation Environment](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm)
- [Upgrade the Production Environment](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-prod-env.htm)
- [Migrate Python Dependencies to PyPi Server](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/Mgrt-Pyth-pckgs.htm)