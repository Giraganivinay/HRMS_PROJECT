import { TaskAdminComponent } from './task-admin/task-admin.component';
import { TaskEmployeeComponent } from './task-employee/task-employee.component';
import { Authguard } from './auth/auth.guard';
import { EmloyeeComponent } from './emloyee/emloyee.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  {path : "signup", component : SignupComponent},
  {path : "signin", component : SigninComponent},
  {path : "admin", component : AdminComponent, canActivate:[Authguard]},
  {path : "employee", component : EmloyeeComponent, canActivate:[Authguard]},
  {path: "task_admin", component: TaskAdminComponent, canActivate:[Authguard]},
  {path: "task_employee", component: TaskEmployeeComponent, canActivate:[Authguard]}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
