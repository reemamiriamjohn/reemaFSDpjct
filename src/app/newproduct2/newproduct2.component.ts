import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product2Model } from '../list2/product2.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct2',
  templateUrl: './newproduct2.component.html',
  styleUrls: ['./newproduct2.component.css']
})
export class Newproduct2Component implements OnInit {
  title:String = "Add Products";
  constructor(private productService: ProductService,private router: Router) { }
  productItem2 = new Product2Model(null,null,null,null,null)
  ngOnInit(): void {
  }
  AddProduct2()
{
  this.productService.newProduct2(this.productItem2);
  console.log("called");
  alert("Success");
  this.router.navigate(["/list2"]);
}

}






 

