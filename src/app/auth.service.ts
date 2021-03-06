import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private _signUrl = "http://localhost:3000/sign";
   
   private _loginUrl = "http://localhost:3000/login";

  
  constructor(private http: HttpClient, private _router: Router) { }
  
  userVerifys(user){
   return this.http.post<any>(this._signUrl,user)
  }
  userVerify(user){
   return this.http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
loggedInAdmin(){
  if(localStorage.getItem('token')=='admin'){
    return true;
}
  else{
    return false;
  }

}
loggedInUser(){
  if(localStorage.getItem('token')=='user'){
    return true;
}
  else{
    return false;
  }

}
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}


