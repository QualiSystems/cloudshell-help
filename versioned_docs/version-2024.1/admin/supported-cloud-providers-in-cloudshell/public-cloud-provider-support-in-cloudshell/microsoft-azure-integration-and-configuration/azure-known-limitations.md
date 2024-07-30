---
sidebar_position: 4
---

# Azure Known Limitations

For up to date Azure limitations, see the official [Microsoft Azure doc](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits).

- **Limit for Network Security Groups (NSG)**: 5000. CloudShell uses 2 NSGs for the QualiX and Execution Server VMs.
- **Concurrent public IP addresses (dynamic)**: 1000 for Basic. Contact Azure support to increase the limit.
- **Concurrent public IP addresses (static)**: 1000 for Basic / 200 for Standard. Contact Azure support to increase the limit.
- **NSG rules per NSG**: 1000. An average of 2 rules are used per App.
- **Core quota**: Default is 30 per region / maximum is 10K. Contact support to increase the quota.
- **Number of storage accounts per subscription**: 250. Maximum number of sandboxes is 249 (one storage account is always used for management activity).
- **Concurrent sandboxes**: 249
- **Extension scripts**: Extension scripts must be uploaded to a public location by the App designer, while in **Azure Portal** the user only needs to browse for the file and Azure will save it somewhere accessible to the VM.
