import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employees} from './Employees/emp.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usermsg = new Subject<Employees[]>();
  employeeSelected = new EventEmitter<Employees>();
  private usersdata: Employees[] = [];
  h1Style = false;
  constructor(private http: HttpClient) { }
  firstClick1() {
   // return console.log('clicked');
     this.h1Style = true;
  }
  /* getUsers() {
    return this.http.get('https://reqres.in/api/users');
  } */
  getusers() {
    // const data = this.http.get('http://localhost:63966/api/Employees');
    return this.http.get('http://localhost:63966/api/Employees');
    // console.log(data);
  }
  getUserDatabyId(index: number) {
    return this.usersdata[index];
          }
}
