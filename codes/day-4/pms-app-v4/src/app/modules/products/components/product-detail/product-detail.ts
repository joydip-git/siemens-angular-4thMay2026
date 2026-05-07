import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../configs/constants';
import { IServiceContract } from '../../services/service-contract';
import { Subscription } from 'rxjs';
import { Product } from '../../../../models/product';
import { LoadSpinner } from "../../../shared/components/load-spinner/load-spinner";
import { StorageService } from '../../services/storage-service';

@Component({
  selector: 'app-product-detail',
  imports: [LoadSpinner],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit, OnDestroy {

  product = signal<Product | undefined>(undefined);
  isRequestOver = signal(false)
  errorInfo = signal('')

  private fetchSubscription?: Subscription;
  private currentRoute: ActivatedRoute = inject(ActivatedRoute)
  private ps: IServiceContract = inject(PRODUCT_SERVICE_TOKEN)
  private router: Router = inject(Router)
  private storageSvc: StorageService = inject(StorageService)

  goToEdit() {
    this.storageSvc.publish(this.product())
    this.router.navigate(['/products', 'edit'])
  }
  ngOnInit(): void {
    // this.currentRoute
    //   .params
    //   .subscribe({
    //     next: (params:Params) => {
    //       const id = Number(params["id"])
    //       console.log(id);
    //     }
    //   })
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot;
    const params: Params = snapshot.params
    const id = Number(params["id"])
    this.fetchProductById(id);
  }

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  fetchProductById(id: number) {
    this.fetchSubscription = this.ps
      .getProduct(id)
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.product.set(response.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.product.set(undefined)
            this.errorInfo.set(response.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.product.set(undefined)
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
