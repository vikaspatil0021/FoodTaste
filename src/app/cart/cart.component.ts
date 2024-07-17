import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  @Input()
  cartProductQuantity : number = 0;

  @Input()
  productsArr : Array<any> = [];

  openCart(): void {
    let cart = document.getElementById('cart');
    cart?.classList.toggle('none');
  };
};