import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employees } from '../emp.model';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  employee1: Employees;
  id: number;
  // @Input() employee1: Employees;
  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.employee1 = this.dataservice.getUserDatabyId(this.id);
    // console.log(this.dataservice.getUserDatabyId(this.id));
  });
}
}
