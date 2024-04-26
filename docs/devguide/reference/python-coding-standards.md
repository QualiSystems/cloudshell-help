---
sidebar_position: 1
---

# Python Coding Standards

In this article we will describe the coding style for all scripts and drivers. Adhering to the same coding style makes our code more readable, easier to understand for other teams and easier to maintain.  
Quali Python Standard derives from [PEP 0008 – Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) and extends it with a few clarifications:

- 4 spaces are used for indentation
    
- Class names should use the CapWords convention
    
- Use one leading underscore only for non-public methods and instance variables.
    
- Function names should be lowercase, with words separated by underscores as necessary, started with a strong action verb (started with lower case)
    
- Variables should be lower\_case\_with\_underscores. Avoid single character variable names
    
- Module names - lower\_case\_with\_underscores.
    
- Constants - UPPER\_CASE\_WITH\_UNDERSCORES
    
- Inline comments should start with # and a leading space
    
- Code should be documented with doc string according to Sphynx. For details guideline see: [Spinx Guideline](http://www.sphinx-doc.org/)
    

## Sphinx documentation example

```python
def Deploy(self, context, Name=None):

    """
    Deploys app from template
    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext
    :param context: The CloudShell execution context for the command
    :type Name: str
    :param Name: Name of the app to Deploy
    :rtype: str
    :return The VM details JSON of the deployed VM
    """
```

- Unit tests should be located under similar location as the class they test, for example:
    
    ```bash
    vcenter_shell
    |-- tests
    |    +-- test_commands
    |          +-- test_virtual_switch_to_machine_connector.py
    +-- vcenter_shell
         +-- commands
              +-- virtual_switch_to_machine_connector.py
    ```
    
    [PEP 20 – The Zen of Python](https://www.python.org/dev/peps/pep-0020/) is a set of sentences that express the spirit behind Python.
    

**We would like to emphasize the following:**

- Beautiful is better than ugly.
    
- Explicit is better than implicit.
    
- Simple is better than complex.
    
- Readability counts.
    
- Errors should never pass silently.
    
- Unless explicitly silenced.
