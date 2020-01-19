//angular imports
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//components imports
import { TasksComponent } from './tasks/task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";

import { AuthGuard } from "./guards/auth.guard";

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path:'tasks/:id',
    component: TaskDetailComponent, 
    canActivate: [AuthGuard]
  },
  {
    path:'sign-up',
    component:SignUpFormComponent
  },
  {
    path:'sign-in',
    component:SignInFormComponent
  }
])

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})

export class AppRoutingModule{

}