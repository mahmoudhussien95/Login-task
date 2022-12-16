import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule,HttpClientModule, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject} from 'rxjs' 
import { Route, Router } from '@angular/router';
 const httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
 };

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn:'root'
})
export class LoginService {
  url:any='http://localhost:300/login';
  errorSubject:any=new BehaviorSubject<any>(null);
  errorMassage: any= this.errorSubject.asObservable();
  

  constructor( 
    private http:HttpClient,
    private router:Router,
    ){} 
  Login(Username:string,Password:string):any{
    this.http.post(this.url , { Username ,Password },httpOptions).toPromise().then((res:any)=>{
      if(res&&res.jwt){
        sessionStorage.setItem('jwt',res.jwt);
        this.errorSubject.next(null);
        this.router.navigateByUrl('dashboard')  // PROFILE PAGE
      }else if (res.Massage){
        this.errorSubject.next(res.Massage);
      }
    })
  }
   }
