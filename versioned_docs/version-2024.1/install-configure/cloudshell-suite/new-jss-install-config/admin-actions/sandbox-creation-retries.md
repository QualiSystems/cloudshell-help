---
sidebar_position: 3
---

# Define Sandbox Creation Retries

Formula for maximum waiting time for creating a sandbox:

- SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION \* SBS\_\_RESERVE\_RETRY\_\_RETRY\_BASE\_TIME\_IN\_SEC \* 1 +
    
- SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION \* SBS\_\_RESERVE\_RETRY\_\_RETRY\_BASE\_TIME\_IN\_SEC \* 3 +   

- SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION \* SBS\_\_RESERVE\_RETRY\_\_RETRY\_BASE\_TIME\_IN\_SEC \* 30

**Default parameter values:**

- SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION = 6 retries
- SBS\_\_RESERVE\_RETRY\_\_RETRY\_BASE\_TIME\_IN\_SEC = 10

**How retries work:**

- First 6 retries run in 10-second intervals (1 minute in total)
- Second 6 retries run in 30-second intervals (3 minutes in total)
- Third 6 retries run in 3-minute intervals (30 minutes in total

Therefore, the default waiting period is 34 minutes.

**To increase the waiting period:**

- Change the following parameters:
    
    **Job Scheduling service:**
    
    - SuiteExecutionSettings\_\_SandboxRequestTimeoutSettings\_\_RetryPerIteration
    
    **Sandbox service setting:**
    
    - SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION
    
   **To calculate the desired SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION period:**
    
    - Set the SBS\_\_RESERVE\_RETRY\_\_RETRY\_PER\_ITERATION parameter to a value that provides the desired period, in seconds. The formula for calculating the desired period is as follows:
        
        ```javascript
        SBS__RESERVE_RETRY__RETRY_PER_ITERATION = x
        ```
        
        Where `x\*10 + x\*30 + x\*300 = <period in seconds>`
        
        Examples:
        
        - For a 2-hour timeout, the value of both settings should be 21.
        - For a 5-hour timeout, the value of both settings should be 52.
        - For an 8-hour timeout, the value of both settings should be 190.
    
    **To set a maximum timeout:**
    
    - Change the maximum timeout depending on the suite’s structure and execution pattern.
        
        For example, if an unshared resource is requested for jobs running in parallel, you may want to increase this timeout knowing the execution patterns of your suites.