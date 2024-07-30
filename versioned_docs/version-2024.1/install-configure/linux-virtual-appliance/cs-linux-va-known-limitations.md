---
sidebar_position: 4
---

# CloudShell Linux VA Known limitations

This section lists known limitations.

- The time zone cannot be automatically detected when running CloudShell Authoring commands on execution servers over Linux. Therefore, when using TestShell API in a driver, add the `SetServerConnectionTimeZone` function to the driver (after the Logon function). Alternatively, to set the time zone for all drivers on a specific execution server, set the `ClientTimeZoneId` configuration key in the customer.config file of the Linux execution server’s installation directory.
- When using file system library, the file location syntax in use must match that used by the Linux directory structure.
- The Excel file extensions that are not supported are listed in the following table:

    | Method/Format | XLS | XLSX | XLSM |
    | --- | --- | --- | --- |
    | Read | | X | X |
    | Write | X | X | X |
    | GetSheetNames |  | X | X |
    
- Drivers cannot contain any of the following components:
  - Ranorex / GUI Automator
  - Command shell (PowerShell)
  - TestShell Spy
  - exe assets (that is, an exe called from an exe)
  - Web service asset
  - ActiveX asset
  - VISA tool
  - Cisco OS
- The following are not supported:
  - Virtualization (solution packs)
  - Layer 2 VLAN (solution packs)
  - SNMP library
  - JSON Editor convert to XML method
  - XML Editor validate with XSD method
  - VMware vSphere libraries