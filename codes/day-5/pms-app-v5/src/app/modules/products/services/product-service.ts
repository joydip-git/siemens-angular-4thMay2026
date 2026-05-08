import { Inject, inject, Injectable } from '@angular/core';
import { IServiceContract } from './service-contract';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../models/apirespone';
import { PRODUCT_API_URL_TOKEN } from '../../../configs/constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService implements IServiceContract {

  private _http = inject(HttpClient);
  private _url = inject(PRODUCT_API_URL_TOKEN)

  // constructor(http:HttpClient,@Inject(PRODUCT_API_URL_TOKEN) url:string) {
  //   this._http = http
  //   this._url = url
  // }

  addProduct(p: Product): Observable<ApiResponse<Readonly<Product[]>>> {
    return this._http.post<ApiResponse<Readonly<Product[]>>>(this._url, p);
  }

  updateProduct(id: number, p: Product): Observable<ApiResponse<Readonly<Product[]>>> {
    return this._http.put<ApiResponse<Readonly<Product[]>>>(`${this._url}\${id}`, p)
  }

  deleteProduct(id: number): Observable<ApiResponse<Readonly<Product[]>>> {
    return this._http.delete<ApiResponse<Readonly<Product[]>>>(`${this._url}\${id}`)
  }

  getProducts(): Observable<ApiResponse<Readonly<Product[]>>> {
    // return this._http.get<ApiResponse<Readonly<Product[]>>>(this._url, {
    //   headers: {
    //     Authorization:`Bearer ${sessionStorage.getItem('token')}`
    //   }
    // })
    return this._http.get<ApiResponse<Readonly<Product[]>>>(this._url)
  }

  getProduct(id: number): Observable<ApiResponse<Readonly<Product>>> {
    return this._http.get<ApiResponse<Readonly<Product>>>(`${this._url}/${id}`)
  }
}
