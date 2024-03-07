---
sidebar_position: 2
---

# Associating Tests to Different Domains

Associating a test to a domain allows the users to split their repositories to groups of interest, allowing business and organization segregation. This helps one organization to have multiple, disconnected groups working with the same system.

In the repository, by default, the tests are associated with all domains. To change that, in the online test repository, add a `.cs_domains` file to the relevant parent directory with a list of the domains.

:::note Notes:

- The `.cs_domains` file applies to the tests in the directory containing the file and to its sub-directories.
- The `.cs_domains` file overrides any domain associations defined in a parent directory.
- If the domains list is empty, the domains file will be ignored.
:::
To illustrate how this works, consider the following example:

- **Directory A**
    - `.cs_domains` - Domain 2
    - Test 2
    - **Directory B**
        - `.cs_domains` - Domain 1
        - Test 5
        - Test 7
        - **Directory C**
            - Test 1

In the above hierarchy, Directory A is associated to Domain 2. Directory B has a `.cs_domains` file, which overrides Directory A's domain association, while Directory C doesn't have a `.cs_domains` file and therefore inherits the domain associations from Directory B.

So, a user in Domain 1 will see the following when adding tests to a suite:

- **Directory A**
    - **Directory B**
        - Test 5
        - Test 7
        - **Directory C**
            - Test 1

**To set up the `.cs_domains` file:**

1. Create a file named ".cs\_domains".
2. Open the file and set the suitable domains in JSON format.
    
    - For example, associating "domainX" and "domainY":
        
        `{"domains": ["domainX", "domainY"]}`
        
    
    - Associating all domains:
        
        `{"domains": ["*"]}`
        
3. Save the file and upload it to the suitable directories in the online repository.