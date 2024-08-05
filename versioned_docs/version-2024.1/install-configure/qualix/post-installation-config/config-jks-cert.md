---
sidebar_position: 4
---

# Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate

This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes using Java KeyStore.

**To enable Java Keystore connection to sandbox elements:**

1. SSH to the docker server.
2. Copy the jks certificate file to the **guacamole** container, use the `docker cp` command. Place the file in `/home/guacamole/tomcat`.
3. Enter to the container, "docker exec -ti guacamole bash"
4. Edit the `/home/guacamole/tomcat/server.xml` file.
    1. Find the following line:
        
        ```javascript
        "<Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol" maxThreads="150" SSLEnabled="true" scheme="https" secure="true" keystoreFile="/home/guacamole/tomcat/.keystore" keystorePass="123123" clientAuth="false" sslProtocol="TLS" />"
        ```
        
    2. Replace highlighted "keystoreFile" `/home/guacamole/tomcat/.keystore` with new file path, and keystorePass="**123123**" with the proper password. Remove keystorePass="**123123**" if not used.
5. Exit from the container and run:
    
    ```javascript
    docker restart guacamole
    ```
    
6. Test the certificate.
7. To save the configuration:
    
    1. Run:
        
        ```javascript
        docker commit guacamole guacamole_trust
        ```
        
    2. Edit the `docker-compose.yml` file and replace "image: qualihub/qualix\_guacamole:$\{TAG\_GUACAMOLE\}" with "image: guacamole\_trust"
        
    3. Run stop/start.sh and keep the configuration.