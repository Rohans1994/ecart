import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import {Router} from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private router:Router,
    private service:ProductsService

  ) { }
  
  noOfItems:number=0;
  selectedProd:any;
  amount:number=0;
  newQuantity=[];
  newTotal=[];

  ngOnInit() {
    this.selectedProd=this.service.selectedProd;
    this.noOfItems=this.service.noOfItems;
    this.amount=this.service.amount;
  }

  removeProduct(index){
    this.service.removeProduct(index);
    this.noOfItems=this.service.noOfItems;
    this.amount=this.service.amount;
  }

  updateQuantity(index,value){
    this.service.updateQuantity(index,value);
   }

   updateCarton(){
      this.service.updateCarton();
      this.noOfItems=this.service.noOfItems;
      this.amount=this.service.amount;
   }

}
