---
sidebar_position: 1
---

# Setting Up a Test Repository

Please take the following under consideration when setting up a test repository:

- The test repository is a folder residing in an online Git repository (GitHub, GitLab or BitBucket). The test repository may contain subfolders, which have tests. When setting up a job, the suite designer is able to add tests from any folder within the defined test repository.
- Private (password-protected) and public test repositories are supported.
- In the New Job Scheduling, the term "test" is equivalent to a Robot suite (i.e. a single Robot file)
- Only Robot Framework tests are supported.
- The New Job Scheduling does not currently support defining variables in external Python files.
- Test parameters of type string scalar are supported and can be modified when adding the tests to the job.
- Tests are associated to domains via a `.cs_domains` configuration file. For details, see [Associating Tests to Different Domains](./associate-tests-to-domains.md).
- Test requirements must be defined in a `requirements.txt` file that resides in or above the folder containing the Robot tests.
    
    The following line must be included in the file, along with the rest of the tests' dependencies:
    
    ```css
    robotframework == 3.2.2
    ```
    
    To use Robot Framework 4.x, use the following line instead:
    
    ```css
    robotframework == 4.1.3
    ```
    
    Same as for shell and script virtual environments, virtual environments for jobs also use a `requirements.txt` file. When running the first test of a job, the test execution server creates the virtual environment and installs the dependencies listed in the `requirements.txt` file that is closest to that test for all of the tests in the job. In other words, the test execution server first looks for the `requirements.txt` file in the test's folder, then checks the parent folder and moves up the folder hierarchy until it finds a `requirements.txt` file. If the file cannot be found, the job's execution will fail. In addition, if a test in the job needs a package or dependency that is missing from the `requirements.txt` file, that test's execution will fail.
    
    It is therefore important to properly design your test repository and the `requirements.txt` files to be used. For example, you could set up a test repository that has two main folders, each containing a different `requirements.txt` file for the tests within that main folder and its subfolders. Furthermore, when you set up a job, make sure to only select tests from the same main test folder.
    
    For example:
    
    ![](/Images/IG2/JssRepoStructure.png)
    

## Related Topics

- [Creating Suites](../../../../jss/jss-portal/job-scheduling-page/managing-suites/create-suites.md)
- [Test Repositories Dashboard](../../../../jss/jss-portal/job-scheduling-servers/test-repositories.md)