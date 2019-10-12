import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { AuthenticationService } from "./authentication.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  currentUser: User;
  accounts = [
    { name: "Billetera", balance: 1120, color: "#009ccc" },
    { name: "Banco", balance: 750000, color: "#ba2402" },
    { name: "Banco Ahorros", balance: 28234980, color: "#00cc4e" }
  ];
  expenses = [
    { name: "Servicos", total: 3000 },
    { name: "Vivienda", total: 235000 },
    { name: "Compras", total: 159675 },
    { name: "Transporte", total: 14950 },
    { name: "Proviciones", total: 33850 },
    { name: "Entretenimiento", total: 120000 }
  ];
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  all() {
    return this.accounts;
  }

  getExpenses() {
    return this.expenses;
  }
  add(newAccount) {
    this.accounts.push(newAccount);
    //return this.http.post(`${environment.apiUrl}/user/register`, newAccount);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
