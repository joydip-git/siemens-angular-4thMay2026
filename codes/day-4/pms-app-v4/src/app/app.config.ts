import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideProductApiUrlProvider, provideProductServiceProvider } from './configs/service-providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductServiceProvider(),
    provideProductApiUrlProvider()
    //ProductService
  ]
};
