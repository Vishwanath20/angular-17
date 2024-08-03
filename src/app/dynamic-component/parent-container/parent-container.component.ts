import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from '../dynamic-host.directive';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-parent-container',
  standalone: true,
  imports: [DynamicHostDirective],
  templateUrl: './parent-container.component.html',
  styleUrl: './parent-container.component.css'
})
export class ParentContainerComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(DynamicHostDirective, { static: true }) dynamicHost!: DynamicHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadDynamicComponent();

   console.log("dynamicHost::",this.dynamicHost);
   
  }

  ngAfterViewInit(): void {
  //  this.loadDynamicComponent();
  }

  ngAfterViewChecked(): void {
   // this.loadDynamicComponent();
  }


  loadDynamicComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    componentRef.instance.name = 'Angular';
  }
}
