import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
// import {RequestOptions, RequestMethod, Headers } from '@angular/http';
import {Employees} from './Employees/emp.model';
// import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // employeeSelected = new Subject<Employees[]>();
  employeeselected = new EventEmitter<Employees>();
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
    const token = localStorage.getItem('token');
    // httpProvider.defaults.common['Authorization'] = token;
   // return this.http.get(this.Url + '/GetEmployees',  httpOptions);
    /* return this.http.get(this.Url + '/GetEmployees',
    {headers: new HttpHeaders({'Authorization': 'Bearer' + localStorage.getItem('token')})}); */
    return this.http.get(this.Url + '/GetEmployees' , httpOptions);
   /*  const data = this.http.get('http://localhost:63966/api/Employees');
    return data; */
    // console.log(data);
  }
  getUserDatabyId(index: number) {

    return this.usersdata[index];
          }
 postEmployee(emp: Employees) {
  this.headers = new HttpHeaders;
  this.headers.set('Content-Type', 'application/json');
  this.headers.set('Access-Control-Allow-Origin', '*');
  this.headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
  this.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
            const body = JSON.stringify(emp);
           // const headerOptions = new Headers({'Content-Type': 'application/json'});
            // const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
           // const body = emp;
            return this.http.post(this.Url + '/Post', body , httpOptions);
          }

putEmployee(id: number, emp: Employees) {
            this.headers = new HttpHeaders;
            this.headers.set('Content-Type', 'application/json');
            this.headers.set('Access-Control-Allow-Origin', '*');
            this.headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
            this.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
            const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
           const body = JSON.stringify(emp);
           // const headerOptions = new Headers({ 'Content-Type': 'application/json' });
          //  const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
         // const body = emp;
          return this.http.put(this.Url + '/PutEmployee' + id, body, httpOptions);
          }

         /*  getEmployeeList() {
            this.http.get('http://localhost:28750/api/Employee')
            .map((data: Response) => {
              return data.json() as Employee[];
            }).toPromise().then(x => {
              this.employeeList = x;
            });
          } */

          deleteEmployee(id: number) {
            return this.http.delete(this.Url + '/DeleteEmployee' + id);
          }
}
