---
sidebar_position: 10
---

# Discovering Inventory using SNMP

A common way to query inventory resources is using SNMP. Quali has created its own SNMP package, [cloudshell-snmp](https://github.com/QualiSystems/cloudshell-snmp), which uses [PySNMP](https://pypi.org/project/pysnmp/) under the hoods.

The [cloudshell-snmp](https://github.com/QualiSystems/cloudshell-snmp) package comes bundled with common SNMP MIBs which are pretty generic across most devices. You can find the full list of MIBs that are provided as a part of the *cloudshell-snmp* package in the [package repository](https://github.com/QualiSystems/cloudshell-snmp/tree/dev/cloudshell/snmp/mibs).

Here’s a short explanation of the MIBs typically used in discovery:

- IF-MIB: In this MIB we are using the table called “ifTable”, which contains information about the ports like interface full address (e.g. GigabitEthrnet0/0/1), the type of the port, speed etc.
    
- Entity-MIB: Contains information about Chassis, modules, ports and describes the structure of the entities. It also contains the physical index of each entity, using the index we can then map between port to its associated interface.
    
- IP-MIB: Contains the IP (IPV6 or IPV4) address of each port.
    
- SNMPv2-MIB: Contains information about the serial number of the device, system description etc.
    
- Etherlike-Mib: Used by CloudShell Shells typically to get the duplex value of interfaces.
    

## Basic usage

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py) is by [QualiSystems](https://github.com/QualiSystems)

snmp\_example/snmp\_generic\_discovery/snmp\_basic\_usage.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py)

```python
def retrieving_snmp_properties(self, ip, community_string):

    logger = get_qs_logger()

    snmp_service = QualiSnmp(ip=ip, snmp_version='2',
                          snmp_community=community_string,
                          logger=logger)

    return snmp_service.get_property('SNMPv2-MIB', 'sysName', 0)
```

In the above example, we initialize the QualiSnmp module which requires at least the device IP and the community string. We then use the **get\_property** function to get the value of the **sysName** property using one of the MIBs which are included with *cloudshell-snmp*.

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py) is by [QualiSystems](https://github.com/QualiSystems)

snmp\_example/snmp\_generic\_discovery/snmp\_basic\_usage.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py)

```python
def retrieving_snmp_table(self, ip):
    logger = get_qs_logger()

    snmp_service = QualiSnmp(ip=ip, snmp_version='2',
                             snmp_community="Community String",
                             logger=logger)

    if_table = snmp_service.get_table('IF-MIB', 'ifDescr')
```

Here we used the same class to retrieve the entire IF table. The **get\_table** function returns a Quali object which inherits from Python’s **ordered\_dictionary** with additional handy sorting and filtering functions to get the table’s rows and columns.

Since the SNMP parameters are included as attributes in the [Resource Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/compute_standard.md) they can be easily retrieved by the driver when implementing the **get\_inventory** function:

```python
def get_inventory(self, context):
    snmp_version = context.resource.attributes['SNMP Version']
    community_string = context.resource.attributes['SNMP Read Community']
```

## Supporting custom vendor MIBs

### Compiling and downloading the vendor MIBs

Some vendors will use their own custom MIBs which you’ll want to include in the discovery. For example, this CISCO site provides access to some common MIBS you can download: [http://tools.cisco.com/ITDIT/MIBS/MainServlet?ReleaseSel=3&PlatformSel=236&fsSel=368](http://tools.cisco.com/ITDIT/MIBS/MainServlet?ReleaseSel=3&PlatformSel=236&fsSel=368). Other vendors have their own MIBs download links.

To compile the MIBs we recommend using the [mibdump.py](https://github.com/etingof/pysmi/blob/master/scripts/mibdump.py) script which is part of the [PySMI](https://pypi.org/project/pysmi/) SNMP libraries and tools. The **mibdump.py** script supports both compiling MIB sources you’ve downloaded locally as well as using remote MIB sources. For example, the [snmplabs](http://mibs.snmplabs.com/asn1/) repository provides a wealth of publicly available MIBs. Notice, if you are trying to compile MIB sources you’ve downloaded locally, you should be sure to download all of the dependencies to the same folder (e.g. IF-MIB depends on SNMPV2-MIB). However, you can specify more than one MIB source, so you can include both your local MIB sources and remote repositories.

The following example will compile the IF-MIB source from the **snmplabs** repository:

```python
python mibdump.py --mib-source=http://mibs.snmplabs.com/asn1/@mib@ IF-MIB
```

If you’re a Linux user, you can take advantage of the [smidump package](http://linux.die.net/man/1/smidump). This package is available as an RPM/APT package for various Linux distros. The **smidump** package is somewhat easier to use with a clear syntax. For example, to use the **smidump** package to compile the IF-MIB to Python, simply run these two lines from the terminal:

```python
smidump -f smiv2 -k IF-MIB.mib  > if-mib.txt
smidump -f python -k if-mib.txt | libsmi2pysnmp > if-mib.py
```

### Including the compiled MIBs in your Shell project

After downloading the MIB files using either the Linux or Windows option, you’ll need to include them in your shell driver project, save the MIBs Python files in a sub-package folder and add the following code to your Shell:

```python
snmp_service = QualiSnmp(ip=ip, snmp_version=snmp_params.snmp_version,
                         snmp_community=snmp_params.snmp_read_community,
                         logger=logger)
snmp_service.load_mib('IF-MIB')
```

After loading the MIB, you’ll be able to use it like any of the MIBs included in cloudshell-snmp and retrieve properties and tables.

### Converting the MIB data to get_inventory results

In order to successfully load the internal structure and attributes of a resource, the **get\_inventory** function need to return lists of **AutoLoadResource** and **AutoLoadAttribute** objects.

The following driver implements basic discovery using generic MIBs only and converts the result to the objects required by **get\_inventory**. To view the full source click the ‘view’ or ‘raw’ links above the code snippet. The code can be used as a reference for creating similar procedures:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py) is by [QualiSystems](https://github.com/QualiSystems)

snmp\_example/snmp\_generic\_discovery/generic\_snmp\_discovery.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py)

```python
def __init__(self, snmp_version, snmp_read_community,
                 snmp_v3_user = None,
                 snmp_v3_password = None,
                 snmp_v3_privatekey=None):

        self.snmp_version = snmp_version
        self.snmp_read_community=snmp_read_community
        self.snmp_v3_user=snmp_v3_user
        self.snmp_v3_password=snmp_v3_password
        self.snmp_v3_privatekey=snmp_v3_privatekey


class GenericSNMPDiscovery:

    def discover(self, ip, model, vendor, snmp_params):
        """
        :param str ip: The device IP address
        :param str model: The device model in CloudShell
        :param str vendor: The device vendor
        :param SNMPParams snmp_params: The device vendor
        :return: The loaded resources and attributes
        :rtype: AutoLoadDetails
        """

        logger = get_qs_logger()

        self.snmp = QualiSnmp(ip=ip, snmp_version=snmp_params.snmp_version,
                              snmp_user=snmp_params.snmp_v3_user,
                              snmp_password=snmp_params.snmp_v3_password,
                              snmp_community=snmp_params.snmp_read_community,
```

To use this module, simply initialize an instance of **GenericSNMPDiscovery** and call the **discover** method:

```python
def get_inventory(self, context):
   snmp_version = context.resource.attributes['SNMP Version']
   community_string = context.resource.attributes['SNMP Read Community']
   snmp_params = SNMPParams(snmp_version=snmp_version,snmp_read_community=snmp_community)
   GenericSNMPDiscovery().discover(device_ip,"Cisco 5k Switch", "Cisco",snmp_params )
```
