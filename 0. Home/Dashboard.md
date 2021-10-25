---
created: 2021-10-24T22:43:17-05:00
updated: 2021-10-24T22:43:17-05:00
---

## Available Tasks

```dataview
table Completed, Priority, Project, defer-date as "Defer Date", due-date as "Due Date", recur-length as "Recur Length", defer-date + recur-length as "Next Date"
from #tasks
where defer-date < date(now) and completed != 1
sort doDate asc
```

## Upcoming Tasks

```dataview
table Completed, Priority, Project, defer-date as "Defer Date", due-date as "Due Date", recur-length as "Recur Length", defer-date + recur-length as "Next Date"
from #tasks
where defer-date > date(now) and completed != 1
sort doDate asc
```

## Completed Tasks

```dataview
table Completed, Priority, Project, defer-date as "Defer Date", due-date as "Due Date", recur-length as "Recur Length", defer-date + recur-length as "Next Date"
from #tasks
where completed = 1
sort doDate asc
```