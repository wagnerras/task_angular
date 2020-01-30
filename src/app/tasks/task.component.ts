import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";
import { TaskService } from './shared/task.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {

  //public tasks: Array<any>;
  public tasks: Array<Task>;
  public newTask: Task;

  public constructor(private taskService: TaskService) {
    this.newTask = new Task(null, '');
  };

  public ngOnInit() {
    /* this.taskService.getAll()
     .subscribe(
       tasks => this.tasks = tasks.sort((a,b)=> b.id - a.id ),
       error => alert("Ocorreu um erro no servidor.")
     ) */
    this.getAll();
  }

 /*  public getAll() {
    this.taskService.getAll()
      .then((result: any) => {
        this.tasks = result.data;
        console.log("resultado =>", this.tasks);
        for (let task of this.tasks) {
          task.titulo = task.attributes.title;
        }
      })
      .catch((error: any) => {
        console.log('erro', error);
      });
  } */
  public getAll() {
    this.taskService.getAll()
      .then((result: any) => {
        //this.tasks = result.data;
         let collection = result.data as Array<any>;
         let tasks: Task[] = [];
        //console.log("resultado =>", this.tasks);
        
        collection.forEach(item => {
          let task = new Task(
            item.id,
            item.attributes.title,
            item.attributes.description,
            item.attributes.done,
            item.attributes.deadline
          )
          tasks.push(task);
        })
        //return tasks;
        this.tasks = tasks;
        console.log("TAREFAS =>", this.tasks);
      })
      .catch((error: any) => {
        console.log('erro', error);
      });
  }



  public createTask() {
    this.newTask.title = this.newTask.title.trim();
    if (!this.newTask.title) {
      alert("a tarefa deve ter um titulo");
    } else {
      this.taskService.create(this.newTask)
        .then((result: any) => {
          this.getAll();
        })
        .catch((error: any) => {
          console.log('erro', error);
        })
    }
  }



  /*  public createTask() {
     this.newTask.title = this.newTask.title.trim();
 
     if (!this.newTask.title) {
       alert("a tarefa deve ter um titulo");
     } else {
       this.taskService.create(this.newTask)
         .subscribe(
           (task) => {
             this.tasks.unshift(task);
             this.newTask = new Task(null, '');
           },
           () => alert("Ocorreu um erro no servidor, tente mais tarde.")
         )
     }
   }
 
 
   public deleteTask(task: Task) {
     if (confirm(`Deseja realmente excluir a tarefa "${task.title}" ?`)) {
       this.taskService.delete(task.id)
         .subscribe(
           () => this.tasks = this.tasks.filter(t => t !== task),
           () => alert("Ocorreu um erro no servidor, tente mais tarde.")
         )
     }
   } */

}