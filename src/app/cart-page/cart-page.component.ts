import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent implements OnInit {
  productQuantity : number = 1;

  @Input()
  productsArr : Array<any> = [];

  removeProduct(product : any): void {
    let productDiv = document.getElementById(`${product.id}`);
    productDiv?.remove();
  };

  @Output() sendProductsInfo : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    console.log('Loaded!')
  }
}