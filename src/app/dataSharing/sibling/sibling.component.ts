import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-sibling',
  standalone: true,
  imports: [],
  templateUrl: './sibling.component.html',
  styleUrl: './sibling.component.css'
})
export class SiblingComponent implements OnDestroy{

  data!: string;
  private subscription: Subscription;

  constructor(private sharedDataService: SharedService) {
    this.subscription = this.sharedDataService.data$.subscribe(data => {
      this.data = data;
      console.log('-----sibling component----', this.data);
      
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
