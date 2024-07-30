---
sidebar_position: 2
---

# Performing Actions on Resources in the Sandbox

## Adding resources, connecting L1 routes and setting live status

This script adds resources to the sandbox, creates L1 resource connections and sets the ‘online’ live status icon on the resources.

```python
import time
 
 
defexecute():
    from cloudshell.workflow.orchestration.sandbox import Sandbox
    Sandbox = Sandbox()
    Reservation_Id = Sandbox.reservationContextDetails.id
 
    Resource_List =['PUT Mock','PUT Mock/Port 1','Traffic Mock','Traffic Mock/Port 1']
 
    time.sleep(3)
 
    # add resources
    Sandbox.automation_api.AddResourcesToReservation(reservationId=Reservation_Id, resourcesFullPath=Resource_List)
    time.sleep(1)
    print""
    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,"resources added to sandbox")
 
    time.sleep(3)
    # set resource live status
    Sandbox.automation_api.SetResourceLiveStatus('PUT Mock','Online',"Active")
    Sandbox.automation_api.SetResourceLiveStatus('Traffic Mock','Online',"Active")
 
    time.sleep(1)
    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,"resources are online")
 
    time.sleep(3)
    # connect L1 routes
    Sandbox.automation_api.CreateRouteInReservation(reservationId=Reservation_Id,
                                                    sourceResourceFullPath='PUT Mock/Port 1',
                                                    targetResourceFullPath='Traffic Mock/Port 1',
                                                    mappingType='bi', routeAlias='API-created route')
 
    time.sleep(1)
    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,"resources connected")
```

## Connecting L2 routes

While connecting L1 routes is done via the CreateRouteInReservation API (example above), L2 "Connector” routes are established using the SetConnectorRequest API.

```python
import time
 
 
def execute_L2():
    from cloudshell.api.cloudshell_api import SetConnectorRequest
    from cloudshell.workflow.orchestration.sandbox import Sandbox
    Sandbox = Sandbox()
    Reservation_Id = Sandbox.reservationContextDetails.id
 
    time.sleep(3)
    connector_request = SetConnectorRequest('PUT Mock/Port 1', 'Traffic Mock/Port 1', 'bi', 'API-created route')
    sandbox.automation_api.SetConnectorsInReservation(reservationId=reservation_id, connectors=[connector_request])
```
