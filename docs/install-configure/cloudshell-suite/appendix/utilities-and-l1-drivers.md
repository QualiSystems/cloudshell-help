---
sidebar_position: 4
---

# Utilities and Layer 1 Drivers

This article describes the utilities and Layer 1 (L1) drivers that are installed with CloudShell.

## Utilities

CloudShell includes the utilities listed in the following tables:

- [System utilities](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/appc-utls-l1-drvrs.htm?Highlight=Utilities%20and%20Layer%201%20Drivers#System)
- [Configuration utilities](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/appc-utls-l1-drvrs.htm?Highlight=Utilities%20and%20Layer%201%20Drivers#Configur)
- [Runtime utilities](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/appc-utls-l1-drvrs.htm?Highlight=Utilities%20and%20Layer%201%20Drivers#Runtime)
- [Additional configuration files and utilities](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/appc-utls-l1-drvrs.htm?Highlight=Utilities%20and%20Layer%201%20Drivers#Addition)

### System utilities

| Utility | Description | Location |
| --- | --- | --- |
| CloudShell Monitor | Stores and centralizes logs from all installed CloudShell applications.<br/>CloudShell Monitor can also be used to start and stop CloudShell services. | Start menu > QualiSystems > Tools > CloudShell Monitor |

### Configuration utilities

| Utility | Description | Location |
| --- | --- | --- |
| CloudShell Configuration | Utility for configuration of installed CloudShell applications. | Start menu > QualiSystems > Tools > CloudShell Configuration |
| Runtime utilities | | |
| CloudShell Runtime Configuration | Runtime support for external script engines. | Start menu > QualiSystems > Tools > CloudShell Runtime Configuration |
| Remote Runner Service | The Remote Runner Service is a runner managed through Windows services for running scripts and commands in the background.<br/>The Remote Runner Service is not required for executing scripts or commands through the Remote Runner GUI. | Windows Services > CloudShell Remote Runner |
| CloudShell Spy | A runtime debugger that displays running steps when executing a CloudShell Authoring executable project.<br/>Installed with CloudShell Runtime.<br/>**Note:** The Spy tool is intended for debugging Authoring drivers under Quali support guidance. Please do not use it in a different fashion. | Start menu > QualiSystems > Tools > CloudShell Spy |

### Runtime utilities

| Utility | Description | Location |
| --- | --- | --- |
| CloudShell Runtime Configuration | Runtime support for external script engines. | Start menu > QualiSystems > Tools > CloudShell Runtime Configuration |
| Remote Runner Service | The Remote Runner Service is a runner managed through Windows services for running scripts and commands in the background.<br/>The Remote Runner Service is not required for executing scripts or commands through the Remote Runner GUI. | Windows Services > CloudShell Remote Runner |
| CloudShell Spy | A runtime debugger that displays running steps when executing a CloudShell Authoring executable project.<br/>Installed with CloudShell Runtime. | Start menu > QualiSystems > Tools > CloudShell Spy 

### Additional configuration files and utilities

Additional configuration files and utilities that are available from the installation archive include:

| Utility | Description | Location |
| --- | --- | --- |
| Updated resource family definitions | Updated definitions for installed resource family and models. The updates are mandatory for L1 switches\* and optional for other devices.<br/>\*The definitions are included with every driver as well. If you import an updated L1 driver, you do not have to perform this update. | Installation archive\\Resource Manager Additional Files\\Configuration\\system.xml |

## L1 drivers
:::tip 
This section discusses CloudShell's legacy L1 drivers, which were provided out-of-the-box in previous versions. However, starting with CloudShell 9.1, the legacy L1 drivers are no longer provided with CloudShell as the Quali Repositories [page](https://github.com/orgs/QualiSystems/repositories) includes a comprehensive list of L1 shells you can use. If you're still using legacy drivers, see this Quali Community's Forums [post](https://github.com/orgs/QualiSystems/discussions/66).
:::
CloudShell includes the following Layer 1 (L1) drivers and driver configuration files, which are installed in the `CloudShell\Server\Drivers` folder.

The list of supported switches for each driver is included in the driver configuration files.

The legacy supported drivers are available in the [Quali Forums](https://github.com/orgs/QualiSystems/discussions/categories/forums?discussions_q=sdk+category%3AForums), and missing ones can be provided on demand via the [Idea box](https://github.com/orgs/QualiSystems/discussions/categories/idea-box).

| Driver | Version | Driver configuration file | Supported firmware |
| --- | --- | --- | --- |
| MRV\_MCC\_4640 | 3.0.18.5 | MRV\_MCC\_4640\_RuntimeConfig.xml | MRV v4.6 mcc 04 |
| MRV\_MCC\_4840 | 3.0.18.5 | MRV\_MCC\_4840\_RuntimeConfig.xml | MRV v4.8 mcc 04 |
| MRV\_MCC\_4870 | 3.0.18.5 | MRV\_MCC\_4870\_RuntimeConfig.xml | MRV v4.8 mcc 07 |
| ONPATH\_Horizon\_0244 | 3.0.18.5 | ONPATH\_Horizon\_0244\_RuntimeConfig.xml | Horizon 2.4.4 |
| CW\_GLX4000 | 3.0.14 | CW\_GLX4000\_RuntimeConfig.xmls | LXfw v1.10.0.0 |
| APCON\_AGGREGATE | 3.0.17 | APCON\_AGGREGATE\_RuntimeConfig.xml | CLI3-4 |
| APCONCLI4 | 3.0.18.3 | APCON\_CLI4\_RuntimeConfig.xml | CLI3-4 |
| Calient\_S\_5.2-7 | 3.0.18.3 | Calient\_S\_5.2-7\_RuntimeConfig.xml | Calient S-Series 5.2-7 |
| Calient\_FC\_2301 | 3.0.18.3 | Calient\_FC\_2301\_RuntimeConfig.xml | Calient FiberConnect 2.3.0.1 |
| FiberZone\_AFM | 3.0.17 | FiberZone\_AFM\_RuntimeConfig.xml | FiberZone\_AFM5.2.0.5 |
| FiberZone\_AFM\_C3 | 3.0.18.2 | FiberZone\_AFM\_C3\_RuntimeConfig.xml | FiberZone\_AFM\_C3 5.2.0.5 |
| JUNOS\_12.3R3.4<br/>(L2 as L1) | 3.0.18.3 | JUNOS\_12.3R3.4\_RuntimeConfig.xml | MX/EX SW versions 12.3R3.4 |