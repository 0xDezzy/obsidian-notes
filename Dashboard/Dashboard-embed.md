---
created: 2021-10-24T22:52:03-05:00
updated: 2021-10-24T23:32:58-05:00
---
## Available Tasks

```dataview
table Completed, Priority, Project, due-date as "Due Date"
from #tasks
where defer-date < date(now) and completed != 1
sort doDate asc
```

## Upcoming Tasks

```dataview
table Completed, Priority, Project, due-date as "Due Date"from #tasks
where defer-date > date(now) and completed != 1
sort doDate asc
```

## Overdue Tasks
```dataview
table Completed, Priority, Project, due-date as "Due Date"
from #tasks
where date(today) > due-date and completed != 1
sort doDate asc
```

## Completed Tasks

```dataview
table Completed, Priority, Project, due-date as "Due Date"
from #tasks
where completed = 1
sort doDate asc
```