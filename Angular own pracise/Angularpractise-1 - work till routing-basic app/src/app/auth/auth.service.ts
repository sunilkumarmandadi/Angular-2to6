import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient ) { }
  isAuthenticated() {
    return localStorage.getItem('token')  != null;
      }
  getToken(uname: string, psw: string) {
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
  }
}
