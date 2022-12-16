import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string='';
 password:string='';
 isUsernameValid: boolean=true;
 isPasswordValid: boolean=true;
 error:any=null;

  constructor(
    private loginService:LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
    .errorSubject
    .subscribe( (errorMassage: any) => { this.error=errorMassage;})
  }
  validateUsername(){
    const pattern =RegExp(/^[a-zA-Z0-9]+$/);
    if(pattern.test(this.username)){
      this.isUsernameValid=true;
    }else{
      this.isUsernameValid=false;
    }
  }
  validatePassword(){
    const pattern = RegExp(/^[a-zA-Z0-9]+$/);
    if(pattern.test(this.password)){
      this.isPasswordValid = true;
    } else{
      this.isPasswordValid = false;
    }
  }
  onKey(event:any , type:string){
    if(type === 'username'){
      this.username=event.target.value;
      this.validateUsername();
    }
    if (type === 'Password'){
      this.password=event.target.value;
      this.validatePassword();
    }

  }
  onSubmit(){
    if (this.isUsernameValid && this.isPasswordValid){
      this.loginService.Login(this.username,this.password)
    } else return;
  }

}
