---
sidebar_position: 1
---

# Starting an API Session Outside of CloudShell

This script starts an API session from your IDE. This is useful for performing admin tasks outside of the scope of the blueprint or sandbox.

As this requires the use of the CloudShell Automation API package, make sure to first install the package. From command-line, run pip install cloudshell-automation-api.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession
 
# add credentials
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"
 
# start session
api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)
 
# find resources of target model
res_details = api.FindResources(resourceModel="Putshell")
```
