import { Component, Injectable } from '@angular/core';
import  API  from 'src/app/api.json';

@Injectable()

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent {
  products : any = API;
  productQuantity : number = 0;

  addToCart(product : any): void {
    this.productQuantity += 1;
  }
};