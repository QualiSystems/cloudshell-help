# VMware vCenter Integration and Configuration

This article discusses the integration of CloudShell with vCenter to allow CloudShell to spin up and manage the lifecycle of VMs hosted on vCenter Server. vCenter integration is provided out of the box starting with CloudShell version 7.0 and includes the following:

- VM lifecycle management (Deploy App, Power On, Refresh IP, Power Off and Delete)
- Connectivity with other VMs and physical resources, including static VMs. Connectivity is based on vCenter dvSwitch (standard vSwitch supported in [vCenter 2<sup>nd</sup> Gen cloud provider shell](https://community.quali.com/repos/5386/vmware-vcenter-cloud-provider-shell-2g)).
- Snapshot management (Save Snapshot, Restore Snapshot, and Get Snapshots)

CloudShell supports two integration modes with vCenter, where Quali Server is installed internally on a vCenter VM or externally.

## CloudShell App deployment flow on vCenter

During the deployment of vCenter Apps in a CloudShell sandbox, CloudShell accesses the vCenter Server defined in the cloud provider resource, and does the following:

1. Creates the VM on the ESXi host or host cluster.
2. Creates connectivity. Allocates VLAN ID for each required VLAN network, according to VLAN allocation policy defined in the sandbox (VLAN services), and adds the VM's NIC(s) to the network(s).
3. Powers on the VM and refreshes the VM's IP.
4. Runs configuration management on the VM (if defined).

## Basic Requirements

The following VMware vSphere components are required for CloudShell integration with vCenter (supported version is listed in [vCenter Integration Architecture and Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-Prereqs.htm)):

- vSphere® Standard™ / Enterprise Plus™/ with Operations Management™ / Platinum™
    :::note
    CloudShell connectivity requires vSphere® Enterprise Plus™ and above.
    :::
    - vSphere Client
        
    - vCenter server
        
    - ESXi server
        
    - dvSwitch that is capable of creating and configuring port groups (vCenter 2<sup>nd</sup> Gen shell supports standard vSwitch as well)
        

Note that for additional capabilities or to integrate with other VMware vSphere components such as vSphere Client, you will need to implement a custom cloud provider that supports these options. For details, see the Dev Guide's [Getting Started with Cloud Provider Development](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Cld-Prvdrs/Getting-Started.htm).

## vCenter integration workflow

For each vCenter Server you want to integrate with CloudShell, perform the following steps:

1. Prepare vCenter Server for integration with CloudShell. See [vCenter Integration Architecture and Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-Prereqs.htm).
2. Designate a vCenter user with the required permissions to be used by CloudShell to access and interact with vCenter Server. See [Required vCenter User Permissions per Deployment Type](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-User-Prmsn.htm).
3. [Add VMware vCenter Cloud Provider Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-Cld-Prvdr-Rsc.htm) based on the specifications of the designated vCenter datacenter.
4. Set up CloudShell App Templates to deploy and configure VMs on the datacenter. See [Add a vCenter App Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-App.htm).
    
    To have CloudShell App deployments run on specific domains in CloudShell, follow the steps in [Managing Private Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm).
5. Configure QualiX for in-browser connections to App VMs hosted on vCenter Server from the sandbox. See [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Qualix.htm).
   :::note
   The QualiX Server must be accessible to the vCenter Server and can be installed either externally or in a VM on the vCenter Server.
   :::