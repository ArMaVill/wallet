import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  User = {};
  private baseURL = 'https://wallet-rest.herokuapp.com/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(): Observable<any[]> {
    const result = this.http.get<any[]>(this.baseURL);
    console.log(result);

    return result;
  }
}
