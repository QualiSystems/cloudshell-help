---
sidebar_position: 1
---

# Getting Started with Packaging API

## Prerequisites

- Python 3 (version 3.6 and above)
- [.NET Framework 4.7](https://dotnet.microsoft.com/en-us/download/dotnet-framework)
- [.NET 5 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) (on Windows Execution Servers that will be used for packaging API operations)
- quali\_utils.3.3.0.tar.gz: Version 3.3.0 is cross-platform (supported on Windows/Linux) and requires both .NET Framework 4.7 and .NET 5 Runtime to work (Alternatively, you can use version 3.2, which is not cross-platform, and does require .NET 5 Runtime.
    
    ```javascript
    pip install <path_to_quali_utils_package>
    ```
    
    Note: quali\_utils.3.3.0 is supported by CloudShell 2022.1 and above. For previous versions, see [earlier versions](https://help-archive.quali.com/help%20versions/All%20Versions%20Help/Content/Versions.htm) of CloudShell Help.
    

## Installation

1. Make sure you have a compatible Python version installed on your machine.
2. To download the Python Package Editor that applies to your installed CloudShell version, visit the [Python Package Editor Download Page](https://support.quali.com/hc/en-us/articles/360038314833).
3. Do one of the following:

<details>
<summary>Windows installation:</summary>
 
    - Run the pip tool to install the package.
        
</details>

<details>
<summary>Linux installation:</summary>

    You can install Packaging API on Linux environments that have .NET 5 Runtime.

    **<span style={{ color: 'blue' }}>Installation instructions for various Linux environments:</span>** 
    
    - Ubuntu: [Microsoft-us/dotnet/core/install/linux-ubuntu](https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu)
    - Alpine: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-alpine](https://docs.microsoft.com/en-us/dotnet/core/install/linux-alpine)
    - Centos: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-centos](https://docs.microsoft.com/en-us/dotnet/core/install/linux-centos)
    - Debian: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-debian](https://docs.microsoft.com/en-us/dotnet/core/install/linux-debian)
    - Fedora: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-fedora](https://docs.microsoft.com/en-us/dotnet/core/install/linux-fedora)
    - OpenSUSE: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-opensuse](https://docs.microsoft.com/en-us/dotnet/core/install/linux-opensuse)
    - Red Hat Enterprise Linux: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-rhel](https://docs.microsoft.com/en-us/dotnet/core/install/linux-rhel)
    - SLES: [https://docs.microsoft.com/en-us/dotnet/core/install/linux-sles](https://docs.microsoft.com/en-us/dotnet/core/install/linux-sles)
    
    Please note that the required version in "dotnet-runtime-5.0” is not as listed in the documentation - "dotnet-runtime-6.0”
    
   **<span style={{ color: 'blue' }}>Example: Installing Packaging API on Ubuntu 18.04:</span>** 

    1. Set up Python 3, pip 3:
        
        ```javascript
        sudo apt update
        sudo apt install python3
        sudo apt-get -y install python3-pip
        pip3 install --upgrade pip
        ```
        
    2. Set up .NET 5 support:
        
        ```javascript
        wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        								
        rm packages-microsoft-prod.deb
        sudo apt-get update
        sudo apt-get install -y apt-transport-https
        sudo apt-get update
        sudo apt-get install -y dotnet-runtime-5.0
        ```
        
    3. Install quali\_utils 3.3.0:
        
        1. Copy file quali\_utils-3.3.0.tar.gz to /tmp folder.
        
        1. Run command:
            
            ```javascript
            pip3 install /tmp/quali_utils-3.3.0.tar.gz
            ```
            
    4. Validate the installation:
        
        1. Copy files package\_editor\_linux.py and TestPackage.zip to /tmp
        
        1. Run python command:
            
            ```javascript
            python3 package_editor_linux.py
            ```
            
            Output:
            
            ![](../../Images/API/Packaging API/LinuxInstallOutput.png)
            
        2. Run the `dir` command and see if CreatedPackage2.zip was created.
        3. Make sure the package TestPackage.zip now includes 2 new global inputs in topology.
    
</details>

## Code Sample

The following code sample provides an example of how to create new blueprints using the API. This example demonstrates how to perform the following flow:

![](/Images/API/Packaging-API/code-sample.png)

This example uses the "requests” python module.

```python
from quali_utils.quali_packaging import PackageEditor
```

```python
import requests

#Create a new package in the local file system

p = PackageEditor()

p.create("c:\\myfolder\\mypack.zip")




#Load the package and prepare for edit

p.load("c:\\myfolder\\mypack.zip")

#Edit the package: f.e add new family

p.add_family("Ball", "", ["Game", "3D Shape", "MoreStuff"], False, False, False, False, True)


#Import the package into CloudShell

# 1 – authenticate

r = requests.put('http://localhost:9000/Api/Auth/Login', {"username": "admin", "password": "admin", "domain": "Global"})

authcode = "Basic " + response._content[1:-1]


#2 – Open the package before import

fileobj = open("c:\\p.zip", 'rb')

#3 – Send to CloudShell by calling Import Package REST API

r = requests.post('http://localhost:9000/API/Package/ImportPackage',

                 headers={"Authorization": authcode},

                 files={"file": fileobj})
print r._content

print r.ok
```