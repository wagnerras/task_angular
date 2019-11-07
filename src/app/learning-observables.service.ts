import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

//tratando errors
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';

@Injectable()

export class LearningObservables {
  constructor(private http: Http) {

    //criando um objeto observador
    /* 
        let observer = {
          next: function(newData) {
            console.log("chamou o next e passou como parametro o new data => ", newData)
          },
    
          error: function(errorData) {
            console.log("chamou o error passou como parametro o error data=> ", errorData)
          },
    
          complete: function() {
            console.log("chamou o complete e encerrou")
          }    
        };
        
        //criando um objeto observado e passando umo observador como parametro
         this.http.get("api/tasks")
          .subscribe(observer); 
    
        //criando um objeto observado e criando um observador como parametro 
        this.http.get("api/tasks")
          .subscribe({
            next: function(newData) {
              console.log("chamou o next e passou como parametro o new data => ", newData)
            },
      
            error: function(errorData) {
              console.log("chamou o error passou como parametro o error data=> ", errorData)
            },
      
            complete: function() {
              console.log("chamou o complete e encerrou")
            }    
          }); 
    
          //passando os metodes next, error e complete diretamente como parametros
        this.http.get("api/tasks")
          .subscribe(
            function(newData) {
              console.log("chamou o next e passou como parametro o new data => ", newData)
            },
            function(errorData) {
              console.log("chamou o error passou como parametro o error data=> ", errorData)
            },
            function() {
              console.log("chamou o complete e encerrou")
            }    
          )
    
          //passando os metodes next, error e complete diretamente como parametros
          //usando arrow functions
        this.http.get("api/tasks")
        .subscribe(
          (newData) => {
            console.log("chamou o next e passou como parametro o new data => ", newData)
          },
          (errorData) => {
            console.log("chamou o error passou como parametro o error data=> ", errorData)
          },
          () =>  console.log("chamou o complete e encerrou")      
        ) */

    /* //passando apenas o metodo next
    this.http.get("api/tasks")
    .subscribe(newData => console.log("chamou o next e passou como parametro o new data => ", newData)); */

    /* this.http.get("api/tasksgfgfg")
      .catch(this.handleErrors)
      .subscribe({
        next: (newData) => {
          console.log("chamou o next e passou como parametro o new data => ", newData)
        },
        error: (errorData) => {
          alert("ocorreu um error no servidor, por favor tente mais tarde.")
        },
        complete: () => {
          console.log("chamou o complete e encerrou")
        }
      }); */
  }

  /* public handleErrors(error: Response) {
    console.log("SALVANDO O ERRO NO BANCO DE DADOS PARA O DEV =>", error);
    return Observable.throw(error);
  } */

}