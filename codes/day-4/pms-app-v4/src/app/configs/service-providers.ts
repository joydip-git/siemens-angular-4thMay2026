import { ClassProvider, Provider, ValueProvider } from "@angular/core";
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_CLASS, PRODUCT_API_URL_TOKEN, PRODUCT_API_URL } from "./constants";

export const provideProductServiceProvider = (): ClassProvider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_CLASS
    }
}

export const provideProductApiUrlProvider = (): ValueProvider => {
    return {
        provide: PRODUCT_API_URL_TOKEN,
        useValue: PRODUCT_API_URL
    }
}