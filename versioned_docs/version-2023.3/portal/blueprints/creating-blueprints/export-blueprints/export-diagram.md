---
sidebar_position: 2
---

# Exporting Diagrams and Connections

## Exporting Diagrams

This topic describes how to export a PDF file illustrating the diagram. This includes the resources, services and Apps in the diagram, as well as their connections.

:::note
Labels are not included.
:::

**To export a diagram:**

1. In CloudShell Portal, select the required blueprint.
2. Click the **Blueprint** menu and select **Export Diagram (pdf)**.
3. Save the package zip file in the required location.
4. Open the PDF and verify that the diagram appears as expected.
    
    When exporting large diagrams, some components and/or connection lines may be missing. This is because the time allocated for the export is too short. The time defined for the diagram export is controlled by the `ExportToPdf.WaitForRender` admin configuration key.
    

## Exporting Connections

This topic describes how to export a CSV file of the connections between the resources, services and Apps in the diagram.

**To export the connections files:**

1. In CloudShell Portal, select the required blueprint.
2. Click the **Blueprint** menu and select **Export Connections (csv)**.
3. Save the CSV file in the required location.