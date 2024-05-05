import { Component } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle-hook',
  standalone: true,
  imports: [ChildComponentComponent, CommonModule],
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent {

  parentData:any = "Parent component Data";
  destroy: boolean = true;

  changeData(inputData:HTMLInputElement){
    this.parentData = inputData.value;
  }

  destroyComponent(){
    this.destroy = false;
  }
}
