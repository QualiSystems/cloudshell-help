---
sidebar_position: 1
---

# Install Sisense Add-Ons

Insight requires the use of several free Sisense add-ons. Download and install the following free add-ons from the [Sisense Marketplace](https://www.sisense.com/marketplace/) library:

| Add-on | Installation instructions |
| --- | --- |
| Blox | Allows creating dynamic and interactive content in your widgets and dashboards and enhances the look and feel of your graphs.<br/>The **Overview** dashboard contains customized images, which need to be added to Blox. To add the images, copy all `*.svg` files from the **`Attachments`** folder in the BI package to<br/>`C:\Program Files\Sisense\app\plugins\BloX\blox-images` |
| Dynamic Buckets | Allows filtering and drilling down in column charts.<br/>Restart the Sisense IIS website after applying the dynamic buckets. |
| Jump to Dashboard | Enables the different dashboard links. These include the widget title links from the **Overview** dashboard to the different dashboards and the **Go to Overview** link from each dashboard. |

After installing the add-ons, you would need to enable them in Sisense under the Admin tab > System Configuration > Add Ons.