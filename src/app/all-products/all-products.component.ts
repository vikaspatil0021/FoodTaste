import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import  API  from 'src/app/api.json';

@Injectable()

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent {
  products : any = API;
  productsArr: Array<object> = [];
  productQuantity : number = 0;

  @Output()
  onButtonClick : EventEmitter<number> = new EventEmitter<number>();

  addToCart(product : any) {
    this.productQuantity += 1;
    this.productsArr.push(product);
    localStorage.setItem("products", JSON.stringify(this.productsArr));
    this.onButtonClick.emit(this.productQuantity);
  }
}