---
Status: Active
tags: #projects 
created: 2021-10-24T23:26:05-05:00
updated: 2021-10-25T02:36:43-05:00
---

## Remaining Tasks

```dataview
table Completed, due-date as "Due Date"
from #tasks
where file.name != "Task Template"
where Project = this.file.link and completed != 1
sort due-date desc
```

## Completed Tasks

```dataview
table Completed, due-date as "Due Date"
from #tasks 
where file.name != "Task Template"
where Project = this.file.link and completed = 1
sort due-date desc
```