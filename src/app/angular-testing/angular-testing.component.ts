import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-angular-testing',
  standalone: true,
  imports: [],
  templateUrl: './angular-testing.component.html',
  styleUrl: './angular-testing.component.css'
})
export class AngularTestingComponent {

  title = 'Welcome to angular-unit-test!';

  
  constructor(private quoteService:QuoteService){}

   count:number = 1;

  addQuote(){
    this.count = this.count+1;
    let data = "data" + this.count;
    this.quoteService.addNewQuote(data);
  }

  getQuote(){
    let data = this.quoteService.getQuote();
    console.log("Quote Data is:::", data);
  }
  
}
