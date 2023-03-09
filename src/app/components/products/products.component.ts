import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import {StoreService} from '../../services/store.service';
import { ProductsService } from './../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  myShoppingCart: Product[] = [];
  total=0;
  products: Product[]= [];
  today = new Date();
  date = new Date(2021,1,21);

  constructor(
    private storeService: StoreService,
    private ProductsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.ProductsService.getAllProducts()
    .subscribe(data=>{
      this.products = data;
    });
  }

  onAdToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total= this.storeService.getTotal();
  }
}
