
import {of as observableOf,  Subject ,  Observable } from 'rxjs';

import {switchMap, tap, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "../../tasks/shared/task.model";
import { TaskService } from "../../tasks/shared/task.service";


@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})

export class TaskSearchComponent implements OnInit {

  public searchTerms: Subject<any> = new Subject();
  public tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {
    
  }

  public ngOnInit(){
    this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap(term => console.log(term)),
    switchMap(
      term => term ? this.taskService.searchByTitle(term) : observableOf<Task[]>([])
    ),).subscribe(tasks => this.tasks = tasks)
  }

  public search(term: string){
    this.searchTerms.next(term);
  }

  public goToTask(task: Task){
    this.tasks = [];
    this.router.navigate(['/tasks', task.id]);
  }

}
