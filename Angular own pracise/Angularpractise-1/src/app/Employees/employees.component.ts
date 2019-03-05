import { Component, OnInit } from '@angular/core';
import {Employees} from './emp.model';
import { DataService } from '../data.service';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedemployee: Employees;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.employeeselected.subscribe((emp: Employees) => {
this.selectedemployee = emp;
    });
  }

}
