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
import { AdminComponent } from './admin/admin/admin.component';
import { ReactiveFormExample2Component } from './AngularformExample/reactive-form-example-2/reactive-form-example-2.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { MyCounterComponentComponent } from './my-counter-component/my-counter-component.component';
import { AngularTestingComponent } from './angular-testing/angular-testing.component';
import { ParentContainerComponent } from './dynamic-component/parent-container/parent-container.component';
import { DirectiveComponent } from './directive/directive/directive.component';
import { SearchFeatureComponent } from './search-feature/search-feature.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { FetchImageComponent } from './fetch-image/fetch-image.component';
import { DataFetchComponent } from './data-fetch/data-fetch.component';

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
      path:'admin',
      component:AdminComponent
    },
    {
      path:'reactive-form-example-2',
      component:ReactiveFormExample2Component
    },
    {
      path:'impurePipe',
      component:ImpurePipeComponent
    },
    {
      path:'angular-life-cycle-hooks',
      component:LifeCycleHookComponent
    },
    {
      path:'ngrx-example',
      component:MyCounterComponentComponent
    },
    {
      path:"angular-testing-example",
      component: AngularTestingComponent
    },
    {
      path:'dynamic-component-example',
      component:ParentContainerComponent
    },
    {
      path:'directive-example',
      component:DirectiveComponent
    },
    {
      path:'search-feature-example',
      component:SearchFeatureComponent
    },
    {
      path:'rxjs-example',
      component:RxjsExampleComponent
    },
    {
      path:'fetch-image',
      component:FetchImageComponent
    },
    {
      path:'data-fetch',
      component:DataFetchComponent
    }
  ];
  
