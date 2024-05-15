---
sidebar_position: 2
---

# Shellfoundry

Shellfoundry is a command-line utility that allows you to easily create, package and install Shells in CloudShell. It allows creating basic Shells or Shells based on a common 1st or 2nd generation Shell template.

:::note Notes:
- In order to use shellfoundry on an offline computer, you will need to first download the shellfoundry templates locally and configure shellfoundry to run in offline mode. For details, see [Downloading shellfoundry templates](#downloading-shellfoundry-templates).
- Shellfoundary cannot work if there’s a proxy server present between the shellfoundry machine and the remote Quali Server machine.
:::

## Usage

### Installation

This command installs Shellfoundry on your computer. For more information, see [Getting Started with Shell Development](../developing-shells/getting-started.md).

#### Syntax:

```python
pip install shellfoundry
```

To install a specific shellfoundry version, run: `pip install shellfoundry==<version>`

For the version history, click [Version History](#version-history).

### Upgrade

If you already have shellfoundry installed on your computer, run this command to upgrade it to the latest version. For more information, see [Installing or Updating Shellfoundry](../developing-shells/getting-started.md#installing-or-updating-shellfoundry).
:::note-one-line
**Note:** To prevent backwards compatibility issues, old versions of shellFoundry are disabled with every new shellfoundry release.
:::
#### Syntax:

```python
python -m pip install shellfoundry ––upgrade
```

### Configuring CloudShell settings

(Required) This command sets the Quali Server settings and user access credentials in Shellfoundry. Note that in offline mode, the `shellfoundry list` command lists the shell templates residing locally in the folder defined in the shellfoundry config’s template\_location attribute. For more information, see [Configuring CloudShell Connection Settings](../developing-shells/getting-started.md#configuring-cloudshell-connection-settings).

#### Syntax:

Run this command from the Shell’s root folder.

```python
shellfoundry config <key name> <key value>
```

#### Example - Setting the username:

```python
shellfoundry config username admin
```

The following keys are available:

- **username**: CloudShell username. For example: “admin”. Colons (:) are not supported.
    
- **domain**: CloudShell domain. Note that for 2nd Generation Shells, the domain must be “Global”. Colons (:) are not supported.
    
- **github\_login**: GitHub username. To be used to download shellfoundry templates via `shellfoundry get_templates`.
    
- **github\_password**: GitHub user password. To be used to download shellfoundry templates via `shellfoundry get_templates`.
    
- **defaultview**: Set the default view. Possible values are: **gen**, **gen2**, **all** and **layer1**. Default is **gen2**.
    
- **online\_mode**: Shellfoundry computer’s mode (online or offline). Online mode (`True`) is the default. in online mode, shellfoundry templates on GitHub are used, while for offline mode, you will need to copy the shellfoundry templates to your local machine. For offline mode, use `template_location` to define the local templates folder.
    
- **author**: The author to be specified on the shell (in the shell’s metadata).
    
- **template\_location**: (Required if `online_mode` is set to `False`) File system path to the folder containing the offline shell templates. Alternatively, you can specify the template location using “local:” when running ‘shellfoundry new’ in command-line.
    
- **password**: CloudShell password (encrypted). Colons (:) are not supported.
    
- **host**: The hostname or IP address of the Quali Server machine.
    
- **port**: The port to be used for Quali API. Default is “9000”.
    

### Creating a Shell

The `new` command creates a shell from a shell template.

#### Syntax:

Run this command in the Shell’s root folder.

```python
shellfoundry new <Shell-name>
```

#### Options:

- **\--template**: Creates a shell from a specific shellfoundry template, featuring the template’s settings, attributes and driver commands. For details, see [Modeling Shells with TOSCA](../developing-shells/modeling-shells-with-tosca.md).
    :::note-one-line
    **Note:** If you don’t specify a template, shellfoundry will create the shell from the **gen2/resource** template. Use this if you want to create a Shell to customize or experiment on. For more information, see [The Shell Project Guide](../developing-shells/the-shell-project-guide.md).
    :::
- **\--version**: Creates a shell based on a specific shell template version. If you don’t specify the version, shellfoundry will create the shell using the latest shell version that is supported by your CloudShell installation. For details about each version release, see [CloudShell Standards](https://github.com/QualiSystems/cloudshell-standards).
    
- **\--python**: Determines the python version of the shell. Options are “2” or “3” (Default is 2).
    

#### Examples:

Generic resource shell based on Python 3:

```python
shellfoundry new my-basic-shell --python 3
```

Networking switch shell version 5.0.2:

```python
shellfoundry new my-switch-shell --template gen2/networking/switch --version 5.0.2
```

### Creating a Shell from a local template

This section explains how to create Shells using a Shell template that isn’t online for some reason. For example, you want to use a Shell template you are currently developing.

#### Syntax:

Run this command from the directory that will contain the new Shell:

```python
shellfoundry new <new-shell-name> --template local:<path-to-template’s-root-folder>
```

The path can be a URL to the Shell template’s zip package on GitHub or the filesystem path (prefixed by `local:./`) to the extracted zip folder:

![Shell Commands](/Images/Devguide-reference/Shellfoundry.png)

#### Example:

```python
shellfoundry new my-service-ext --template local:C:\Temp\shell-pdu-standard-master
```

The new shell is added to the path from which you ran the `shellfoundry new` command.

### Customizing a 2nd Gen Shell

This command downloads the source code of the Shell you wish to customize to your local machine and updates the Shell’s Author with the author specified in Shellfoundry. Note that extending official Shells (Shells that were released by Quali) will remove their official tag. For more information, see [Customizing Shells](../developing-shells/customize-shells.md).

#### Syntax:

Run this command from the directory that will contain the new Shell:

```python
shellfoundry extend <URL/path-to-Shell>
```

The path can be a URL to the source code of the shell’s desired release on [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) page or the filesystem path (prefixed by `local:./`) to the extracted source code folder:

![Shell Commands](/Images/Devguide-reference/Shellfoundry_2_624x293.png)

#### Examples:

**Extending a Shell residing on GitHub:**

```python
shellfoundry extend https://github.com/QualiSystems/Cisco-NXOS-Switch-Shell-2G/archive/2.0.0.zip
```

**Extending a local Shell:**

```python
shellfoundry extend local:C:\temp\Cisco-NXOS-Switch-Shell-2G-2.0.0
```

:::note Before extending a local Shell:
- make sure the Shell’s destination folder is different from the original Shell’s root folder.
- If you're extending an existing shell, make sure to unzip the shell package.
:::
### Downloading shellfoundry templates

This command downloads all shellfoundry templates from GitHub, which you can use to create shells in offline mode. Note that shellfoundry uses GitHub API to fetch the templates, so you will need to set a GitHub user (via `shellfoundry config`) to grant shellfoundry unrestricted access to GitHub API. For details, see this GitHub Developer [article](https://developer.github.com/v3/#rate-limiting).

#### Syntax:

Run this command from the directory that will contain the shell templates:

```python
shellfoundry get_templates <CloudShell version>
```

Optionally, add `--output_dir="<containing_folder_path>"` to set a different containing folder.

#### Example:

```python
shellfoundry get_templates 9.1 --output_dir="c:\users\steven.g\shell templates"
```
:::note-one-line
**Note:** Shellfoundry downloads the latest template versions that are compatible with the latest patch of the specified CloudShell version.
:::
A zip file containing the shell templates is downloaded.

Once the shell templates are downloaded, extract the zip file and set the extracted directory as the new **template\_location**.

```python
shellfoundry config template_location "C:\Users\steven.g\shell templates"
```

### Generating the Shell’s data model file

The shell’s data model (*data\_model.py* file) consists of the standard specifications and the extended data model, which is defined in the *shell-definition.yaml* file. The shell’s data model is mainly used to work with resource attributes and implement the Auto-discovery process. For additional information, see [Managing the Shell’s Data Model](../developing-shells/managing-the-shell-data-mode.md).

After importing the *data\_model*, PyCharm (and some other IDEs) will recognize the docstring code-hint annotations and will enable autocomplete as you can see below:

![Directory Structure](/Images/Devguide-reference/Shellfoundry_1_610x218.png)

#### Syntax:

Run this command from the Shell’s root folder.

```python
shellfoundry generate
```

### Deleting a shell from Cloudshell

Starting with CloudShell 9.1, it is possible to delete shells that are installed on CloudShell. Note that you cannot delete shells that have resources.

#### Syntax:

```python
shellfoundry delete "<shell name>"
```

Where the shell’s name is the name of the shell, as displayed in CloudShell Portal’s **Manage - Shells** page.

#### Example:

```python
shellfoundry delete "Juniper JunOS Switch Shell 2G"
```

### Listing available Shell templates

This command lists the 1st and 2nd generation Shell templates you can use for your new Shell. For more information, see [Modeling Shells with TOSCA](../developing-shells/modeling-shells-with-tosca.md).

Note that in offline mode, the command lists the shell templates residing locally in the folder defined in the shellfoundry config’s `template_location` attribute.

#### Syntax:

```python
shellfoundry list
```

To view templates of a specific type, add the appropriate flag to the command: `--gen1`, `--gen2`, `--layer1`, `--all` (lists all available templates).

### Listing versions of a Shell template

#### Syntax:

To display a list of the versions for a given template, run the following in command-line:

```python
shellfoundry show <template_name>
```

The versions are displayed in descending order from latest to earliest.

### Packaging a Shell

This command packs the shell’s source code, data model and configuration into a ZIP package, which can be uploaded into CloudShell. For additional information, see [Deploying to Production](../developing-shells/deploy-to-prod.md).

#### Syntax:

Run this command from the Shell’s root folder.

```python
shellfoundry pack
```

A ZIP package is created in the Shell’s dist directory with the name “nutshell.zip”.
:::note-one-line
**Note:** The pack command requires the presence of a shell.yml file, which is created by default in Shells created using Shellfoundry. However, if your shell was created elsewhere, make sure to add a shell.yml file with the following structure:
:::
```python
###shell.yml
shell:
     name: nutshell
```

### Packaging a shell’s dependencies

This command creates a zip file in the shell project’s `dist` folder that includes the shell’s dependencies. This is especially useful for offline mode and during shell development.

Run this command from the Shell’s root folder.

#### Syntax:

```python
shellfoundry dist
```

By default, the command downloads the dependencies from public PyPi. However, if you are developing the shell and have some custom dependencies that are not in public PyPi, add the `--enable_cs_repo` flag to also include the shell’s dependencies from your local PyPi repository folder.

### Packaging and importing a Shell into CloudShell

This command creates a distributable zip file for the Shell and imports it into CloudShell using the CloudShell Portal and user defined by the `shellfoundry configure` command. For more information, see [Getting Started with Shell Development](../developing-shells/getting-started.md).
:::danger-one-line
**Note:** A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's `shell-definition.yaml` ONLY when something in the data model changes (new attributes added to `shell-definition.yaml`). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.
:::
#### Syntax:

Run this command from the Shell’s root folder.

```python
shellfoundry install
```

## Version History

#### 1.2.20 (2021-08-19)

- Fixed password decryption

#### 1.2.19 (2021-07-27)

- Fixed encoding issue during `generate` command
    

#### 1.2.18 (2021-07-06)

- Fixed issue with reading YAML-files with Unicode symbols
- Upgraded third-part packages
- Added tox, pre-commit configuration
- Added GitHub-actions configuration

#### 1.2.16 (2020-01-02)

- Fixed password modification error
    
- Fixed cookiecutter version incompatibility
    

#### 1.2.12 (2019-10-16)

- Added `--python` attribute to new command that allows setting the Python version of the shell
    

#### 1.2.10 (2019-04-22)

- Added attribute to `dist` command that allows using locally installed shell dependencies when packaging the dependencies zip
    
- Added support for pip 19.1
    

#### 1.2.8 (2019-03-06)

- Fixed issue in `generate` command after renaming root folder
    
- Added `get_templates` command for downloading shellfoundry templates for offline mode
    
- Added `delete` command for deleting shells installed on CloudShell (supported in CloudShell 9.1 GA and up)
    
- Implemented the capability to generate shell documentation based on the template
    
- Set strict Python version
    

#### 1.2.4 (2018-09-26)

- Removed unnecessary *cloudshell-automation-api* dependency from requirements
    
- Set static version for package ‘click’ in *requirements.txt* file. click==6.7
    

#### 1.2.2 (2018-08-16)

- Fixed bug related to template verifications and standards compatibilities
    

#### 1.2.1 (2018-08-13)

- Added dynamical determination of minimal CloudShell version from templates
    

#### 1.2.0 (2018-07-26)

- Extended `new` command behaviour for offline mode
    
- Added validation to check if the template and standard versions are compatible
    

#### 1.1.9 (2018-05-03)

- Added offline mode functionality
    
- Fixed typo in `pack` command behavior
    
- Added new online template for Cloud Provider
    
- Shellfoundry now packs deployment options if any exist
    
- Added limitation installing a gen2 shell (regular/service) into a non-Global domain
    

#### 1.1.5 (2018-03-01)

- Added new online template for Traffic Generator Controller Service
    
- Added new 2nd Gen online template for Traffic Generator Chassis
    

#### 1.1.2 (2018-01-09)

- Enhanced `extend` command logic
    
- Added new online templates
    
- Added specific error message to Layer 1 Shell `pack` and `install` commands
    

#### 1.1.0 (2017-10-30)

- Added `author` field to shellfoundry configuration
    
- Added `extend` command behavior
    
- Added verification when upgrading an official shell to unofficial
    
- Fixed some inconsistencies relating to the `extend` and `new` commands, specifically around the shell name
    

#### 1.0.3 (2017-06-28)

- `list` command aborts if there is a new major version on pypi
    
- Old Shellfoundry versions are NOT supported anymore. Therefore, in order to upgrade to the newest version, please run this command:
    ```
    pip install shellfoundry -U
    ```
- `new` command aborts if there is a new major version on pypi
    
- `new` command now conforms to CloudShell naming rules
    
- `list` command now shows templates that are installable on your cloudshell
    
- `new` command now creates the latest version of the template that matches the standards installed on your cloudshell
    
- When running `new` or `list` commands, a notification is displayed if a new Shellfoundry version is available
    

#### 0.2.7 (2017-05-16)

- Shellfoundry now packs *categories.xml*, if it exists
    

#### 0.2.6 (2017-03-14)

- Minor bug fixes
    

#### 0.2.5 (2017-03-13)

- **gen2/resource** is the now the default template for the new command instead of **gen1/resource**
    
- `list` command filtering parameters have changed (legacy => **gen1**, TOSCA => **gen2**)
    
- Added another filtering parameter: **–layer1**
    
- Minimum CloudShell version column appears in the `list` command’s output table
    
- **gen2** is now the default view for list command
    
- `config` now echoes all default configurations if they have not been overridden by the user
    
- `config` command now encrypts the password
    
- `show` command was added to display all available versions of a template
    
- A new option was added to the `new` command called **–version**. It enables template versioning on Shellfoundry.
    
- Fixed a bug with the `config` command, which caused Shellfoundry to crash if a config file was missing
    
- `list` command is now able to filter results based on shell type (**–tosca**, **–legacy**, **–all**)
    
- `config` command was added to allow setting configuration globally for all Shells in addition to local configuration
    
- Pack Shell icon if specified in the *shell-definition.yml* file under `metadatatemplate_icon` for TOSCA based shells
    
- Update reference to *cloudshell-rest-api* 7.2.0.7 to use PUT method in update shell
    
- TOSCA support was added to the `pack` and `install` commands
    
- `generate` command was added to generate the Shell driver’s data model in Python
    

#### 0.0.32 (2016-08-10)

- Dependency for git was removed
    
- Local Shell templates are supported
    
- Proxy support was added for access to github
    

#### 0.0.31 (2016-08-04)

- git prerequisite were removed. Shellfoundry now works even if git is not preinstalled
    

#### 0.0.28 (2016-07-07)

- Bug pertaining to the installation of packages in CloudShell was fixed
    

#### 0.0.26 (2016-06-23)

- Images copied to the *DataModel* folder (Issue #21)
    

#### 0.0.17 (2016-05-25)

- Fixed an error message that is displayed when `install` command fails in logging in into CloudShell
    

#### 0.0.1 (2016-05-15)

- First release on PyPI