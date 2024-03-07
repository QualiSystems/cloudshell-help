---
sidebar_position: 4
---

# Configure the New Job Scheduling to Run in HTTPS

Depending on your organization's security policy, you may want to have the New Job Scheduling Portal and REST API run over a secured connection.

**To configure the New Job Scheduling Portal and REST API to run in HTTPS:**

1. Add a Kubernetes TLS secret named **jss-tls** that contains the private key and public certificate for your computer domain name. For details, see this official Kubernetes documentation [page](https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets).
    
2. Run the following command:
    
    ```python
    kubectl create secret tls jss-tls --key ${KEY_FILE} --cert ${CERT_FILE}
    ```
    
3. Add the following **ingress** and **ingress-nginx** sections to your `customer.values.yaml`:
    
    ```python
    cloudshell-core:
      job-scheduling-portal:
        jobSchedulingPortal:
          ingress:
            tls:
              enabled: true
              hosts:
                - portal_dns.com
    
      ingress-nginx:
        controller:
          config:
            force-ssl-redirect: "true"
          extraArgs:
            default-ssl-certificate: $(POD_NAMESPACE)/jss-tls
    ```
    
4. Save the file and redeploy the helm chart, as explained in [Deploy the New Job Scheduling Infrastructure using Helm](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-helm-install.htm).
    
    All future HTTP traffic, by domain name and IP, should be redirected to HTTPS, as expected.
    :::note
    When connecting to the New Job Scheduling Portal using its private IP address over HTTPS, the browser may return a "Certificate invalid" warning if the IP address has changed (dynamic IP). Skipping this warning should fix this issue as this will force the browser to redirect to the Portal's domain name.
    :::