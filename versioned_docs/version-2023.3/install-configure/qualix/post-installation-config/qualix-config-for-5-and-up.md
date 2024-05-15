---
sidebar_position: 9
---

# QualiX Configuration for Version 5.0 and up

## Qualix Docker configuration file

This is a Docker environment file in key=value format.

**To change configuration:**

1. Edit the QualiX Docker configuration file at `/opt/qualix/.qualix.env`.
2. Update the configuration file with the suitable [Options](#options). Make sure each option (key-value pair) is on a separate line in the file.
3. Restart QualiX:
    
    ```javascript
    qualix_stop
    ```
    
    ```javascript
    qualix_start
    ```
    
    This will override the default options in `/opt/qualix/.env`.
    

## Options

In this section:

- [QualiX configuration](#qualix-configuration)
- [JKS Keystore options, SSL settings for Guacamole Tomcat](#jks-keystore-options-ssl-settings-for-guacamole-tomcat)
- [Nginx proxy service options](#nginx-proxy-service-options)
- [SSO SAML options](#sso-saml-options)

### QualiX configuration

QualiX configuration options that you can uncomment or add.

- **Activate QualiX debug mode**. Default is **false**.
    
    ```javascript
    QUALIX_DEBUG=true
    ```
    
- **Set link expiration time (in seconds)**. Default is **60**.
    
    ```javascript
    QUALIX_LINK_TIMEOUT=60
    ```
    
- **Disable link expiration**. Default is **false**.
    
    ```javascript
    QUALIX_DISABLE_LINK_VALIDATION=true
    ```
    
- **Enable multiple connection retries during session initialization**. This option sets the timeout value. Default is **0**.
    
    ```javascript
    QUALIX_CONNECTION_TIMEOUT=60
    ```
    
    If the session host is unreachable or in startup phase, QualiX will try to reconnect until it succeeds. If the timeout value is reached, an error is raised.
    
- **When QualiX services are behind a proxy service, this header is used to retrieve client real ip address**.
    :::note
    This option is needed if the Nginx proxy service is enabled.
    :::
    ```javascript
    QUALIX_REMOTE_ADDR_HEADER=X-Forwarded-For
    ```
    
- **Disable public key access**:
    
    ```javascript
    QUALIX_SHARE_PUBLIC_KEY=false
    ```
    
- **Allow authentication from specific addresses/networks only**. Default is **0.0.0.0/0** (allow from any).
    
    ```javascript
    QUALIX_ALLOW_AUTH_FROM=<comma-separated list of addresses/networks>
    ```
    
    For example:
    
    ```javascript
    QUALIX_ALLOW_AUTH_FROM=192.168.10.0/24, 192.168.20.33
    ```
    

### JKS Keystore options, SSL settings for Guacamole Tomcat

This section explains how to set a trusted certificate for the Guacamole service.

These options apply when the Guacamole service is used as a standalone service and the Nginx service is disabled. In other case, see [Nginx proxy service options](#nginx-proxy-service-options).

The JKS Keystore file contains SSL certificates for the Guacamole Tomcat service.

- Example: How to convert PEM `/certs/qualix.pem` format to jks `/certs/qualix.jks`:
    
    ```javascript
    openssl pkcs12 -export -in /certs/qualix.pem -inkey /certs/qualix.pem -out /certs/qualix.p12 -password pass:"${password}"
    keytool -importkeystore -srckeystore /certs/qualix.p12 -srcstoretype PKCS12 \
     -destkeystore /certs/qualix.jks -deststoretype JKS -srcstorepass "${password}" \
     -deststorepass "${password}"
    ```
    

- **Set the path to JKS Keystore file on docker host**. This will mount the file into the container and allow it to be used by Guacamole Tomcat.
    
    ```javascript
    JKS_KEYSTORE_FILE_EXT=/certs/qualix.jks
    ```
    

- **Set the password to JKS Keystore**:
    
    ```javascript
    JKS_KEYSTORE_PASS=123123
    ```
    

### Nginx proxy service options

This section explains how to set a trusted certificate for the Nginx service. Perform this procedure if you need to use a trusted certificate but also if QualiX 5.0 is running without guacamole.

These options need the Nginx proxy service to be enabled.

- **Path to SSL certificate file on the docker host**. If option is set the file will be mounted into the container and used by the Nginx service.
    
    ```javascript
    NGINX_SSL_CERT_EXT=/tmp/qualix.crt
    ```
    

- **Path to SSL key file on the docker host**. If option is set the file will be mounted into the container and used by nginx.
    
    ```javascript
    NGINX_SSL_KEY_EXT=/tmp/qualix.key
    ```
    

### SSO SAML options

- **The URI of the XML metadata file**. Contains all the information the SAML extension needs to authenticate with the IdP.
    
    ```javascript
    SAML_IDP_METADATA_URL=https://dev-629237.okta.com/app/exkrkrh6zcJUewd321/sso/saml/metadata
    ```
    

- **The entity ID of the Guacamole SAML client**, which is usually the URL of the Guacamole server.
    
    ```javascript
    SAML_ENTITY_ID=https://qualix.francecentral.cloudapp.azure.com
    ```
    

- **The URL to be used by the IdP once authentication has succeeded to return to the Guacamole web application and provide the authentication details to the SAML extension**.
    
    ```javascript
    SAML_CALLBACK_URL=https://qualix.francecentral.cloudapp.azure.com/remote/api/ext/quali-auth/connect
    ```
    

- **This option needs to be set when SAML is activated**.
    
    ```javascript
    EXTENSION_PRIORITY=saml
    ```
    

- **Require strict security checks during SAML logins**. This will ensure that valid certificates are present for all interactions with SAML servers and will fail SAML authentication if security restrictions are violated.
    
    ```javascript
    SAML_STRICT=false
    ```