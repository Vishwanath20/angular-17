import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-counter-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-counter-component.component.html',
  styleUrl: './my-counter-component.component.css'
})
export class MyCounterComponentComponent {
  count$: Observable<number>;

  constructor(private store:Store<{count:number}>){
    this.count$ = store.select('count');
  }

  increment(){
    console.log("inside the increment()");
    
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }

}
