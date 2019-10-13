import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';
import { Account } from '../models/account';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentUser: User;
  accounts = [];
  expenses = [];
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  getAccounts() {
    const result = this.http
      .get<any[]>(`${environment.apiUrl}/user/accounts`)
      .pipe(
        map(accounts => {
          this.accounts = accounts;
          return accounts;
        })
      );

    return result;
  }

  getExpenses() {
    const result = this.http
      .get<any[]>(`${environment.apiUrl}/user/expenses`)
      .pipe(
        map(expenses => {
          this.expenses = expenses;
          return expenses;
        })
      );
    return result;
  }

  addExpense(account, expense, ammount) {
    this.accounts[account].balance -= ammount;
    this.expenses[expense].total += ammount;
  }

  addIncome(account, ammount) {
    this.accounts[account].balance += ammount;
  }

  add(newAccount) {
    newAccount.id = this.accounts.length;
    console.log(newAccount);
    this.accounts.push(newAccount);
    //return this.http.post(`${environment.apiUrl}/user/register`, newAccount);
  }

  transfer(from, to, ammount) {
    this.accounts[from].balance -= ammount;
    this.accounts[to].balance += ammount;
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
