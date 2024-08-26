import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-fetch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-fetch.component.html',
  styleUrl: './data-fetch.component.css'
})
export class DataFetchComponent {

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.fetchData();
  }
  res:any;
  fetchData(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
      this.res = data;
      console.log(this.res);
      
    });
  }
}
