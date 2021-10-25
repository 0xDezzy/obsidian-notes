---
created: 2021-10-24T22:52:12-05:00
updated: 2021-10-24T22:52:12-05:00
---
```dataview
table Status, length(tasks) as Total, sum(tasks.completed) as Completed, sum(tasks.completed) / (length(tasks)) * 100 + "%" as Progress, tasks[0] as "Next", file.mtime as Modified
from #projects
sort file.mtime asc
```