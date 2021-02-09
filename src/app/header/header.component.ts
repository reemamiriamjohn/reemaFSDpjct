import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }
   title:String = "e-Services-Ration Card Management System";
   title1:String = "CIVIL SUPPLIES DEPARTMENT";
   title2:String="Government of Kerala";
  ngOnInit(): void {
  }

}
