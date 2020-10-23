import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Product } from '../product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartItems:number
  products:Product[]
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  changeHeader(){
   var navs = document.getElementsByClassName("nav-item")
    for(var i =0 ; i<navs.length;i++){
    navs[i].classList.remove('active')}
   console.log(document.getElementById("shop").classList.add("active"))
  }
 
  

}
