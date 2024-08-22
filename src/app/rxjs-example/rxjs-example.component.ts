import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error, log } from 'console';
import { delay, forkJoin, interval, map, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.css'
})
export class RxjsExampleComponent implements OnInit {

   showMapExampleDiv:boolean = false;
   showMapData:any=[];
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    const api1 = 'https://jsonplaceholder.typicode.com/posts';
    const api2 = 'https://jsonplaceholder.typicode.com/users';
    const request1 = this.http.get(api1);
    const request2 = this.http.get(api2);

    // forkJoin([request1, request2]).subscribe(([res1,res2])=>{
    //   console.log('Response from API 1:', res1);
    //     console.log('Response from API 2:', res2);
    // },
    // error=>{
    //   console.log('Error:',error); 
    // }
    // )

    forkJoin([request1,request2]).subscribe({
      next:([res1,res2])=>{
        console.log('Api1 response:', res1);
        console.log('Ap2 response:',res2);
      },
      error:error=>{
        console.error('Error:',error);
      },
      complete:()=>{
        console.log('Both request Completed');
      }
    })

  }

  showMapExample(){
    this.showMapExampleDiv = true;
    console.log('------showMapExample--------');
    const letter = of('a','b','c');
    const number = of(1,2,3);
    letter.pipe(mergeMap(letter => number.pipe(map(number=>
      `${letter}${number}`
    )))).subscribe(result => {
      console.log(typeof result);
      
      this.showMapData.push(result);
      console.log(typeof this.showMapData);
    })
  }  
}
