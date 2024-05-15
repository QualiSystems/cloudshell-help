---
sidebar_position: 1
---

# Login to the Job Scheduling Portal

In order to access the New Job Scheduling Portal or API, you need to have a user (in CloudShell Resource Manager) that is associated to at least one domain which is not the Global domain. You can log in to the new CloudShell Job Scheduling with users created in CloudShell, imported from Microsoft Active Directory or from your organization's LDAP solution.

**To login to the Job Scheduling Portal:**

1. Access the Job Scheduling Portal.
2. Specify your CloudShell **User Name** and **Password**.
3. Click **Login**.
    
    Note that the New Job Scheduling does not include the Global domain. This means two things:
    
    - There is no central location for reviewing all domain activity in the Job Scheduling Portal.
    - Users associated only with the Global domain cannot access the Job Scheduling. Such users attempting to log in will get the following error:
        
        ![](/Images/JSS/JssLogin_380x326.png)
        
    
    ## Global domain in the New Job Scheduling
    
    We originally created the Global domain to provide administrators with a global view into the resources of CloudShell. However, with increasing domain usage, demand for domain segregation rose. Now that tests run in specific environments, it makes more sense for them to be associated with a domain that is relevant for the execution, rendering the global domain unneeded.