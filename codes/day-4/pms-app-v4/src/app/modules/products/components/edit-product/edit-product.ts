import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../../../models/product';
import { StorageService } from '../../services/storage-service';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  private storageSvc = inject(StorageService)
  product = this.storageSvc.productStore;
}
