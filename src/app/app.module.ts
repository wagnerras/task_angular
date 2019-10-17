//angular importas
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/task.component';
import { LearningBindingComponent } from './learning-binds/learning-binds.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

//services imports
import { TaskService } from "./tasks/shared/task.service";

//modules imports
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    LearningBindingComponent,
    TaskDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
