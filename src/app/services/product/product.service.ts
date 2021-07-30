import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import * as data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    // return (data.default as unknown) as Product[];
    return this.http.get<Product[]>("assets/data.json");
  }
}
