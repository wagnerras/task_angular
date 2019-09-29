import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Gerenciandor de tarefas';
  
  task: Task = {
    id: 21,
    title: "Levar o computador para consertar."
  };

  task2: Task = new Task(32, "Dar banho no cachorro.")
}

export class Task {
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
 }
 
