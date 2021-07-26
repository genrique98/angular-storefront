import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent extends ProductItemComponent {

  // @Input() product: Product;
  // @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor() {
    super();
    this.currentProduct;
   }
  // constructor() { }

  ngOnInit(): void {
    // alert(this.currentProduct.id);
  }

}
