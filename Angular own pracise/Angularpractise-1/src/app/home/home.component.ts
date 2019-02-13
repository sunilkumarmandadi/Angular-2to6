import { Component, OnInit , Input} from '@angular/core';
import { DataService } from '../data.service';
import { Employees } from '../Employees/emp.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   h1Style = false;
   employees: object;
   @Input() index: number;
   @Input() userd: Employees;
  constructor(private dservice: DataService) { }

  ngOnInit() {
    this.dservice.getusers().subscribe( res => {
this.employees = res;
// console.log(this.users);
    });
  }
firstClick() {
 // console.log('clcked');
 this.h1Style = true;
 // this.dservice.firstClick1();
}

}
