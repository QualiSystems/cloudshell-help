---
sidebar_position: 8
---

# Add an AWS EC2 App Template

The App template defines the settings and configurations of the VM to be deployed in the sandbox as well as the application(s) to be installed on that VM.

:::note Notes:
- By default, all public cloud Apps of the same type in the same sandbox are deployed within the same subnet and therefore are connected to each other and isolated from other sandboxes. However, using the **Subnet** service, blueprint designers can set up multiple subnet networks in the sandbox, instead of having one default subnet for all the Apps of the same cloud provider. For details, see [Subnet Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Subnets.htm).
- Public cloud App deployment requires the management network and subnet(s) to be prepared in advance as part of the sandbox **Setup** process; CloudShell's out-of-the-box **Setup** process does this. However, the blueprint must include at least one public cloud App to initiate the **Setup** script's connectivity preparation process for deployment in that public cloud.
:::
**To add a new AWS EC2 App template:**

1. Click **\+ Add**.
    
    The **Create New App** wizard is displayed.
    
    ![](/Images/CloudShell-Portal/Manage/CreateNewApp.png)
    
2. From the **Select Deployment Type** pane, select **AWS EC2 instance**.
3. Enter a **Name** for the App template.
    :::note
    The App template's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
4. Click **Create**.
    
    The App template is created and the **App** wizard's **General** page is displayed.
    
    ![](/Images/CloudShell-Portal/Manage/AppGeneralPage.png)
    
