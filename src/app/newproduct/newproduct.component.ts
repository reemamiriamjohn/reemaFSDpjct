import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {
  title:String = "Add Products";
 
  constructor(private productService: ProductService,private router: Router) { }
  productItem = new ProductModel(null,null,null,null,null)
  ngOnInit(): void {
  }
  AddProduct()
  {
    this.productService.newProduct(this.productItem);
    console.log("called");
    alert("Success");
    this.router.navigate(['/list']);
  }
}
