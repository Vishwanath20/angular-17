import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }
  public quoteList:string[] = [];

  addNewQuote(data: string) {
   this.quoteList.push(data);
   console.log("In quote service::quoteList is::", this.quoteList);
   
  }

  getQuote() {
   return this.quoteList;
  }

  removeQuote(index:number) {
   this.quoteList.splice(index, 1);
  }

}
