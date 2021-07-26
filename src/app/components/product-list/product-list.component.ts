import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Storefront'
  productList: Product[] = []
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    
    // this.productService.getProducts().subscribe(res => {
    //   for (let index = 0; index < res.length; index++) {
    //     const product = res[index];
    //   }

    //   this.productList = res;
    // });
  }

}
