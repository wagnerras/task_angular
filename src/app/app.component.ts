import { Component } from '@angular/core';
import { LearningObservables } from "./learning-observables.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LearningObservables]
})


export class AppComponent {
  title = 'Gerenciandor de tarefas';

  public constructor( LearningObservables: LearningObservables ) {

  }
  
}


