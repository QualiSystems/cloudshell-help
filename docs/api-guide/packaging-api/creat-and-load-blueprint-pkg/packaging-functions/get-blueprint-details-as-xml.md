---
sidebar_position: 3
---

# Get Blueprint Details as XML

**Description:** Retrieve the blueprint details of the specified blueprint as an xml.

**Signature:** `get_topology_xml(topology_name)`

**Parameters**

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In  | Yes | The name of the blueprint that you want to retrieve. |
|  | Out |  | XML representation of all the blueprint details. |

**Sample:**

```javascript
packageEditor.get_topology_xml('environment1')
output: '
<TopologyInfo>
   \n  
   <Details Name="environment1" Alias="environment1" Public="false" DefaultStartTime="2015-11-04T16:46:33.0000000" DefaultDuration="8342794" DefaultUserName="User1">
      \n    
      <Instructions>These are my instructions.</Instructions>
      \n    
      <Categories></Categories>
      \n    
      <Diagram Zoom="1"></Diagram>
      \n  
   </Details>
   \n  
   <Resources>
      \n    
      <Resource PositionX="205" PositionY="139" Name="Chassis1" Shared="true">
         \n      
         <SubResources>
            \n        
            <Resource Name="Blade1" Shared="true">
               \n          
               <SubResources>
                  \n            
                  <Resource Name="Port1" Shared="true"></Resource>
                  \n            
                  <Resource Name="Port2" Shared="true"></Resource>
                  \n          
               </SubResources>
               \n        
            </Resource>
            \n      
         </SubResources>
         \n    
      </Resource>
      \n    
      <Resource PositionX="873" PositionY="133" Name="Chassis2" Shared="true">
         \n      
         <SubResources>
            \n        
            <Resource Name="Blade1" Shared="true">
               \n          
               <SubResources>
                  \n            
                  <Resource Name="Port2" Shared="true"></Resource>
                  \n            
                  <Resource Name="Port1" Shared="true"></Resource>
                  \n          
               </SubResources>
               \n        
            </Resource>
            \n      
         </SubResources>
         \n    
      </Resource>
      \n  
   </Resources>
   \n  
   <Services>
      \n    
      <Service PositionX="228" PositionY="302" Alias="ServiceA" ServiceName="Service"></Service>
      \n    
      <Service PositionX="740" PositionY="306" Alias="ServiceB" ServiceName="Service"></Service>
      \n  
   </Services>
   \n  
   <Routes>
      \n    
      <Route Alias="ABC" Source="Chassis1/Blade1/Port1" Target="Chassis2/Blade1/Port1" MaxHops="2" Direction="Bi" Shared="true">
         \n      
         <Attributes>
            \n        
            <Attribute Name="Attribute String" Value="Hello" Target="All"></Attribute>
            \n        
            <Attribute Name="Attribute Password" Value="0yGbF/81FFbwyV6uJfWVbQ==" Target="All"></Attribute>
            \n        
            <Attribute Name="Attribute Numeric" Value="666" Target="All"></Attribute>
            \n        
            <Attribute Name="Attribute Lookup" Value="A" Target="All"></Attribute>
            \n        
            <Attribute Name="Attribute Boolean" Value="True" Target="All"></Attribute>
            \n      
         </Attributes>
         \n    
      </Route>
      \n  
   </Routes>
   \n
</TopologyInfo>
```
