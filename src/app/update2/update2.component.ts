import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product2Model } from '../list2/product2.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update2',
  templateUrl: './update2.component.html',
  styleUrls: ['./update2.component.css']
})
export class Update2Component implements OnInit {
  title:String = "Update Product";
  productItem2 = new Product2Model(null,null,null,null,null);
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    if(this.productService.selectedProduct2 != undefined)
    {
      console.log(this.productService.selectedProduct2);
      this.productItem2 = this.productService.selectedProduct2;
    }
   
  }
  updateProduct2()
  {
    console.log(this.productItem2);

    this.productService.upProduct2(this.productItem2);
    console.log("Update called");
    alert("Success");
    this.router.navigate(['list2']);
  }
}
  



