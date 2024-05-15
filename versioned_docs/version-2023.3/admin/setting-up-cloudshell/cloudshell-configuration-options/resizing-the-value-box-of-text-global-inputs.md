---
sidebar_position: 6
---

# Resizing the value box of "text" global inputs

This is useful for global inputs that include json values.

**To resize the global input value box:**

1. Edit the appropriate `customer_override.css` file.
2. Add the following code block:
    
    ```javascript
    #globalParametersView > ul > li > div:nth-child(1) > div.global-value.cell > div.qs-editable-input > div.qs-inputContainer > textarea
    {
      max-height: 200px !important; /* change the max height */
      min-height: 70px !important; /* change the default height */
      width: 450px !important;  /* make it wider */
      left: -85px !important;  /* if you make it wider you should also move the box to the left */
    }
    ```
    
3. Save the file.
4. Restart the browser and open CloudShell Portal.
