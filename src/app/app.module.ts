import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/task.component';
import { LearningBindingComponent } from './learning-binds/learning-binds.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskService } from "./tasks/shared/task.service";

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks',
    component: TasksComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'tasks/:id',
    component: TaskDetailComponent
  }
])


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
    ROUTES
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
