---
created: 2021-10-24T22:52:03-05:00
updated: 2021-10-24T23:43:04-05:00
---
## Available Tasks

```dataview
table Completed, Priority, due-date as "Due Date"
from #tasks
where file.name != "Task Template"
where defer-date < date(now) and completed != 1
sort doDate asc
```

## Upcoming Tasks

```dataview
table Completed, Priority, due-date as "Due Date"
where file.name != "Task Template"
where defer-date > date(now) and completed != 1
sort doDate asc
```

## Overdue Tasks
```dataview
table Completed, Priority, due-date as "Due Date"
from #tasks
where file.name != "Task Template"
where date(today) > due-date and completed != 1
sort doDate asc
```

## Completed Tasks

```dataview
table Completed, Priority, due-date as "Due Date"
from #tasks
where file.name != "Task Template"
where completed = 1
sort doDate asc
```