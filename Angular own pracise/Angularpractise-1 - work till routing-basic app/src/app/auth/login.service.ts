import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from '../auth/register';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;
  url1: string;
  tokens: string;
  headers: any;
 // credentials: any = {'username': 'sdf', 'password': 'adfas'};
  constructor(private http: HttpClient) {
  this.Url = 'http://localhost:63966';
  // this.url1 = 'http://localhost:63966/token';
  const headerSettings: {[name: string]: string | string[]; } = {};
  // this.header = new HttpHeaders(headerSettings);


  }
  Login(model: any) {
    this.headers = new HttpHeaders;
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    this.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

   const userData = `UserName=${model.UserName}&Password=${model.Password}&grant_type=password`;
   const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});
   return this.http.post<any>(this.Url + '/token', userData, {headers: this.headers});
  }
   CreateUser(register: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + '/api/Login/createcontact/', register, httpOptions);
   }
}
