---
created: 2021-10-24T23:58:03-05:00
updated: 2021-10-25T03:04:10-05:00
---

# Task Status
## Available Tasks

```dataview
table Completed, Priority, Status, Project, created as "Created On", due-date as "Due Date"
from #test-tasks
where file.name != "Task Template"
where completed != 1
sort doDate asc
```

## Overdue Tasks
```dataview
table Completed, Priority, Status, Project, created as "Created On", due-date as "Due Date"
from #test-tasks
where file.name != "Task Template"
where date(today) > due-date and completed != 1
sort doDate asc
```

## Completed Tasks

```dataview
table Completed, Priority, Status, Project, created as "Created On", due-date as "Due Date"
from #test-tasks
where file.name != "Task Template"
where completed = 1
sort doDate asc
```

