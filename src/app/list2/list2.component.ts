import { Component, OnInit } from '@angular/core';
import { Product2Model } from './product2.model';;
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
// import { AuthService } from './auth.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  title:String = "Items available for BPL";
  products: Product2Model[];
  constructor(private productService:ProductService, public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.productService.getProducts2().subscribe((data:any)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }
  onedit2(product)
  {
    this.productService.selectedProduct2 = product;
    console.log(this.productService.selectedProduct2);
    this.router.navigate(['update2']);
  }
  
  ondlt2(product)
  {
    this.productService.deleteProduct2(product._id2);
    alert("Product deleted");
    // this.router.navigate(['/']);
    window.location.reload();
  }
}


