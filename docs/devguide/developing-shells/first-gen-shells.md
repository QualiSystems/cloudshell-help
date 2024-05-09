---
sidebar_position: 17
---

# 1st Gen Shells

1st Gen Shells are imported as CloudShell packages that contain the data model and driver for the intended sandbox element. 1st Gen Shells allow extensive control of the family and model, and therefore are not standardized. While they allow maximal flexibility, when using them, some Shell management capabilities may not be available.

However, unlike 2nd Gen Shells, 1st Gen Shells carry several limitations:

- Shell integrity isn’t enforced by CloudShell    
- No way to uninstall a shell
    
- Versions are not managed
    
- Data model is shared, which may cause conflicts between shells
    

Today you can still find 1st Gen Shells in our community but all new official shells are released as 2nd Gen Shells only. “2nd Gen” is the “code name” for shell entity, a new feature introduced in 8.0. For more information about 2nd Gen Shells, see [Shells Overview](../../intro/features/shells.md).

Note that the same 2nd Gen Shell standards apply to 1st Gen (but are not enforced by CloudShell). There are 1st Gen Shell templates available for Shell development in [Shellfoundry](../reference/shellfoundry.md). However, it is recommended to develop only 2nd Gen Shells using the official Shell templates and guidelines.

The following articles relate to 1st Gen Shells:

- [Migrating 1st Gen Shells to 2nd Gen](../reference/migrate-1st-gen-shell-to-2nd-gen-shell.md)
- [Categories in 1st Gen Service Shells](../reference/categories-in-1st-gen-service-shells.md)