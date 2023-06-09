import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) {}
  ngOnInit(): void {}
  submit(data: Product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is Succsesfully added';
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }
}
