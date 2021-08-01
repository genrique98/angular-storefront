import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product = new Product();
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  selectedQuantity: number = this.options[0]

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.route.url.subscribe(url => {
      let id: number = (url.splice(1) as unknown) as number - 1
      this.productService.getProducts().subscribe(res => {
        this.product = res[id]
      })
    })
  }

  addToCart(product: Product, quantity: number){
    this.cartService.addProductToCart(product, quantity);
    alert(`${quantity} ${product.name}(s) added to cart!`)
  }
}
