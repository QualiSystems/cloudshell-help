---
sidebar_position: 5
---

# Configure Quali API to Work in HTTPS Mode

This article explains how to configure Quali API to run over HTTPS.

**To configure Quali API over HTTPS:**

1. In the Quali Server machine, open the Server installation directory's `customer.config` file (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config`).
2. Add the following keys:
    
    `<add key="QualiApi.Address" value="https://{Quali Server Address}"/>`
    
    Where `{Quali Server Address}` is the Quali Server's hostname or IP
    
3. Restart **Quali Server** service.
4. If you don’t have an SSL certificate on the Quali Server, create a self-signed certificate for port 9000 using this PowerShell script:
    
    ```css
    if(-not [string]::IsNullOrEmpty($Env:UserDnsDomain)) {
    $Subject = "${Env:ComputerName}.${Env:UserDnsDomain}"
    }
    else {
    $Subject = $Env:ComputerName
    }
    $certificate = New-SelfSignedCertificate -DnsName $Subject -CertStoreLocation "cert:\LocalMachine\My"
    $thumb = $certificate.GetCertHashString()
    & netsh http add sslcert ipport=0.0.0.0:9000 certhash=$thumb appid=`{1b1e7a9d-1af7-4922-88b9-8220e09cc072`}
    ```