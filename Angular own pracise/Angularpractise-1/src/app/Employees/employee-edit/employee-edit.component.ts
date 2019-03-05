import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Employees } from '../emp.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  editmode = false;
  empform: FormGroup;
  constructor(private route: ActivatedRoute,
    private dataService: DataService,
  private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
        this.initform();
        // console.log(this.editmode);
      }
    );
  }

  onSubmit() {
    const newemp = new Employees(
      this.empform.value['empid'],
      this.empform.value['name'],
       this.empform.value['salary'],
       this.empform.value['email']

            );
            if (this.editmode) {
           // this.recipeService.updateRecipe(this.id, this.recipeform.value);
           /// if we use the above line instead of below one its not fecting the image path properly
            this.dataService.putEmployee(this.id, newemp).subscribe((res: Employees) => {
console.log(res);
            });
        } else {
         // this.recipeService.addRecipe(this.recipeform.value);
         this.dataService.postEmployee(newemp);
        }
        this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initform() {
    let employeeName = '';
    let employeeEmailId = '';
    let employeeSalary = 0 ;
let employeeId = 0;

    if (this.editmode) {
      const employee = this.dataService.getUserDatabyId(this.id);
      employeeName = employee.EmpName;
     employeeEmailId = employee.Email;
      employeeSalary = employee.Salary;
employeeId = employee.EmpId;

    }
    this.empform = new FormGroup({
      // we assign the values here. whatever
      // the name given here we need to give the save name
      // to formcontrolName in the html page. after this initialization we need to sync this with html page
'name': new FormControl(employeeName, Validators.required),
'email': new FormControl(employeeEmailId, Validators.required),
'salary': new FormControl(employeeSalary, Validators.required)
    });
  }
}
