import { Component } from '@angular/core';
//import { LearningObservables } from "./learning-observables.service";
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers: [LearningObservables]
})


export class AppComponent {
  title = 'Gerenciandor de tarefas';

  //public constructor( LearningObservables: LearningObservables ) {}

  public constructor(private tokenService: Angular2TokenService){
    this.tokenService.init({
      apiBase: 'http://api.taskmanager.test:3000/'
    });
  }
  
  
}


