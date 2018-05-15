import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsService } from './products.service';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes =  [
  {path:'', component: ProductComponent},
  {path:'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
