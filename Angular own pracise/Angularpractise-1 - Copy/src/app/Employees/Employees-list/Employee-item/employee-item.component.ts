import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employees } from '../../emp.model';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employees; //// this is an input for employee-list.componet.html
  @Input() index: number;
 // @Output() employeeselected = new EventEmitter<void>(); /// we can listen this event from outside(means in employee-list.component.html)
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // const ss = this.employee;
  }

}
