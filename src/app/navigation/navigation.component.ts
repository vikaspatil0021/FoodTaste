import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  value : string = "";
  products : any;

  ngOnInit(): void {
    let allProducts : any = localStorage.getItem("products");
    this.products = JSON.parse(allProducts);
  };

  FoundProduct(): void {
    this.products.forEach((product:any) => {
      if(
      this.value.trim() !== "" &&
      (product.category.includes(this.value) ||
      product.category.includes(this.value.toLowerCase()) ||
      product.category.includes(this.value.toUpperCase()) ||
      product.category.includes(this.value.toLocaleLowerCase()) ||
      product.category.includes(this.value.toLocaleUpperCase()))
      ) {
        
      }
    });
  };
};