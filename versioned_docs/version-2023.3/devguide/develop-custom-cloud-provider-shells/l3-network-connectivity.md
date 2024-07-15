---
sidebar_position: 13
---

# L3 Network Connectivity

In this article, we’ll learn how to implement L3 network connectivity. Cloudshell recognizes a cloud provider shell as an L3 networking cloud provider if the method *PrepareSandboxInfra* exists in the shell driver. If the method doesn’t exist, CloudShell considers the shell as an L2 networking shell.

To add support for L3 subnet connectivity in a custom cloud provider, we’ll need to implement 3 methods:

- *PrepareSandboxInfra* is used to prepare the infrastructure required for a sandbox operating with L3 connectivity.
    
- *Deploy* should be extended to support *connectToSubnet* action requests.
    
- *CleanupSandboxInfra* cleans any sandbox-level entities created in the cloud provider, usually entities created by the *PrepareSandboxInfra* command. This is the last command to be called in the orchestration flow.
    

## PrepareSandboxInfra method

The *PrepareSandboxInfra* method is the 1st method to be called in the sandbox setup. It creates the required infrastructure for the sandbox. The network address space of the sandbox is allocated automatically by CloudShell and represented using CIDR notation and provided in the actions request.

It must support these three action types:

- **prepareCloudInfra**
    
    When handling this action, you need to create/allocate the requested CIDR to the sandbox in your cloud provider. This is also the place to create/allocate cloud resource that will be used by the entire sandbox. For example, an AWS shell might create an S3 bucket that will be used by the entire sandbox, and a shared Security Group, which will be attached to all AWS VM instances, to allow inbound traffic from specific QualiX and Execution Server VM instances for secure connectivity to the VMs and configuration management.
    
    Generally this is the 1st action you should handle before proceeding to other actions. There is always one instance of this type of action.
    

- **prepareSubnet**
    
    *prepareSubnet* gets one or more actions from this type. When handling this action, you need to create/allocate a subnet for each action according to the CIDR and **Subnet** service attributes in the blueprint. A subnet can be declared as public or private by the blueprint designer. A subnet is considered private if it is not accessible from outside the sandbox, and is considered public if it is possible to access the subnet from outside the sandbox. As a general best practice, it is recommended to allow outbound traffic from private subnets to elements outside of the sandbox.
    
    CloudShell sends a *prepareSubnet* action for each **Subnet** service in the blueprint. If there are no **Subnet** services in the blueprint, CloudShell will create a single subnet for the sandbox, by sending a *prepareSubnet* action with the default values. In a "single subnet” scenario, it is assumed that the sandbox components are all located in the same default subnet. Note that the driver still needs to create/allocate a subnet in "single subnet” mode.
    
    The result for this action must include a *subnetId* property. This must be an id that can be used to uniquely identify the subnet in the cloud provider. The "subnet id” will be passed as part of *connectToSubnet* actions in the *Deploy* method and should be used to identify the subnets that the App wants to connect to.
    
- **createKey**
    
    There is always one instance of this type of action. This action type has no metadata. To handle this action, you return an ssh key that will be used by CloudShell to connect to Linux VMs in the sandbox. If you don’t want to use ssh keys, you can simply ignore this action without returning any *createKeys* action results.
    
    Cloudshell stores the ssh key securely and if the deployed App has an empty password attribute or no password attribute, it will try to authenticate with the VM using the value in the **Username** attribute and the ssh key when using QualiX to ssh to a deployed App.
    
    The *Deploy* method is responsible to create the VM with the sandbox ssh key that was generated in the *prepareSandboxInfra* method. Cloudshell does not pass the ssh key to the *Deploy* method and it’s the responsibility of the shell developer to store this ssh key in a secure place that is accessible during the *Deploy* method. An example for this implementation for an aws shell is to use an S3 bucket that is used only by the sandbox.
    
:::note
*PrepareSandboxInfra* can be called multiple times in a sandbox. Setup can be called multiple times in the sandbox, and every time setup is called, the *PrepareSandboxInfra* method will be called again. So your implementation needs to support this use case and take under consideration that the cloud resource might already exist. It’s recommended to follow the "get or create” pattern when implementing this method.
:::
### Called when

This command is called for L3 Networking type implementations in the beginning of the orchestration flow (preparation stage), even before Deploy is called.

### Error handling

If failure occurs, return a "success false” action result.

### Signature

