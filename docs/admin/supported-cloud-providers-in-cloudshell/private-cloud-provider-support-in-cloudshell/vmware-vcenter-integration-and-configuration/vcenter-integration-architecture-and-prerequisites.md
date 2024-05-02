---
sidebar_position: 1
---

# vCenter Integration Architecture and Prerequisites

## vCenter Integration Architecture

When deploying a vCenter App in a sandbox, the CloudShell Execution Server connects to the vCenter server and creates the VM according to the settings (parent VM/image, datacenter, ESXi host or host cluster, storage, dvSwitch, etc.) defined on the App and the App's vCenter cloud provider resource. Specifically, CloudShell accesses the datacenter, finds the parent VM, snapshot, template or image defined on the App template\*, and creates the VM from that parent object. If the App has a connectivity requirement defined in the sandbox, CloudShell will create a port group on the dvSwitch, add the VM's vNIC and configure the VLAN on this vNIC and on all other connected vNICs.

*\* When restoring a saved sandbox with deployed vCenter Apps, CloudShell creates the App VMs from the VM clones CloudShell created during the sandbox saving process. For additional information, see [Save a Sandbox](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv.htm).*
:::note Important
vCenter elements created by CloudShell should not be altered as this may cause unexpected behavior.
:::
The following diagram illustrates a vCenter integration (with a local CloudShell installation) hosting a live sandbox that has 6 deployed VMs connected to a VLAN network:

![](/Images/Admin-Guide/Inventory-Operations/vCenter-Architecture_620x333.png)

## CloudShell access to vCenter

- Ensure your CloudShell Execution Server communicates to the vCenter Management IP over HTTPS/port 443. Make sure to allow HTTPS/port 443 through the appropriate firewalls.

## vCenter Prerequisites

For CloudShell integration with vCenter Server, the following preparations need to be made on the vCenter Server.
:::warning Important
Please consult your resident vSphere expert before performing these configurations.
:::
### vCenter machine's operating system

- Windows / Linux

### Licensing

- vSphere version: 5.5 - 6.5, 6.7, 7 (vSphere® Standard™ / Enterprise Plus™/ with Operations Management™ / Platinum™)
    :::note
    CloudShell connectivity requires vSphere® Enterprise Plus™ and above.
    :::
    - vSphere Client
        
    - vCenter server
        
    - ESXi server
        
    - dvSwitch that is capable of creating and configuring port groups
        

### Networking

- Physical backbone – a single switch with management interface and VLAN assignment capability, physically connected to NICs on the ESXis
- dvSwitch: During App deployment, CloudShell creates connectivity between vCenter App VMs as well as physical resources by creating VLAN networks in the sandbox. First, CloudShell allocates a VLAN for each peer-to-peer or many-to-many network in the sandbox and adds the connected endpoints to the relevant network.
    
    CloudShell manages VM networking via the dvSwitch, so if you require networking, you will need a dvSwitch that is capable of creating and configuring port groups.
    :::note
    vSwitch connectivity is supported in the vCenter 2<sup>nd</sup> Gen cloud provider shell and requires the same vSwitch name to be set on all relevant VM cluster hosts. The **VMware vCenter Cloud Provider Shell 2G** shell can be downloaded [here](https://github.com/orgs/QualiSystems/discussions/1691).
    :::
    - Connected to the same physical NICs as the physical backbone switch
    - Capable of creating and configuring port groups
- For connectivity between different datacenters, the dvSwitches and other switches or lab components must be fully trunked.
- The physical switch must be configured to route the individual VLAN traffic to a DHCP server.
- DHCP server can be either:
    - Managed as a service on board the switch
    - A dedicated DHCP server created in VMware (Windows/Linux) on a management network, reaching all segments for IP assignment
- DHCP should be able to manage all required segments according to architecture design.
- Physical network should not be configured with gateways, in order to prevent cross-VLAN communication by default.
- VMs must have network adapter(s). Starting with vCenter 2G version 3.4.0, CloudShell will create VMXNET3 adapters on the VMs if required by the sandbox. For example, if the VM has 2 network adapters of type e1000, but the App has 3 connector lines, CloudShell will create a 3rd network adapter of the same type as the last one (e1000).

### VMware

- Datacenter: Since CloudShell does not provide out-of-the-box support for connectivity between VMs on multiple datacenters, it is recommeded to designate a single datacenter to be used for CloudShell App deployments. The datacenter doesn't have to be dedicated only to CloudShell activity.
    
    - Host cluster – including all ESXi hosts (1 or more) to be managed by CloudShell
    - Datastore or datastore (DS) cluster that includes all data stores (1 or more) to be managed by CloudShell:
        
        - Using VMware vSAN license/external SAN
        - (For datastore clusters) Using NFS cluster, containing all external datastores
        
        :::note Notes about storage:
        - VMs are stored on the datastore or datastore cluster defined on the cloud provider resource.
        - CloudShell does not support cross-storage communication. Therefore, if you’re using multiple cloud provider resources in the same sandbox and want to share the storage among the VMs, make sure all cloud provider resources use the same storage.
        :::

### Best Practices: VMware folders and templates

To help you organize your CloudShell activity on vSphere, we've come up with these best practices:

- "Management" folder - should contain all management VMs:
    - Quali server (Quali Server can be installed on a dedicated VM on the vCenter or in an external location with networking to the vCenter Server)
    - QualiX: In order to use QualiX for in-browser connections to App VMs, make sure the QualiX machine is accessible to the sandbox application network. See [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Qualix.htm)
    - DHCP (if used with a dedicated server) - other applications and services that manage Cloudshell-deployed VM capabilities
- "Infrastructure" folder – for infrastructure static VMs:
    - Static always-on VMs (Firewalls, DBs, etc.)
- "Base Templates" folder – for all App templates to be deployed on CloudShell sandboxes:
    - Must have VMware tools installed (needs to be included with image or VM template with which CloudShell creates the App VM)
    - DHCP IP settings
    - A snapshot called “clean” – after VM is powered off
