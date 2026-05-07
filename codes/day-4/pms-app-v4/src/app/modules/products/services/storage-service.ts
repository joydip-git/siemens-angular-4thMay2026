import { Injectable, signal } from '@angular/core';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _productStore = signal<Product | undefined>(undefined);
  public get productStore() {
    return this._productStore;
  }
  public publish(value: Product | undefined) {
    this._productStore.set(value);
  }
}
