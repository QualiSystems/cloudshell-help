---
sidebar_position: 15
---

# Add Instructions

The instruction sidebar can be helpful in explaining the concepts and usage of the blueprint to the end user. The instruction section is fully customizable and can include more complex text formats than the description, images, embedded videos as well as other media.

![](/Images/CloudShell-Portal/Lab-Management/Environments/InstructionsPane.png)

The instructions editor is a full featured rich text editor that can include embedded video links, presentations and images and can even contain custom HTML code. Any instructions you create will be visible to the end user in the Instructions sidebar when viewing the blueprint's diagram or the sandbox diagram.

 :::note
 CloudShell admins can configure the **Instruction** pane to open by default and change the pane's width - see [Specifying which side panes should be open by default](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#specifying-which-side-panes-should-be-open-by-default-blueprints) and [Defining the Instructions pane size](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#defining-the-instructions-pane-size).
 :::

**To add instructions to your blueprint**:

1. From the **Blueprint** menu, select **Properties**.
2. On the right side of the catalog header, click **Instructions**.
3. Enter instructions using the different options in the toolbar.
    
    The table below lists the options available:

    | Icon | Description |
    | --- | --- |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Style.png) | Apply font styles to your text |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Bold.png) | Make your text bold |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Italic.png) | Italicize your text |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstrUnderline.png) | Underline your text |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-NoFont.png) | Remove font styles |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-BackgroundColor.png) | Apply text and background color |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Bullets.png) | Create a bulleted list |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Numbered.png) | Create a numbered list |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Image.png) | Add an image |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Video.png) | Add a video |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Hyperlink.png) | Add a hyperlink |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-table.png) | Add a table |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-CodeView.png) | Display instructions in HTML code |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Redo.png) | Redo typing |
    | ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-Undo.png) | Undo typing |
    
4. Click Update.

## How to import instructions from an external HTML file

This section explains how to display the contents of an HTML file in the Instructions pane.

Using an external HTML file allows you to utilize additional HTML capabilities. For example, creating tabs in your **Instructions** pane, each with different contents. To learn how to do this, see the [Community Forums](https://github.com/orgs/QualiSystems/discussions/categories/forums?discussions_q=sdk+category%3AForums) article on "how to create tabs in a blueprint's **Instructions** pane".

**To change the instructions to point to an HTML:**

1. In the Portal installation folder, create a folder called "Instructions". For example: C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Instructions.
2. Add the instructions HTML file to this folder, and rename it to "index.html".
3. In the blueprint's **Instructions** page, click ![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvInstr-CodeView.png) and add the following line:
    
    `<iframe src="/Instructions" scrolling="yes" frameborder="0" height="100%" width="100%"></iframe>`
    

## Related Topics

- [Creating Blueprints](./index.md)