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
  employees: Employees [] ;
  // searchtext: string;
 // subscription: Subscription;
  // filteredStatus = '';
  constructor(private dataserv: DataService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
     this.dataserv.getusers().subscribe(
      (employees: Employees[]) => {
this.employees = employees;
      }
    );
    // this.employees = this.dataserv.getusers();
  }
  //// if the employee selected from the list(we have to pass that perticular details)
  /// we have to emit those details to employees.component.html. this is the output to employees page.
  onEmpselected(employee: Employees) {
this.employeewasselected.emit(employee);
  }

}
