import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private dataSubject = new BehaviorSubject<string>('Initial Shared Data for Siblings');
  data$ = this.dataSubject.asObservable();

  setData(data: string) {
    this.dataSubject.next(data);
  }
}
