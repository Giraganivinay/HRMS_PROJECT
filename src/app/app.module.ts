import { AuthInterceptor, httpInterceptorProviders } from './auth/auth.interceptor';
import { Authguard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmloyeeComponent } from './emloyee/emloyee.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { EmployeeService } from './service/employee.service';
import { AdminService } from './service/admin.service';
import { TaskEmployeeComponent } from './task-employee/task-employee.component';
import { TaskAdminComponent } from './task-admin/task-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    EmloyeeComponent,
    AdminComponent,
    SignupComponent,
    SigninComponent,
    TaskEmployeeComponent,
    TaskAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    EmployeeService,
    AdminService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
