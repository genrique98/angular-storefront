import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private orderService: OrderService, private cartService: CartService) { }

  order: Order = new Order()
  totalCost: number = 0 

  ngOnInit(): void {
    this.order = this.orderService.getOrder()
    this.totalCost = this.cartService.getTotalCost()
  }

  emptyCart(): void {
    this.cartService.emptyCart();
  }
}
