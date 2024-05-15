---
sidebar_position: 16
---

# Common CloudShell Packages

This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi.

*While there are additional packages for specific needs and capabilities, the packages listed below cover most of the required functionality. For additional information, see [Quali’s Shell Framework (Python 2)](./quali-shell-framework-py2.md) for Python 2.7.x automation and [Quali’s Shell Framework (Python 3)](./quali-shell-framework-py3.md) if you’re developing in Python 3.x.*

:::note Notes:
- *cloudshell\-orch-core* is the only package you need for orchestration scripts.
- *cloudshell\-orch-core* contains *cloudshell\-automation-api*
- While *cloudshell\-automation-api* includes several methods that apply to shells, it provides unnecessary access to CloudShell administrative areas and is therefore not recommended to be used in shells.
:::
| Package | Python version | Description | Links |
| --- | --- | --- | --- |
| cloudshell\-orch-core | Python 2/3 | Package for writing CloudShell orchestration scripts. For additional information, see [Best Practices for working with orchestration scripts](../develop-orch-scripts/getting-started-with-orch-scripts.md#best-practices-for-working-with-orchestration-scripts). | [PyPi](https://pypi.org/project/cloudshell-orch-core/)/[GitHub](https://github.com/QualiSystems/cloudshell-orch-core) |
| cloudshell\-automation-api | Python 2/3 | Package for working with CloudShell Automation API. | [PyPi](https://pypi.org/project/cloudshell-automation-api/)/[Documentation](pathname:///api-docs/2023.3/Python-API/) |
| cloudshell\-logging | Python 2/3 | Package for creating shell loggers. | [PyPi](https://pypi.org/project/cloudshell-logging)/[GitHub](https://github.com/QualiSystems/cloudshell-logging) |
| cloudshell\-core | Python 2 | Legacy logging package (replaced with *cloudshell\-logging* in version 9.3). | [PyPi](https://pypi.org/project/cloudshell-core/)/[GitHub](https://github.com/QualiSystems/cloudshell-core) |
| cloudshell\-snmp | Python 2/3 | Package for developing shell communication with devices via SNMP. | [PyPi](https://pypi.org/project/cloudshell-snmp/)/[GitHub](https://github.com/QualiSystems/cloudshell-snmp) |
| cloudshell\-cli | Python 2/3 | Package for developing shell communication with devices via CLI. | [PyPi](https://pypi.org/project/cloudshell-cli/)/[GitHub](https://github.com/QualiSystems/cloudshell-cli) |
| cloudshell\-shell-core | Python 2/3 | Package containing base shell functionality and interfaces. | [PyPi](https://pypi.org/project/cloudshell-shell-core/)/[GitHub](https://github.com/QualiSystems/cloudshell-shell-core) |
