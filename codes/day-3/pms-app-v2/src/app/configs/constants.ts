import { InjectionToken } from "@angular/core"
import { ProductService } from "../modules/products/services/product-service"
import { IServiceContract } from "../modules/products/services/service-contract";

//export const PRODUCT_SERVICE_TOKEN = 'PRODUCT_SERVICE_TOKEN'
export const STRING_TOKEN = 'PRODUCT_SERVICE_TOKEN'
export const PRODUCT_SERVICE_TOKEN = new InjectionToken<IServiceContract>(STRING_TOKEN);
export const PRODUCT_SERVICE_CLASS = ProductService