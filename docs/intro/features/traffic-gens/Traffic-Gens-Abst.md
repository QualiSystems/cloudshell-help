---
sidebar_position: 2
---

# Using Traffic Generator Ports as Abstract Resources

A traffic generator test configuration defines a test framework that’s mapped to specific ports. However, when using CloudShell abstract resources to dynamically reserve your traffic generator ports from a pool of available resources, the reserved ports may be different from reservation to reservation. Therefore, to ensure that the test configuration file will properly use the reserved ports, we'll assign a Logical Name to each traffic port. Then, when running the test, CloudShell will use the port’s logical name to identify and map the physical port to the ports defined in the test configuration.

:::note
We highly recommend using the same logical names for all blueprints and test configurations. In these examples, we will use ‘Port A’ and ‘Port B’ as the port logical names. Other examples are: Tx/Rx, Port1/ Port2
:::

The following options exist:

  - [Option 1: Configure CloudShell to set the logical names on the ports during reservation setup (using additional info)](#option-1-configure-cloudshell-to-set-the-logical-names-on-the-ports-during-reservation-setup-using-additional-info)
  - [Option 2: Pre-configure the logical names on the port resources and configure the abstract resources to select the resources that have the desired logical names (using requirements)](#option-2-pre-configure-the-logical-names-on-the-port-resources-and-configure-the-abstract-resources-to-select-the-resources-that-have-the-desired-logical-names-using-requirements)


## Option 1: Configure CloudShell to set the logical names on the ports during reservation setup (using additional info)

This option applies to scenarios where you have different ports that are not specifically configured for the test at hand. In this case, you don’t care which ports you use as long as they’re available, so you set the logical name as additional info on the abstract resource. This provides the greatest control since you don’t specify the logical name of the port as a requirement, which can limit your search for a port. Instead you set the logical name once you get an available port using a custom script.

To configure CloudShell to set the logical names on the ports during reservation setup:

1. In the appropriate domain, open the Inventory dashboard and in the Abstract Templates page, create an abstract resource template for the traffic generator chassis resource.
    1. Create the port abstracts.
    2. On each port abstract, open the Additional Info tab and use the Logical Name attribute to set the logical name according to how the port is referred to in the test configuration you load.
        
        For example, setting "p2" as the logical name for Port 2:
        
        ![](/Images/CloudShell-Portal/Lab-Management/Environments/TGAbstractAddAttribute.png)
        
2. Click Save Changes.
3. Create a blueprint and add the abstract template from the Add Abstract Template catalog.
4. Add to the blueprint a custom setup script that takes the value from the port’s Additional Info and sets the value of the Logical Name attribute on the port.
5. Reserve the blueprint.
    
    The Logical Name is set on the port resource. You can now load a test configuration that uses these logical names.
    

## Option 2: Pre-configure the logical names on the port resources and configure the abstract resources to select the resources that have the desired logical names (using requirements)

This method limits your search to only those ports that have already been defined with a specific logical name.

Unlike option 1, in this scenario, your ports were pre-configured to perform specific tasks. So here each of the traffic generator’s ports has a logical name configured and you explicitly state the ports you want to use, using requirements, and since the logical name has been configured ahead of time, you don’t need a custom script to do the assigning.

To configure the abstract resources to select the resources that already have the desired logical names:

1. Set the Logical Name on all the traffic generator chassis resource’s ports.
    1. In the Inventory dashboard, click Advanced search.
        
        ![](/Images/CloudShell-Portal/Lab-Management/Environments/TGAbstractAdvancedSearch.png)
        
    2. Search for the resource.
        
    3. For each selected port, click the port’s More Info button and select Edit. For example:
        
        ![](/Images/CloudShell-Portal/Lab-Management/Environments/TGAbstractMoreInfoButton.png)
        
    4. Make sure the Logical Name attribute is set according to how the port is referred to in the test configuration you load.
        
        ![](</Images/CloudShell-Portal/Lab-Management/Environments/TGAbstractLogicalName.png>)
        
    5. Click Save.
    6. Repeat steps b-e for each additional port.
2. In the Inventory dashboard's Abstract Templates page, create an abstract resource template for the traffic generator chassis resource.
3. In the template's Requirements page, add the required port abstracts.
4. Create a blueprint and add the abstract template from the Add Abstract Template catalog.
    
5. Reserve the blueprint.
    
