---
sidebar_position: 1
---

# Deploying a New Test Execution Service

**To deploy a new Test Execution Service:**

1. Log on to the designated machine.
2. Copy the following code into the `customer.values.yaml` file (outside of the `cloudshell-core` section):
    
    ```css
    robot-test-execution-service:
      name: test-execution-service1
      env:
        TES_SERVER_NAME: TES1
        TES_API_HOST: test-execution-service1-svc
        TES_CAPACITY: 200
        TES_SERVER_DESCRIPTION: CloudShell's Execution Service
      image:
        tag: 1.0.0.116
        pullSecret: cloudshell-acr
    ```
    :::note
    You can also take the code snippet from the `values.yaml` file residing in the official CloudShell version Helm chart package from [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
    :::
3. Modify the settings accordingly.
    
    :::note Notes:   
    - You need to provide a unique name to the new Test Execution Service (in the above example: “test\-execution\-service1”). This name will be used to identify the service in Kubernetes. Make sure to specify the same name in the `TES_API_HOST` environment variable as well, followed by `-svc`.
    - Make sure to use the same image tag (in the above example: “1.0.0.116”) as in the main CloudShell helm chart.
    - It is possible to add additional environment variables to the list for additional customization, as listed in [Parameters](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tes-config.htm#Paramete).
    :::
4. To create a new deployment, run the following from your command-line or terminal:
    
    ```python
    helm upgrade --install cloudshell cloudshell.tgz -f customer.values.yaml -namespace cloudshell
    ```
    
    Where:
    
    - **tes1** is the name of the helm deployment. Provide an informative name
        
    - **cloudshell.tgz** is the name of the helm chart package