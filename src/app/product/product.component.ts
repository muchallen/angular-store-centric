import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Product } from '../product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    product:Product

  constructor(private shopService:ShopService,private main:MainComponent) { 
    
  }

  @Input()  size: number =1
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    if(this.size<1){
      this.size = 1
    this.sizeChange.emit(this.size);
    return
    }
     if(this.size==0){
      this.size = 1
      this.sizeChange.emit(this.size);
      return
    }
    else{
    this.size +=delta
    this.sizeChange.emit(this.size)}
    return
  }

  ngOnInit(): void {
    this.product=this.shopService.detailProduct
  }


  addtoCart(){

    this.shopService.addCartDetailsPage(this.product,this.size)
    this.shopService.cartTotal()
    this.main.cartTotal=this.shopService.total
    this.main.cartNumber=this.shopService.cartProducts.length
          

  }


}
