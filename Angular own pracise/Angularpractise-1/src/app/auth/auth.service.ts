import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import { Register } from '../auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  Url: string;
  url1: string;
  tokens: string;
  headers: any;
  constructor(private http: HttpClient, private router: Router ) {
    this.Url = 'http://localhost:63966';
  // this.url1 = 'http://localhost:63966/token';
  const headerSettings: {[name: string]: string | string[]; } = {};
  // this.header = new HttpHeaders(headerSettings);
  }
 /*  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["Login"]);
  }*/
  isAuthenticated() {
    return localStorage.getItem('token')  != null;
      }
      getToken() {
        return localStorage.getItem('token');
      }
 /*  getToken(uname: string, psw: string) {
    return this.http.get(
     'http://localhost:63966/api/TokenGeneration?username=' +
        uname +
       '&password=' +
        psw
    );
  }

  onRegistration(uname: string, psw: string) {
return this.http.post(
  'http://localhost:63966/api/TokenGeneration', {uname, psw});
  } */
logout() {
   // firebase1.auth().signOut();
   localStorage.removeItem('token');
   // this.token = null;
    this.router.navigate(['/signIn']); // after logout to redirect the user to signin page
  }





  Login(model: any) {
    this.headers = new HttpHeaders;
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    this.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

   const userData = `UserName=${model.UserName}&Password=${model.Password}&grant_type=password`;

   return this.http.post<any>(this.Url + '/token', userData, {headers: this.headers});
  }
   CreateUser(register: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + '/api/Login/createcontact/', register, httpOptions);
   }
}
