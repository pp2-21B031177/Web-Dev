import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = {
    image: "string",
    name: "string",
    description: "string",
    rating: 5,
    link: "string",
    id: 5,
    category: "string",
    likes: 5,
    isLiked: false
  };
  @Output() deleteEmitter = new EventEmitter<any>();

  share(product: Product) {
    window.open(`https://telegram.me/share/url?url=${product.link}`);
  }
  delete() {
    this.deleteEmitter.emit();
  }
  toggleLike() {
    this.product.isLiked = !this.product.isLiked;
    this.product.likes += this.product.isLiked ? 1 : -1
  }
}
