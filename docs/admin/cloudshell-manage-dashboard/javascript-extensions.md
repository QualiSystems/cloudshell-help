---
sidebar_position: 9
---

# JavaScript Extensions

JavaScript Extensions allow administrators to write custom client-side code in JavaScript that can execute any logic as a part of the suite creation, update, removal, and so on. These scripts can give additional functionality to the user input parameters defined in the tests or for a blueprint resource, for example you can use [Using JavaScript Extensibility to configure dependencies between test parameters](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/JS-Ext.htm?Highlight=JavaScript%20Extensions#Using).

You can use the JavaScript Extensions to control the different sets of user input parameters in a Blueprint or Test (modules) by adding JavaScript code in the **Manage** dashboard, in the **Custom JavaScript Modules** extensions page. Modifying the code for the JavaScript extension modules triggers an event when the user performs a particular action in the **Create Suite Template/Edit Suite Template/Run Suite** page. The code can either validate the user inputs, or make changes to them.

For example:

<table style={{ marginLeft: '0', marginRight: 'auto' }} className="TableStyle-Alternate-Row-Color" cellSpacing="21">
    <tbody>
        <tr className="TableStyle-Alternate-Row-Color-Body-Body1">
            <td className="TableStyle-Alternate-Row-Color-BodyE-Column1-Body1">
                When you modify the code in the following module
            </td>
            <td className="TableStyle-Alternate-Row-Color-BodyD-Column1-Body1">
                Changes will be made to the inputs when the user performs the following tasks
            </td>
        </tr>
        <tr className="TableStyle-Alternate-Row-Color-Body-Body2">
            <td className="TableStyle-Alternate-Row-Color-BodyE-Column1-Body2">
                <strong>Blueprint input – all parameters</strong>
            </td>
            <td className="TableStyle-Alternate-Row-Color-BodyD-Column1-Body2">
                <ul>
                    <li>
                        Creates a new suite (<strong>Create Suite Template</strong>) page (in the <strong>Job Scheduling</strong> dashboard) with blueprint inputs published in the blueprint
                    </li>
                    <li>
                        Edits a suite in the <strong>Edit Suite Template</strong> page with blueprint inputs published in blueprint
                    </li>
                    <li>
                        Opens the <strong>Run Suite</strong> page - <strong>All Inputs</strong> tab with blueprint inputs published in the blueprint
                    </li>
                    <li>
                        Opens the <strong>Run Custom</strong> page (by clicking the <strong>Customize</strong> button in the <strong>Run Suite</strong> page) with blueprint inputs published in the blueprint
                    </li>
                    <li>
                        Reserves a blueprint
                    </li>
                </ul>
            </td>
        </tr>
        <tr className="TableStyle-Alternate-Row-Color-Body-Body1">
            <td className="TableStyle-Alternate-Row-Color-BodyE-Column1-Body1">
                <strong>Blueprint input - published parameters</strong>
            </td>
            <td className="TableStyle-Alternate-Row-Color-BodyD-Column1-Body1">
                <ul>
                    <li>
                        Opens the <strong>Run Suite</strong> page with blueprint inputs published in the blueprint and in the suite.
                    </li>
                </ul>
            </td>
        </tr>
        <tr className="TableStyle-Alternate-Row-Color-Body-Body2">
            <td className="TableStyle-Alternate-Row-Color-BodyE-Column1-Body2">
                <strong>Test input - all parameters</strong>
            </td>
            <td className="TableStyle-Alternate-Row-Color-BodyD-Column1-Body2">
                <ul>
                    <li>
                        Creates a new suite (<strong>Create Suite Template</strong>) page
                    </li>
                    <li>
                        Edits a suite in the <strong>Edit Suite Template</strong> page
                    </li>
                    <li>
                        Opens the <strong>Run Suite</strong> page – <strong>All Inputs</strong> tab
                    </li>
                    <li>
                        Opens the <strong>Run Custom</strong> page (by clicking the <strong>Customize</strong> button in the <strong>Run Suite</strong> page)
                    </li>
                </ul>
            </td>
        </tr>
        <tr className="TableStyle-Alternate-Row-Color-Body-Body1">
            <td className="TableStyle-Alternate-Row-Color-BodyB-Column1-Body1">
                <strong>Test input - published parameters</strong>
            </td>
            <td className="TableStyle-Alternate-Row-Color-BodyA-Column1-Body1">
                <ul>
                    <li>
                        Opens the <strong>Run Suite</strong> page
                    </li>
                    <li>
                        Opens the <strong>Run Suite</strong> page – <strong>Customize</strong> tab
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


## Using JavaScript Extensibility to configure dependencies between test parameters

As an administrator can configure the possible parameters displayed to the user in a test, and define dependencies between the variable fields. For example, in the code samples presented in the **Custom JavaScript Modules extensions** page, in the **Test input - all parameters** module, the possible values for the **log\_level** parameter field are only available after selecting the values inthe **test\_type** parameter field. Since the script defines a set of possible log level values for each test type, the code updates the **log\_level** field's possible values according to the selected value for the **test\_type**.

**To configure possible values for a test parameter:**

1. Create a test with a **test\_type** string input.
2. Create a suite template with a single job and add the test to the job.

    The **test\_type** parameter displays in the suite.

4. In your script, for this parameter, add the following code, which assigns possible values to the variables:
    
    ```javascript
    data.getParameterByName(t, 'test_type').possibleValues = ["-select-","type 1","type 2"];
    ```
    

**To configure dependencies between test parameters:**

1. In the **Custom JavaScript Modules extensions** page, from the **Select module** dropdown list, select **Test input – all parameters**.
2. In the **Test input – all parameters** module, enter a code based on the following example. Make sure to include the required parameters:
    
    ```python
    if (test_type.value == 'type 1')
      log_level.possibleValues = ["-select-", "1A", "1B", "1C", "1D"];
      
    else if (test_type.value == 'type 2')
      log_level.possibleValues = ["-select-", "2A", "2B"];
    ```
    

You can find a complete sample of the code in the code sample panes at the bottom of the **JavaScript Extension** module pages.

## Related Topics

- Creating Tests
- [Adding Automation Suites](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/JOB-SCHDL/New-Autmt-Suite.htm)
