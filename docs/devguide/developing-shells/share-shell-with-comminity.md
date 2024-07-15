---
sidebar_position: 16
---

# Sharing a Shell with the Community

In this article, we’ll learn how to share our shell with the Quali Community, to allow others to use it as well. This applies to brand new shells and customized versions of existing shells.

## Submitting a bug fix in an existing shell

1. Open a pull request or issue in the relevant shell GitHub repository.
    
2. Open a ticket in [Quali’s Support Center](https://support.quali.com/) describing the issue and the relevant pull request.
    
3. The Shell repository owner will review and test the submitted pull request and decide whether to accept, modify or reject the request.
    

## Publishing a new shell as a "Community” shell

To share a shell with the Quali Community, all you need to do is post it in our community. Sign in to [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) page with a community user, click the **Share an Integration** button and fill in the details.

For example:

![Directory Structure](/Images/Devguide-shells/Sharing-a-Shell-with-the-Community_624x680.png)

Some of the fields are optional, so please check one of our certified shells to see which fields to fill in, like the [Cisco NXOS Switch 2G Shell](https://github.com/orgs/QualiSystems/discussions/1559).

To allow community developers to create modified copies of your shell, copy the shell’s repository URL to the **GitHub User/Repository** field, as illustrated above. We recommend using this field since it also allows us to automatically build the **GitHub URL** and **Download URL** links as well as show more details about this repository.

However, if your shell doesn’t have release versions, use the **Download Url** or **GitHub User/Repository** fields. And if your repository has multiple projects and you want to link into a specific folder, use the **GitHub Url** field. In the **Integrations** page, the URLs will be used as follows:

![Directory Structure](/Images/Devguide-shells/Sharing-a-Shell-with-the-Community_1.png)

The shell’s repository should be displayed shortly in the **Integrations** page as a **Community** grade shell.

If you want Quali to certify your shell, see [Submitting a new shell for certification](./share-shell-with-comminity.md#submitting-a-new-shell-for-certification).

## Extending an existing shell (forked and modified certified shell with added or modified functionality)

1. In the relevant shell GitHub repository, open a pull request or issue that briefly explains why we should merge the change(s).
    
2. If the request is accepted following modification or as is, we will merge it to the master branch only if we can successfully validate the shell against the real device (through automation and Shell functionality testing).  
      
    This doesn’t guarantee that Quali will accept every shell certification request. We’ll do our best to respond in a timely manner based on testing and priorities.
    

## Submitting a new shell for certification

1. Post the new shell as a community shell on [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) page.
    
2. Submit the shell repository to Quali through Quali’s [Idea Box](https://community.quali.com/ideabox) so we can fork it to the Qualisystems GitHub space.
    
3. The request will be reviewed by Quali’s engineering. It may be rejected if it doesn’t comply with the CloudShell DevGuide. In that case, Quali will provide architecture and design assistance based on priority and availability.
    
4. If the request is accepted following modification or as is, we will merge it to the master branch only if we can successfully validate the shell against the real device (through automation and Shell functionality testing).
    
5. Then, we will move the certified shell repository to the Quali GitHub space and publish the new shell in the community as a certified shell.
