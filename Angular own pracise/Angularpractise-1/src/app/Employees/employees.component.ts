import { Component, OnInit } from '@angular/core';
import {Employees} from './emp.model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedemployee: Employees;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.employeeSelected.subscribe(
(empl: Employees) => {
  this.selectedemployee = empl;
}
    );
  }

}
