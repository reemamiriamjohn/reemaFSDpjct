import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  
})
export class SignComponent implements OnInit {
 
  userVerifyData= { id:"",
                    password:"",
                    name: "",
                    email:"",
                    mob:"",
                    incum:""
    }; 


  constructor(private _auth: AuthService,
    private _router:Router) { }

  ngOnInit() {
  }

  userVerifys(){
   this._auth.userVerifys(this.userVerifyData)
   .subscribe(
     res=>{
       console.log(res)
       localStorage.setItem('token',res["token"])
       this._router.navigate(['/login'])
       },
     err=>console.log(err)
   )
  }
}
