import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';  // ✅ Import HttpClientModule

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),  // ✅ Provide HttpClient globally
    provideRouter(appRoutes),
  ]
};
