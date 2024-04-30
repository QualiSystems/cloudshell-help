---
sidebar_position: 3
---

# Low Disk Space Due to Unusually Large ResourceUtilizationLog Table

## Description

[Resource utilization log](../../install-configure/cs-insight-bi/cs-insight-bi-elasticube-tables/elasticube-tables.md#resource-utilization-log) is a table used for analytics, typically by CloudShell Insight. It helps you understand how much of your inventory resources are being used over time. Quali Server has a daily job that adds records to ResourceUtilizationLog. New data is appended to ResourceUtilizationLog, if it is later than the latest EntryDate in ResourceUtilizationLog.

## Solution

The best policy for trimming the database is to leave at least one entry in the log, latest as possible. This will ensure that the whole table does not get repopulated when the daily job runs.

If you are using CloudShell Insight, you may want to leave 1-2 years in the log (or as needed). Otherwise, trim it down completely except for the latest row as ordered by EntryDate desc, as Insight db is typically only used for analytics.

Regardless of the size of the table, you should back up the DB before trimming the database, if possible.

For details, see [Database Trimming](../../install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming.md).
