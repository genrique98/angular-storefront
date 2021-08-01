import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product = new Product();
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  selectedQuantity: number = this.options[0]
  
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addToCart(product: Product, quantity: number){
    this.cartService.addProductToCart(product, quantity);
    alert(`${quantity} ${product.name}(s) added to cart!`)
    
  }
}
