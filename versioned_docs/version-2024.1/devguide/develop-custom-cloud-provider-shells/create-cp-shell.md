---
sidebar_position: 2
---

# Creating the Cloud Provider Shell

Before you start, make sure to set up your machine for shell development and implementations, as explained in [Getting Started with Cloud Provider Development](./getting-started-with-cp-dev.md).

## Creating the cloud provider shell

The first step is to create the Cloud Provider shell. As with other shells, this is done using the shellfoundry command-line tool to create and install the shell on CloudShell.

Since the Cloud Provider shell only works with CloudShell 9.0 and above, make sure to associate shellfoundry with a CloudShell 9.0 (or later) installation by running the `shellfoundry config` command in command-line. For example, associating shellfoundry to CloudShell Server 192.168.85.13:

`shellfoundry config host 192.168.85.13`

Navigate to the folder that will contain the Cloud Provider shell and create the shell. For example, creating a shell called CLPShell:

`shellfoundry new clp-shell --template gen2/cloud-provider`

The shell is created in the folder.

Note that the shell project comprises the same files and folders as any other shell, with one exception, the Cloud Provider shell also includes a **Deployments** folder, which contains the deployment paths for the Cloud Provider’s App templates. More on this in [Configuring Deployment Paths](./configure-the-deployment-paths.md). For details about the shell project structure, see [The Shell Project Guide](../developing-shells/the-shell-project-guide.md).

Let’s make sure the shell was imported into CloudShell. In command-line, navigate to the shell’s root folder and run:

`shellfoundry install`

In CloudShell Portal, open the **Manage>Shells** page to see the Cloud Provider shell.

## Setting the shell’s metadata and image

Now that we have created the Cloud Provider, we need to set its general details, including the Cloud Provider’s author, version and image.

- **template\_name** is the Cloud Provider name that is displayed to the CloudShell administrator in CloudShell Portal’s Shells management page.
    
- **template\_author** is the Cloud Provider developer’s name. By default, the template author is the author defined in the shellfoundry config command.
    
- **template\_version** defines the version number of the Cloud Provider. When extending Cloud Providers, make sure you update the version number. It is also best practice to version any code/project you write according to semantic versioning, to avoid breaking changes. This also allows us to better support customers that will encounter issues with their Cloud Providers.
    
- **template\_icon**: The Cloud Provider includes a default image. This image is displayed on the Cloud Provider’s resources in CloudShell Portal, and resides in the Cloud Provider shell’s root folder. To change the image, simply replace the image in the file.
    

Install the Cloud Provider shell again. This will replace the old version of the shell with the new one.