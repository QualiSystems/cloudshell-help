---
sidebar_position: 2
---

# Defining the Target Server

Make sure that SQL is set up on the target server, and that all CloudShell clients have access to the QualiServer.

Make sure that the IT department knows about the CloudShell deployment and that the CloudShell database is added to the scheduled backup routine.

Ensure all relevant credentials for the database instance are available at the time of installation.

Prepare any 3rd party applications for working with CloudShell.

Prepare a list of all L1 switches and traffic generators, including the IP address and login information for each device.

Prepare a list of all CloudShell users, including their email address and login information.

Prepare a CSV file listing your lab equipment devices. This will allow you to automate most of the import process.

Resource Manager domains are virtual subsets of lab equipment and devices. Define the target domains for your lab. Define the target user groups. Specify which groups of users will have access to each domain. Groups are allowed either active or view-only access to domains.

It is recommended to start with a validation domain that contains a subset of representative resources. The representative subset can be reused in the future as a validation domain.
