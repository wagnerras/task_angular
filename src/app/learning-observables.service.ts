import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class LearningObservables {
  constructor (private http: Http) {

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

    //passando apenas o metodo next
    this.http.get("api/tasks")
      .subscribe(newData => console.log("chamou o next e passou como parametro o new data => ", newData));
  }
}