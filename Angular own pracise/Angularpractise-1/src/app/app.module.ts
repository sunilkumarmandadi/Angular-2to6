import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmpdetailsComponent } from './Employees/empdetails/empdetails.component';
import { EmployeesListComponent } from './Employees/Employees-list/employees-list.component';
import { EmployeeItemComponent } from './Employees/Employees-list/Employee-item/employee-item.component';

import { EmployeestartComponent } from './Employees/employeestart/employeestart.component';
import {EmployeesComponent} from './Employees/employees.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CurdgridComponent } from './curdgrid/curdgrid.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit.component';
import { DropdownDirective } from './Shared/dropdown.directive';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmpdetailsComponent,
    EmployeesListComponent,
    EmployeeItemComponent,
    EmployeesComponent,
    EmployeestartComponent,
    SigninComponent,
    SignupComponent,
    CurdgridComponent,
    EmployeeEditComponent,
    DropdownDirective

    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService, AuthGuard,

     {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    /* {
    provide: HTTP_INTERCEPTORS,
useClass : AuthInterceptor,
multi : true
  } */],
  bootstrap: [AppComponent]
})
export class AppModule { }
