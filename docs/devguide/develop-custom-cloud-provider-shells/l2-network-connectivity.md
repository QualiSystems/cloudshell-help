---
sidebar_position: 12
---

# L2 Network Connectivity

Now that we’ve set up the cloud provider shell’s automation, let’s learn how to implement network connectivity. CloudShell supports two networking modes, L2 for VLAN-level management and L3 for subnet-level management. This article discusses layer 2 connectivity. If you’re developing an L3 cloud provider, skip to the next article.

## ApplyConnectivityChanges method

To add support for L2 VLAN connectivity in a custom cloud provider, we need to implement the *ApplyConnectivityChanges* method. This method is used to connect the VMs in the sandbox to the network elements.

The VLAN IDs are allocated by Quali Server, according to the settings of the VLAN service. These IDs are sent to the command as parameters. The implementation of this method needs to be able to support Access mode, Trunk mode, VLAN and VXLAN ranges, if supported by your cloud provider. Additionally, the implementation needs to support a range of VLAN IDs.

The *ApplyConnectivityChanges* method can receive a list of actions of type **setVlan** or **removeVlan**. The method receives an action for each connection that needs to be created or disconnected. In case of P2P connections, the method receives two requests, one for each App.

Like other methods, this method needs to return an action result in the response per connection. If the method’s execution fails, CloudShell needs to indicate the failure in the returned action or raise an exception.

### Called when

It is run automatically when reserving the sandbox, as part of CloudShell’s default sandbox setup script, and is also called in an active sandbox when a deployed App is connected or disconnected from a VLAN service or from another deployed App in a P2P connection.

### Error handling

If *ApplyConnectivityChanges* fails, CloudShell needs to indicate the failure in the returned action or raise an exception.

### Signature

```python
def ApplyConnectivityChanges(self, context, request):
```

### Inputs

**context**: *context* is a *ResourceCommandContext* object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered when creating the Cloud Provider resource in the **Inventory** dashboard
    
- reservation - current reservation details
    
- connectors – details of any visual connectors between the Cloud Provider App and other endppoints in the sandbox.
    

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
class ResourceCommandContext:
    def __init__(self, connectivity, resource, reservation, connectors):
        self.connectivity = connectivity  # Connectivity details that can help connect to the APIs
        """:type : ConnectivityContext"""
        self.resource = resource  # The details of the resource using the driver
        """:type : ResourceContextDetails"""
        self.reservation = reservation  # The details of the reservation
        """:type : ReservationContextDetails"""
        self.connectors = connectors  # The list of visual connectors and routes that are connected to the resource (the resource will be considered as the source end point)
        """:type : list[Connector]"""
```

#### Handle Request

**setVlan action request:**

- The requested VLAN mode is indicated in a property called mode under *connectionParams*. The VLAN id array can receive many VLAN id permutations. Please refer to the online help for all support permutations.
    
- If the cloud provider supports VXLAN or both VLAN and VXLAN, it is required to expose a discoverable attribute on the cloud provider’s **VLAN Type** call. The default value is **VLAN** and cloudshell permits VLAN ids in the 2-4096 range. If the **VLAN Type** attribute is set to **VXLAN**, CloudShell will permit VLAN ids to be allocated in the 2-16,000,000 range.
    
- *customAttributes* is a list of special attributes for a specific action. The *setVlan* action can get a custom attribute called **Vnic Name**. When this attribute exists, we can use it in custom logic that will allocate a specific VNIC to the App’s VM. For example, the **Vnic Name** value is 1 and the cloud provider shell needs to create the VLAN connection on eth1. [Code example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ac94224fd2368aaa9b589bcdfd30e449a53c90ce/src/heavenly_cloud_service_wrapper.py#L299).
    

**removeVlan action request:**

- The *actionTarget* property is an object that indicates on which compute resource we need to apply the *removeVlan* action request.
    
- The target resource might have more than one network interface so to determine on which interface to perform the *removeVlan* action, you need to find the *interface* attribute value. The *removeVlan* request contains an array of all connector attributes. The unique identifier of the network interface to disconnect is the value of the Interface attribute.
    

#### Method result

**setVlan action result:**

If the action is successful, you need to set *updatedInterface* property. The value of this property is set on an attribute on the relevant connector. Each connector in CloudShell has a source and a target component. Cloudshell automatically determines if the action result is for source or target of the connector and sets this value on the appropriate attribute - **Source Interface** or **Target Interface**.

[Code example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L300-L302)

**removeVlan action result:**

You only need to indicate if the action is successful or not.

[Code example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L340-L344)

## ApplyConnectivityChanges method implementation

The *ApplyConnectivityChanges* method should perform the following steps:

1. [Retrieve cloud provider resource connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L229).
    
2. [Retrieve actions from request](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L230).
    
3. [Handle Remove Vlan actions](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L232-L234).
    
    1. [Retrieve requested interface to disconnect](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L371).
        
    2. [Retrieve requested VM id to disconnect](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L372).
        
    3. [Disconnect](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L373).
        
    4. [Return the result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L375).
        

4. [Handle setVlan actions](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/driver.py#L236-L237).
    
    1. [Retrieve VLAN parameters (VNIC name, VLAN mode, VLAN id)](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L320-L324).
        
    2. [Connect](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L300).
        
    3. [Add a new interface id to the result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L325).
        

5. [Return the appropriate result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L239).