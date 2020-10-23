import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cartProduct:Product[]
  cartNumber:number
  cartTotal:number =this.shopService.total
  constructor(private shopService:ShopService) {
    shopService.cartTotal()
    shopService.getProducts()
   }




  ngOnInit(): void { 
    this.cartProduct=this.shopService.cartProducts
    this.cartNumber=this.shopService.cartProducts.length
    
  }
  handleHeader(id:string){
    var navs = document.getElementsByClassName("nav-item")
     for(var i =0 ; i<navs.length;i++){
     navs[i].classList.remove('active')}
    console.log(document.getElementById(id).classList.add("active"))
   }

}
