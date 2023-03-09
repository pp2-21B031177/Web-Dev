import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  category = 'laptop';

  share(product: Product) {
    window.location.href = `https://telegram.me/share/url?url=${product.link}`;
    window.open("https://www.google.com", "_blank");
  }
  changeCategory(type: string) {
    this.category = type;
  }
  delete(el: HTMLElement) {
    el.remove();
  }
  toggleLike(product: Product, el:HTMLElement) {
    if(el.classList.contains('notLiked')) {
      el.classList.remove('notLiked');
      el.classList.add('liked');
      product.likes++;
    }
    else {
      el.classList.remove('liked');
      el.classList.add('notLiked');
      product.likes--;
    }
  }
}