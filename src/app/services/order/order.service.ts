import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  order: Order = new Order()

  getOrder(): Order {
    return this.order
  }

  updateOrder(order: Order): void {
    this.order = order
  }
}