```python
def PrepareSandboxInfra(self, context, request, cancellation_context)
```

### Inputs

**context**: *context* is a *ResourceCommandContext* object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered when creating the Cloud Provider resource in the **Inventory** dashboard
    
- reservation - current reservation details
    
- connectors – details of any visual connectors between the Cloud Provider App and other endpoints in the sandbox.
    

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

Here’s a code sample that extracts the cloud provider data from the context:

`cloud_provider_resource = HeavenlyCloudsShell.create_from_context(context)`

**Request**

JSON string that contains the requested actions.

**Cancelation context**

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self):
    self.is_cancelled = False
    """:type : bool"""
```

### PrepareSandboxInfra method implementation

1. [Retrieve the cloud provider resource connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L91).
    
2. [Retrieve requested actions (1 PrepareCloudInfra, 1 CreateKeys, >=1 PrepareSubnet)](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/driver.py#L248-L258).
    
    1. [Handle PrepareCloudInfra](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L429-L443).
        
    2. [Optionally, handle CreateKeys](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L447-L456).
        
    3. [Handle the PrepareSubnet action(s)](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L460-L471).
        
    4. [Return the action results](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L475).
        

3. [Return the driver’s response](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/driver.py#L260-L269).
    

## Deploy method with L3 connectivity

When working with L3 connectivity, the subnets and shared sandbox resources are created in the *PrepareSandboxInfra* method. The *Deploy* method is executed only after *PrepareSandboxInfra* completes successfully. *Deploy* can receive 0 or more *connectToSubnet* actions in addition to the single *deployApp* action. The *connectToSubnet* actions tell the VM that we are creating the subnets that the VM should be connected to. The **subnetId** property in the *connectToSubnet* action should be used to uniquely identify the subnet in the cloud provider.

The *connectToSubnet* action contains a special property called **vnicName**. When this property contains a value, it means that the blueprint designer specified a request from the cloud provider shell to create a connection on a specific network interface. For example, if the **vnicName** value is 1, we need to create the network interface for the relevant subnet from the action on eth1.

**Note:** In case the shell supports ssh key authentications for linux vms it’s the responsibility of the deploy method implementation to get the ssh key created during prepareSandboxInfra. Cloudshell will not send the ssh key to the deploy method in the request.

### L3 Deploy method implementation

In L3, the *Deploy* method should perform the following steps:

1. [Retrieve the cloud provider resource connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L91).
    
2. [Retrieve the Deploy action](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L92-L95).
    
3. [Retrieve CononectToSubnetActions](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L97-L98).
    
    1. [Call the Deploy logic of the selected deployment type](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L100-L117).
        
        1. [(Steps 4-a to -4-e are performed by the Deploy logic) Generate a unique App name](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L118).
            
        2. [Create the network configuration plan to use when calling the cloud provider SDK VM instance deploy](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/sdk/heavenly_cloud_service.py#L105-L123).
            
        3. [Create the VM instance using the deployment path attributes and network plan](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L136-L142).
            
        4. If Deploy succeeds, do the following:
            
            1. [Collect the VM’s details (operating system, specifications, networking information)](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L146-L147).
                
            2. [Create ConnectToSubnet results](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L165-L169).
                
        5. [Return results](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L173).

5. [Return the driver’s response](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/driver.py#L122).
    

## CleanupSandboxInfra

This method is responsible for cleaning any sandbox-level entities created in the cloud provider, usually entities created in the *PrepareSandboxInfra* command.

### Called When

This method is the last method to be called during the sandbox’s teardown (before the sandbox is completed).

### Error handling

If a failure occurs, return a "success false” action result.

### Signature

```python
def CleanupSandboxInfra(self, context, request):
```

### Inputs

**context**: *context* is a *ResourceCommandContext* object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered when creating the Cloud Provider resource in the **Inventory** dashboard
    
- reservation - current reservation details
    
- connectors – details of any visual connectors between the Cloud Provider App and other endpoints in the sandbox.
    

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

**Request**

JSON string contains single *CleanupSandboxInfra* action.

### CleanupSandboxInfra method implementation

1. [Retrieve the cloud provider resource connection credentials](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L284).
    
2. [Retrieve the CleanupSandboxInfra action](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L286-L290).
    
    \* [Clean the sandbox-created infrastructure resources and return a success result](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/heavenly_cloud_service_wrapper.py#L477-L479).
    
3. [Return result](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L296).