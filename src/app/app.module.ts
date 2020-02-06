//angular importas
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

//angular plugins imports
import { AngularTokenService, AngularTokenModule, AngularTokenOptions } from 'angular-token';

//components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskSearchComponent } from "./navbar/task-search/task-search.component"
import { TasksComponent } from './tasks/task.component';
//import { LearningBindingComponent } from './learning-binds/learning-binds.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";

//services imports
import { TaskService } from "./tasks/shared/task.service";
import { AuthService } from "./shared/auth.service";

//guard imports
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from "./guards/not-authenticated.guard";

//modules imports
import { AppRoutingModule } from "./app-routing.module";

//in memory wb api
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";
//import { InMemoryTaskDataService  } from "./in-memory-task-data.service";module
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

//rxjs extensions
import "rxjs/add/observable/throw";


//jquery plugins
import * as $ from 'jquery';

//testes
import { TestesComponent } from "./testes/testes.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskSearchComponent,
    TasksComponent,
    //LearningBindingComponent,
    TaskDetailComponent,
    DashboardComponent,
    SignUpFormComponent,
    SignInFormComponent,
    TestesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    //InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
    AngularTokenModule.forRoot({
      apiBase: 'http://api.taskmanager.test:3000'
    })
  ],
  providers: [
    AngularTokenModule,
    AngularTokenService,
    AngularTokenModule,
    TaskService,
    AuthService ,
    AuthGuard ,
    NotAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
