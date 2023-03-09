import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  category = 'laptop';

  changeCategory(type: string) {
    this.category = type;
  }
  getFilterCategory() {
    return this.products.filter(product => product.category == this.category);
  }
  deleteProduct(product: Product) {
    const x:number = 5;
    console.log(product);
    this.products = this.products.filter(p => p.id != product.id);
  }
}