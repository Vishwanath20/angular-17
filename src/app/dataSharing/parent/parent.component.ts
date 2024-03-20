import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {

  messageForChild:string = "Hello from Parent component";

  message!: string;

  ngOnInit(): void {
    console.log('----in Parent component---', this.messageForChild);
    this.sharedDataService.data$.subscribe(message => this.message = message)
 
  }

  messageFromChild!: string;

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }

  @ViewChild(ChildComponent) ChildComponent!: ChildComponent;
  receivedData!: string;

  ngAfterViewInit() {
    this.ChildComponent.childDataToParent.subscribe((data: string) => {
      this.receivedData = data;
    });
  }

  constructor(private sharedDataService: SharedService){}

  setData() {
    this.sharedDataService.setData('Data from One Sibling to another sibling');
  }
}
