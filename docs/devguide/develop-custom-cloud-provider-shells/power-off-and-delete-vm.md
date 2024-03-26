---
sidebar_position: 11
---

# Power off and Delete VM

In this article, we’ll learn how to implement the PowerOff and DeleteInstance commands, which shut down and delete the VM from the cloud provider, respectively.

## PowerOff method

The *PowerOff* method shuts down (or powers off) the VM instance. It is run automatically as part of the sandbox’s teardown, and can also be run manually by the sandbox end-user from the deployed App’s commands pane. When *PowerOff* completes, the green ‘online’ live status icon is replaced with a grey one on the App resource, indicating it is offline.

**Note:** CloudShell sets the resource state to ‘offline’ if *PowerOff* completed successfully.

### Signature

```python
def PowerOff(self, context, ports)
```

### Inputs

**context**: *context* is a [ResourceRemoteCommandContext](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180) object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered by the user when creating the Cloud Provider resource in the **Inventory** dashboard
    
- remote\_reservation – reservation details
    
- remote\_endpoints - will contain a single [ResourceContextDetails](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L38-L64) object which provides data for the operation.
    

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self, connectivity, resource, remote_reservation, remote_endpoints):
    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs
    """:type : ConnectivityContext"""
    self.resource = resource  # The details of the resource using the driver
    """:type : ResourceContextDetails"""
    self.remote_reservation = remote_reservation  # The details of the remote reservation
    """:type : ReservationContextDetails"""
    self.remote_endpoints = remote_endpoints
    """:type : list[ResourceContextDetails]"""
```

#### Ports

Legacy argument. Irrelevant for custom cloud providers.

### Error handling

If an error occurs during the *PowerOff* operation, the command should raise an exception.

### PowerOff method implementation

The *PowerOff* method should perform the following steps:

1. Retrieve the cloud provider resource’s connection credentials
    
2. Convert context deployed\_app\_json string to object
    
3. Power off the deployed App resource
    

### PowerOff implementation example

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def PowerOff(self, context, ports):
      """
      Will power off the compute resource
      :param ResourceRemoteCommandContext context:
      :param ports:
      """
      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):
          self._log(logger, 'power_off_context', context)
          self._log(logger, 'power_off_ports', ports)
          cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)
          resource_ep =  context.remote_endpoints[0]
          deployed_app_dict = json.loads(resource_ep.app_context.deployed_app_json)
          vm_uid = deployed_app_dict['vmdetails']['uid']
          HeavenlyCloudServiceWrapper.power_off(cloud_provider_resource, vm_uid)
```

### Return value

None

## DeleteInstance method

The *DeleteInstance* method powers off the VM, deletes the VM from the cloud provider and removes the App from the sandbox. It is run when removing the deployed App from the sandbox or during the sandbox’s teardown.

### Signature

def DeleteInstance(self, context, ports)

### Inputs

**context**: *context* is a [ResourceRemoteCommandContext](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180) object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered by the user when creating the Cloud Provider resource in the **Inventory** dashboard
    
- remote\_reservation – reservation details
    
- remote\_endpoints- will contain a single [ResourceContextDetails](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180) object which provides data for the operation.
    

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self, connectivity, resource, remote_reservation, remote_endpoints):
    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs
    """:type : ConnectivityContext"""
    self.resource = resource  # The details of the resource using the driver
    """:type : ResourceContextDetails"""
    self.remote_reservation = remote_reservation  # The details of the remote reservation
    """:type : ReservationContextDetails"""
    self.remote_endpoints = remote_endpoints
    """:type : list[ResourceContextDetails]"""
```

#### Ports

Legacy argument. Obsolete for custom cloud providers.

### DeleteInstance method implementation

The *DeleteInstance* method should perform the following steps:

1. Retrieve the cloud provider resource’s connection credentials.
    
2. Convert the *deployed\_app\_json* context string to object.
    
3. Delete the VM instance from the cloud provider.
    

### DeleteInstance implementation example

[This Github Sample](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

src/driver.py [view](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py)

```python
def DeleteInstance(self, context, ports):
      """
      Will delete the compute resource
      :param ResourceRemoteCommandContext context:
      :param ports:
      """
      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):
          self._log(logger, 'DeleteInstance_context', context)
          self._log(logger, 'DeleteInstance_ports', ports)
          cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)
          resource_ep =  context.remote_endpoints[0]
          deployed_app_dict = json.loads(resource_ep.app_context.deployed_app_json)
          vm_uid = deployed_app_dict['vmdetails']['uid']
          HeavenlyCloudServiceWrapper.delete_instance(cloud_provider_resource, vm_uid)
```

### Return value

None