import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent implements OnInit {
  productQuantity : number = 1;
  productsArrLength : number = 0;
  showCartPage : boolean = false;

  @Input()
  productsArr : Array<any> = [];

  @Output() sendProductsInfo : EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.productsArrLength = this.productsArr.length;
    this.sendProductsInfo.emit(this.productsArrLength);
  };

  removeProduct(product : any): void {
    this.productsArrLength = this.productsArrLength - 1;
    this.sendProductsInfo.emit(this.productsArrLength);
    let productIndex = this.productsArr.indexOf(product);
    this.productsArr.splice(productIndex, 1);
  };

  toggleCartPage() {
    this.showCartPage = !this.showCartPage;
  };
}