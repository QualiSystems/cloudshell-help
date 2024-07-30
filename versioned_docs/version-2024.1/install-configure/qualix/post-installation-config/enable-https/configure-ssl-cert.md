---
sidebar_position: 1
---

# Configure SSL Certificate on QualiX 4.1 Docker Container

This section explains how to configure your certificate on QualiX 4.1 Docker. For QualiX 5.0, see [Nginx proxy service options](../qualix-config-for-5-and-up.md#nginx-proxy-service-options).

**To configure the SSL certificate:**

1. SSH to docker server.
2. Copy the tomcat config file from the container, and run:
    
    ```javascript
    docker cp guacamole:/usr/local/tomcat/conf/server.xml ./
    ```
    
3. Edit the `./server.xml` file.
    
    1. Remove this line:
        
        ```javascript
        <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol" maxThreads="150" SSLEnabled="true" scheme="https" secure="true" keystoreFile="/usr/share/tomcat/.keystore" keystorePass="123123" clientAuth="false" sslProtocol="TLS" />
        ```
        
    2. Add this line:
        
        ```javascript
        <Connector 
        protocol="org.apache.coyote.http11.Http11AprProtocol"
        port="8443" maxThreads="200"
        scheme="https" secure="true" SSLEnabled="true"
        SSLCertificateFile="/usr/local/tomcat/conf/qualix.crt"
        SSLCertificateKeyFile="/usr/local/tomcat/conf/qualix.key"
        SSLVerifyClient="optional" SSLProtocol="TLSv1+TLSv1.1+TLSv1.2"/>
        ```
        
        For details, see [https://tomcat.apache.org/tomcat-8.5-doc/ssl\-howto.html](https://tomcat.apache.org/tomcat-8.5-doc/ssl-howto.html).
        
4. Copy the `server.xml` file to the container, and run:
    
    ```javascript
    docker cp ./server.xml guacamole:/usr/local/tomcat/conf/
    ```
    
5. Copy the certificate key and `.crt` files to the container, run the following commands:
    
    ```javascript
    docker cp ./qualix.key guacamole:/usr/local/tomcat/conf/
    docker cp ./qualix.crt guacamole:/usr/local/tomcat/conf/
    ```
    
    Where **qualix.key** and **qualix.crt** are the certificate files to be copied to the docker host.
    :::warning
    For Qualix\-4.0.0, change the configuration directory to /home/guacamole/tomcat/conf.
    :::
6. Restart the container:
    
    ```javascript
    docker restart guacamole
    ```