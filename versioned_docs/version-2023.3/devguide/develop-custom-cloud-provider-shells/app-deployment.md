---
sidebar_position: 10
---

# App Deployment

In this article, we’ll learn how to implement the App’s deployment.

To deploy an App successfully, you need to implement the following 4 methods:

- [Deploy method](#deploy-method) creates the App’s VM instance.
- [PowerOn method](#poweron-method) spins up the VM.
- [remote\_refresh\_ip](#remote_refresh_ip) updates the deployed App’s IP address.
- [GetVmDetails method](#getvmdetails-method) gets information about the VM itself, its operating system, specifications and networking information.

These methods are executed in the above order during the deployment of an App in the sandbox (either automatically as part of the default sandbox setup script that runs when reserving a sandbox or manually by the user after adding an App to an active sandbox). Once the App is deployed, these methods can be run as individual commands from the deployed App’s commands pane, with the exception of the *Deploy* command which is no longer needed once the App is deployed.

## Deploy method

Creates the App’s VM instance.

### Signature

The *deploy* method accepts three inputs: *context*, *request*, and *cancellation\_context*.

[This Github Sample](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

src/driver.py [view](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py)

```python
def Deploy(self, context, request, cancellation_context=None):
```

### Inputs

#### context

**context:** *context* is a *ResourceCommandContext* object that contains:

- reservation - current reservation details
- connectors – details of any visual connectors between the Cloud Provider App and other endpoints in the sandbox
- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
- resource - resource configuration settings entered when creating the Cloud Provider resource in the **Inventory** dashboard

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

#### Request

**request:** *request* is an *AppContext* object that contains:

- Resource deployment path (in the App template’s **Deployment Paths** page)
- Deployed App configuration (in the App template’s **App Resource** page)
<details>
<summary>Example: app\_request\_json for App "Ubuntu OCI 18.04" that is connected to a single subnet service...</summary>

```javascript
{
   "  ""driverRequest":" "{
      "    ""actions":" "[
         "      "{
            "        ""actionParams":" "{
               "          ""cidr":" ""10.0.1.32/28",
               "          ""subnetId":" ""ocid1.subnet.oc1.uk-london-1.aa...ovena",
               "          ""isPublic":" true",
               "          ""vnicName":" null",
               "          ""subnetServiceAttributes":" "[
                  "          "
               ],
               "          ""type":" ""connectToSubnetParams""        "
            },
            "        ""actionId":" ""bw23c565-5aba-40wa-9fba-69287rf542cf",
            "        ""type":" ""connectSubnet""      "
         },
         "      "{
            "        ""actionParams":" "{
               "          ""appName":" ""Ubuntu OCI 18.04",
               "          ""deployment":" "{
                  "        
            ""deploymentPath":" ""OCI Shell.OCI VM from Image",
                  "            ""attributes":" "[
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Inbound Ports",
                        "                ""attributeValue":" ""22",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Skip VNIC src or dst check",
                        "                ""attributeValue":" ""False",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Autoload",
                        "                ""attributeValue":" ""True",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Wait for IP",
                        "                ""attributeValue":" ""True",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Image ID",
                        "                ""attributeValue":" ""ocid1.image.oc1.uk-london-1.aausaaaagcmjzblg9wliwb2fxpr7t4nv7j4ertujgosyoctlkismlwi3cbq",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.VM Shape",
                        "                ""attributeValue":" ""VM.Standard2.4",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Add Public IP",
                        "                ""attributeValue":" ""True",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""OCI Shell.OCI VM from Image.Requested Private IP",
                        "                ""attributeValue":" ""32.2.2.4;11.0.0.4;35.0.0.20",
                        "                ""type":" ""attribute""              "
                     }"            "
                  ],
                  "            ""type":" ""deployAppDeploymentInfo""          "
               },
               "          ""appResource":" "{
                  "            ""attributes":" "[
                     "              "{
                        "                ""attributeName":" ""Password",
                        "                ""attributeValue":" ""encrypted password here",
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""Public IP",
                        "                ""attributeValue":" """,
                        "                ""type":" ""attribute""              "
                     },
                     "              "{
                        "                ""attributeName":" ""User",
                        "                ""attributeValue":" ""ubuntu",
                        "                ""type":" ""attribute""              "
                     }"            "
                  ],
                  "            ""type":" ""appResourceInfo""          "
               },
               "          ""type":" ""deployAppParams""        "
            },
            "        ""actionId":" ""c1256ebf-01d9-4804-4oi9-63ad31s4s281",
            "        ""type":" ""deployApp""      "
         }"    "
      ]"  "
   }
}
```
</details>

#### cancellation\_context

CloudShell supports the canceling of App command executions.

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self):
    self.is_cancelled = False
    """:type : bool"""
```

To allow the cancellation of a command on the Cloud Provider’s Apps, we need to:

1. Check for cancellation before each operation. If cancelled, delete cloud objects created by operation.
2. Return the appropriate result.

**Usage example:**

[This Github Sample](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/heavenly_cloud_service_wrapper.py) is by [QualiSystems](https://github.com/QualiSystems)

src/heavenly\_cloud\_service\_wrapper.py [view](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/heavenly_cloud_service_wrapper.py) [raw](https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/heavenly_cloud_service_wrapper.py)

```python
if cancellation_context.is_cancelled:
      # rollback what we created for current executing command then raise exception
      # HeavenlyCloudService.rollback()
      raise Exception('Operation cancelled')
```

### Output

*DriverResponse* object that contains a list of action results.

### Error handling

If App deployment fails, return a “success false” action result.

### Deploy method implementation

The deploy method should perform the following steps:

1. [Retrieve the cloud provider resource’s connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L91).
    
2. [Retrieve the Deploy action](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L92-L95).
    
3. [Call the Deploy logic of the selected deployment type](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L99-L106).
    
4. *(Steps 4 - 8 are performed within the deploy logic)* [Generate a unique name for the App. For example, “My-App\_968e-a950”](https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4aa0c863da205686952e414e16a0baea954b2bfa/src/heavenly_cloud_service_wrapper.py#L22). Deployed Apps are classified as resources in CloudShell and therefore must have a unique name.
    
5. [Create a VM instance using the deployment path attributes](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L47-L48) (the HeavenlyCloud service represents your custom cloud SDK).
    
6. If VM deployment is successful:
    
    - [Collect VM details](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L78-L79) (operating system, specifications, networking information).
    - Optionally, [override App resource attribute values](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L59-L62). For [example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L51-L58), if we generate a unique password for each VM instance, we will also want to update this password in the Password attribute on the Deployed App Resource for future use (to allow the sandbox end-user to connect to the VM).
    - If needed, [add additional data to the action result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L84-L88). This key-value data will be available from all API resource queries. It can be useful for implementing custom logic during the lifecycle of the sandbox. [Example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L245-L249).

7. If VM deployment fails, [return a “fail” result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L74-L76).
    
8. [*Return DeployAppResult*](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/heavenly_cloud_service_wrapper.py#L92-L99).
    
9. [*Return DriverResponse*](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L112).
    

Note that the links in the above workflow pertain to a driver of an L2 implementation. However, the only difference between L2 and L3 driver implementations is that L2 implements *ApplyConnectivityChanges* while L3 uses the *PrepareSandboxInfra* and *CleanSandboxInfra* methods.

### DeployAppResult JSON example
<details>
<summary>Example...</summary>

```javascript
{
   " ""actionId":"aac7cc0c-a215-4aee-8fc1-f72020.1.034423",
   " ""deployedAppAdditionalData":{
      
   },
   " ""deployedAppAddress":"192.168.0.5",
   " ""deployedAppAttributes":[
      "   "{
         "     ""attributeName":"Password",
         "     ""attributeValue":"123456""   "
      },
      "   "{
         "     ""attributeName":"User",
         "     ""attributeValue":"super user""   "
      }" "
   ],
   " ""errorMessage":"",
   " ""infoMessage":"",
   " ""success":true,
   " ""type":"DeployApp",
   " ""vmDetailsData":{
      "   ""appName":"",
      "   ""errorMessage":"",
      "   ""vmInstanceData":[
         "     "{
            "       ""hidden":false,
            "       ""key":"Cloud Name",
            "       ""value":"white""     "
         },
         "     "{
            "       ""hidden":false,
            "       ""key":"Cloud Index",
            "       ""value":"0""     "
         },
         "     "{
            "       ""hidden":false,
            "       ""key":"Cloud Size",
            "       ""value":"not so big""     "
         },
         "     "{
            "       ""hidden":false,
            "       ""key":"Instance Name",
            "       ""value":"angel vm__ca11f5""     "
         },
         "     "{
            "       ""hidden":true,
            "       ""key":"Hidden stuff",
            "       ""value":"something not for UI""     "
         }"   "
      ],
      "   ""vmNetworkData":[
         "     "{
            "       ""interfaceId":0,
            "       ""isPredefined":false,
            "       ""isPrimary":true,
            "       ""networkData":[
               "         "{
                  "           ""hidden":false,
                  "           ""key":"MaxSpeed",
                  "           ""value":"1KB""         "
               },
               "         "{
                  "           ""hidden":false,
                  "           ""key":"Network Type",
                  "           ""value":"Ethernet""         "
               }"       "
            ],
            "       ""networkId":0,
            "       ""privateIpAddress":"10.0.0.0",
            "       ""publicIpAddress":"8.8.8.0""     "
         },
         "     "{
            "       ""interfaceId":1,
            "       ""isPredefined":false,
            "       ""isPrimary":false,
            "       ""networkData":[
               "         "{
                  "           ""hidden":false,
                  "           ""key":"MaxSpeed",
                  "           ""value":"1KB""         "
               },
               "         "{
                  "           ""hidden":false,
                  "           ""key":"Network Type",
                  "           ""value":"Ethernet""         "
               }"       "
            ],
            "       ""networkId":1,
            "       ""privateIpAddress":"10.0.0.1",
            "       ""publicIpAddress":"8.8.8.1""     "
         }"   "
      ]" "
   },
   " ""vmName":"angel vm__ca11f5",
   " ""vmUuid":"027ad770-9ecb-4936-a7df-aeaf526dfc34"
}
```
</details>

### DeployAppResult properties

| Name | Type | Description |
| --- | --- | --- |
| actionId | string | (Mandatory) The action GUID as received (deploy\_app\_action.actionId) result must include the action id it results for, so server can match result to action. |
| deployedAppAddress | string | (Mandatory) The primary ip address of the VM instance. This value will be set as the deployed App’s resource address in CloudShell. |
| errorMessage | string | (Optional) Error message to be displayed to the sandbox end-user if VM deployment fails. |
| infoMessage | string | (Optional) Info message to be displayed to the sandbox end-user if VM deployment succeeds. |
| success | bool | (Mandatory) |
| type | string | (Read only) *DeployApp* object type. It is automatically set in *DeployAppResult* object type (in cloudshell-cp-core). |
| vmName | string | Unique name of the resource in CloudShell. |
| vmUuid | string | Unique resource id. Populate *vmUuid* with the unique id of the resource in your custom cloud provider. Cloudshell does not use this id, but will keep it for other method calls. |
| deployedAppAdditionalData | dictionary | Container used to persist custom data in resource, similar to AWS Tags. Included in all resource API query results. For [example](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ac94224fd2368aaa9b589bcdfd30e449a53c90ce/src/heavenly_cloud_service_wrapper.py#L209-L213), reading the custom data and returning it in the VM Details. |
| deployedAppAttributes | array | Contains data describing the deployed app attributes, and are displayed in the App’s Attributes pane in the sandbox. It should be used to change default attribute values on the deployed App resource. For example User & Password attributes exist as part of the default deployed App model. If your custom cloud provider generates a password in runtime for the VM, you should update the *deployedAppAttributes* property accordingly. |
| vmDetailsData | object | Contains vmNetworkData and vmInstanceData. Displayed in the App’s VM Details pane. For details about the return data, see the [GetVmDetails method](#getvmdetails-method)’s Return value section below. |

## PowerOn method

The *PowerOn* method spins up the VM. It is run automatically when reserving the sandbox, as part of CloudShell’s default sandbox setup script, and can also be run manually by the sandbox end-user from the deployed App’s commands pane. During *PowerOn*, the VM’s IP address and a green live status icon are displayed on the App in sandbox.

You don’t have to implement this method if the *deploy* method has been configured to spin up the VM. If *PowerOn* does not fail, CloudShell will set resource state to “online” once the VM is up.

### Signature

```python
def PowerOn(self, context, ports)
```

### Inputs

#### context

**context:** *context* is a [ResourceRemoteCommandContext](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180) object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
- resource - resource configuration settings entered by the user when creating the Cloud Provider resource in the **Inventory** dashboard
- remote\_reservation – reservation details
- remote\_endpoints- will contain a single [ResourceContextDetails](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L38-L64) object which provides data for the operation.

#### Ports

Legacy argument. Obsolete for custom cloud providers.

### PowerOn method implementation

The *PowerOn* method should perform the following steps:

1. Retrieve the cloud provider resource’s connection credentials.
    
2. Convert the *deployed\_app\_json* context from string to object.
    
    The json contains information about the CloudShell server, the deployed App and reservation.
    
    For details, copy the json contents into your preferred JSON editor. For example:
    
    ![PowerOn JSON](/Images/Devguide-cloud-providers/App-Deployment.png)
    
3. Power on the deployed App resource.
    

### PowerOn implementation example

[This Github Sample](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

src/driver.py [view](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py)

```python
def PowerOn(self, context, ports):
      """
      Will power on the compute resource
      :param ResourceRemoteCommandContext context:
      :param ports:
      """
      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):
          self._log(logger, 'power_on_context', context)
          self._log(logger, 'power_on_ports', ports)
          cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)
          resource_ep =  context.remote_endpoints[0]
          deployed_app_dict = json.loads(resource_ep.app_context.deployed_app_json)
          vm_uid = deployed_app_dict['vmdetails']['uid']
          HeavenlyCloudServiceWrapper.power_on(cloud_provider_resource,vm_uid)
```

### Return value

None

### Error handling

In case of an error, the command should raise an exception.

## remote\_refresh\_ip

The *remote\_refresh\_ip* method retrieves the VM’s updated IP address from the cloud provider and sets it on the deployed App resource. The IP of the main network interface also needs to be retrieved from the cloud provider. Both private and public IPs are retrieved, as appropriate.

*remote\_refresh\_ip* is run automatically during the sandbox’s setup, after the VM is created and connected to networks, and can also be run manually by the sandbox end-user by running the **Refresh IP** command in the sandbox.

**Note:** This method is mandatory. However, you can choose to disable the call to this method during setup using the **Wait for IP** attribute. For details, see [Controlling App Deployment Orchestration](./controlling-app-deployment-orch.md).

### Signature

```python
def remote_refresh_ip(self, context, ports, cancellation_context):
```

### Inputs

#### context

**context:** *context* is a [ResourceRemoteCommandContext](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180) object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
- resource - resource configuration settings entered when creating the Cloud Provider resource in the *Inventory* dashboard
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

Legacy argument. Obsolete for custom cloud providers.

#### Cancellation context

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self):
    self.is_cancelled = False
    """:type : bool"""
```

### Return value

None.

Unlike other methods that update data using the result, *remote\_refresh\_ip* updates the deployed App resource with the IP by calling *cloudshell-automation-api*. However, if you implemented a return output, make sure to convert the *remote\_refresh\_ip* object to a string and pass the value to the “IP” attribute on the deployed App.

### Error handling

If the operation fails, the command should raise an exception.

### remote\_refresh\_ip method implementation

This method should perform the following steps:

1. [Retrieve the Cloud Provider resource’s connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/driver.py#L200).
    
2. [Convert the deployed\_app\_json context from string to object](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/driver.py#L201).
    
3. [Retrieve previously known private/public IPs (if there are any), VM instance id](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/driver.py#L202-L212).
    
4. [Verify that the deployed App’s private IP is the same as the ip in the cloud provider](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/heavenly_cloud_service_wrapper.py#L294). If it’s different, update the deployed App ip with the IP on the cloud provider.
    
    - If the IPs are different, [update the deployed App IP with the IP on the cloud provider by calling *UpdateResourceAddress*](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/heavenly_cloud_service_wrapper.py#L294-L295).
        
    - If the operation fails, display an error to the sandbox end-user.
        

5. If needed, verify that the deployed App’s public IP is the same as the ip in the cloud provider.
    
    - If the IPs are different, [update the deployed App ip with the ip on the cloud provider by calling *SetAttributeValue* and setting the Public IP attribute](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/heavenly_cloud_service_wrapper.py#L297-L298).
    - If the operation fails, display an error to the sandbox end-user.

## GetVmDetails method

The *GetVmDetails* method gets information about the App’s VM, operating system, specifications and networking information. It is called by the default setup script when reserving the sandbox, after the *RefreshIp* method is called, and can also be run manually by the sandbox end-user on deployed Apps from the App’s **VM Details** pane.

**Note:** The implementation is expected to query the cloud provider for the details, but not return any cached or stored data.

### Signature

```python
def GetVmDetails(self, context, requests, cancellation_context):
```

### Inputs

#### context

**context:** *context* is a *ResourceCommandContext* object that contains:

- connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API
    
- resource - resource configuration settings entered when creating the Cloud Provider resource in the **Inventory** dashboard
    
- reservation – reservation details
    
- connectors – details of any visual connectors between the Cloud Provider App and other endppoints in the sandbox
    

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

#### Requests

JSON string that contains a list of items containing App requests and deployed App data. This method can be called for a set of VMs.

#### Cancellation request

[This Github Sample](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) is by [QualiSystems](https://github.com/QualiSystems)

cloudshell/shell/core/driver\_context.py [view](https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py)

```python
def __init__(self):
    self.is_cancelled = False
    """:type : bool"""
```

### Return value

*VmDetailsData* object in a serialized JSON.

[This Github Sample](https://github.com/QualiSystems/cloudshell-cp-core/blob/d58c094d9600b5a6232da16dada1d3a408a88ac9/package/cloudshell/cp/core/models.py) is by [QualiSystems](https://github.com/QualiSystems)

package/cloudshell/cp/core/models.py [view](https://github.com/QualiSystems/cloudshell-cp-core/blob/d58c094d9600b5a6232da16dada1d3a408a88ac9/package/cloudshell/cp/core/models.py) [raw](https://raw.githubusercontent.com/QualiSystems/cloudshell-cp-core/d58c094d9600b5a6232da16dada1d3a408a88ac9/package/cloudshell/cp/core/models.py)

```python
def __init__(self, vmInstanceData=None, vmNetworkData=None,appName = '',errorMessage = ''):
    """
    :param vmInstanceData: [VmDetailsProperty]
    :param vmNetworkData:  [VmDetailsNetworkInterface]
    :param appName:        str
    :param errorMessage:   str
    """
 
    self.vmInstanceData = vmInstanceData if vmInstanceData else []  # type: [VmDetailsProperty]
    self.vmNetworkData = vmNetworkData if vmNetworkData else []  # type: [VmDetailsNetworkInterface]
    self.appName = appName
    self.errorMessage = errorMessage
```

### vmDetailsData properties

*vmDetailsData* is used to describe the App’s VM. All properties are optional.

| Name | Type | Description |
| --- | --- | --- |
| appName | String | The App’s name. No need to assign it in the deploy operation. Must be assigned in *getVmDetails* method. |
| errorMessage | string | Indication message to be displayed to the sandbox end-user when getting the vmDetails. |
| vmNetworkData | array | Array of cloudshell-cp-core VmDetailsNetworkInterface object. Create a *vmNetworkData* object for each VM NIC you wish to associate with resource. See the VmDetailsNetworkInterface table below. |
| vmInstanceData | array | Array of cloudshell-cp-core’s *VmDetailsProperty*. Contains data about the VM instance attributes. It should be used to change persist values of the VM resource. For example to persist Storage and operating system data. See the VmDetailsProperty table below. |

### VmDetailsNetworkInterface

| Name | Type | Description |
| --- | --- | --- |
| interfaceId | String | The network interface id with which the address is associated. |
| networkId | string | The unique id of the network associated with the network interface. |
| isPrimary | bool | Determines if NIC is primary. Primary affects the default selected network in VmDetailsTab in cloudshell |
| isPredefined | bool | Determines if NIC is predefined. Predefined means that the network existed before the sandbox reservation. for example, a Static Management network that is not modeled in the blueprint. |
| networkData | array | Array of cloudshell-cp-core VmDetailsProperty. Contains data describing the NIC. Examples of network properties include Device Index and MAC Address. |
| privateIpAddress | string | NIC address. |
| publicIpAddress | string | The public ip associated with the NIC’s private ip. |

### VmDetailsProperty

| Name | Type | Description |
| --- | --- | --- |
| key | string |  |
| value | string |  |
| hidden | bool | Determines if the property is displayed to the sandbox end-user. |

### GetVmDetails method implementation

This method should perform the following steps:

1. [Retrieve cloud provider resource connection credentials](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/driver.py#L177).
    
2. [Convert the JSON string to object](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/heavenly_cloud_service_wrapper.py#L228)
    
3. For each request, do the following:
    
    - [Retrieve identifiers](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L237-L239).
        
    - [Query the cloud provider for the VM’s configuration and networks](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L241).
        
    - [Populate vmInstanceData with the data (key-value) you wish to persist on the VM resource](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L242). For example to persist the VM’s Storage & operating system data.
        
    - [Create *vmNetworkData*](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L243). [*vmNetworkData*](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L194-L215) is a list of *VmDetailsNetworkInterface*, one for each VM NIC you wish to associate with the resource.
        
    - [Collect as VmDetailsData result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/d17640899a06fb69e61ac678d620301d76dfd3cb/src/heavenly_cloud_service_wrapper.py#L251-L252).
        

4. [Convert to JSON and return the result](https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ede6f78b4d4a78ae61b628696f6903d684e2224b/src/driver.py#L178-L180).