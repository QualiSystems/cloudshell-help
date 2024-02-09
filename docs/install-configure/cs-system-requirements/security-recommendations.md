---
sidebar_position: 9
---

# Security Recommendations

### User permissions

Administrator access is required for all test stations/servers.


:::warning Important: 
When logging in to TestShell Studio with a non-Windows administrator account:

- HTTP plugin fails to load, resulting in an error at startup.
    
- PowerShell works within the defined permission scope (i.e. installation of modules and machine management won't work).
    
- VISA may not work.
    
- For SNMP Trap tools to work, you will need to open a listener on the computer.
    
- All functionality interactions between Studio and the machine's OS that require administrator user permissions are disabled.
- ***All other Studio features and functionality should work as expected.***
:::