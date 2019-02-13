import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeestartComponent } from '../Employees/employeestart/employeestart.component';
import { EmpdetailsComponent } from '../Employees/empdetails/empdetails.component';
// import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';



const employeesRoutes: Routes = [
  // {path: 'recipes' , component: RecipesComponent , children: [
  {path: '' , component: EmployeesComponent , children: [
  {path: '', component: EmployeestartComponent},
 // {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
  {path: ':id', component: EmpdetailsComponent}
 // {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
]
},
];
@NgModule({
imports: [
  RouterModule.forChild(employeesRoutes)
],
exports: [RouterModule]
})




export class EmployeeRoutingModule {

}
