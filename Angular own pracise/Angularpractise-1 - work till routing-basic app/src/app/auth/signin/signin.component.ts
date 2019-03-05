import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
 import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login() {
   // debugger;
    this.loginService.Login(this.model).subscribe(
      data => {
       // debugger;
       console.log(data);
       localStorage.setItem('token', data.access_token);
        if (data.access_token) {
          this.router.navigate(['/employees']);
          // debugger;
        } else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.error_description;
      });
  }
}
