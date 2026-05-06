import { Provider } from "@angular/core";
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_CLASS } from "./constants";

export const provideProductServiceProvider = (): Provider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass:PRODUCT_SERVICE_CLASS
    }
}