import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-selelr-update-product',
  templateUrl: './selelr-update-product.component.html',
  styleUrls: ['./selelr-update-product.component.css'],
})
export class SelelrUpdateProductComponent implements OnInit {
  productData: undefined | Product;
  prouctMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductService) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }

  submit(data: Product) {
    console.warn(data);
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.prouctMessage = 'product updated sucssesfully';
      }
    });
    setTimeout(() => {
      this.prouctMessage = undefined;
    }, 3000);
  }
}
