import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { AuthenticationService } from "./authentication.service";
import { User } from "../models/user";
@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: User;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  all(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/users`);
  }

  user(): Observable<any[]> {
    const result = this.http.get<any[]>(`${environment.apiUrl}/user`);

    return result;
  }

  register(username, email, password) {
    const user = { username, email, password };

    return this.http.post(`${environment.apiUrl}/user/register`, user);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
