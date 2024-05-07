import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {routeConfig} from './app/app.routes'
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';



  bootstrapApplication(AppComponent,
    {
      providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(),
    provideStore()
]
    }
  ).catch(err => console.error(err));
