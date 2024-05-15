---
sidebar_position: 6
---

# Changing the Running User on the Quali Server Service

From time to time, you may need to restart the **Quali Server** service. For example, after system upgrades, maintenance operations or when applying certain CloudShell customizations.

By default, the **Quali Server** service is configured to run under a Windows administrator on the machine. However, if you decide to change the service's user context to a non-Windows administrator, when you restart the **Quali Server** service, Quali Server ports 8029, 8034 and 9000 will be closed for communication. To ensure this doesn't happen, perform the steps below.

**To change the running user:**

1. Set the new user as the RabbitMQ service's user. This is needed to allow Quali Server to control RabbitMQ and other related services.
2. Do the following if the running user is not a Windows administrator.
    1. In the Quali Server machine, open Command-Prompt as Administrator.
    2. Run the following commands:
        
        ```javascript
        netsh http add urlacl url=http://+:8029/ user=DOMAIN\user
        ```
        
        ```javascript
        netsh http add urlacl url=http://+:8034/ user=DOMAIN\user
        ```
        
        ```javascript
        netsh http add urlacl url=http://+:9000/ user=DOMAIN\user
        ```
        
        For example, granting port access to user "greg.d" in domain "MyDomain":
        
        ```javascript
        netsh http add urlacl url=http://+:8029/ user=MyDomain\greg.d
        ```
        
        ```javascript
        netsh http add urlacl url=http://+:8034/ user=MyDomain\greg.d
        ```
        
        ```javascript
        netsh http add urlacl url=http://+:9000/ user=MyDomain\greg.d
        ```
        
3. In the Windows Services window, set the new user in the **Quali Server** service’s **Properties**.