import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fetch-image.component.html',
  styleUrl: './fetch-image.component.css',
})
export class FetchImageComponent {
 
  timeLeft:number = 30;
  interval:any;

  ngOnInit(){
    this.startTimer();
  }

  startTimer(){
    setInterval(()=>{
      if(this.timeLeft >0){
        this.timeLeft--
      }
      else{
        this.timeLeft = 0;

      }
    }, 1000);
  }
}
