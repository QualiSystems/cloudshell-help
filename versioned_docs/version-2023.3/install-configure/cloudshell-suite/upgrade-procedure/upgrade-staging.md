---
sidebar_position: 2
---

# Upgrade the Validation Environment

The purpose of installing the CloudShell upgrade on a standalone environment is to ensure that the new version functions correctly under your organization-specific environment.
:::note
Quali recommends that you validate the organization-specific environment before upgrading CloudShell.
:::
**The validation stage checks for:**

- Environment-specific installation errors
- Environment-specific compatibility issues

## What you need for this stage

- [CloudShell installation files](#cloudshell-installation-files)
- [3rd party installation files](#3rd-party-installation-files)
- [Database management application](#database-management-application)
- [Standalone environment for validation](#standalone-environment-for-validation)
- [Temporary license](#temporary-license)

### CloudShell installation files

You need the installation package for the CloudShell implementation, and the installation package for the current implementation.

You can get the latest CloudShell version from your ftp account at [ftp.qualisystems.com](ftp://ftp.qualisystems.com/).

To download the installation files for an earlier version of CloudShell, go to the [Quali Download Center](https://support.quali.com/hc/en-us/articles/231613287).

### 3rd party installation files

Get the installation files of the 3rd party tools being used with CloudShell on your production environment, for example:

- Traffic Generator GUI application (Ixia, Spirent, and so on)
- Ranorex 5.1.3 to 8.3.2 (last verified in CloudShell 9.3) – Older versions of Ranorex must be upgraded to continue using the GUI tools.

### Database management application

For example:

- SQLPlus
- SQL Management Studio

### Standalone environment for validation

Ideally, the validation environment is identical to your production environment.

Some guidelines:

- Consider using virtual machines and/or terminal server if your production is a virtualized one.
- Aim to use the same hardware sets, same OS versions, same database brand and version, and so on. The purpose is to be able to find all environment-related issues using this environment. You need at least two machines: one for the Quali Server and one for the client applications.
- Make sure that the different devices that are being used by CloudShell are available for your validation stage. That includes traffic generators, L1 switches, other switches, and so on.
:::note
If a device is being used by the production environment, it cannot be used in the standalone environment at the same time – this is extremely important when dealing with L1 switches.
:::
### Temporary license

1. To activate CloudShell on the validation environment, you need a license.
2. Run the CloudShell installer or the fingerprint application and get the fingerprint information of your machines.
3. Send a license request with this information to Quali Customer Support through the [Quali Support Center](https://qualisystemscom.zendesk.com/agent/dashboard).

## Validation Environment Upgrade Procedure

Perform a full backup of CloudShell’s database from the production environment and save the backup files for later use.

The files are used to copy the production database information to the standalone environment as a backup for the production database in case a rollback is required.

In a virtualized environment, consider creating an image of the Quali Server and client machines for a quick and easy rollback in case it is needed.

In the validation environment:

1. Follow the Installation Guide and install the same CloudShell version that is currently installed on your production environment.
2. Install the 3rd party applications (Traffic Generator GUI applications, Ranorex, and so on).
3. Install a database management application.
4. Restore the production environment database files.
5. Activate CloudShell and verify that all applications are functional.
6. In Resource Manager, perform the following steps:
    1. Verify that all resources exist in the Resource Explorer.
    2. Verify that you can create, edit, and delete sandboxes and activate blueprints.
    3. Verify that resources can launch commands and applications.
        
:::note
Make sure your validation environment is ready before continuing to the next step.
:::
7. If you are using an L1 switch in your environment, stop usage of any L1 switches that are shared with the production environment.
    
    An L1 switch can be controlled only by a single Quali Server at any time. Since the L1 switch is usually a shared resource between the production and validation environments, it is required to stop the usage of the L1 switch on the production environment, before using it in the validation environment. That includes closing all Resource Manager Client applications and any driver projects that use the TestShell API library.
    
8. Run the **setup.exe** file to perform the upgrade.

Proceed to [Upgrade the Production Environment](./upgrade-production.md).