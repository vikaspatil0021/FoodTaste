import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  showCartPage : boolean = false;

  toggleCartPage() {
    this.showCartPage = !this.showCartPage;
  };

  @Output()
  sendProductsLength : EventEmitter<number> = new EventEmitter();

  reciveProductsLength($event : number) {
    this.cartProductQuantity = $event;
    this.sendProductsLength.emit($event);
  };

  @Input()
  cartProductQuantity : number = 0;

  @Input()
  productsArr : Array<any> = [];

  ngOnInit() {
    let clickedProductsArr : any = localStorage.getItem('clickedProductsArr');
    if(clickedProductsArr && this.cartProductQuantity !== 0) {
      this.cartProductQuantity = JSON.parse(clickedProductsArr).length;
    } else {
      this.cartProductQuantity = 0;
    };
  };
};