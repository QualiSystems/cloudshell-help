---
sidebar_position: 1
---

# Customize Guest OS vCenter Command Implementation

The **Customize Guest OS** command is supported in vCenter 2G shell version 3.5.0 and above and enables you to run vCenter's "Customize Guest OS" command on a vCenter App's VM before it is powered on.

![](/Images/Devguide-orchestration-scripts/Customize-Guest-OS.png)

**Customize Guest OS** is a hidden command that can only be run via the CloudShell Automation API's **ExecuteCommand** method and is designed to be executed as part of the sandbox setup orchestration.

Example scenarios include:

- Running several customization specifications on the same VM by running this command for each customization specification, followed by a power cycle (Power Off and then Power On) each time
- Having a custom setup script that reserves the VM's MAC addresses from the IP management system (IPMS) and then runs the **Customize Guest OS** command to assign the reserved IP addresses to the VM's network interfaces

## How "Customize Guest" OS works

When executed, the command sends (to the App's VM) the customization specification defined either in the vCenter App or as an input of the command. If missing from both the App and command, a default customization specification is created and sent to the VM. *The customization specification is applied when the VM is powered on.* If the VM is online while running the **Customize Guest OS** command, the VM will need to be powered off and then powered on again.

Customization specifications are applied in the following scenarios:

1. Customization specification defined only in the App
2. Customization specification defined only in the command
3. Hostname and IP Address defined in the App (creates a customization specification that updates the VM's hostname and IP address as defined in the App)
4. Customization specification parameters defined in the command

All combinations are allowed except for 1 and 2. In other words, customization specifications cannot be defined both in the App and in the **Customize Guest OS** command.

When scenario 3 is combined with another scenario, the hostname and IP address are updated on the VM without creating another customization specification.

## Prerequisites

- **Auto Power On** global attribute must be set to **False** (Default is **True**)

## Command inputs

- **Customization Spec Name**: Name of the customization specification to execute.
- **Override Customization Spec**: Override any customization specification defined in the App.
- **Customization Spec Parameters**: Parameters to be used to create/update the customization specification. If a customization specification is not defined in the command, the Customization Spec Parameters will be applied to the customization specification defined in the App.
    
    The syntax is a concatenated JSON string where customization specification elements are written in lower case and underscores instead of spaces. For example, "Registration Info" is written as "registration\_info" in the JSON.
    
    The full strings are:
    
    - Linux Customization Spec JSON Schema:
        
        ```javascript
        {'additionalProperties': false, '$schema': 'http://json-schema.org/draft-04/schema#', 'type': 'object', 'properties': 'dns_settings': {'additionalProperties': false, 'type': 'object', 'properties': {'secondary_dns_server': {'type': 'string'}, 'dns_search_paths': {'items': {'type': 'string'}, 'type': 'array'}, 'primary_dns_server': {'type': 'string'}, 'tertiary_dns_server': {'type': 'string'}}}, 'domain_name': {'type': 'string'}, 'computer_name': {'type': 'string'}, 'networks': {'items': {'additionalProperties': false, 'type': 'object', 'properties': {'ipv4_address': {'type': 'string'}, 'use_dhcp': {'type': 'boolean'}, 'default_gateway': {'type': 'string'}, 'alternate_gateway': {'type': 'string'}, 'subnet_mask': {'type': 'string'}}}, 'type': 'array'}}, 'title': 'Linux Customization Spec'}
        ```
        
    
    - Windows Customization Spec JSON Schema:
        
        ```javascript
        '{'additionalProperties': false, '$schema': 'http://json-schema.org/draft-04/schema#', 'type': 'object', 'properties': {'workgroup': {'type': 'string'}, 'license': {'additionalProperties': false, 'type': 'object', 'properties': {'include_server_license_info': {'type': 'boolean'}, 'server_license_mode': {'enum': ['perServer', 'perSeat'], 'type': 'string'}, 'product_key': {'type': 'string'}, 'max_connections': {'type': 'integer'}}}, 'registration_info': {'additionalProperties': false, 'type': 'object', 'properties': {'owner_name': {'type': 'string'}, 'owner_organization': {'type': 'string'}}}, 'auto_logon_count': {'type': 'integer'}, 'auto_logon': {'type': 'boolean'}, 'computer_name': {'type': 'string'}, 'password': {'type': 'string'}, 'commands_to_run_once': {'items': {'type': 'string'}, 'type': 'array'}, 'networks': {'items': {'additionalProperties': false, 'type': 'object', 'properties': {'ipv4_address': {'type': 'string'}, 'use_dhcp': {'type': 'boolean'}, 'default_gateway': {'type': 'string'}, 'alternate_gateway': {'type': 'string'}, 'subnet_mask': {'type': 'string'}}}, 'type': 'array'}, 'windows_server_domain': {'additionalProperties': false, 'type': 'object', 'properties': {'username': {'type': 'string'}, 'domain': {'type': 'string'}, 'password': {'type': 'string'}}}}, 'title': 'Windows Customization Spec'}'
        ```
        

## Examples - Command input JSONs

**Windows:**

```javascript
{    "registration_info": {
        "owner_name": "Owner_Name",
        "owner_organization": "Owner_Organization",
    },
    "computer_name": "TestWindows",
    "auto_logon": False,
    "auto_logon_count": 2,
    "license": {
        "product_key": "Testing",
        "include_server_license_info": True,
        "server_license_mode": "perSeat",
        "max_connections": 5,
    },
    "password": "Administrator_Password",
    "commands_to_run_once": ["test1", "test2"],
    "workgroup": "TestWorkGroup",
    "windows_server_domain": {
        "domain": "DOMAIN",
        "username": "Username",
        "password": "Password",
    }
}
```

**Linux:**

```javascript
{
    "computer_name": "TestLinux",
    "networks": [
        {
            "use_dhcp": True,
        },
        {
            "use_dhcp": False,
            "ipv4_address": "11.20.36.20",
            "subnet_mask": "11.24.42.1",
            "default_gateway": "20.8.34.1",
            "alternate_gateway": "142.0.32.8",
        }
    ],
    "domain_name": "internal2.com",
    "dns_settings": {
        "primary_dns_server": "",
        "secondary_dns_server": "",
        "tertiary_dns_server": "",
        "dns_search_path": [],
    },
}
```
