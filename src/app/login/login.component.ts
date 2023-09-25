import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { FormGroup,FormControl,FormBuilder,FormControlName } from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm= new FormGroup({
    username: new FormControl('',[ Validators.required,Validators.pattern(/^[a-zA-Z0-9_\.]+$/)] ),
    password: new FormControl('',[ Validators.required,Validators.minLength(6)])
  })
  public get formRecordControls() {
    return this.LoginForm.controls;
  }
  public submittedschool = false;
 error:any=null;
  constructor(
    private router : Router,
    private loginService:LoginService,
    public translate: TranslateService,
    private formBuilder : FormBuilder,
  ) { 
  }
  ngOnInit(): void {
 
    //  this.loginService
    //  .errorSubject
    //  .subscribe( (errorMassage: any) => { this.error=errorMassage;})
  }
  loginUser(){
    // console.log(this.LoginForm.value);
    this.router.navigateByUrl(`Home`)
  }
  GOTO(){
    this.router.navigateByUrl(`signup`)
  }
}
