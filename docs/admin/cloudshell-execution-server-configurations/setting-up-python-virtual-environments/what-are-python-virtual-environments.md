---
sidebar_position: 1
---

# What are Python Virtual Environments?

*This article discusses virtual environments for shells and scripts. For virtual environments created for New Job Scheduling jobs, see [Setting Up a Test Repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tr-setup.htm).*

A virtual environment is a folder containing the dependencies required by a particular Python shell driver or script that is running in CloudShell. This enables running different drivers and scripts with different dependencies simultaneously.

Therefore, whenever a Python driver or script runs in an execution server for the first time, CloudShell creates a new virtual environment in the execution server for that driver or script, and installs, in the virtual environment, the dependencies specified in the driver or script's `requirements.txt` file. This virtual environment is used in subsequent runs of the driver or script on that execution server, which enables the execution of different drivers and scripts with different dependencies simultaneously.

However, if a newer version of the shell or script runs, or the same script is run with a different Python version, CloudShell will create a new virtual environment for the updated driver or script, but will only delete the old virtual environment when the execution server is restarted. The installation path of the virtual environment is: 

- On Windows: `%PROGRAMDATA%\QualiSystems\venv`
- On Linux: `/usr/share/QualiSystems/venv/`
:::note
Using the driver or script for the first time on the execution server may take some setup time to create the new virtual environment and install the dependencies. The next time the same Python driver script is used, any new dependencies uploaded to the Python Package Index (PyPI) repository for this driver or script will be installed. Any existing dependencies will be reused without any changes (and will not require additional setup time). For details on how and when the Execution Server updates the venv, see [Setting the Virtual Environment validity period](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc.htm#Setting3).
:::
## Related Topics

- [PyPi Server - Managing Python Shell and Script Dependencies](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Pyth-Cnfg-Mds.htm)
- [Configuring CloudShell to Execute Python Commands in Offline Mode](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm)
- [Cleaning Up the Virtual Environments Folder](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Cleanup.htm)
