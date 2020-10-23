import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MDBBootstrapModule ,CarouselModule, ButtonsModule} from 'angular-bootstrap-md';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    StoreComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    CarouselHolderComponent,
    MainComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'shop',component:StoreComponent},
      {path:'shoppingcart',component:CartComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'details',component:ProductComponent}
    ]

    )
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
