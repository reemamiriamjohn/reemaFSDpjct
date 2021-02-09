import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './list/product.model';
import { Product2Model } from './list2/product2.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: ProductModel; 
  selectedProduct2:Product2Model;
  
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item:ProductModel)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
    
  }
 
  getProducts2(){
    return this.http.get("http://localhost:3000/products2");
  }
  newProduct2(item2:Product2Model)
  {
    return this.http.post("http://localhost:3000/insert2",{"product":item2})
    .subscribe(data=>{console.log(data)})
    
  }
  //Update Product
  upProduct(item:ProductModel)
  {
    console.log(item._id);
    return this.http.put("http://localhost:3000/update/"+item._id,{"product":item})
    .subscribe(data=>{console.log(data)});
  }
  deleteProduct(id:String){
    return this.http.delete("http://localhost:3000/delete/"+id)
    .subscribe(data=>{console.log(data)});
  }
  upProduct2(item2:Product2Model)
  {
    console.log(item2._id2);
    return this.http.put("http://localhost:3000/update2/"+item2._id2,{"product":item2})
    .subscribe(data=>{console.log(data)});
  }
  deleteProduct2(id2:String){
    return this.http.delete("http://localhost:3000/delete2/"+id2)
    .subscribe(data=>{console.log(data)});
  }
}
