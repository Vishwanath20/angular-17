import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getData(pageNumber: number, pageSize: number): Observable<HttpResponse<any[]>>  {
    const url = `${this.apiUrl}?_page=${pageNumber}&_limit=${pageSize}`;
    return this.http.get<any[]>(url, { observe: 'response' });
  }

}
