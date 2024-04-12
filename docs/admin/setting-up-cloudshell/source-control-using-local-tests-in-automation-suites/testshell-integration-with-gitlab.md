---
sidebar_position: 1
---

# TestShell Integration with GitLab

This article guides you on how to configure GitLab as the source control solution for your local tests and assets for automation suites executed in the **Job Scheduling** dashboard. Since local tests are accessible only to the client on which they were created, using a source control solution, these tests can be shared with other clients as well. In this article we will focus on GitLab as the source control solution. For other solutions, see [Source Control: Using Local Tests in Automation Suites](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Src-Ctrl.htm).

This integration provides test users with the latest version of the desired test(s) and assets and also allows test developers to push updates to GitLab. In this process, you will link your CloudShell clients (CloudShell Portal, TestShell Studio and Runner) and Execution Server(s) to a specific GitLab repository, which will contain the tests and assets, and make them available to these clients.
:::note
For brevity, the terms “Portal”, “Studio” and “Runner” are used to denote “CloudShell Portal”, “TestShell Studio” and “TestShell Runner”, respectively.
:::
For this to work, you need to follow these basic steps:

1. Consolidate the Tests and Assets folders under a single parent folder
2. Install GitLab server on a Linux machine to have a local GitLab repository server
3. Install Git on each TestShell machine to allow Git interaction
4. Add files from the base Studio machine: Add the Tests and Assets folders to create the repository
5. Clone the GitLab repository on each relevant client machine to create a local copy of the repository on each client (Studio, Runner and Portal)
6. Configure Quali Server: Set the local Tests and Assets folders and create a batch script that will pull the local tests from the GitLab repository
7. Configure Execution Servers to access the GitLab repository: Set the folder that will store the tests and assets, create a batch script that will pull the local tests from the GitLab repository

**To set up GitLab source control for your tests:**

1. On the base machine (where you will create the repository), create a folder that will contain the managed files.
2. Copy and place the Tests and Assets folders in this parent folder. The default paths are:
    
    - Assets – `C:\ProgramData\QualiSystems\Resources`
        
    - Tests – `C:\Users\<UserName>\Documents\TestShell Files\Tests`
        
3. On your Studio and Runner client machines, go to the `C:\Program Files (x86)\QualiSystems\TestShell\Studio\customer.config` file, and set the local Assets and parent folders (make sure the paths are accessible to all users):
    
    `<add key="AssetsPath" value="C:\<parent-folder>\Assets"/>`
    
    `<add key="TestShellFilesPath" value="C:\<parent-folder"/>`
    
4. Install GitLab server on a Linux machine to allow you to have an on premise Git repository.
    
    You can download GitLab at [https://about.gitlab.com/](https://about.gitlab.com/).
    
5. Log in to the GitLab portal and create a new Project. The project should have the same name as the Tests and Assets parent folder.
    
6. Install Git on the Quali Server, and each appropriate Execution Server, Studio and Runner, machine to allow you to perform Git operations on any of the clients (Pull/Push). You can download git at [https://git-scm.com/downloads](https://git-scm.com/downloads).
    
    If you are not familiar with Git, please use this simplified commands manual [http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/).
    
7. Add the Test and Assets parent folder from the base machine to the GitLab repository. You can use the manuals or review the sample here (the below commands upload the local Tests and Assets to the GitLab repository):
    
    ```javascript
    C:\> cd c:\TestShell\TestEnv
    C:\TestShell\TestEnv\> git init
    C:\TestShell\TestEnv\> git remote add origin http://<GitLab server address>/root/<project name>.git
    C:\TestShell\TestEnv\> git add .
    C:\TestShell\TestEnv\> git commit -m "<First Tests and Assets creation>"
    C:\TestShell\TestEnv\> git Push -u origin master
    ```
    
8. Clone the GitLab repository on the relevant Studio, Runner and Execution Server machines so it will have a local copy of the Tests and Assets.
    
    ```javascript
    C:\> cd c:\TestShell
    C:\TestShell\> git clone http://<GitLab server address>/root/<project name>.git
    ```
    
    Note that you need to configure each machine to work with the parent folder path, as explained in the beginning of this procedure.
    
9. [Configure Quali Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Update-Lcl-Tst.htm#Configur2) to work with local tests and assets.
    
    This requires setting a batch file that automates the Git Pull request using the **Update Local Tests** process (executed from Portal’s **Job Scheduling** dashboard). You’re welcome to use the following code in the **Update Local Tests** batch file.
    
    ```javascript
    cd %LOCAL_TESTS_PATH%
    REM going to the parent directory
    cd..
    git pull
    ```
    
    For details and additional batch script examples, see [Batch scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Update-Lcl-Tst.htm#Batch).
    
10. To use source controlled tests in CloudShell Portal job suites, enable the relevant execution servers to access the repository, as explained in [Configure each Execution Server that will support local tests](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Update-Lcl-Tst.htm#Configur3).
11. To verify, update local files on each client, and make sure that client uses the updated tests.
    
    This concludes the integration process.
    
    Before running local tests in Studio or Runner, or in automation suites in Portal, CloudShell users will need to pull the latest local tests and assets from the GitLab repository. In Portal, this is done by running the **Update Local Tests** batch script in the **Job Scheduling** dashboard, and in Studio or Runner, by manually performing a pull request from the Tests and Assets parent folder.
