---
sidebar_position: 9
---

# Resource Discovery

The *get\_inventory* command “discovers” the resource in CloudShell, or in other words, validates the values of the cloud provider attributes that were entered by the user. It is executed when creating the resource in CloudShell, and can be manually run later on, for example, if you change some of the resource’s attribute values.

For example, in a vCenter cloud provider, *get\_inventory* would check the value provided in the **Default DataCenter** attribute to validate that such a datacenter exists in the vCenter Server.

In addition, this is the place to assign values to optional attributes that were not given a value by the CloudShell admin.

## Signature

```python
def get_inventory(self, context)
```

## Inputs

**context**: *context* is an *AutoLoadCommandContext* object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered by the user when creating the new resource in the **Inventory** dashboard
    

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self, connectivity, resource):
    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs
    """:type : ConnectivityContext"""
    self.resource = resource  # The details of the resource using the driver
    """:type : ResourceContextDetails"""
```
:::note
The convention for specifying *context.resource.attributes* keys in the driver files(s) is: `my_shell_name.attribute_name`.
:::
## Return value

The *AutoLoadDetails* class that represents details discovered by the *get\_inventory* function.

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self, resources, attributes):
    self.resources = resources  # the list of resources (root and sub) that were discovered
    """:type : list[AutoLoadResource]"""
    self.attributes = attributes  # the list of attributes for the resources
    """:type : list[AutoLoadAttribute]"""
```

## Error handling

If one of the validations failed, an error indication will be displayed in CloudShell and the resource will be marked as excluded.

## get\_inventory method implementation example

[This Github Sample](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

src/driver.py [view](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py)

```python
def get_inventory(self, context):
  ## uncomment - if there is nothing to validate
      # return AutoLoadDetails([], [])
      # read from context
      cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)
      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):
          self._log(logger, 'get_inventory_context_json', context)
          # validating
          if cloud_provider_resource.name == 'evil':
              raise ValueError('evil cannot use heaven ')
          if cloud_provider_resource.region == 'sun':
              raise ValueError('invalid region, sorry cannot deploy instances on the sun')
          # using your cloud provider sdk
          if not HeavenlyCloudService.can_connect(cloud_provider_resource.user, cloud_provider_resource.password,
                                                   context.resource.address):  # TODO add address to resource (gal shellfoundry team)
              raise ValueError('could not connect using given credentials')
          # discovering - using your prefered custom cloud service you can discover and then update values
          if not cloud_provider_resource.heaven_cloud_color:
              cloud_provider_resource.heaven_cloud_color = HeavenlyCloudService.get_prefered_cloud_color()
          return cloud_provider_resource.create_autoload_details()
```