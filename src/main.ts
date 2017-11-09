import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Prop } from "./app/common/props"

if (environment.production) {
  enableProdMode();
}
Prop.API_ENDPOINT = environment.api;

platformBrowserDynamic().bootstrapModule(AppModule);
