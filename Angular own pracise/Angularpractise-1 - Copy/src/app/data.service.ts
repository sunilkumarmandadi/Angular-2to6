import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Employees} from './Employees/emp.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // employeeSelected = new Subject<Employees[]>();
  headers: any;
   usersdata: Employees[] = [];
  h1Style = false;
Url = 'http://localhost:63966/api/Employees';

  constructor(private http: HttpClient) {

   }
  firstClick1() {
   // return console.log('clicked');
     this.h1Style = true;
  }
  /* getUsers() {
    return this.http.get('https://reqres.in/api/users');
  } */
  getusers() {

    this.headers = new HttpHeaders;
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    this.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   // return this.http.get(this.Url + '/GetEmployees',  httpOptions);
    /* return this.http.get(this.Url + '/GetEmployees',
    {headers: new HttpHeaders({'Authorization': 'Bearer' + localStorage.getItem('token')})}); */
    return this.http.get(this.Url + '/GetEmployees', httpOptions);
   /*  const data = this.http.get('http://localhost:63966/api/Employees');
    return data; */
    // console.log(data);
  }
  getUserDatabyId(index: number) {
    return this.usersdata[index];
          }
}
