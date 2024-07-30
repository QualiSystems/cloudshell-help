---
sidebar_position: 3
---

# Finding Blueprints Containing a Specific Resource, Service or App

The following Python scripts utilize the CloudShell Automation API to print a list of the blueprints that have a specific component and should be run from an IDE that can access the Quali Server.    

## Print blueprints that have a resource

To use this script, replace `resource name` with the name of the resource and set the CloudShell details.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession
from pprint import pprint

# specify target resource name
TARGET_RESOURCE_NAME = "resource name"

# specify api session details
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"

api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)


def is_resource_list_in_blueprint(api, blueprint_name, target_resource_name):
    """
    search current blueprint resources for presence of the Target Resource
    :param CloudShellAPISession api:
    :param str blueprint_name:
    :param str target_resource_name:
    :return:
    """
    details = api.GetTopologyDetails(blueprint_name)
    bp_resources = details.Resources
    for curr_resource in bp_resources:
        if curr_resource.Name == target_resource_name:
            return True
    return False


all_blueprints = api.GetTopologiesByCategory().Topologies
target_blueprints = [bp_name for bp_name in all_blueprints
                     if is_resource_list_in_blueprint(api, bp_name, TARGET_RESOURCE_NAME)]

if not target_blueprints:
    print("No blueprints in system with target resource")
else:
    print("=== Target Blueprints containing '{}' ===".format(TARGET_RESOURCE_NAME))
    pprint(target_blueprints)

    # add to text file
    with open('target_blueprints.txt', 'w') as f:
        for bp in target_blueprints:
            print >> f, bp
```

## Print blueprints that have a service

To use this script, replace `service alias` with the alias of the service and set the CloudShell details.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

# set list of service "Alias"
TARGET_SERVICES = ["service alias"]

# api session details
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"

api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)


def is_resource_list_in_blueprint(api, blueprint_name, target_service_names):
    """
    search current blueprint resources for presence of the Target Resource
    :param CloudShellAPISession api:
    :param str blueprint_name:
    :param [str] target_service_names:
    :return:
    """
    details = api.GetTopologyDetails(blueprint_name)
    bp_services = details.Services
    bp_service_names = [service.Alias for service in bp_services]
    for service_name in target_service_names:
        for bp_service_name in bp_service_names:
            if service_name == bp_service_name:
                return True
            else:
                continue


all_blueprints = api.GetTopologiesByCategory().Topologies
target_blueprints = [bp_name for bp_name in all_blueprints
                     if is_resource_list_in_blueprint(api, bp_name, TARGET_SERVICES)]

if not target_blueprints:
    print("No blueprints in system with target services")
else:
    print("=== Target Blueprints containing '{}' resources ===".format(TARGET_SERVICES))
    print(target_blueprints)

    # add blueprints to text file
    with open('target_blueprints.txt', 'w') as f:
        for bp in target_blueprints:
            print >> f, bp
```

## Print blueprints containing Apps with a deployment type based on a specific cloud provider resource

This script looks for blueprints with Apps that contain a deployment path from a particular cloud provider resource. To use, replace `cloud provider resource name` with the name of the cloud provider resource and set the CloudShell details.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession
from pprint import pprint
from timeit import default_timer

# set list of target resources
TARGET_CLOUD_PROVIDER_RESOURCE = "cloud provider resource name"

# api session details
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"

api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)


def is_resource_list_in_blueprint(api, blueprint_name, target_cloud_provider):
    """
    search current blueprint resources for presence of the Target Resource
    :param CloudShellAPISession api:
    :param str blueprint_name:
    :param str target_cloud_provider:
    :return:
    """
    details = api.GetTopologyDetails(blueprint_name)
    bp_apps = details.Apps
    for curr_app in bp_apps:
        deployment_paths = curr_app.DeploymentPaths
        for dp in deployment_paths:
            curr_cloud_provider = dp.DeploymentService.CloudProvider
            if curr_cloud_provider == target_cloud_provider:
                return True
    return False

start = default_timer()
all_blueprints = api.GetTopologiesByCategory().Topologies

print("searching {} blueprints for results...".format(len(all_blueprints)))

target_blueprints = [bp_name for bp_name in all_blueprints
                     if is_resource_list_in_blueprint(api, bp_name, TARGET_CLOUD_PROVIDER_RESOURCE)]

if not target_blueprints:
    print("No blueprints in system with target resource")
else:
    print("=== Target Blueprints containing '{}' ===".format(TARGET_CLOUD_PROVIDER_RESOURCE))
    pprint(target_blueprints)

    # add to text file
    with open('target_blueprints.txt', 'w') as f:
        for bp in target_blueprints:
            print >> f, bp

print("Done after {} seconds.".format(default_timer() - start))
```
