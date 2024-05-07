---
sidebar_position: 5
---

# Passing Variables From the Setup Script to Configuration Management

A common use case for configuration management scripts is to inject environment data during the sandbox's setup phase. This is done using a custom setup script that prepares the data and passes it to predefined or dynamically-created variables on the App's configuration management.

For illustration purposes, the following [setup script](https://github.com/QualiSystemsLab/cloudshell-api-script-samples/tree/master/generic-orchestration-samples/setup/setup_set_user_mail_on_apps) gets the sandbox owner's email from their CloudShell user profile and passes it to a dynamically-created parameter called "USER\_MAIL" on target Apps that have an "Update Mail" attribute.

The main files in the script are:

- `__main__.py`: Entry point to the script. Note that the file includes an `enable_configuration=False` flag, which disables the default out-of-the-box **Configuration** step to allow our custom code to run instead.
- `configure_apps.py`: Custom orchestration function that replaces the out-of-the-box Configuration step in the sandbox's setup phase

**To use the script:**

1. In **Resource Manager Client > Resource Families** explorer, do the following:
    1. Create an Update Mail attribute (Boolean, default: **False**).
    2. Set the attribute on the **Generic App Family**.
2. Upload the script to CloudShell.
3. Create a blueprint and replace the out-of-the-box Setup script.
4. Add the suitable Apps to the blueprint.
5. Set the attribute to **True** in the blueprint Apps.

## Related Topics

- [Managing Assets](./../../admin/cloudshell-manage-dashboard/managing-automation/managing-assets.md)
- [Managing App Templates](../../admin/cloudshell-manage-dashboard/manage-app-templates/index.md)
- [Create a Blueprint](../../portal/blueprints/creating-blueprints/create-blueprint.md)
- [Configure Blueprint Orchestration](../../portal/blueprints/creating-blueprints/configure-orchestration.md)
