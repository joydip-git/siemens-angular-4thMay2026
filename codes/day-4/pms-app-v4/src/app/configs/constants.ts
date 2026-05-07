import { InjectionToken } from "@angular/core"
import { ProductService } from "../modules/products/services/product-service"
import { IServiceContract } from "../modules/products/services/service-contract";

export const PRODUCT_SERVICE_CLASS = ProductService
export const PRODUCT_SERVICE_TOKEN = new InjectionToken<IServiceContract>('PRODUCT_SERVICE_TOKEN');


export const PRODUCT_API_URL = 'http://localhost:3000/products'
export const PRODUCT_API_URL_TOKEN = new InjectionToken<string>('PRODUCT_API_URL_TOKEN')