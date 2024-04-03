---
sidebar_position: 9
---

# Why Does CloudShell Upgrade Override CloudShell Settings

## Description

After CloudShell upgrade, some processes no longer work or work unexpectedly.

## Possible Causes

CloudShell upgrade overrides elements that come out-of-the-box with CloudShell, including global attributes (most related to 1<sup>st</sup> Gen cloud provider shells) and scripts. As a result, if you have made any changes to these elements, the upgrade will roll them back to their default states.

:::note
The rule associations on the out-of-the-box attributes are not affected by the upgrade.
:::

## Solution

To prevent this from happening, we recommend the following:

- For scripts: If you plan on creating or customizing our out-of-the-box scripts, please make sure to rename your new/custom scripts as CloudShell's upgrade rolls back scripts based on their name and not contents.
- For cloud provider shell attributes: We recommend using the 2nd Gen shells instead. 2<sup>nd</sup> Gen shells use their own namespaced attributes and settings and therefore are unaffected by upgrades. Note that 2<sup>nd</sup> Gen versions of these shells are available for download from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
- For the rest of the out-of-the-box attributes: Maintain custom minimal "DataModel only" shell packages that update just the default attributes and resource models as appropriate, and import into CloudShell Portal (as a blueprint package) after upgrade. This can be automated using the [Quali API](../../api-guide/quali-api.md)'s Import Package method. The DataModel xml files are located at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Config\Packages`.
- Whenever you run the Quali Server configuration wizard, the out-of-the-box packages are reimported. So to avoid having to import the custom packages every time you run the wizard, remove the out-of-the-box packages from the default location. Please do this every CloudShell upgrade.

## Related Topics

[Minimum Requirements for CloudShell Servers and Clients](../../install-configure/cs-system-requirements/min-requirements-for-cs.md)
