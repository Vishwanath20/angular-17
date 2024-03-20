import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input()
  messageFromParent!: string;

  constructor() { }

  ngOnInit(){
    console.log('messageFromParent!:::', this.messageFromParent!);
    
  }
  
  @Output() messageToParent = new EventEmitter<string>();

  sendMessage() {
    this.messageToParent.emit('Greeting from Child Component');
  }

  @Output() childDataToParent = new EventEmitter<string>();

  sendDataToParent() {
    this.childDataToParent.emit('Data from child to parent');
  }
}
