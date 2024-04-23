---
sidebar_position: 4
---

# CloudShell Insight BI Components

The CloudShell Insight BI package includes the following components:

- **CS\_BI\_Cube**: the default data structure that ElastiCube collects from CloudShell (`*.smodel` file)
- **Default Dashboards**: out-of-the-box dashboards that present valuable information (`*.dash` files) . CloudShell 2021.2 introduces new and improved dashboards, which can live side by side with the legacy ones:
    - **Overview**: High-level overview of CloudShell. The **Overview** dashboard includes areas of the other dashboards. Click an area's title to drill down into that dashboard. When moving from the **Overview** dashboard by clicking a dashboard title, filters are preserved to allow you to continue your investigation.
    - **Blueprints**: Blueprint usage and resource allocation over time
    - **Inventory**: Resource utilization by family, model, resource/subresource name, and global view per shell
    - **Sandboxes**: Sandbox and consumption licenses, including number of activated/denied/ended sandboxes
    - **Users**: User activity (logins, sandbox launches)
    - **Utilization**: Resource utilization data. Helps to identify bottlenecks and unused resources
    -  **Yearly Utilization**: Monthly resource utilization over the last 12 months

:::note Notes
- Data related to **Sandbox Save and Restore** is stored in the **Insight** database and can be displayed in customized dashboards.
- In order to add/customize dashboards and connect to additional data sources, contact your Quali Account Manager.
- Legacy dashboards are still available as a paid add-on, and include test automation and virtualization dashboards. For details, contact your Quali Account Manager.
:::