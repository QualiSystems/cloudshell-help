---
sidebar_position: 3
---

# Upgrade the Production Environment

When upgrading the production environment, the working procedures from the validation upgrade are repeated, see [Upgrade the Validation Environment](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm).

In this article:

- [What you need for this stage](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-prod-env.htm?tocpath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____3#What)
- [Production environment upgrade procedure](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-prod-env.htm?tocpath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____3#Producti)

## What you need for this stage

### CloudShell installation files

You need the installation package for the CloudShell implementation, and the installation package for the current implementation.

You can get the latest CloudShell version from your ftp account at [ftp.qualisystems.com](ftp://ftp.qualisystems.com/).

To download the installation files for an earlier version of CloudShell, go to the [Quali Download Center](https://support.quali.com/hc/en-us/articles/231613287).

### 3rd party installation files

Get the installation files of the 3rd party tools being used with CloudShell on your production environment, for example:

- Traffic Generator GUI application (Ixia, Spirent, and so on)
- Ranorex 5.1.3 to 8.3.2 (last verified in CloudShell 9.3) – Older versions of Ranorex must be upgraded to continue using the GUI tools.

### Prepare the production environment

All users should be logged off from the production machine, and the work on this machine should be suspended until the procedure is completed.

### Acquire a permanent license

To activate CloudShell on the validation environment, you need a license. For more information, see [Select a CloudShell License](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Configure%20CloudShell%20Products/slct-licns.htm).

To acquire a permanent license:

1. Run the CloudShell installer or the fingerprint application and get the fingerprint information of your machines.
2. Send a license request with this information to Quali Customer Support through the [Quali Support Center](https://support.quali.com/).

## Production environment upgrade procedure

- Run the setup.exe provided in your CloudShell installation package, select the Custom / Upgrade procedure and upgrade your CloudShell components the same way you upgraded the validation environment.

## Related Topics

- [Upgrade the Validation Environment](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm)
- [Best Practices for CloudShell Production Environment](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Appendices/prod-bst-prctc.htm)