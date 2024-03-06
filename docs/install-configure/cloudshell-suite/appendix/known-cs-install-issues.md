---
sidebar_position: 2
---

# Known CloudShell Installation Issues

| Application | Description |
| --- | --- |
| All | There are two known issues for installing CloudShell on a “clean” PC with no existing components:<ul><li>Setup may require a reboot. Make sure to log back in as the same user that started the installation.</li><li>If setup does not restart automatically, you have to restart it manually.</li></ul> |
| All | A new installation should run between 10-30 minutes. The installation itself takes less than 10 minutes. Initial configuration should not take more than 20 minutes. |
| All | Installing CloudShell prerequisites requires administration privileges on the installation machine. |
| All | There is a filename length limitation in CloudShell that forces the user to locate the installation files on a non-deep location (for example, c:\\temp) before executing the installer. |
| All | When installing CloudShell on a virtual machine, external anti-virus applications running on the hypervisor may impact installation performance. Therefore, if performance issues occur, it is recommended to add CloudShell configuration files to the anti-virus white list. |
| Quali Server | The Erlang version supplied with CloudSell may be incompatible with certain Windows operating systems (Erlang known issue). Therefore, If you get a RabbitMQ installation error during Quali Server installation or configuration, please update the Erlang version, as explained in [CloudShell RabbitMq Service Fails to Start during Quali Server Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/RabbitMQ-failed-to-start-during-QSConfig.htm). |
| Sisense | Starting with CloudShell 2020.2, Sisense server cannot be installed on the Quali Server machine. Quali Server uses a dedicated RabbitMQ installation, resulting in a coexistence clash with the Sisense server's RabbitMQ. |