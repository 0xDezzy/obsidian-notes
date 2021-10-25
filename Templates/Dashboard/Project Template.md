#projects  
Status:: Active  
Tasks::

## Remaining Tasks

```dataview
table Completed, defer-date as "Defer Date", due-date as "Due Date"
from #tasks 
where Project = this.file.link and completed != 1
sort due-date desc
```

## Completed Tasks

```dataview
table Completed, defer-date as "Defer Date", due-date as "Due Date"
from #tasks 
where Project = this.file.link and completed = 1
sort due-date desc
```