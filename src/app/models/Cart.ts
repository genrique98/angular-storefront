import { Product } from "./Product";

export class Cart {
    product: Product;
    quantity: number;
    
    constructor() {
        this.product = {
            id: 1,
            name: '',
            price: 0,
            url: '',
            description: ''
        };
        this.quantity = 0;
    }
  }