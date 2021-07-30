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

  name: string = ''
  address: string = ''
  card: number = 0

  constructor(private cartService: CartService, private route: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.total = this.cartService.getTotalCost();
    this.cart = this.cartService.getProductsInCart();
  }

  onSubmit(): void {
    let order: Order = {
      name: this.name,
      address: this.address,
      card: this.card
    }
    alert(order.name)
    this.orderService.updateOrder(order)

    this.route.navigate(['/confirmation'])
  }
}
