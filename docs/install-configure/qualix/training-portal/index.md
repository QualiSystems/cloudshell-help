# Training Portal (Over the Shoulder)
:::warning
This is a beta version of the Training Portal and the installation is manual at this stage.
:::
It is possible to share existing SSH and RDP remote connections using dedicated links on the sandbox resource, App or service, allowing your organization's members to get an "over the shoulder" look at what other users are doing in their remote sessions. This is useful in training scenarios, where a trainee might request assistance from their instructor or the instructor might want to observe the trainee's actions when accessing a machine via a QualiX session.

Over-the-shoulder connections can be configured to provide "read only" or "read/write" access.
:::tip
An "over the shoulder" connection requires an existing "full access" session to the device (VM or physical). In other words, if the "full access" user does not have an active remote connection session to the device, the "over the shoulder" connection will fail.
:::
To illustrate how this works, let's say John needs to undergo training on a new product.

1. The instructor creates a user for John.
2. The instructor creates a sandbox containing an installation of the new product and adds John as a permitted user.
3. Then, the instructor sends John a dedicated link to the sandbox.
4. John clicks the link. A web page opens, containing his sandbox.
    :::note
    In a persistent sandbox, a "Remaining" indication is displayed in the top right corner of the screen. For regular sandboxes, the time remaining in the sandbox is displayed.
    :::
5. While working in the sandbox, John encounters an issue and asks the instructor for assistance.
6. The instructor logs into CloudShell Portal, opens the sandbox workspace and clicks an over-the-shoulder remote access link, which opens John's session.
7. John shows the instructor what he did on the screen, which the instructor sees in real time.
8. The instructor identifies the problem and explains this to John who continues to work.

There are two ways to configure the Over the Shoulder plugin:

- Installer: [Setting up Training Portal Using the Installer (Over the Shoulder)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv-over-the-shoulder-installer.htm)
- Docker image: [Setting up Training Portal Using Docker (Over the Shoulder)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv-over-the-shoulder-docker.htm)

## Related Topics

- [Welcome to your training session!](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Training-View.htm)