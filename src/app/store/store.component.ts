import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MainComponent } from '../main/main.component';
import { Product } from '../product.model';
import { ProductComponent } from '../product/product.component';
import {ShopService} from '../shop.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products:Product[]
  cartProducts:Product[]
  detail="details"
  

  constructor(private shopservice:ShopService, private main:MainComponent) { }

  ngOnInit(): void {
    this.products=this.shopservice.products
  }

  addData(product:Product){
     this.shopservice.detailProduct=product
  }

  addtocart(product:Product){
    
    for(var i=0 ; i< this.shopservice.cartProducts.length; i++){
      if(this.shopservice.cartProducts[i].id===product.id){
        this.shopservice.cartProducts[i].productQuantity+=1
        document.getElementById(product.productName).innerHTML=""+this.shopservice.cartProducts[i].productQuantity
        this.shopservice.cartTotal()
        this.main.cartTotal=this.shopservice.total
        return
      }
    }
    
    this.shopservice.cartProducts.push(product)
    document.getElementById(product.productName).innerHTML=""+1
    this.main.cartNumber=this.shopservice.cartProducts.length
    this.shopservice.cartTotal()
    this.main.cartTotal=this.shopservice.total
    return
  }

  categoryFilter(category:String){
   var prods = []
    if(category==='allproducts'){
      return this.products=this.shopservice.products

    }

    this.shopservice.products.map((product)=>{
      if(product.productCategory==category)
      prods.push(product)
    })
    console.log(prods)
    return this.products=prods
  }


  priceFilter(amount:number){
    var prods = []
    this.shopservice.products.map((product)=>{
      if(product.productPrice<29)
      prods.push(product)
    })
    console.log(prods)
    return this.products=prods
  }

}
