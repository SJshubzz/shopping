import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(data: Product) {
    return this.http.post('http://localhost:3000/Products', data);
  }
  productList() {
    return this.http.get<Product[]>('http://localhost:3000/Products');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/Products/${id}`);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/Products/${id}`);
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/Products/${product.id}`,
      product
    );
  }
  popularProducts() {
    return this.http.get<Product[]>('http://localhost:3000/Products?_limit=5');
  }
  trendyProducts() {
    return this.http.get<Product[]>('http://localhost:3000/Products?_limit=8');
  }
  searchProduct(query: string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/Products?q=${query}`
    );
  }
}
