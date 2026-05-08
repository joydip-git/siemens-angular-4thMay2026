import { Observable } from "rxjs";
import { Product } from "../../../models/product";
import { ApiResponse } from "../../../models/apirespone";

export interface IServiceContract {
    getProducts(): Observable<ApiResponse<Readonly<Product[]>>>;
    getProduct(id: number): Observable<ApiResponse<Readonly<Product>>>;
    addProduct(p: Product): Observable<ApiResponse<Readonly<Product[]>>>;
    updateProduct(id: number, p: Product): Observable<ApiResponse<Readonly<Product[]>>>;
    deleteProduct(id: number): Observable<ApiResponse<Readonly<Product[]>>>;
}