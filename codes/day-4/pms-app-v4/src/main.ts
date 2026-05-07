import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationRef } from '@angular/core';

async function bootstrapApp() {
  try {
    const p: Promise<ApplicationRef> = bootstrapApplication(App, appConfig)
    const appRef: ApplicationRef = await p;
    console.log(appRef.components);
  } catch (error) {
    console.log(error);
  }
}

bootstrapApp();
