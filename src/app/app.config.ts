import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {routeConfig} from './app.routes'
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './my-counter-component/counter.reducer';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()]
// };

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig),
    provideClientHydration(),
    provideHttpClient(),
    provideStore(),
    provideState({  name: 'count', reducer: counterReducer }),
  ]
};
