---
sidebar_position: 3
---

# Bugs Fixed

The table below lists all the bugs reported by customers, that were resolved in version 2024.1. All releases may include additional resolved issues, which are not included in this list.

| Support Case # | Internal WI # | Description | Fixed in Version |
| --- | --- | --- | --- |
| 59700 | 15551	| Shellfoundry has a dependence on setuptools, but newer versions of python no longer include setuptools by default. Setuptools will be required when python version is 3.12 and higher	| 2024.1 |
| 59770 | 15484	| Fixed  Sandbox API throws error when reserving a blueprint with abstracts running Cloudshell with UseRabbitServer=false	| 2024.1 |
| 59534 | 15393	| Fixed Custom attribute used to filter in abstract resources fails	| 2024.1 |
| 59715 | 15357	| Improved error message on import datamodel	| 2024.1 |
| 58273 | 14672	| ZeroMQ socket pool to fix TooManyOpenSockets	| 2024.1 |
| 57578 | 14633	|  Sandbox end time no longer getting updated when a permitted user is added	| 2024.1 |
| 57211 | 14562	| better error messages for Sisense integration	| 2024.1 |
| 57821 | 14311	| Reserve will no longer fail due to encoding of certain characters in username  	| 2024.1 |
| 57436 | 14028	| fixed number of sub resources in SB is not updated when adding additional blades to a resource (when there are more than 900 sub resources)	| 2024.1 |
| 57390 | 13936	| loosened urllib3 requirements in Cloudshell Automation API to provide more flexibility for developers.	| 2024.1 |
