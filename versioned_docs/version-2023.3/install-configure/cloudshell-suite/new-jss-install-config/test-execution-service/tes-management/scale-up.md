---
sidebar_position: 3
---

# Scaling up and down Test Execution Services in Kubernetes Environment (via Stateful Sets)

CloudShell's Helm deployment package is designed to allow admins to easily spin up Test Execution Services using a Kubernetes StatefulSet.

Out of the box, installing theHelm deployment on a Kubernetes cluster deploys the Test Execution Service StatefulSet containing a single Test Execution Service instance (pod) associated with it. However, admins can choose to scale up or down the Stateful Set to increase the number of available Test Execution Services the system can utilize.

:::note
Scaling up the Test Execution Servers StatefulSet can be done using the Kubernetes CLI or using the Kubernetes UI, which is discussed below.
:::

**Prerequisites**

- 2023.3 GA Helm package

## Scaling up Test Execution Services

1. In the **Stateful Sets** area, select the **Test Execution Service**.
2. From the more options button on the right, select **Scale**.
    
    ![](/Images/IG2/KubernetesSatefulSets.png)
    
3. Specify the **Desired replicas** and click **Scale**.
    
    ![](/Images/IG2/KubernetesDesiredReplicas.png)
    
    New Test Execution Services are created and registered to the Job Scheduling.
    

## Scaling down Test Execution Services

If you no longer need certain replicas, it is possible to scale down the StatefulSet to a lower number.

Note that scaling down removes the pods from Kubernetes but does not delete the Test Execution Servers from the Job Scheduling Portal. The deleted Test Execution Sevices will be set to “Offline” and will not execute new tests.