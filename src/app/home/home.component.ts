import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProduct:undefined|Product[]
  trendyProducts:undefined|Product[]
  constructor(private prosuct:ProductService){

  }
  ngOnInit(): void {
    this.prosuct.popularProducts().subscribe((data)=>{
      console.warn(data);
      this.popularProduct=data

    })
    this.prosuct.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data 
    })
  }

}
