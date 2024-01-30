---
sidebar_position: 3
---

# Consuming Sandboxes as Part of Continuous Integration Workflows

This article explains the end-to-end flow for integrating CloudShell with your Continuous Integration (CI) tool. This integration offers considerable time savings by automating the running and verification of your automation processes and tests through CloudShell sandboxes.

:::note
You may need to collaborate with different people in your organization to complete some of these tasks.
:::

To integrate CloudShell with your CI tool:

1. Install the desired CloudShell CI plugin on your CI tool. Official CloudShell CI plugins such as Jenkins and TeamCity are available in [Quali Repositories](https://github.com/orgs/QualiSystems/repositories).
2. Configure the CloudShell connection details on your CI tool, as explained in the plugin's documentation.
3. Design a blueprint that suits your CI process.
    
    - Make sure the blueprint's Setup script includes all the automation that is required for the test. For details, see CloudShell Dev Guide's [CloudShell's OOB Orchestration](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm).
    - In addition, the CI tool must wait for the sandbox's setup process to complete before running the test. Note that CloudShell's Default Sandbox Setup script provides this functionality.
4. Create your first build in the CI tool, as detailed in the plugin's documentation. This includes specifying the blueprint's name, duration, inputs, and any optional details, as appropriate.
    
    :::note
    CloudShell CI plugins only work with public blueprints.
    :::
    :::tip
    Use the Stop Sandbox functionality that is provided by the CloudShell CI plugin to automatically free up your sandbox's resources once the automation process or test completes.
    :::
    
5. Run the build to make sure that it works.
    
    Make sure the CI tool waits for the sandbox's setup process to complete before running the test. This is done automatically by Setup scripts that are based on CloudShell's Default Sandbox Setup script.
    
6. Make sure a new sandbox is created in CloudShell with the specified configurations.
7. Add your custom automation process or test to the CI build, using your preferred plugin language.
    
    The CloudShell CI plugin populates the sandbox's details in the build so it can be used in your automation process or test.
    
8. Rerun your build to verify the end-to-end flow.
9. Now that the build is fully configured, you can add it to your CI workflow and monitor the results.