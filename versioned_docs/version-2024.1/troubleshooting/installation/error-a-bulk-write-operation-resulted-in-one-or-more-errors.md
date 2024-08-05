---
sidebar_position: 11
---

# "Error: A bulk write operation resulted in one or more errors"

## Error message

Error message containing "A bulk write operation resulted in one or more errors.". For example:

:::danger-one-line
ERROR QualiSystems.Infrastructure.NHibernate.Transactions - Transaction commit failed with the following error A bulk write operation resulted in one or more errors.
:::

:::danger-one-line
Trying to rollback. - MongoDB.Driver.MongoBulkWriteException\`1\[MongoDB.Bson.BsonDocument\]: A bulk write operation resulted in one or more errors.
:::
## Description

When migrating the Quali DB from one Quali Server to another, the a above errors may occur.

## Possible Causes

During migration, CloudShell detected a scenario where the MongoDB had records that were related to reservation that did not exist in the newly migrated Quali SQL DB. This usually happens because there is a gap between pulling database dumps.

## Solution

**To resolve this issue:**

1. Move the Mongo DB in the new Quali Server environment.
2. Move the SQL Server - Quali DB.