import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employees } from '../emp.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
   @Output() employeewasselected = new EventEmitter<Employees>(); //// this is the out put for emplyoees.component.html page.
  employees: Employees[];

  constructor(private dataserv: DataService
    ) { }

  ngOnInit() {
      this.dataserv.getusers().subscribe(
      (employees: Employees[]) => {
this.employees = employees;

      });
      // this.employees = this.dataserv.getusers();
  }
  onRecipeSelected(employee: Employees) {
this.employeewasselected.emit(employee);
  }
}
