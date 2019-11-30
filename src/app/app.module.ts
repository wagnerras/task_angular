//angular importas
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskSearchComponent } from "./navbar/task-search/task-search.component"
import { TasksComponent } from './tasks/task.component';
//import { LearningBindingComponent } from './learning-binds/learning-binds.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

//services imports
import { TaskService } from "./tasks/shared/task.service";

//modules imports
import { AppRoutingModule } from "./app-routing.module";

//in memory wb api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryTaskDataService  } from "./in-memory-task-data.service";

//rxjs operators
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

//rxjs extensions
import "rxjs/add/observable/throw";
import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskSearchComponent,
    TasksComponent,
    //LearningBindingComponent,
    TaskDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
