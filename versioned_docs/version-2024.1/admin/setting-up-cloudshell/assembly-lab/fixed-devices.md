---
sidebar_position: 7
---
# Fixed Devices

Administrators can configure devices to not be used as partial solutions in other devices.
This is done by adding an boolean attribute with the tag *Fixed* to resources.

Make sure to set this value to True for all resources who are never supposed to be used as parts in other resources.

:::note
Fixed resources can never be solutions for requests that are part of a cable route. This is so they maintain their current setup
:::