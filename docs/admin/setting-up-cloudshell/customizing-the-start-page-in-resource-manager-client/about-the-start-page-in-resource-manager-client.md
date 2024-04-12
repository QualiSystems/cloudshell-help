---
sidebar_position: 1
---

# About the Start Page in Resource Manager Client

The **Resource Manager Client**'s start page is built from an xml file that comes installed with the application. It allows providing both local and remote information to the user, and supports offline and online modes.

In each application folder there is a StartPage sub folder that contains the local xml.

This xml has the whole information that the application needs to display the start page to the user.

Editing the file on one station will not affect the others. You'll have to publish/copy the new file to the other stations as well.

Upgrading to a new version of CloudShell will overwrite the xml, so make sure you have a backup of the xml that you edit.

There is no way to add links to the start page in between the QualiSystems links. You can only add new tabs or replace the current ones with your own.

## Before you start

Editing the file in a wrong way might cause some exceptions when you'll start the application (it will not harm the work with the application – but it's not designed to accept xml errors).

Please make sure you have a backup of the original file and verify that it works on one station before sending it to the others.

## XML structure

The start page has few levels to organize the information:

![](/Images/Admin-Guide/Setting-Up-CloudShell/The-start-page-is-built-from.png)

<table>
    <tbody>
        <tr>
            <td>Tab</td>
            <td>different kind of information comes in different tabs</td>
        </tr>
        <tr>
            <td>Subject</td>
            <td>under a tab, you can group the information into subjects</td>
        </tr>
        <tr>
            <td>Topic</td>
            <td>you can then have different topics that each covers part of the subject</td>
        </tr>
        <tr>
            <td>Sub Topic</td>
            <td>for each video/sample you can then specify the sub topic</td>
        </tr>
        <tr>
            <td>Link</td>
            <td>and provide the different links for it</td>
        </tr>
    </tbody>
</table>

## XML markup

### Tab

```markup
<Source "any url to a remote xml file" Title "Get Started">Subjects…<Tab>
```

**Source –**

You can specify this argument if you want to take the tab content from a remote/shared location. A remote xml file will have the same structure exactly, but it should contain only the relevant tab (with the same title).

If you don't specify it, or if the remote file could not be accessed the tab will fall back to show the local information (subjects that you define inside the tab section). If there is no local information – the tab will not appear.

**Title –** The title for the tab.

### Subject

```markup
<Subject Title "Welcome">Topics…</Subject>
```

**Title –** The title for the subject.

### Topic

```markup
<Topic Title="CloudShell Framework in practice" Description="Lab Management, Device Provisioning and Test Automation software" Image="default.png">SubTopics…</Topic>
```

**Title –** The title for the topic.

**Description –** Description of the topic and what you can find in it. The description will appear below the title.

**Image –** You can point to an image file that represents the topic. Provide a full path if the file is not located in the start page folder (could be an online link as well). When not providing any file name (or removing this attribute) a default image will be used.

### Sub Topic

```markup
<SubTopic Title="End to End Test Automation">Links…</SubTopic>
```

**Title –** The title of the sub topic.

### Link

```markup
<Link Type="Video" Title="Watch video" Target="http:// youtube.com/watch?v=abcdefg"/>
```

**Type –** Can be one of: Video – Path to a video file/url to a video on the web.  
Web – Opens a web browser with the provided target will open a test if it is located locally.

**Title –** The title of the link.

**Target –** File path or url, according to the Type.
