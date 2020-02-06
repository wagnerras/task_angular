
import { throwError as observableThrowError, Observable, from } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";


import { Task } from "./task.model";
import { IfObservable } from "rxjs/observable/IfObservable";
import { AngularTokenService } from "angular-token"


@Injectable()

export class TaskService {

  public tasksUrl = "http://api.taskmanager.test:3000/tasks";
  public headers = new HttpHeaders({ 'Content-type': 'application/json' });

  public constructor(private http: HttpClient) { }

  /* public getAll(): Observable<Task[]> {
    return this.http.get(this.tasksUrl).pipe(
      catchError(this.handleErrors),
      map((response: Response) => response as unknown as Task[]),)
  } */

  getAll() {
    let url = `${this.tasksUrl}?q[s]=updated_at+DESC`;
    return new Promise((resolve, reject) => {
      this.http
        .get(this.tasksUrl)
        .subscribe(
          (result: any) => {
            resolve(result);
          },
          error => {
            reject(error);
          }
        );
    });
  }



  public getById(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleErrors),
      map((response: Response) => response as unknown as Task))
  }

  /* public create(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);


    return this.http.post(url, body, { headers: this.headers }).pipe(
      catchError(this.handleErrors),
      map(response => response as Task))
  } */

  public create(task) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.tasksUrl, task)
        .subscribe(
          (result: any) => {
            resolve(result);
          },
          error => {
            reject(error);
          }
        );
    });

  }

  public update(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);

    return this.http.put(url, body, { headers: this.headers }).pipe(
      catchError(this.handleErrors),
      map(() => task));
  }

  public delete(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.handleErrors),
      map(() => null))
  }

  public searchByTitle(term: string): Observable<Task[]> {
    let url = `${this.tasksUrl}?title=${term}`;

    return this.http.get(url).pipe(
      catchError(this.handleErrors),
      map(response => response as Task[]))
  }

  private handleErrors(error: Response) {
    console.log("DETALHES DO ERRO =>", error);
    return observableThrowError(error);
  }

}