import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data = [
    {productName: "Amul Butter",desc:"Taste of India",price: 60,isChecked:false,quantity:0,total:0,src:"http://images-cdn.azureedge.net/azure/in-resources/dc9d44f8-61bf-4a88-b20e-c878f6f6151e/Images/ProductImages/Source/5433_1.jpg"},
    {productName: "Cocacola",desc:"Cold - drink",price: 120,isChecked:false,quantity:0,total:0,src:"http://www.labastabreclav.cz/wh/960-720/img/catalog/img/na01.jpg"},
    {productName: "Pencil",desc:"Stationery",price: 9,isChecked:false,quantity:0,total:0,src:"https://www.whsmith.co.uk/pws/client/images/catalogue/products/3039/38/82/xlarge/30393882_1.jpg"},
    {productName: "Laptop",desc:"Electronics",price: 80,isChecked:false,quantity:0,total:0,src:"https://c.s-microsoft.com/en-us/CMSImages/EN-US_asus_ux370_hol18_382x258.jpg?version=d16b052c-9c73-49fd-71c4-1706da137a41"},
    {productName: "Mobile",desc:"Electronics",price: 100,isChecked:false,quantity:0,total:0,src:"https://5.imimg.com/data5/UM/NP/MY-29005251/i-phone-6-500x500.jpg"},
    {productName: "Shoes",desc:"Footware",price: 150,isChecked:false,quantity:0,total:0,src:"https://images-na.ssl-images-amazon.com/images/I/61cbAQatNlL._UY395_.jpg"}
 ];

  price:number=0;
  newPrice=[];

  newQuantity=[];
  amount:number=0;
  noOfItems:number=0;
  selectedProd=[];
  constructor() {
    for(var i=0; i<this.data.length;i++){
      this.newPrice[i]=0;
      this.newQuantity[i]=0;
      this.selectedProd[i]=this.data[i];
    }
    
   }

 getProducts(){
   return this.data;
 }

 onChange(value, id){
  if(value>0){
  this.price=this.data[id].price*value;
  this.newQuantity[id]=Number(this.newQuantity[id])+Number(value);                              
  this.newPrice[id]=this.newPrice[id]+this.price;
  this.data[id].isChecked=true;
  this.data[id].quantity=Number(this.data[id].quantity)+Number(value);
  this.data[id].total=this.data[id].total+Number(this.price);
  this.getTotal(this.newPrice,this.newQuantity);
  }
  else{
    this.price=0;
    this.newQuantity[id]=value;                               
    this.newPrice[id]=this.price;
    this.data[id].isChecked=false;
    this.data[id].quantity=value;
    this.data[id].total=this.price;
    this.getTotal(this.newPrice,this.newQuantity);
  }
}
getTotal(arr:any, arr1:any):void{
  console.log(arr);
  console.log(arr1);
    this.amount=0;
    this.noOfItems=0;                                       
    for(var i=0;i<arr.length;i++){                          
      this.amount=this.amount+arr[i];
      this.noOfItems=this.noOfItems+Number(arr1[i]);
  }
  this.updateCarton();
}

getSelectedProduct(){
    
    for(var i=0; i<this.data.length;i++){
      if(this.data[i].isChecked==true){
        this.selectedProd[i]=this.data[i];
      }
      else{}
       
  }
  //return this.selectedProd;
 }

 removeProduct(index){
  if (index > -1) {
    this.noOfItems=this.noOfItems-this.selectedProd[index].quantity;
    this.amount=this.amount-this.selectedProd[index].total;
    this.data[index].isChecked=false;
    this.newQuantity[index]=0;
    this.newPrice[index]=0;
    this.updateCarton();
  }
}

updateQuantity(index,value){
 this.newQuantity[index]=value;
 this.newPrice[index]=this.newQuantity[index]*this.selectedProd[index].price;
 console.log(this.newQuantity[index]);
 console.log(this.newPrice[index]);
 }

 updateCarton(){
  this.noOfItems=0;
  this.amount=0;
  for(var i = 0; i < this.selectedProd.length;i++){
    this.noOfItems=this.noOfItems+Number(this.newQuantity[i]);
    this.amount=this.amount+this.newPrice[i];
    this.selectedProd[i].total=this.newQuantity[i]*this.selectedProd[i].price;
    this.selectedProd[i].quantity=this.newQuantity[i];
  }
 }
}