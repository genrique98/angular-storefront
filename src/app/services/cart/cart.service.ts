import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = []

  constructor() { }

  getProductsInCart(): Cart[] {
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number) {
    let item: Cart = {product, quantity}
    let exists = this.cart.find(item => item.product.id == product.id)

    if(!exists) { // if cart does not contain product, add it
      this.cart.push(item)
    } 
  }

  getTotalCost(): number {
    let total: number = 0;
    this.cart.forEach(item => {
      total += item.product.price * item.quantity;
    })
    //round total
    return total;
  }

  getTotalQuantity(): number {
    let total: number = 0;
    this.cart.forEach(item => {
      total += item.quantity;
    })

    return total;
  }

   
}
