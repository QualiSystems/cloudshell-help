---
sidebar_position: 4
---

# 3rd Party Software

This article describes the 3<sup>rd</sup> Party software that is required, optional, and supported by CloudShell.

Note: Administrator-level permission is necessary when installing 3<sup>rd</sup> Party software that is required by CloudShell.


## Required

If any of the below 3rd Party components are missing from your computer, the CloudShell installation wizard will install them before installing the CloudShell application.

- IIS Express 8.0-10.0 (Required for using CloudShell Portal)
- Microsoft .NET Framework 4.7.1
- Microsoft Visual C++ Runtime 9.0
- Microsoft Visual C++ Runtime 10.0
- Microsoft Visual C++ 14.0 or greater
- Microsoft Windows Installer 4.5
- Node.js 18.13.0
- pip 21.2.4 and up for Python 3.7 and pip 19.2.3 for Python 2.7.18
- Python Python 2.7.18 and 3.9.9
- RabbitMQ 3.12.0 (installed as part of the Quali Server installation)
- Erlang 25.2.3
- VCTools++ (For all users. Required for compiling Python dependencies)
- Apache HTTP Server 2.4.54

## Optional

- Studio, Authoring: LabView runtime and LabView tools are available as separate installations. For details, contact your Quali Account Manager.
- Insight: Requires Sisense server installation and additional configurations
- Microsoft PowerShell version 2 is required for the shell tool.
- Ranorex version 8.3.2 (last verified in CloudShell 9.3) is required for GUI Automator.
    
    :::note Notes
    
    - When using Ranorex with certain browsers, you might have to install a plugin. For example, the Ranorex plugin for Chrome is available at this [link](http://www.ranorex.com/support/user-guide-20/instrumentation-wizard/google-chrome.html).
    - Before upgrading Ranorex, note that tests using Ranorex will be upgraded but cannot be downgraded back to the previous Ranorex version. Therefore, we recommend to back up your local and shared tests before upgrade.
    :::
    
- TLS 1.2, 1.3 protocol

## Supported

- Virtualization: VMware vCenter. The supported versions are vSphere 5.5 - 6.5, 6.7, 7.
- Source control: TortoiseSVN Version 1.7/1.7.9
- BI tools: Sisense W2021.x (8.2 is supported for existing Insight deployments)
- Quality control (For deployment information, see the [TestShell Studio](https://help-archive.quali.com/Online%20Help/2023.3/TestShell/Content/TSS/TSS-Home.htm) help):
    
    - HP Quality Center QC 10
    - HP Quality Center QC 11/11.5
    - HP ALM 12.2x and above

## Related Topics

- [Supported Tools and Technologies (New Job Scheduling)](../cloudshell-suite/new-jss-install-config/supported-tools.md)