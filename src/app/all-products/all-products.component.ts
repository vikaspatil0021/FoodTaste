import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent {
  products : any;

  constructor(private http: HttpClient) {
    const LinkAPI = "https://fakestoreapi.com/products";
    this.http.get(LinkAPI).subscribe((data) => {
      this.products = data;
      localStorage.setItem("products", JSON.stringify(this.products));
    });
  };
};
