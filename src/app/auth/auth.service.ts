import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {

    //return this.http.post<any>('http://your-backend/login', { email, password });
    if(email != '' && password != ''){
      return;
    }
   this.IsLoggedIn()
  }

  IsLoggedIn(){
    return true;
  }
}
