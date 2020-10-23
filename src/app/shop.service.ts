import { Injectable } from '@angular/core';
import { Product } from './product.model';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products:Product[]

  detailProduct:Product
  rootUrl:String ="https://mystore.centricdata.net/api/v1"

  

  total:number=0

  cartProducts:Product[]
  

  constructor() { 
    this.cartProducts=[]

  }



getProducts(){
    axios.get(this.rootUrl + `/products`).then(( res)=>{ 
       console.log(res.data)
       this.products=res.data.map(prod=>{
         return{...prod, productQuantity:1}
       })
})

}

  cartTotal(){
    var sum=0
     for(var x =0 ; x<this.cartProducts.length; x++) {
       var value = this.cartProducts[x].productQuantity*this.cartProducts[x].productPrice
       sum = sum+ value
     }
     this.total=sum
  }
  addCart(prod:Product){
    this.cartProducts.push(prod)
    this.cartTotal()
  }

  addCartDetailsPage(product:Product,quantity:number){
      for(var y= 0; y< this.cartProducts.length; y++){
        if(product.productName===this.cartProducts[y].productName){
          this.cartProducts[y].productQuantity=quantity
          this.cartTotal()
          return
        }
      }
      var prod:Product= product
      prod.productQuantity=quantity
      this.cartProducts.push(prod)
      this.cartTotal()

  }
}
