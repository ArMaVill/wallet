import { Injectable, EventEmitter, Output } from '@angular/core';
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
  accounts: any[];
  expenses = [];
  toUpdate = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  getAccounts() {
    const result = this.http.get<any[]>(`${environment.apiUrl}/user/accounts`);

    return result;
  }

  update() {
    console.log(this.toUpdate);
    this.toUpdate = !this.toUpdate;
    this.change.emit(this.toUpdate);
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

  addExpense(account, expense, amount) {
    const newExpense = { account, expense, amount };
    return this.http.post(`${environment.apiUrl}/user/expenses`, newExpense);
  }

  addIncome(account, amount) {
    const income = { account, amount };
    return this.http.post(`${environment.apiUrl}/user/income`, income);
  }

  add(newAccount) {
    return this.http.post(`${environment.apiUrl}/user/accounts`, newAccount);
  }

  transfer(from, to, amount) {
    const transfer = { from, to, amount };
    return this.http.post(`${environment.apiUrl}/user/transfer`, transfer);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
