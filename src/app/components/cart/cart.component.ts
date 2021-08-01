import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total: number = 0;
  cart: Cart[] = [];
  order: Order = new Order();

  constructor(private cartService: CartService, private route: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.total = this.cartService.getTotalCost();
    this.cart = this.cartService.getProductsInCart();
  }

  updateTotal(_arg: Event): void {
    this.total = this.cartService.getTotalCost();
  }

  onSubmit(): void {
    this.orderService.updateOrder(this.order)
    this.route.navigate(['/confirmation'])
  }
}
