import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
// import { AuthService } from './auth.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:String = "Items available for APL";
  products: ProductModel[];
  // imageWidth:number = 50;
  // imageMargin:number = 2;
  // showImage: boolean = false;
  constructor(private productService:ProductService, public router:Router,public _auth:AuthService) { }
  // toggleImage():void{
  //   this.showImage =!this.showImage; 
  // }

  
ngOnInit(): void {
  this.productService.getProducts().subscribe((data:any)=>{
    this.products = JSON.parse(JSON.stringify(data));
  })
}

onedit(product)
{
  this.productService.selectedProduct = product;
  console.log(this.productService.selectedProduct);
  this.router.navigate(['/update']);
}

ondlt(product)
{
  this.productService.deleteProduct(product._id);
  alert("Product deleted");
  // this.router.navigate(['/']);
  window.location.reload();
}
}

