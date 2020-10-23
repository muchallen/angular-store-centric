import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartProducts:Product[]
  totalPrice:number
  constructor(private shopService: ShopService) {
      
   }

  ngOnInit(): void {
    this.cartProducts=this.shopService.cartProducts
    this.totalPrice=this.shopService.total
  }

}
