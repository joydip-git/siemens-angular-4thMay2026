//import { Injectable } from '@angular/core';
import { IServiceContract } from './service-contract';
import { Product } from '../../../models/product';
import { productrecords } from '../../../data/productrecords';

// @Injectable({
//   providedIn: 'root',
// })
export class ProductService implements IServiceContract {
  getProducts(): Readonly<Product[]> {
    return [...productrecords]
  }
}
