import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";
import { TaskService } from './shared/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit{

  public tasks: Array<Task>;
  public selectedTask: Task;


  public constructor(private taskService: TaskService){
  };

  public ngOnInit(){
   this.taskService.getTasks()
    .subscribe(
      tasks => this.tasks = tasks,
      error => alert("Ocorreu um erro no servidor.")
    )
  }

 public onSelect(task: Task) {
   this.selectedTask = task;
 }
  

}