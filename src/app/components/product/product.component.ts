import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private service:ProductsService,
    private router:Router
  ) { }
  
  data:any;
  price:number=0;
  newPrice=[];
  newQuantity=[];
  amount:number=0;
  noOfItems:number=0;

  ngOnInit() {
    this.data=this.service.getProducts();
    this.noOfItems=this.service.noOfItems;
    this.amount=this.service.amount;
    for(var i=0; i<this.data.length;i++){
      this.newPrice[i]=0;
      this.newQuantity[i]=0;
    }
  }

  onChange(value, id){
    if(value>=0){
    this.service.onChange(value,id);
    this.newQuantity[id]=this.service.newQuantity[id];                               //To check the quantity on change
    this.newPrice[id]=this.service.newPrice[id];
    this.amount=this.service.amount;
    this.noOfItems=this.service.noOfItems;
    }    
  }

  getTotal(arr:any, arr1:any):void{
    this.service.getTotal(arr,arr1);
  }

  getSelectedProduct(){
    this.service.getSelectedProduct();
  }
  
}
