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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
 {path: 'employees', component: EmployeesComponent, children: [{
    path: '', component: EmployeestartComponent
  }  ,
    {path: ':id', component: EmpdetailsComponent}

]
}


 /* {path: 'employee', loadChildren: () =>  EmployeeRoutingModule}*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], /**here we configure the routes with routermodule */
  exports: [RouterModule] /** we have to export this Router module to main module 'app.module' */

})
export class AppRoutingModule {

}
