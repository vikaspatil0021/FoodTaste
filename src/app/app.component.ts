import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  productQuantity : number = 0;

  setProductQuantity(value : number): void {
    this.productQuantity = value;
  };
}
