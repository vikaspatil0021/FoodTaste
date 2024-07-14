import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  searchValue : string = '';
  products : any;
  regex : RegExp = /[^A-Z ]/gi;

  @Output()
  onSearchInput : EventEmitter<string> = new EventEmitter<string>();

  transferSearchValue(): void {
    this.onSearchInput.emit(this.searchValue.trim());
  };

  ngOnInit(): void {
    let allProducts : any = localStorage.getItem("products");
    this.products = JSON.parse(allProducts);
  };

  @Input()
  productQuantity : number = 0;
};