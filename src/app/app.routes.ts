import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormExampleComponent } from './AngularformExample/reactive-form-example/reactive-form-example.component';
import { TemplateDrivenFormExampleComponent } from './AngularformExample/template-driven-form-example/template-driven-form-example.component';
import { ChildComponent } from './dataSharing/parent/child/child.component';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { SiblingComponent } from './dataSharing/sibling/sibling.component';
import { AdminComponent } from './admin/admin.component';
import { AngularTestingComponent } from './angular-testing/angular-testing.component';

export const routes: Routes = [];

export const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:'reactive-form',
      component:ReactiveFormExampleComponent,
      title:"Reactive Form Example"
    },
    {
      path:'template-driven-form',
      component:TemplateDrivenFormExampleComponent
    },
    {
      path:'child-component',
      component:ChildComponent
    },
    {
      path:'parent-component',
      component:ParentComponent
    },
    {
      path:'sibling-component',
      component:SiblingComponent
    },
    {
      path:"admin",
      component: AdminComponent
    },
    {
      path:"angularTestingcomponent",
      component: AngularTestingComponent
    }
  ];
  
