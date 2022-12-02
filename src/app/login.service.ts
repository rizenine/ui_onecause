import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  handleLogin(login: any): Observable<any>{
    return this.http.post(this.apiUrl, login, httpOptions);
  }

  handleToken(): Observable<any>{
    return this.http.get<any>(this.apiUrl, httpOptions);
  }
}
