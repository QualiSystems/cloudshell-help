---
sidebar_position: 2
---

What's New in Version 2023.2
============================

In this article:

*   [Version 1.1 updates](#Version)
*   [Features and enhancements](#Features)
*   [Security enhancements and 3rd-party tool upgrades](#Security)
*   [New and updated API methods](#New)

Version 1.1 updates
-------------------

### QualiX 5.0

We're happy to announce the release of QualiX 5.0. Based on [Apache Guacamole 1.5.3](https://guacamole.apache.org/releases/1.5.3/), this new version of QualiX includes a streamlined QualiX-over-Docker deployment process that allows you to automate SSL and advanced post-deployment configurations as part of the installation process, and updated RDP/SSH/VNC/Telnet dependencies. Upgrade procedures for existing QualiX over Docker/OVAinstallatoins are available.

For details, see Deploy QualiX 5.0 and up Using Docker.

Features and enhancements
-------------------------

This release includes the following features and enhancements.

### HTTPSsupport for Training Portal

For enhanced security, the CloudShell Training Portal can be configured to run over HTTPS. For details, see Setting up Training Portal Using the Installer (Over the Shoulder).

### Allow shell update to override old/deprecated attributes

It is now possible to configure shells to automatically remove old deprecated attributes whenever the CloudShell admin updates the shell in the **Manage > Shells** page. For details, see Overriding Old/Deprecated Shell Attributes.

### Support for MongoDB 6.0.4

CloudShell's setup process provides a MongoDB 6.0.4 installer for new customers, while existing customers will need to upgrade their MongoDB installation manually, as explained in How to Upgrade MongoDB From 4.2 to 6.0.

Security enhancements and 3rd-party tool upgrades
-------------------------------------------------

*   Implemented support for MongoDB 6.0.4. New CloudShell installations come with version 6.0.4 installed by default, while existing CloudShell customers can upgrade to version 6.0.4 when upgrading to CloudShell 2023.2.
*   We’ve updated the version of RabbitMQ (3.11.10) & Erlang (25.2.3)
    
*   ElasticSearch has been upgraded to 7.17.5

New and updated API methods
---------------------------

*   New CloudShell Administration REST API for managing CloudShell domains, groups, users, license pools, and more. For details, see CloudShell Administration REST API.
*   New APIs supporting organizing resources in blueprints and sandboxes:
    
    *   GetResourcesLabelsInTopology
        
    *   GetResourcesLabelsInReservation
        
*   Added new methods to WebAPI endpoint and client for Cloudshell Automation API including:
    
    <table><tbody><tr><td><p>EndReservation</p><p>CreateImmediateTopologyReservation</p><p>CreateTopologyReservation</p><p>GetUserDetails</p><p>GetTopologyDetails</p><p>FindResources</p><p>GetResourceAvailabilityInTimeRange</p></td><td><p>ConfigureAppsV2</p><p>GetReservationStatus</p><p>GetCurrentReservations</p><p>GetDomainDetails</p><p>UpdateReservationDescription</p><p>AddResourcesToReservation</p><p>UpdateReservationGlobalInputs</p></td><td><p>GetScheduledReservations</p><p>GetResourceLiveStatus</p><p>ExportFamiliesAndModels</p><p>DeleteReservation</p><p>GetServerDateAndTime</p><p>UpdateResourceDescription</p><p>UpdateResourceAddress</p></td></tr></tbody></table>