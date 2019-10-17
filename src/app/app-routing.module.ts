//angular imports
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//components imports
import { TasksComponent } from './tasks/task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

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
  imports: [ROUTES],
  exports: [RouterModule]
})

export class AppRoutingModule{

}