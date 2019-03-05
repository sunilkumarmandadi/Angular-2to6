import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpdetailsComponent } from './Employees/empdetails/empdetails.component';
import {EmployeesListComponent} from './Employees/Employees-list/employees-list.component';
 import { EmployeesComponent } from './Employees/employees.component';
import { EmployeestartComponent } from './Employees/employeestart/employeestart.component';
import { EmployeeRoutingModule } from './Employees/employee-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
// import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CurdgridComponent } from './curdgrid/curdgrid.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit.component';
// import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent , canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'employees', component: EmployeesComponent, children: [{
    path: '', component: EmployeestartComponent
  }  ,
    {path: ':id', component: EmpdetailsComponent},
    {path: ':id/edit', component: EmployeeEditComponent},
    {path: 'new', component: EmployeeEditComponent}

], canActivate: [AuthGuard]
},
{path: 'signup', component: SignupComponent},
{path: 'signIn', component: SigninComponent},
{ path: 'curdgrid', component: CurdgridComponent, canActivate: [AuthGuard]}


 /* {path: 'employee', loadChildren: () =>  EmployeeRoutingModule}*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], /**here we configure the routes with routermodule */
  exports: [RouterModule] /** we have to export this Router module to main module 'app.module' */

})
export class AppRoutingModule {

}
