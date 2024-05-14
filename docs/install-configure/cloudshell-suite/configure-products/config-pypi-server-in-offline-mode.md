---
sidebar_position: 13
---

# Configure PyPi Server in Offline Mode

When a Python driver or script runs in CloudShell, the local PyPi Server process downloads the Python packages it needs from the online public PyPi repository and places them in the driver or script's virtual environment on the execution server.

PyPi Server is installed on the Quali Server machine and requires an internet connection, so if Quali Server runs in offline mode, you will need to perform several configurations to make the required Python dependencies available to your Python drivers and scripts. For additional information, see [Configuring CloudShell to Execute Python Commands in Offline Mode](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).