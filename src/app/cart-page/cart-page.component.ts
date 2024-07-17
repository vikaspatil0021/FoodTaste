import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent {
  removeProduct(product : any): void {
    let productDiv = document.getElementById(`${product.id}`);
    productDiv?.remove();
  };

  closeCart(): void {
    let cart = document.getElementById('cart');
    cart?.classList.toggle('none');
  };

  @Input()
  productsArr : Array<any> = [];
};