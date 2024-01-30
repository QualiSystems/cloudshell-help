---
sidebar_position: 9
---

# Activity Feed for a Resource in the Sandbox

The **Activity Feed** pane enables you to display system messages and command execution progress for a specific resource in the sandbox.

**To open a component's Activity Feed:**

1. In the sandbox, click the component's live status icon. Alternatively, hover over the component and from the **Actions** menu, select **View Activity**.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/Component-View-Activity.png)
    
    The **Activity Feed** pane is displayed, listing the last 30 entries.
    
    :::tip
    Scroll to the bottom to display additional entries.
    :::
    
2. To change the time format of the entries, click the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActivityFeedTimeFormatButton.png) button. By default, the time elapsed is displayed for each entry.
3. To narrow down your search for entries, use the search and filtering options. Click the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ActivityFeedButton.png) button to show the filters.
    
    Note that the search and filters apply to all entries in the Activity Feed, not just the last 30.
    
    - **Search feed** field: search for entries that include a word, phrase or regex. For regex, start with a backtick - \`. For example, `` `resour*``.
    - **Error** option: display errors that occurred in the sandbox
    - **Has output** option: display entries that have an output
    - **Component** drop down list: display entries that are related to a specific resource, App or service in the sandbox. The value Component displays entries for all components.
    - **Event type** drop down list: display entries of a specific type. Values are: **Event type** (all entries), **Command**, **Resource**, **Service** and **Sandbox**.

For more detailed information about a particular error, see [Activity Feed Pane](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-View-Actvty-Fd.htm).

## Related Topics

- [Activity Feed for an App in the sandbox](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Activity-Feed.htm)
- [Activity Feed for a service in the sandbox](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Use-Srvc.htm#Activity)