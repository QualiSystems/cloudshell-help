---
sidebar_position: 1
---

# Downloading the CloudShell HA Plugin

The HA Plugin is available from the [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center). Registration to Quali's Support Center is required, so if you have not already done so, register in advance.

**To download the HA Plugin:**

1. Download the HA Plugin (zip file) and extract all the files under one folder.
    
    For example: `C:\Quali`.
    
    :::tip
    Make sure the path doesn't have any white spaces as they may cause the installation's PowerShell scripts to behave unexpectedly.
    :::
    
    The HA Plugin for this version (zip file) contains the following files:
    
    - **CloudShell Portal** folder: WebPortal.vbs script that is used to cluster CloudShell portal using Windows cluster (basic setup)
    - **LicenseServer** folder: LicenseServer.vbs script that is used in a Windows cluster and is triggered by cluster events
    - **Quali Server** folder: PowerShell and VBS script files that are used to cluster Quali server as well as an `elasticsearch.yml` file
2. Ensure the files are placed on the exact path on each of the cluster nodes.