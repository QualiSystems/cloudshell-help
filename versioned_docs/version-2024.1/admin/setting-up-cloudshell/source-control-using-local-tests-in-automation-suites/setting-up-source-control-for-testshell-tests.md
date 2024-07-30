---
sidebar_position: 3
---

# Setting Up Source Control for TestShell Tests

This article discusses the configuration steps for adding and managing tests using a source control solution. These procedures apply to tests executed by TestShell Studio and Runner. For executing local tests in Job Scheduling automation suites, see [Enabling Automation Suites to Use Local Tests](./enabling-automation-suites-to-use-local-tests.md).
:::note
The application is oblivious to source control, so all source control\-related actions including Commit, Get Latest and conflict management are handled in your source control solution.
:::
## Adding test folders to source control

To manage your tests using a source control solution, add the folders of your local tests and dependencies as repositories.

There are three TestShell elements you need to add to source control:

- **Tests**: Your local tests and custom tools
    
    The default folder is `C:\Users\Administrator\Documents\TestShell Files`, and also includes custom tools.
    
- **Assets**: Local dependencies and packages that are used by your tests. There is no centralized default folder for assets.
    
- **Pointers**: .tsdll files that link each asset to the tests that use it.
    
    The default folder is `C:\ProgramData\QualiSystems\Resources`
    
:::note
If you want to change the folder locations for the tests or assets folders, use the `TestShellServerLocalTestsPath` and `AssetsPath` keys.
:::
## Migrating existing assets to the designated Assets folder

(Migration applies to existing customers only) As assets may be stored in different places, to add them to source control, you need to first copy the local assets to the source\-controlled folder, and redirect each local asset's path to this folder.

**To migrate existing assets to the designated Assets folder:**

1. Copy the local assets to the new folder.
2. In TestShell Studio, in the **Assets** explorer, double click each local asset and update the **Path** (Do not delete the asset's filename).
3. Save your changes.
4. Commit the updates to source control.

## Using tests that are managed in source control

This workflow outlines the basic process for adding, updating or using source\-controlled tests. The terminology may change, depending on the source control solution.

1. Get latest version of the tests to ensure you are using the current version of the test and related files (If more people are working on the same repository).
    
2. Add, update or run tests in TestShell.
3. If you added or updated a test, Add, Commit and Push the tests to source control.
:::tip
Make sure to include a meaningful description for each commit as it may be difficult to compare different versions of a test due to the complexity of the local test files.
:::