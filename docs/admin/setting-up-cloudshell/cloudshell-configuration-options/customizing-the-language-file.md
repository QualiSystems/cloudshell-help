---
sidebar_position: 1
---

# Customizing the Language File

Language files are used to support various languages and locales.
:::note
Another way to customize CloudShell Portal is to change its design elements, such as the background color and logo. For more information, see [Rebranding CloudShell Portal (White Labeling)](./rebranding-cloudshell-portal-white-labeling.md).
:::
## Retitling CloudShell Portal GUI elements

This procedure explains how to change the display text of GUI elements in CloudShell Portal. If you want to use text in a different language, see [Localizing CloudShell Portal](#localizing-cloudshell-portal).

**To retitle the captions of specific GUI elements in CloudShell Portal:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\Localization\CloudShell` folder, and add a new file named `LanguagePortal.Override.xml` if it is missing.
    
2. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\Localization` folder, open `LanguagePortal.xml` (the regular portal language file), and copy any key into the new file, and override its value.
    
    If you would like to change a large number of keys it is possible to copy the complete content of `LanguagePortal.xml` into `LanguagePortal.Override.xml` and then edit only the necessary values in `LanguagePortal.Override.xml`.
    
3. Be sure to preserve any XML hierarchy in the original file.
    :::important
    CloudShell upgrade will override the `LanguagePortal.Override.xml` file, so please make sure to keep a copy of your latest language file somewhere safe.
    :::
4. To apply, restart the **CloudShell Portal IIS** service or open CloudShell Configuration and perform the **CloudShell Portal** configuration.
    

## Localizing CloudShell Portal

This procedure explains how to retitle certain GUI elements in CloudShell Portal to a different language.

**To localize CloudShell Portal:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\Localization` folder.
2. Create a copy of the `LanguagePortal.xml` file and add the language code before the file extension. For a list of supported file codes, click [here](/attachments/Locales.pdf).
    
    For example, changing GUI elements to be in Danish:
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/LanguageFileChangeLanguage.png)
    
3. Edit the necessary values in the new file.
4. Restart the **CloudShell Portal IIS** service or open CloudShell Configuration and perform the **CloudShell Portal** configuration.
    
    Users can now change the language in CloudShell Portal. For additional information, see [Changing the Language in CloudShell Portal](../../../portal/overview/change-language.md).
