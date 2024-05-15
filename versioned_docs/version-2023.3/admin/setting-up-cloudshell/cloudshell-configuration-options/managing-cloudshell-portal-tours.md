---
sidebar_position: 2
---

# Managing CloudShell Portal Tours

CloudShell Portal includes some basic out-of the-box web tour (tutorial) templates (for the **Blueprint Catalog**, blueprint workspace, and **Sandboxes** dashboard). These web tours can be used as is, or customized as required. You can also create your own new custom tours. The component used for the tour is the 3rd party [Bootstrap tour API](http://bootstraptour.com/api/). Once a tour is configured, you can manually launch it via the **Tutorials** menu in CloudShell Portal.

The tours configuration is defined in the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\tours.config` file.
:::note
Do not modify the `tours.config` file directly. You should instead copy the `tours.config` file (with its XML structure) into a new file named `customertours.config` and make modifications in the new customized file. This will prevent overriding your changes when you upgrade CloudShell versions.
:::
Each tour has the following definitions:

```javascript
<?xml version="1.0" encoding="UTF-8"?>
<webtours>
   <tours>
      <add file="EnvironmentCatalogTour" title="The Blueprints Catalog" description="This tutorial will take you through the Blueprints Catalog" urlRegEx="/RM/Topology(\?.*)?$" autostart="false" />
      <add file="EnvironmentDiagramTour" title="The Blueprint Workspace" description="This tutorial will introduce you to the Blueprint Workspace" urlRegEx="/Diagram/Index/(.*\?)diagramType=Topology" autostart="false" />
      <add file="ReservationDashboardTour" title="The Sandboxes Dashboard" description="This tutorial will introduce you to the Sandboxes Dashboard" urlRegEx="/RM/Reservation/List(\?.*)?$|/RM/Reservation/Timeline(\?.*)?$" autostart="true" />
   </tours>
</webtours>
```

## Special considerations

- The file should be the JavaScript file name located in the folder `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\Scripts\lib\tours`.
- The auto-start is per user per browser (per unique CloudShell URL). It is possible to have more than one tour per CloudShell webpage, but only one tour should be defined as auto-start enabled (`autostart="true"`) for that URL. The `autostart` key is optional.
- The visibility selector allows to show a tour based on a CSS selector in a page. This may be useful when you wish to add a tour for a specific sandbox, blueprint, and so on. The `visibility-selector` key is optional.
- There is no need to restart QualiServer/IIS when updating the `tours.config` file.

## Creating tours

This procedure explains the steps required for creating custom CloudShell Portal tours.

**To create CloudShell Portal tours:**

1. Manually create the new configuration file. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\`, copy and paste the `tours.config` file into the same folder, and rename it to `customertours.config`.
2. The `customertours.config` file should contain the same XML structure as the original `tours.config` file. However, you need to replace all instances of `<webtours>` with `<customertours>`, as shown in the following sample template:
    
    ```javascript
    <?xml version="1.0" encoding="UTF-8"?>
    <customertours>
       <tours>
          <add file="EnvironmentCatalogTour" title="The Blueprints Catalog" description="This tutorial will take you through the Blueprints Catalog" urlRegEx="/RM/Topology(\?.*)?$" autostart="false" />
       </tours>
    </customertours>
    ```
    
3. Add/update/remove steps from your tour using the 3rd party [Bootstrap tour](http://bootstraptour.com/).
    
4. Once the new tour template is created, you can manage the web tours exactly as in the original `tours.config` file. The tours should be uploaded to CloudShell Portal in the same way.
    

The new `customertours.config` file will not be deleted during CloudShell upgrades, and the customer tours settings will remain intact.

## Disabling tours

To disable a tour, you can either remove it from the `tours.config` file or comment it out to hide it but save the tour's definition.

**To disable a tour:**

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\` and open the `tours.config` file.
    
    The file has the following three tours by default.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ToursConfig.png)
    
2. Comment out the lines of the tours you want to hide. For example:
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ToursConfigComment.png)
    
3. Save the file.
4. Restart CloudShell Portal and log in.
    
    The **Tutorials** menu is no longer visible in the CloudShell Portal pages of the disabled tours.
