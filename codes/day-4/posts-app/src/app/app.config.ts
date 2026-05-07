import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TodoServiceContract } from './todo-service-contract';
import { TodoService } from './todo.service';

export const SERVICE_TOKEN = new InjectionToken<TodoServiceContract>('SERVICE_TOKEN')

const provideTodoServiceProvider = (): Provider => {
  return {
    provide: SERVICE_TOKEN,
    useClass: TodoService
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTodoServiceProvider()
    // {
    //   provide: TodoService,
    //   useClass: TodoService
    // }
  ]
};
