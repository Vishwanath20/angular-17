import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';


describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add some quote in quotelist array by addNewQuote()', ()=>{
    const data ="newData";
    service.addNewQuote(data);
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  });

  it('should Reutn QuoteList using getQuote()', ()=>{
    const quoteList = service.getQuote();
 //   expect(quoteList).toContain(['newData']);
  })
});
