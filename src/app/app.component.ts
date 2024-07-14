import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  productQuantity : number = 0;
  searchValue : string = '';

  setProductQuantity(value : number): void {
    this.productQuantity = value;
  };

  setSearchValue(value : string): void {
    this.searchValue = value;
  };
}