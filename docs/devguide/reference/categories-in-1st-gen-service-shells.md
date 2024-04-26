---
sidebar_position: 6
sidebar_label: Categories in 1st Gen Service Shells
---

# Categories in 1st Gen Service Shells

This article explains how to associate service categories to a service Shell. CloudShell exposes services to CloudShell users via service categories, which are associated to the CloudShell domains in which the services are required. The service categories of a specific domain constitute that domain’s services catalog. By default, each service Shell template is associated to a category in the Global domain.

There are two ways to associate service Shells to categories:

- Add the desired categories to the service’s family in Resource Manager Client
    
- Define the association in the service Shell’s data model
    

In this article, we’ll learn how to associate categories via the Shell’s data model.

**To associate a category to a service Shell:**

1. Make sure you are running Shellfoundry with the Global admin user. Run `shellfoundry config` to see which user you are using.
    
2. Create a new Shell from a template using `shellfoundry new`.
    
3. Open the Shell’s root folder.
    
4. Edit the categories in the `datamodel.xml` and `category.xml` files.
    
    **To edit the `datamodel.xml`:**
    
    1. In the `/datamodel` folder, edit the `datamodel.xml`.
        
    2. Under `<Categories>`, create a duplicate of the commented `<Category>` line.
        
    3. Change the category name as appropriate.
        
    4. Uncomment the line.
        
    5. Repeat to add additional categories.
        
    6. Save the file.
        
    
    **To edit the `categories.xml` (required if the categories do not exist in CloudShell):**
    

    1. In the `/categories` folder, edit the `categories.xml`.
       
    2. Under `<Categories>`, create a copy of the lines that start with the `<!--<Category Name` line and end with `</Category>-->`.
       
       For example:
       
       ```javascript
       <!--<Category Name="" Catalog="Service">
           <ChildCategories />
         </Category>-->
       ```
       
    3. Specify the category name. Optionally specify child categories, which are nested under parent categories.
       
    4. Save the file.
