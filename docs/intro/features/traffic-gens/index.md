# Traffic Generators Overview

CloudShell's traffic generator shells enable you to conduct traffic test activities from the sandbox. For traffic libraries in TestShell Studio, see "CloudShell Libraries" on page 1.

## Architecture

In CloudShell, a traffic generator is typically modeled using a chassis/blade resource, which represents the traffic generator device and ports, and a controller service that runs the commands on the chassis, such as Load Configuration File, Start Traffic and Get Statistics. Chassis and controllers are each modeled by a dedicated shell. The separation of these two elements into different shells enables you to accurately model your real-life architecture. For example, they support scenarios where the chassis and controller are located on different machines or on the same one, provided as physical devices or software installed on VMs, and configurations that mix and match different controllers and chassis of the same manufacturer.

The following image illustrates a controller service that runs traffic from a traffic generator chassis to a router, via a layer 2 switch:

![](/Images/CloudShell-Portal/TrafficGeneratorsArchitecture.png)

## Our Traffic Generator Shells

While we still support the use of 1st Gen shells, we highly recommend using the 2nd Gen version of the traffic generators you want to use.

Our existing traffic generator shells can be downloaded from [Quali Repositories](https://github.com/orgs/QualiSystems/repositories) and have different levels - Certified, Preview & Community grade. Can't find the Shell you're looking for? You can extend an existing Shell, create a new Shell based on one of our [Shell standards](https://github.com/orgs/QualiSystems/discussions?discussions_q=label%3AStandard+), or suggest a new standard in our [Idea Box](https://github.com/orgs/QualiSystems/discussions/categories/idea-box).

## How to set up a traffic generator in CloudShell

This procedure provides an end-to-end flow from importing a traffic generator chassis and controller into CloudShell, creating the chassis resource and controller service, and adding them to a blueprint.

1. Import the traffic generator chassis shell into CloudShell.
2. In the appropriate domain, create a chassis resource with the details of your chassis device or VM (if your chassis is provided as a virtual appliance).
3. Import the traffic generator controller shell into CloudShell.
    
    Since the controller is a service, if you're not planning on working in the Global domain, you will need to expose the service to the appropriate domain. This is done by associating the service to a service category that is assigned to the domain. If your controller is a 1st Gen shell, in Resource Manager Client, open the Resource Families explorer, click the service family and associate the service category. For 2nd Gen service shells, assign the shell's service category to the appropriate domain in the Manage dashboard.
    
4. Create a blueprint in the domain.
5. Add the controller service, chassis ports that will be used in the traffic test, and any additional resources/Apps as appropriate.
6. Create the connectivity requirements between the different endpoints.
7. Associate the chassis ports to the port configurations specified in the controller's configuration file, as explained in the following section, under Load Configuration.

## How to use traffic generators in CloudShell

The following workflow highlights a typical traffic test. For additional commands and use cases, see the readme file that comes with your traffic generator shell.

1. In the sandbox, open the controller's commands pane.
2. Run these commands in the following order:
    
    1. Run Load Configuration to load the configuration file prepared by your admin to the controller. The configuration file includes the settings according to which the traffic test will be run. For example, packet size, number of packets to send in parallel, interval at which to send packet batches, etc.
        
        Points to consider:
        
        - The file must be accessible to the execution server that will run the traffic test.
        - The configuration file provides a unique name for each port on the chassis. Therefore, in order to assign a port on the configuration file to a port on the chassis, you must specify the file's defined port name on the port in CloudShell. To do so, drag the port resource into the diagram from the Add Resource catalog, open its Resource Structure pane, click the port's drop-down list and select Attributes, and in the Logical Name field, specify the port's name.
        
        :::note
        Since traffic operations may take longer than the default 10 minute idle timeout period set for shell drivers, once you run the first command on the traffic generator controller, the controller will remain in a "running" state (indicated by the turning wheel on the controller service) until the reservation ends or the shell driver process is manually terminated.
        :::
        
    2. Run Start Traffic to generate and send the traffic to the DUT according to the settings provided in the configuration file.
        
        Set the Blocking input to decide how to run the traffic test (True to run synchronously or False to run asynchronously). In synchronous mode, CloudShell waits for the traffic test to complete before allowing additional traffic commands to run, and in asynchronous mode, you can run additional commands while the traffic test is running.
        
    3. Run Stop Traffic to stop sending traffic from the traffic generator.
        
        This does not terminate the controller's shell driver process, so if the Start Traffic command is running in synchronous mode, all subsequent commands will still have to wait for the traffic test to complete.
        
    4. Run Get Statistics. This command returns the traffic test's statistics in JSON or CSV format.
        
        Set the command's inputs:
        
        - View Name: Type of statistics to return. For example, Port Statistics, Traffic Item Statistics, Flow Statistics, etc. The types available may differ depending on the traffic generator.
        - Output Type (Enum): JSON or CSV. JSON prints the statistics to the reservation's output, which is useful for API calls that can then use the output, while CSV attaches a CSV file with the test's statistics to the sandbox.