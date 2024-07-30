---
sidebar_position: 16
---

# Add User Inputs

Blueprint inputs appear to the user as a form they will need to fill out prior to using a blueprint. The image below provides an example of what this form looks like:

![](/Images/CloudShell-Portal/Lab-Management/Environments/ReservePane_NEW.png)

## Defining blueprint user inputs

Blueprint inputs can be used for resource selection (if the blueprint contains abstract resource requirements), as additional information to drive the provisioning, or as general information to be collected from the user.

**To edit a blueprint’s inputs:**

1. From the **Blueprint** menu, click **Properties**.
    
    The **Edit Blueprint** page is displayed.
    
2. Click the **Inputs** button in the page header.
    
    The inputs area is displayed.
    

![](/Images/CloudShell-Portal/Lab-Management/Environments/BlueprintInputsPane.png)

## Global inputs

Global inputs are a simple way to request information from the user when they reserve the blueprint. You can create a global input of one of three types: Text, Numeric, Lookup or Password. It is possible to type a comma separated list. In that case, the user will get a dropdown list and will only be able to choose one of the possible values.

- **Text** inputs accepts any textual input from the user.
- A **Numeric** input restricts the user to enter a number. The number has to be a whole number (not a fracture).
- A **Lookup** input is linked to one ore more lookup attributes defined in the system.
    
    1. Click the **Lookup** type.
    2. Select a Lookup attribute from the **\[Select Attribute\]** drop-down list.
    3. Select the **Bind global input to attribute values** checkbox if you want to ensure that only the lookup attribute's values are used. Leaving this checkbox unselected enables blueprint designers to modify the values presented by the global input.
    
    :::note Notes
    
    - Changes made to the attribute's values are automatically applied to the global input.
    - Setup scripts that use global inputs with empty spaces before or after the input value may sometimes fail.
    - When a single Lookup attribute is linked, all of the attribute's values are available for selection from the input. However, when linked to multiple Lookup attributes, the input will only contain values that are both published (on the abstract resource or service) and shared by all linked attributes.
    :::
- A **Password** input accepts a freetext password value. The value is displayed as a masked value (\*\*\*\*\*). This type of global input cannot be linked to other inputs. Note that the value can be decrypted using the CloudShell Automation API's [DecryptPassword](pathname:///api-docs/2024.1/Python-API/cloudshell.api.html?highlight=decryptpassword#cloudshell.api.cloudshell_api.CloudShellAPISession.DecryptPassword) method.

:::tip Tip for admins
It is possible to resize the global text boxes of the global inputs. For details, see [Resizing the value box of "text" global inputs](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs.md).
:::
## Resource requirements and additional info

Some blueprint inputs are directly related to resource requirements and information that are defined as user inputs. These inputs are displayed in the right hand section of this page. If you have abstract resource templates in your blueprint, and those templates have inputs, they will be listed here. For additional information about setting inputs for blueprint resources, see [Add Abstract Resources](./abstract-resources.md).

## Grouping together resource requirements and information

As the blueprint accumulates more required user inputs, it may become necessary to group some of them together into a single entry. One example would be if there are numerous switches in the blueprint, which all have their model set as an input. In some scenarios, the blueprint designer might want the user to feed in just one value 'Switch model' and have that value affect all relevant resources. To do so, use the 'Link inputs' icon displayed next to each resource requirement or information input.

![](/Images/CloudShell-Portal/Lab-Management/Environments/BlueprintInputsPaneLinkInputs.png)

After clicking the 'link attribute' button you will be able to choose whether to link to an existing global attribute or create a new one. Once the attribute is linked, you will see the global input appearing as a tag on the input you've linked. Once an input is linked to a global input it will no longer appear to users reserving the blueprint and will be set only via the input it is linked to.

:::note Notes

- If you're linking a Lookup attribute, you cannot bind the two together. As a result, blueprint designers will be able to modify the global input's values. When you create the attribute ahead of time, you can bind it to the attribute values, which disables the modification option. For details, see the Lookup input's description in the [Global inputs](#global-inputs) section above.
- Abstract resource attributes with partial or search conditions, which use a non-equals action, cannot be linked to global inputs.
:::
## Adding description and default values for blueprint inputs

For each input defined for the blueprint, it is possible to set a default value, which will be displayed to the user reserving the blueprint. To include a description for each input, click the add description button and enter the description in the text area that will appear inside the input box. The description is provided as a tooltip in the blueprint's **Reserve** form.
:::note
A default value of \[\] is not supported.
:::
![](/Images/CloudShell-Portal/Lab-Management/Environments/EnvironmentInputDescription_499x101.png)

## Linking published attributes to global attributes

You can link a published attribute to a global attribute. When the value of the global attribute is specified, all the individual attributes are populated with the same value, eliminating the need to open each one and specifying the values for each individual attribute separately.

**To link a published attribute to a global attribute:**

1. Open the blueprint's inputs page.
    
2. If you want to link a lookup attribute and disable the option of modifying the linked attribute's, create a global input at this time.
3. In the row of the attribute that you want to publish, click the **Link Inputs** button ![](/Images/CloudShell-Portal/Lab-Management/Environments/link-inputs-tool_27x24.png).
    
    ![](/Images/CloudShell-Portal/Lab-Management/Zoom-Size/LinkPrompt.png)
    
    You are prompted to select the global input that must be linked to the selected published attribute.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Zoom-Size/GlobalBlank.png)
    
4. Select the required global input. If it does not exist, specify the name of the global input in the **Enter Global Input Name** field.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Zoom-Size/ModifyGlobalAttribute.png)
    
    You can optionally modify the global input using the following fields:
    
    | Field | Description |
    | --- | --- |
    | Attribute value | Value that is applied to all the published attributes that are linked to this Global Input. |
    | Delete Global Input | Delete the selected Global Input. |
    | Edit Global Input Description | Modify the text that describes the selected Global Input. |
    
5. Click **Update**.
    
    The **Blueprint Catalog** is displayed.