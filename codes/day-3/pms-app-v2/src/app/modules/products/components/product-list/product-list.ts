import { Component, inject, input, InputSignal, OnInit, signal } from '@angular/core';
import { Product } from '../../../../models/product';
import { FilterProductPipe } from '../../pipes/filter-product-pipe';
import { IServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';

@Component({
  selector: 'app-product-list',
  imports: [FilterProductPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products = signal<Readonly<Product[]>>([]);
  filterText: InputSignal<string> = input<string>('', { alias: 'filterData' })
  private ps: IServiceContract;

  // constructor(@Inject(PRODUCT_SERVICE_TOKEN) ps: IServiceContract) {
  //   this.ps = ps
  // }

  constructor() {
    this.ps = inject(PRODUCT_SERVICE_TOKEN)
  }
  ngOnInit(): void {
    this.products.set(this.ps.getProducts())
  }
}
