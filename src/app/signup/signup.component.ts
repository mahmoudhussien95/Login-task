import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { FormGroup,FormControl,FormBuilder,FormControlName } from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  LoginForm= new FormGroup({
    name: new FormControl('',[ Validators.required,Validators.pattern(/^[a-zA-Z0-9_\.]+$/)] ),
    username: new FormControl('',[ Validators.required,Validators.pattern(/^[a-zA-Z0-9_\.]+$/)] ),
    email: new FormControl('',[ Validators.required,Validators.email]),
    password: new FormControl('',[ Validators.required,Validators.minLength(6)]),

  })
 error:any=null;
  constructor(
   
    private formBuilder : FormBuilder,
  ) { 
  }
  

  ngOnInit(): void {
 
    //  this.loginService
    //  .errorSubject
    //  .subscribe( (errorMassage: any) => { this.error=errorMassage;})
  }
  loginUser(){
    console.log(this.LoginForm.value);
  }
  get username(){
    return this.LoginForm.get('username');
  }
 
  get name(){
    return this.LoginForm.get('name');
  }
  get email(){
    return this.LoginForm.get('email');
  }
  get password(){ 
    return this.LoginForm.get('password');
  }
}
