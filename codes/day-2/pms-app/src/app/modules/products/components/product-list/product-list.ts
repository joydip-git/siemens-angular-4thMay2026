import { Component, signal } from '@angular/core';
import { Product } from '../../../../models/product';
import { productrecords } from '../../../../data/productrecords';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>(productrecords);
}
