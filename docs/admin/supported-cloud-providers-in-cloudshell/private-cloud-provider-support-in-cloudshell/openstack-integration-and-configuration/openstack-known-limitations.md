---
sidebar_position: 4
---

# OpenStack Known Limitations

Take the following under consideration when setting up OpenStack App deployment in CloudShell.

- **OpenStack networking model**: OpenStack networking is not a Pure L2 model where ports are attached to switches and VLANs. This is more of an L2/L3 hybrid where each L2 network (broadcast domain) is also associated with an L3 Subnet. In CloudShell, this model is implemented using segmentation ID as VLAN or VxLAN.
- **Access/Trunk VLANs**: Currently, only **Access** mode is supported. In other words, end hosts are not VLAN-aware. VLAN trunking support is not present right now.
- **Attaching VLAN to vNIC**: Support for selecting a VLAN to attach to a vNIC does not exist right now due to limitations with the hybrid L2/L3 model.
- **VM access using keypairs**: Currently, username/password access to OpenStack instances is supported. Keypairs are currently not supported.
- **Hotplug interfaces**: CloudShell uses udev rules for auto detecting interfaces on the deployed OpenStack instances. Therefore, make sure the instance image has udev support and 'cloud-init' installed and enabled. Note that most of the standard cloud images have built-in udev support.
    
    To use ubuntu images, the 'GNOME NetworkManager' service must be disabled.
    
- **App network CIDRs**: In CloudShell's implementation, support for /24 CIDRs is provided. This might limit the number of supported hosts on a subnet to 255.
