import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
import {NgForm, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import {Register} from '../register';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data = false;
  UserForm: FormGroup;
  massage: string;
 /*  // Gender list for the select control element
   genderList: string[];
  // Property for the user
  private user: User;
  signupForm: FormGroup;*/

  get Loginname () {return this.UserForm.get('LoginName'); }
  get username () {return this.UserForm.get('UserName'); }
  get Email() { return this.UserForm.get('Email'); }
get Password() { return this.UserForm.get('Password'); }
get contactno() {return this.UserForm.get('ContactNo'); }
 // get gender() { return this.UserForm.get('gender'); }

 // get terms() { return this.UserForm.get('terms'); }


  constructor(private formbulider: FormBuilder, private loginService: LoginService) {
    // this.UserForm = this.createFormgroup();
   }

  ngOnInit() {
    /* this.genderList =  ['Male', 'Female', 'Others'];
    this.signupForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormGroup({
        pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPwd: new FormControl('', [Validators.required, Validators.minLength(8)])
    }),
    gender: new FormControl('', Validators.required),
    // requiredTrue so that the terms field isvalid only if checked
    terms: new FormControl('', Validators.requiredTrue)
  });
 */
/* createFormGroup(){
  return new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    LoginName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    ContactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    Address: new FormControl('', [Validators.required])
  });
}
 */
this.UserForm =  new FormGroup
({ UserName: new FormControl('', [Validators.required]),
  LoginName: new FormControl('', [Validators.required]),
  Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  Email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  ContactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  Address: new FormControl('', [Validators.required])
});
  }
  onFormSubmit() {
    const user = this.UserForm.value;
    this.Createemployee(user);
  }
  Createemployee(register: Register)   {
  this.loginService.CreateUser(register).subscribe(
    () => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.UserForm.reset();
    });
  }
/* onFormSubmit() {
  if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      console.log(this.user);
     // Any API call logic via services goes here
  }
} */
}
