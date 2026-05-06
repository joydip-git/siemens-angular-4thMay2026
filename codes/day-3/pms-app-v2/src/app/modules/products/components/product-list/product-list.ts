import { Component, input, InputSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../../../models/product';
import { productrecords } from '../../../../data/productrecords';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnChanges {
  products = signal<Product[]>(productrecords);
  filterText: InputSignal<string> = input<string>('', { alias: 'filterData' })
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.filterText());
    console.log(changes["filterText"].currentValue);
  }
}
