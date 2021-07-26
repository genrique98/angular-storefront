import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product;
  currentProduct: Product;
  // @Output() addToCart: EventEmitter<Product> = new EventEmitter;
  @Output() productChange: EventEmitter<Product> = new EventEmitter;
  
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: ''
    }
    this.currentProduct = this.product;
  }

  ngOnInit(): void {
    // this.currentProduct = {
    //   id: 0,
    //   name: 'jjj',
    //   price: 1,
    //   url: '',
    //   description: ''
    // }
  }

  ngOnChanges(){

  }

  setCurrentProduct(currentProduct: Product): void {
    this.currentProduct = currentProduct;
    // alert(this.currentProduct.id)
    this.productChange.emit(this.currentProduct);
  }

}
