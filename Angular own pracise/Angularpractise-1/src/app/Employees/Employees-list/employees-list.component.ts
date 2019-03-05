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
  // @Output() employeewasselected = new EventEmitter<Employees>(); //// this is the out put for emplyoees.component.html page.
  employees: Employees[];

  constructor(private dataserv: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.dataserv.getusers().subscribe((employees: Employees[]) => {
      this.employees = employees;
      this.dataserv.usersdata = employees;
    });
  }
  onAddnewemp() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
