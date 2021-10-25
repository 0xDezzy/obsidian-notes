---
created: 2021-10-25T03:06:28-05:00
updated: 2021-10-25T03:06:28-05:00
---
# Project Status

## Remaining Tasks

```dataview
table Completed, due-date as "Due Date"
from #test-tasks
where file.name != "Task Template"
where Project = this.file.link and completed != 1
sort due-date desc
```

## Completed Tasks

```dataview
table Completed, due-date as "Due Date"
from #test-tasks 
where file.name != "Task Template"
where Project = this.file.link and completed = 1
sort due-date desc
```

---

# Project Summary