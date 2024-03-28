import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { AngularTestingComponent } from './angular-testing/angular-testing.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    HomeComponent,
    RouterLink,
    DetailsComponent,
    HeaderComponent,
    CommonModule,
    ParentComponent,
    AngularTestingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Angular-17 Project';
}
