import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
 import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) { }

  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login() {
   // debugger;
  // if (this.model.valid) {
    this.authService.Login(this.model).subscribe(
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
 // }
}
  /* login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email)
      this.myRoute.navigate(["home"]);
    }
  } */
}
