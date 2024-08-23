import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import  API  from 'src/app/api.json';

@Injectable()

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent {
  products : any = API;
  clickedProductsArr : Array<any> = [];
  productQuantity : any = 0;
  regex : RegExp = /[^A-Z ]/gi;
  
  @Output()
  onButtonClick : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onAddToCartClick : EventEmitter<object> = new EventEmitter<object>();

  @Input()
  searchValue : string = '';

  @Input()
  productsArrLength : number = 0;
  
  addToCart(product : any) {
    this.clickedProductsArr.push(product);
    localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity));
    localStorage.setItem('clickedProductsArr', JSON.stringify(this.clickedProductsArr));
    if(this.productsArrLength !== 0) {
      this.productsArrLength += 1;
      this.onButtonClick.emit(this.productsArrLength);
      if(this.productQuantity === this.productsArrLength) {
        this.onButtonClick.emit(10);
      }
    } else {
      this.productQuantity += 1;
      this.onButtonClick.emit(this.productQuantity);
    }
    this.onAddToCartClick.emit(this.clickedProductsArr);
  };

  searchProduct(product : any): any {
    if
    (
    this.searchValue.match(this.regex) ||
    product.title.toLowerCase().includes(this.searchValue.toLowerCase()) ||
    product.title.toUpperCase().includes(this.searchValue.toUpperCase()) ||
    product.title.toLowerCase().includes(this.searchValue) ||
    product.title.toUpperCase().includes(this.searchValue)
    )
    {
      return 'flex';
    }
    else {
      return 'none';
    }
  };
}