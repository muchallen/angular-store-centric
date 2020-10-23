import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Product } from '../product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:Product[]
  constructor(private shopService:ShopService , private main: MainComponent)  { 
    this.cartProducts=shopService.cartProducts
    this.shopService.cartTotal()
    shopService.cartTotal()
    this.total=this.shopService.total
  }

  @Input()  size: number =1
  total:number=0
  @Output() sizeChange = new EventEmitter<number>();

  dec(product:Product) { 
    this.size=product.productQuantity
    this.resize(-1);
    
  for(var i= 0; i<this.shopService.cartProducts.length; i++){
    if(product.id===this.shopService.cartProducts[i].id){
      this.cartProducts[i].productQuantity=this.size
      this.cartProducts=this.shopService.cartProducts
      this.shopService.cartTotal()
      this.main.cartTotal=this.shopService.total
      this.total=this.shopService.total
      return
    }
  }
  }

  inc(product:Product) { 
    this.size=product.productQuantity 
    this.resize(+1);
    for(var i= 0; i<this.shopService.cartProducts.length; i++){
      if(product.id===this.shopService.cartProducts[i].id){
        this.cartProducts[i].productQuantity=this.size
        this.cartProducts=this.shopService.cartProducts
          this.shopService.cartTotal()
          this.main.cartTotal=this.shopService.total
          this.total=this.shopService.total
          return
      }
    }
  }

  resize(delta: number) {
    if(this.size<1){
      this.size = 1
    this.sizeChange.emit(this.size);
    }else{
    this.size +=delta
    this.sizeChange.emit(this.size)};
  
  }

  deleteProduct(product:Product){
    for(var i =0; this.shopService.cartProducts.length; i++){
      if(product.id===this.shopService.cartProducts[i].id){
        if (i > -1) {
          this.shopService.cartProducts.splice(i, 1);
          this.cartProducts=this.shopService.cartProducts
          this.shopService.cartTotal()
          this.main.cartTotal=this.shopService.total
          this.total=this.shopService.total
        }
      }
    }

  }

  handleHeader(){
    var navs = document.getElementsByClassName("nav-item")
    for(var i =0 ; i<navs.length;i++){
    navs[i].classList.remove('active')}
   console.log(document.getElementById("shop").classList.add("active"))
  
  }
  handleHeader2(){
    var navs = document.getElementsByClassName("nav-item")
    for(var i =0 ; i<navs.length;i++){
    navs[i].classList.remove('active')}
   console.log(document.getElementById("checkout").classList.add("active"))
  
  }
  ngOnInit(): void {
    this.shopService.cartTotal()
  }

}
