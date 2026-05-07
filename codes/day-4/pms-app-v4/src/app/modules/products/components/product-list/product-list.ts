import { Component, inject, input, InputSignal, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../../../models/product';
import { FilterProductPipe } from '../../pipes/filter-product-pipe';
import { IServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../../models/apirespone';
import { LoadSpinner } from "../../../shared/components/load-spinner/load-spinner";

@Component({
  selector: 'app-product-list',
  imports: [FilterProductPipe, LoadSpinner],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  products = signal<Readonly<Product[]>>([]);
  errorInfo = signal('')
  isRequestOver = signal(false)
  filterText: InputSignal<string> = input<string>('', { alias: 'filterData' })
  private ps: IServiceContract = inject(PRODUCT_SERVICE_TOKEN);
  private fetchSubscription?: Subscription;

  // constructor(@Inject(PRODUCT_SERVICE_TOKEN) ps: IServiceContract) {
  //   this.ps = ps
  // }
  // constructor() {
  //   this.ps = inject(PRODUCT_SERVICE_TOKEN)
  // }
  ngOnInit(): void {
    this.fetchProducts()
  }

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  fetchProducts() {
    setTimeout(
      () => {
        this.fetchSubscription =
          this.ps
            .getProducts()
            .subscribe({
              next: (response: ApiResponse<Readonly<Product[]>>) => {
                if (response.data !== null) {
                  this.products.set(response.data)
                  this.errorInfo.set('')
                  this.isRequestOver.set(true)
                } else {
                  this.products.set([])
                  this.errorInfo.set(response.message)
                  this.isRequestOver.set(true)
                }
              },
              error: (err) => {
                this.products.set([])
                this.errorInfo.set(err.message)
                this.isRequestOver.set(true)
              }
            });
      },
      3000
    )
  }
}
