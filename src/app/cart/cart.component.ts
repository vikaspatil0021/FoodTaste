import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  @Input()
  cartProductQuantity : number = 0;

  ngOnInit() {
    let productQuantity = localStorage.getItem('productQuantity');
    if(productQuantity) {
      this.cartProductQuantity = JSON.parse(productQuantity);
    };
  };

  @Input()
  productsArr : Array<any> = [];

  openCart(): void {
    let cart = document.getElementById('cart');
    cart?.classList.toggle('none');
  };
};