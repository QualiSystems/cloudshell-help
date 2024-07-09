---
sidebar_position: 1
---

# Automating CloudShell Sandboxes for DevOps

In this section, we’ll look at different recipes for creating and using CloudShell Sandboxes as a part of your CI/CD or other DevOps pipelines. In this context, we’ll concentrate on the use case of automating CloudShell externally from scripts or other platforms.

## Available APIs

CloudShell currently supports two different sets of APIs which can be used to automate and integrate Sandboxes with DevOps.

- The CloudShell Automation API (cloudshell\-automation-api package) - This Python package contains a comprehensive set of APIs for anything from managing inventory and connections to administrating users and groups as well as managing sandboxes and blueprints. The package allows developers to use the TestShell API in shell drivers and Python scripts.
- The CloudShell Sandbox APIs - This RESTful API is intended for automating the consumption of sandboxes oustide of CloudShell. As such, it provides a specific set of commands focused on the workflow of starting and ending sandboxes, and running automation.

### Which API to choose?

If the functionality you’re looking for is covered in the Sandbox APIs, it is recommended to use it over the CloudShell Automation API package. If not, you can consider using the Sandbox API for whatever subset of the required functionality it does offer and complement that with CloudShell Automation API calls.

### Where are the APIs documented?

#### CloudShell Sandbox API

The Sandbox API live documentation page is installed with CloudShell. To access it, simply browse to the following default address: [http://\[CloudShellPortalAddress\]:82/api/v2/explore/]. If you’re accessing the link from the CloudShell Portal machine itself, or from the CloudShell SDK edition machine, you can simply use “localhost” or “127.0.0.1”. The API documentation page allows you to test and experiment with the APIs as well as provide information on the different operations and parameters.

#### CloudShell Automation API

The latest Automation API online help is available [here](pathname:///api-docs/2023.3/Python-API).

When using the cloudshell\-automation-api package, make sure to install the version of the API which is compatible with your CloudShell version. To make the task of finding the right version easier, this package follows a versioning schema different from other CloudShell packages. The major and minor version of the cloudshell\-automation-api package will always match the CloudShell release its compatible with. Therefore, to install the latest compatible version you need to add these version requirements when installing from pip.

For example, to install the latest cloudshell\-automation-api compatible with CloudShell 8.1, run:

```python
python -m pip install "cloudshell-automation-api>;=8.1,<8.2"
```

To install the latest cloudshell\-automation-api compatible with CloudShell 8.0, run:

```python
python -m pip install "cloudshell-automation-api>;=7.1,<8.0"
```

## Starting and stopping a sandbox

The simplest and recommended way to start or stop a new sandbox instance from a blueprint is using the Sandbox API. The Sandbox API live documentation page contains the details of the response and request format. The basic URLs of these operations are **/blueprints/\{blueprint\_identifier\}/start** and **/sandboxes/\{sandbox\_id\}/stop**.

### Using the Sandbox API from Python

The following code sample demonstrates how to use the Sandbox APIs for a simple flow - creating a sandbox from a blueprint and then ensuring setup completes successfully after running some tests.

https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/sandbox_api_python_2_and_3/sandbox_api_example.py

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/sandbox_api_python_2_and_3/sandbox_api_example.py) is by [QualiSystems](https://github.com/QualiSystems)

devops\_integration/sandbox\_api\_python\_2\_and\_3/sandbox\_context\_example.py [view raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/devops_integration/sandbox_api_python_2_and_3/sandbox_api_example.py)

```python
def main():
    """
    Example workflow of starting a sandbox, waiting for it to setup, then stopping it
    :return:
    """
    api_example = SandboxRESTAPI('localhost', '8032')
    api_example.login("admin", "admin", "Global")
    sandbox_id = api_example.start_sandbox('Simple blueprint', datetime.timedelta(hours=2), 'test_sandbox')
    sandox_details = api_example.wait_for_sandbox_setup(sandbox_id)
    run_some_tests_or_other_code(sandox_details)
    api_example.stop_sandbox(sandbox_id)
    api_example.wait_for_sandbox_teardown(sandbox_id)
```

This code uses a simple wrapper around the Sandbox API which uses the requests package. You can find the source code for that implementation [here](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/sandbox_api_python_2_and_3/sandbox_api/sandbox_apis.py).

Since sandboxes used this way are really a scope for testing. It can be beneficial to use Python’s with statement to ensure a sandbox is always set up and torn down properly with every usage. The following code wraps the Sandbox API as a context, ensuring proper cleanup and providing convenient access to the sandbox details.

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/sandbox_api_python_2_and_3/sandbox_context_example.py) is by [QualiSystems](https://github.com/QualiSystems)

devops\_integration/sandbox\_api\_python\_2\_and\_3/sandbox\_context\_example.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/sandbox_api_python_2_and_3/sandbox_context_example.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/devops_integration/sandbox_api_python_2_and_3/sandbox_context_example.py)

```python
def main():
    """
    Example workflow of starting a sandbox, waiting for it to setup, then stopping it
    :return:
    """
    api_example = SandboxRESTAPI('localhost', '8032')
    api_example.login("admin", "admin", "Global")
    sandbox_id = api_example.start_sandbox('Simple blueprint', datetime.timedelta(hours=2), 'test_sandbox')
    sandox_details = api_example.wait_for_sandbox_setup(sandbox_id)
    run_some_tests_or_other_code(sandox_details)
    api_example.stop_sandbox(sandbox_id)
    api_example.wait_for_sandbox_teardown(sandbox_id)
```

**Both of the above examples are Python 2/3-compatible.**

### Using the Automation API from Python

The following code demonstrates implementing the same basic flow using the CloudShell Automation API package:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_example.py) is by [QualiSystems](https://github.com/QualiSystems)

devops\_integration/python\_api/python\_api\_example.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_example.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/devops_integration/python_api/python_api_example.py)

