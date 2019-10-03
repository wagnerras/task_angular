import { Component } from "@angular/core";

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-binds.component.html'
})

export class LearningBindingComponent {
  
  public mouseClickCount: number;
  public mouseOverCount: number;
  public userName: string;
  public userEmail: string;

  public constructor(){
    this.mouseClickCount = 0;
    this.mouseOverCount = 0;
    this.userName = "nome inicial";
    this.userEmail = "email inicial";
  }

  //mouse events
  public onClick(){
    console.log('evento onclick disparado');
    this.mouseClickCount++;
  }

  public onMouseOver(){
    console.log('evento onMouseOver disparado');
    this.mouseOverCount++;
  }

  //key events

  public onKeyDown(event: any){
    console.log('evento onkeydown disparado');
    console.log(event);
    this.userName = event.target.value;
  }


  public onKeyUp(event: any){
    console.log('evento onkeyup disparado');
    console.log(event);
    this.userEmail = event.target.value;
  }


}

