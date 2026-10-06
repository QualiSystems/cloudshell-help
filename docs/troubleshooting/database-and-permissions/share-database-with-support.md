---
sidebar_position: 6
---

# Sharing Your Databases with Quali Support

Some issues can only be investigated with a copy of your CloudShell databases. Before you share them, remove personal data and secrets with the CloudShell sanitization scripts. Quali Support provides the scripts on request.

The scripts cover the Quali, QualiResults and QualiInsight databases, on SQL Server or PostgreSQL, and the CloudShell MongoDB databases. They:

- Replace user names and display names with `user<Id>`, consistently across all the databases, and user emails with `user<Id>@example.invalid`.
- Replace email addresses in free text, such as the event log, command output, and reservation descriptions.
- Clear stored passwords, API tokens, access keys, repository credentials, and machine names.
- Set the password of `admin` and of every anonymized user to a known value, so Quali Support can log in as any user to reproduce the issue.

:::danger
Run the scripts only on restored copies of your databases, never on your production databases. The changes can't be undone. The scripts refuse to run until you confirm the databases are copies, or while a Quali Server uses them.
:::

**To share your databases:**

1. Back up the databases. See [Backing Up CloudShell Databases](../../install-configure/cloudshell-suite/backup-restore/backup-cs-db.md).
2. Restore the backups under new names, on a server that no Quali Server is connected to.
3. Run the sanitization scripts on the restored copies, as explained in the README that comes with them.
4. Back up the sanitized copies, and send the backups to Quali Support.