```python
def main():
    """
    Example workflow of starting a sandbox, waiting for it to setup, then stopping it
    :return:
    """
 
    session = CloudShellAPISession('localhost', "admin", "admin", "Global")
    # Create the sandbox
    sandbox = session.CreateImmediateTopologyReservation('test sandbox', owner='admin',
                                                         durationInMinutes=120,
                                                         topologyFullPath='Simple Blueprint1',
                                                         globalInputs=[UpdateTopologyGlobalInputsRequest('Target Cloud', 'AWS')]).Reservation
 
    sandbox_details = SandboxHelpers().wait_for_sandbox_setup(sandbox.Id, session,10)
    run_some_tests_or_other_code(session, sandbox_details)
    session.EndReservation(sandbox.Id)
```

Similar to the Sandbox API example, we can wrap the setup and teardown of the sandbox in a context object and take advantage of the Python with operator to simplify the flow.

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_context_example.py) is by [QualiSystems](https://github.com/QualiSystems)

devops\_integration/python\_api/python\_api\_context\_example.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_context_example.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/devops_integration/python_api/python_api_context_example.py)

```python
def main():
    """
    Example workflow of starting a sandbox, waiting for it to setup, then stopping it
    :return:
    """
    connectivity_params = QualiConnectivityParams(api_service_host='localhost', domain='Global',
                                                  password='admin', username='admin')
    inputs = BlueprintInputs(global_inputs=[UpdateTopologyGlobalInputsRequest('Target Cloud', 'AWS')])
 
    with SandboxContext(connectivity_params=connectivity_params,
                        blueprint_name='Simple Blueprint1', duration=120,
                        blueprint_inputs=inputs) as sandbox:
        run_some_tests_or_other_code(sandbox)
```

## Sandbox API Missing and Upcoming Features

Currently, the Sandbox API does not support the creation of future (pending) sandboxes. If your CloudShell environment requires this feature, you may need to fall back to the cloudshell\-automation-api package API for sandbox reservation (using the *CreateReservation* method).

## Executing Orchestration Commands

Executing orchestration commands from the Sandbox API is supported using the **/sandboxes/\{sandbox\_identifier\}/commands/\{command\_name\}/start** method. In addition, the Automation API package provides the necessary APIs to execute orchestration scripts in the sandbox:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_example.py) is by [QualiSystems](https://github.com/QualiSystems)

devops\_integration/python\_api/python\_api\_example.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/devops_integration/python_api/python_api_example.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/devops_integration/python_api/python_api_example.py)

```python
def run_some_tests_or_other_code(session, sandox_details):
    session.ExecuteEnvironmentCommand(reservationId=sandox_details.Id, commandName='Update Version',
                                      commandInputs=InputNameValue(Name='Version', Value='1.1'))
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(jsonpickle.dumps(sandox_details))
 
    time.sleep(10)
```

## Integrating with CI tools

The same basic workflow demonstrated in the above examples can be used to implement a plugin for CI frameworks such as Jenkins, Travis or TeamCity.

Several Quali community projects already provide readymade solutions for some CI tools.

The [Sandbox-Jenkins-Plugin](https://github.com/jenkinsci/cloudshell-sandbox-plugin) provides build steps for creating and ending sandboxes for Jenkins, as well as integration with the new PipeLines feature for continuous delivery and DevOps automation.

The [Sandbox-Teamcity-Plugin](https://github.com/QualiSystems/Sandbox-TeamCIty-Plugin) provides similar build steps and integration for TeamCity.
