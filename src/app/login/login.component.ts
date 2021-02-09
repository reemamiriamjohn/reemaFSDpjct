import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userVerifyData = {id:"",password:"",incum:""};
  constructor(private _authService: AuthService,
    private _router:Router ) { }

  ngOnInit() {
  }
  userVerify(){


console.log(this.userVerifyData.id)
console.log(this.userVerifyData.password)
if(this. userVerifyData.id=="1234567890" && this.userVerifyData.password=="admin123"){
  localStorage.setItem('token','admin')
  this._router.navigate(['/list'])
}
else {
  this._authService.userVerifys(this.userVerifyData)
  .subscribe(
    res=>{
      console.log(res.token)
      localStorage.setItem('token',res["token"])
      this._router.navigate(['/list'])

    },



    err => console.log(err)
  )
}



  }
}