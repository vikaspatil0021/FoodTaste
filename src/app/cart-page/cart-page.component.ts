import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent implements OnInit {
  products : any = [];

  ngOnInit(): void {
    let storageProducts : any = localStorage.getItem("products");
    this.products = JSON.parse(storageProducts);
  }

  removeProduct(product : any): void {
    let productDiv = document.getElementById(`${product.id}`);
    productDiv?.remove();
  }

  closeCart(): void {
    let cartBackground : any = document.getElementById("cartBackground");
    cartBackground?.classList.toggle("none");
  }
};