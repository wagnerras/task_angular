import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public reactiveTaskForm: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any> = [
    { value: false, text: "Pendente" },
    { value: true, text: "Feita" }
  ];


  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.reactiveTaskForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null]
      /* user: this.formBuilder.group({
        name: ["João Carlos"],
        email: ["joao@carlos.com"]
        //para esse subgrupo funcionar no layout precisaria criar uma div
          englobando com a diretativa formGroupName="user"
      }) */
    })
  }

  public ngAfterViewInit() {
  }

  public ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.taskService.getById(+params['id']))
      .subscribe(
        task => this.setTask(task),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }

  public setTask(task: Task) {
    this.task = task;

    /*  //setValue
     let formModel = {
       title: task.title || null,
       description: task.description || null,
       done: task.done || null,
       deadline: task.deadline || null,
     }
     this.reactiveTaskForm.setValue(formModel); */

    //patchValue
    this.reactiveTaskForm.patchValue(task);

  }

  public goBack() {
    this.location.back();
  }

  public updateTask() {
    this.task.title = this.reactiveTaskForm.get('title').value;
    this.task.deadline = this.reactiveTaskForm.get('deadline').value;
    this.task.done = this.reactiveTaskForm.get('done').value;
    this.task.description = this.reactiveTaskForm.get('description').value;

    this.taskService.update(this.task)
      .subscribe(
        () => alert("Tarefa atualizada com sucesso!"),
        () => alert("Ocorreu um erro no servidor, TESTE REAL.")
      )
  }

  public formatDate(dateObject) {
    var d = new Date(dateObject);
    var day: any = d.getDate() + 1;
    var month: any = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var dataFinal = day + "/" + month + "/" + year;
    this.consertarData(dataFinal);

  }

  public consertarData(data) {
    this.task.deadlineFormatado = data;
  }

}