5. In the **General** page, define the App template's display settings and category.

    <table>
        <thead>
            <th>Field</th>
            <th>Required</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Required</td>
                <td>App name that is displayed in the catalog.</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>Optional</td>
                <td>Description of the App.</td>
            </tr>
            <tr>
                <td>Icon</td>
                <td>Optional</td>
                <td>Add an image to the catalog definition. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB).</td>
            </tr>
            <tr>
                <td>Categories</td>
                <td>Optional</td>
                <td>
                Service categories are a method to classify Apps. The Apps are displayed in the **Add App / Service** side pane in the blueprint and sandbox diagram, arranged in categories. Only users who are permitted to view the category can access the App. Apps without a category are not displayed.

    By default, the **Applications** category is selected.

    Select a category from the dropdown list. You can select additional categories. Examples of categories are: applications, networking and VLAN.

    :::note Notes:
    - The category must be associated with the domain in which the required cloud provider resides. For information about domain categories, see [Managing domain categories](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Blprnt-Ctlg-Ctgs.htm#Managing2).
    - It is recommended to use up to a 2-level hierarchy when organizing the **Add App / Service** catalog (i.e. root and sub-category).
    - In the **Add App / Service** side pane, Apps are displayed in the root category only. This includes services associated to sub-categories.
    :::
    </td>
            </tr>
        </tbody>
    </table>

6. In the left pane, click **Deployment Paths** and configure the App template's deployment path.

    A deployment path defines (1) the AWS AMI image, (2) the VM’s settings such as storage size, CPU and image file, and (3) the CloudShell cloud provider resource that enables CloudShell to access the cloud provider and deploy the VM on it.

    Note the deployment path's name (highlighted in the image below). The path's name is dynamic and consists of the selected **Cloud Provider** resource and **Deployment type**. You can change the name of the path by clicking the field.

    ![](/Images/CloudShell-Portal/Manage/AppDeploymentPathsPage.png)

      1. From the **Deployment** drop down list, select the deployment type.
          
          The selected deployment type's attributes are displayed.
          :::important
          The deployment type related to the AWS 2nd Gen cloud provider shell is named "Amazon AWS EC2 Instance 2G".
          :::
      2. Fill in the details.
          
          For **AWS EC2 Instance** attributes

            <table>
                <thead>
                    <th>Attribute</th>
                    <th>AWS EC2 shell version</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Cloud Provider</td>
                        <td>All</td>
                        <td>Name of the AWS EC2 cloud provider resource to be used</td>
                    </tr>
                    <tr>
                        <td>AWS AMI ID</td>
                        <td>All</td>
                        <td>
                        AWS AMI ID to launch the instance from. For example, "ami-6869aa05".
            :::note
            The AMI must be accessible in the selected cloud provider's AWS region.
            :::
                        </td>
                    </tr>
                    <tr>
                        <td>Allow All Sandbox Traffic</td>
                        <td>All</td>
                        <td>
                        Determines if the App allows inbound traffic from all other AWS EC2 Apps in the sandbox. If set to **False**, the instance will be isolated. Access from specific Apps or subnets can be defined using the **Inbound Ports** attribute or API.
            :::note
            By default, this attribute is **True**. This means that all access is allowed to all ports from all Apps in the sandbox and all ports are open for traffic within the sandbox.
            :::
                        </td>
                    </tr>
                    <tr>
                        <td>Instance Type</td>
                        <td>All</td>
                        <td>
                        AWS EC2 instance type. The instance type determines the CPU, memory, storage and networking capacity of the instance. For example, "t2.large".

            Leave empty to use the default instance type specified in the AWS EC2 cloud provider resource.

            For built-in or Marketplace images, make sure the instance type is supported by the image you defined in the App.
                        </td>
                    </tr>
                    <tr>
                        <td>IAM Role Name</td>
                        <td>All</td>
                        <td>
                        (Optional) Name of the IAM role to associate to the App's AWS EC2 instance. The instance will use this role to access AWS.

            :::note Notes:
            - The role must have the AWS permissions required for the actions the instance is expected to perform.
            - If the role does not exist, or there are other issues with launching the instance with the role, App deployment will fail.
            :::
                        </td>
                    </tr>
                    <tr>
                        <td>Inbound Ports</td>
                        <td>All</td>
                        <td>
                        Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default all ports are open for traffic between AWS EC2 App instances within the sandbox, but this can be changed using the **Allow All Sandbox Traffic** attribute.

            In addition, all outbound traffic is allowed.

            The syntax is:

            `port[single/range]:protocol[tcp(default)/udp]`

            For example: "80;443:tcp;200-220:udp".
            :::note
            If not specified, the protocol defaults to TCP.
            :::
            :::tip Tips:
            - To allow QualiX in-browser connections to the VM from the sandbox, include port "22".
            - To set more specific security groups, it is recommended to use the TestShell API's `[SetAppsSecurityGroup](https://help.quali.com/Online%20Help/TestShell-API/TestShell%20XML%20RPC%20API.html)` method instead. Unlike the **Inbound Ports** attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see [SetAppSecurityGroups Code Example](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/SetAppSecurityGroups-code-sample.htm).
            :::
                        </td>
                    </tr>
                    <tr>
                        <td>Public IP Options</td>
                        <td>All</td>
                        <td>
                        Enables access to the instance from the internet. Options are:

            - **No Public IP** - default option
            - **Public IP (single subnet)** - (for Apps connected to a single subnet \[private or public\]) allocates a public IP
            - **Elastic IPs** - (for Apps connected to multiple subnets) allocates an elastic IP for the App in each of the public subnets that it is connected to
                :::note 
                In AWS EC2 Apps, this setting is mandatory if the App is connected to more than one network (private or public).
                :::
            </td>
                    </tr>
                    <tr>
                        <td>Storage Size</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>The root volume size. The value must be greater or equal to the size of the root snapshot used. If set to **0**, the default defined in the image will be used. For example: 30.</td>
                    </tr>
                    <tr>
                        <td>Storage IOPS</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>The default number of I/O operations per second that the root volume can support. This parameter is used only for storage of type io1, in which you can provision up to 30 IOPS per GiB. If set to **0**, the default in the image is used. For example: 240.</td>
                    </tr>
                    <tr>
                        <td>Storage Type</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>The type of storage volume. In AWS, there are several EBS Volume types that can be used, gp2 and io1 for SSD, st1 and sc1 for HDD or the standard type which is the old generation EBS volume type. If **auto** is selected, the storage type defined in the image is used.</td>
                    </tr>
                    <tr>
                        <td>Root Volume Name</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>The device names available for the volume. Depending on the block device driver of the selected AMI's kernel, the device may be attached with a different name than what you specify. If left empty, the default defined in the AMI is used. For example: /dev/xvda</td>
                    </tr>
                    <tr>
                        <td>Autoload</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>Enables the automatic execution of the Autoload command during reservation Setup.</td>
                    </tr>
                    <tr>
                        <td>Wait for IP</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>If set to **False**, the deployment will not wait for the VM to get an IP.</td>
                    </tr>
                    <tr>
                        <td>Wait for Status Check</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>If set to **True**, the App's deployment will end successfully only after instance status checks have passed. The status checks include network connectivity, physical host status, system status and more.</td>
                    </tr>
                    <tr>
                        <td>Wait for Credentials</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>Enable in order to retrieve credentials from a Windows machine. Note that if this parameter is enabled and the credentials are not retrieved within 15 minutes, the deployment will fail.</td>
                    </tr>
                    <tr>
                        <td>Custom Tags</td>
                        <td>All</td>
                        <td>
                        Custom tags to be set on CloudShell-deployed AWS EC2 instances for billing, like the details of the project or team that deployed the instance.

            For multiple tags, specify a comma-separated list of the key-value pairs. For example:

            `tag_name1:ec2_instance,tag_name2:ec2_instance2`
                        </td>
                    </tr>
                    <tr>
                        <td>User Data URL</td>
                        <td>All</td>
                        <td>(Optional) URL to the raw version of the script to execute (PowerShell, bash, sh, etc.).</td>
                    </tr>
                    <tr>
                        <td>User Data Parameters</td>
                        <td>All</td>
                        <td>
                        (Optional) Parameters to pass to the user data script. For example, specifying `param1 param2` will result in the command running as follows:

            `./file.sh param1 param2`
                        </td>
                    </tr>
                    <tr>
                        <td>Private IP</td>
                        <td>All</td>
                        <td>
                        When the VPC is in static mode (defined on the AWS EC2 cloud provider resource's **VPC Mode** attribute), this attribute is used to set a static private IP for the deployed App.

            To set a static private IPs in multi-subnet mode, specify a json string that maps the subnet request CIDR to the requested static private IP. For example: \{"10.0.0.0/28": "10.0.0.6"\}
                        </td>
                    </tr>
                    <tr>
                        <td>Enable Source Dest Check</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>
                        Set to **True** to enable source/destination checks. Source/destination checks allow users to create custom routing inside the VPC. It is applied to all vNICs of a certain instance. If enabled, you can reconfigure routing to go through that instance. This value must be **False** for Virtual Appliance instances like virtual firewalls/routers.
            :::note Important: 
            This value must be **False** for Virtual Appliance instances like virtual firewalls/routers. The reason for this is that some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Setting **Enable Source Dest Check** to **False** ensures the instances are not stopped when they become impaired.
            :::
                        </td>
                    </tr>
                    <tr>
                        <td>Status Check Timeout</td>
                        <td>2<sup>nd</sup> Gen only</td>
                        <td>
                        Timeout, in seconds, for AWS status checks to pass. Some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Therefore, to ensure virtual appliance instances are not stopped when they become impaired, use this attribute to provide a long enough timeout for the instance to complete its status check.
            :::note
            The default timeout is 600 seconds (10 minutes). However, instance deployment will fail once the instance status becomes "impaired". Specifying a status check timeout period will configure CloudShell to ignore the "impaired" status and instead wait for the instance deployment to complete or the timeout period to pass.
            :::
                        </td>
                    </tr>
                </tbody>
            </table>

7. To add additional deployment paths to the App template, click the **Add New Deployment Path** link at the bottom of the wizard and fill in the required information.
8. In the left pane, click **Configuration Management** and configure the application to be installed on the VM.
    
    ![](/Images/CloudShell-Portal/Manage/ConfigurationManagement.png)
    :::tip
    To learn how to develop custom scripts and Ansible playbooks, including examples, and set up support for the desired configuration management tool, see [Developing Configuration Management Scripts for Apps](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Developing-Config-Management.htm).
    :::
    :::note Notes:
    - To run configuration management on an Azure App, make sure the App's VM size is Basic_A2 or larger.
    - For configuration management operations, CloudShell uses an available Execution Server (for Ansible, it's a Linux Execution Server that has the **Supports Ansible** flag).
        
        If the cloud provider resource has an **Execution Server Selector** configured, it will use that selector. If the selector is empty, CloudShell will use the selector defined in the appropriate **Resource Manager Client >Configuration Services** model (**Ansible Configuration** or **Custom Script Configuration**).
        
    - Execution Server selectors specified on the deployed App shell/resource are not used to execute configuration management operations.
    :::    
    
    1. Define the script or playbook to install.

        <table>
            <thead>
                <th>Attribute</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Select Tool</td>
                    <td>
                    Select the application's installation and configuration tool.

        - **None**: Do not use any Configuration Management option. Use this option if, for example, the image or template already contains the application to install.
        - **Script**: Select the custom script to run (PowerShell, bash or sh).
        - **Ansible**: (Intended for customers who are already using Ansible) Select the Ansible playbook to run.
            :::note
            The playbook runs once during the **Setup** phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way.
            :::
            Note that the playbook runs once for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs.
            

        Depending on the selection, additional options may become available.
                    </td>
                </tr>
                <tr>
                    <td>Connection Method</td>
                    <td>
                    The method to use to connect to the VM.

        Select:

        - SSH if the VM has a Linux OS
        - Windows Remote Management if the VM has a Windows OS
        :::note
        To run configuration management on a Windows VM, the VM must have WinRM enabled. For details, see [Enable WinRM on Windows VMs to Support Configuration Management](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-WinRM-for-CM.htm).
        :::
                    </td>
                </tr>
                <tr>
                    <td>Playbook / Script Location</td>
                    <td>
                    Details of the Ansible playbook or custom script.

        - **URL**: Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers.
            :::tip
            The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint.
            
            - To use parameters, specify the parameter name in curly brackets (for example: \{branch\}).
            - If the App has this parameter, CloudShell will replace the \{branch\} with its value during execution.
            - If the parameter is missing, CloudShell will replace \{branch\} with emptystring.
            - If you are using a global input, customers would be well advised to set a default value on the global input
            :::
            **For GitHub, specify the raw URL. For example:**
            
            ```javascript
            https://raw.githubusercontent.com/.../site.yml
            ```
            
            **For GitLab, specify the API endpoint in the format:**
            
            ```javascript
            https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master
            ```
            
            Where:
            
            - Each special character that the file contains has to be encoded. In the example above - “%2E” is an encoded point (“.”)
                
            - The ref value is the branch name (master for this example)
                
            
            **For BitBucket Data Center (on premise), use the following URL format:**
            
            ```javascript
            http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml
            ```
            
            **For BitBucket Cloud, use one of the following:**
            
            - For source code files, specify the API endpoint:
                
                ```javascript
                https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/src/{GUID- the Commit hash string}/testsharding.yml
                ```
                
            - For download files (files residing in the repository's "Downloads" folder), specify this endpoint:
                
                ```javascript
                https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/downloads/site.yml
                ```
                
            :::important
            If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open **Resource Manager Client>Resource Families>Configuration Services** (**Ansible Configuration** or **Custom Script Configuration**) and set the **Verify Certificate** attribute to **False**.
            :::
        - **User/Password**: (For private repositories) Access credentials or token to the script/playbook's online repository.
            
        - **Token**: (For private repositories) Access token to the script/playbook's online repository.
            
            For GitHub and GitLab, specify the API token. For BitBucket Cloud, set the repo's "App Password" in the App template's **Password** field. For BitBucket Data Center, specify the personal access token.
            

        :::note Notes:
        - **For Custom Script configurations**: In SSH mode, only bash and sh scripts are allowed. In WinRM mode, only PowerShell scripts are allowed. WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the **winrm_transport** parameter to **ssl**.
        - **For Ansible configurations**: The Ansible playbook must be a YML or YAML file. To specify multiple playbooks or a hierarchy of an Ansible project, you can specify multiple Ansible playbooks or a ZIP package. For example: `https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip`
        - If a ZIP containing 2 or more playbooks is specified, CloudShell will use the playbook file titled `site.yml` or `site.yaml`. If the file is missing, the App's deployment will fail.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Inventory Groups</td>
                    <td>
                    (For Ansible) Specify the host groups for the application to be installed, separated by semicolons (;). The newly deployed VM will be associated to these groups, thus allowing plays that target these groups to run on the VM.

        For example: `Servers/AppServers;Servers/DBServers`
                    </td>
                </tr>
                <tr>
                    <td>Parameters</td>
                    <td>
                    Parameters to be passed to the Ansible playbook or custom script. Specify the parameters and their default values.

        In the blueprint or sandbox diagram, privileged users can also set the parameter to receive the value that is specified for a global input when reserving a sandbox containing the App. This is done by selecting the global input when editing the App in the blueprint or sandbox diagram. For example, a global input that specifies the build number of a product to be tested or which components of a product to install.
        :::important
        (For Ansible) To customize the port to be used to communicate with the VM, add the `Ansible_port` parameter. Default: `SSH` / `Port: 22` / `WinRM: 5985`.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Additional Arguments</td>
                    <td>
                    (For Ansible) Define arguments to be passed to the execution of the playbook (`Ansible-playbook` command). For example, `-v` will set verbose mode on while `-f` will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation.

        The arguments must be specified in **Resource Manager Client** > **Configuration Services** family > **Ansible Configuration** model > **Ansible Additional Arguments** attribute.
        :::note
        The arguments are defined globally for all Apps using Ansible.
        :::
        :::important
        To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known\_hosts' key), include the following additional arguments: `--ssh-extra-args='-o StrictHostKeyChecking=yes'`
        :::
                    </td>
                </tr>
            </tbody>
        </table>

      1. To enable the end-user to rerun the App's configuration management on the deployed App in the sandbox, select **Allow rerunning configuration management for resources deployed from the App**. Once the App's deployment completes, a **Rerun Configuration Management** command is included in the deployed App's **Application Commands** pane. For details, see [Run App Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm). This is useful for rolling back the App's VM to its original state.
          
      2. To enable blueprint and sandbox owners to modify the App's Configuration Management details, select **Allow blueprint/sandbox owners to modify the App's Configuration Management**. The following details can be modified: playbook/script, authentication details, inventory groups, and parameters. Note that the modifications only apply to the blueprint or sandbox of the instance.
      3. Optionally click the **Add New Script/Playbook** link at the bottom right to add additional custom scripts/Ansible playbooks to the App. The scripts will run in their display order, from top to bottom. You can drag scripts up or down to rearrange.

      4. To change the script's alias, click the script's name and change as appropriate.
   
9. In the left pane, click **App Resource** to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell.

        ![](/Images/CloudShell-Portal/Manage/AppResource.png)
    :::important
    To help sandbox end-users connect to the VM, it is recommended to include the User and Password in the blueprint's instructions. For additional information, see [Add Instructions](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Instr.htm).
    :::

    <table>
        <thead>
            <th>Attribute</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Shell</td>
                <td>
                The Shell on which the App's VMs are based. When an App is deployed in a sandbox, it changes into a "deployed App resource", which is based on the selected Shell. By default, the "Generic App Model" Shell is used.

    Deployed Apps include a default set of commands such as Power On and Refresh IP, and the VM's **User** and **Password** attributes, as explained below.
    :::note
    Changing the Shell might cause additional fields to become visible and you may need to enter further information.
    :::
                </td>
            </tr>
            <tr>
                <td>User</td>
                <td>
                User defined in the App's image. The **User/Password** credentials are used by QualiX to create in-browser connections to the VM from within the sandbox.

    :::note Notes:
    - For AWS instances,make sure to set the **User** of a user that already exists on the Amazon machine image. For custom images, the image owner should know the credentials, while community/marketplace images have the image's credentials listed in their documentation.
    - Azure VM username and password restrictions apply. For details, see [Frequently asked question about Windows Virtual Machines](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq).
    - For Azure Marketplace images, CloudShell will create a user on the VM based on the **User/Password** credentials you specify.
    - For Azure Marketplace VMs, if the user is not set, CloudShell will set **adminuser** as the default user name.
    :::
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                VM user's password.

    :::note Notes:
    - For AWS Marketplace images, leave the **Password** empty. The AWS shell generates a new key-pair for each sandbox, which QualiX will use to establish the in-browser connection.
    - For Azure Marketplace images:
        - If the password is not set, only the user name will be required. For Linux VMs, CloudShell will create an SSH key-pair to enable a secure connection.
        - If the password is set, it will be displayed as asterisks (\*\*\*\*\*\*) in the blueprint or sandbox.
    :::
                </td>
            </tr>
        </tbody>
    </table>

10. Click **Done**.
    
    The new App template is displayed in the **Apps** page.

11. Next, [Configure the Qualix Server for AWS EC2](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Qualix-Srv.htm).