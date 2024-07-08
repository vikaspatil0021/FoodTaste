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
};