import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  @Input() dataFromParent = 'Initial Child component Data'; // decorate the property with @Input()

  constructor(){
    console.log("--->Constructor Called..");
    console.log("--->Constructor Called..dataFromParent:::", this.dataFromParent);
  }

  ngOnInit(){
    console.log("--->ngOnInit Called..");
    console.log("--->ngOnInit Called..dataFromParent:::", this.dataFromParent);
  }

  ngOnChanges(changes:SimpleChange){
    console.log("--->ngOnChanges Called..");
    console.log("--->ngOnChanges Called..Changes:::",changes);
  }

  ngAfterContentInit(){
    console.log("--->ngAfterContentInit Called..");
  }

  ngAfterContentChecked(){
    console.log("--->ngAfterContentChecked Called..");
  }

  ngAfterViewInit(){
    console.log("--->ngAfterViewInit Called..");
  }

  ngAfterViewChecked(){
    console.log("--->ngAfterViewChecked Called..");
  }

  ngOnDestroy(){
    console.log("--->ngOnDestroy Called..");
  }
}
