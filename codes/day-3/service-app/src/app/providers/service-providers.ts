import { ClassProvider, Provider } from "@angular/core";
import { SERVICE_CLASS, SERVICE_TOKEN } from "../configs/constants";

// export const provideDataServiceProvider = (): ClassProvider => {
//     const dsProvider: ClassProvider = {
//         provide: SERVICE_TOKEN,
//         useClass: SERVICE_CLASS
//     }
//     return dsProvider
// }

export const provideDataServiceProvider = (): Provider => {
    const dsProvider: Provider = {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_CLASS
    }
    return dsProvider
}