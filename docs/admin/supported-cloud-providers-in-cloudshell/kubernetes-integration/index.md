# Kubernetes Integration

The Kubernetes deployment type integrates CloudShell with Kubernetes. This integration enables the deployment of CloudShell Apps in self-hosted and cloud-managed Kubernetes containers. CloudShell supports deploying Kubernetes pods from images residing in the cluster's image registry.

The following diagram illustrates an Kubernetes integration (with a local CloudShell installation) hosting two live sandboxes:

![](/Images/Admin-Guide/KubernetesIntegrationArchitecture.png)

CloudShell communicates with the Kubernetes cluster over the Kubernetes API to deploy and manage container instances as part of CloudShell sandboxes.

When deploying a sandbox, CloudShell creates a Kubernetes deployment in a dedicated namespace for the sandbox. The deployment spins up 1 or more pods for each Kubernetes App (number of pods are defined in the App’s settings) as well as services for exposing the internal and external ports defined in the App. A dedicated service is created for each port. For each internal port, a ClusterIP service is created, and for each external port, a LoadBalancer or NodePort service is created.

:::note Notes
- CloudShell does not manage Kubernetes App connectivity at this time. This can be done using the external and internal ports defined in the App.
- When the sandbox ends, the sandbox's namespace along with all its components are automatically deleted from the cluster.
- The App's external IP is displayed in the VM Details pane. For details, see [View an App's VM Details](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-VM-Details.htm).
:::
## Kubernetes installation workflow

To integrate Kubernetes with CloudShell, perform the following steps:

<table>
  <tbody>
    <tr>
      <td style={{ backgroundColor: '#fff9c7' }}>
        <ol>
          <li value="1">
            <a href="https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-Clp-Rsc.htm" className="MCXref xref">
              Add a Kubernetes Cloud Provider Resource
            </a>
          </li>
          <li value="2">
            <a href="https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-App.htm" className="MCXref xref">
              Add a Kubernetes App Template
            </a>
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>


## Related Topics

- [Kubernetes Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-Prereqs.htm)
- [Supported Cloud Providers for Kubernetes Integration](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-Sprtd-Clps.htm)