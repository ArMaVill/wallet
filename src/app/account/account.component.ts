import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = 'Account';
  accounts = [{ name: 'Wallet', balance: 1120 }];

  constructor() {}

  addAccount(name, balance) {
    const newAccount = { name: name.value, balance: balance.value };
    this.accounts.push(newAccount);
    name.value = '';
    name.focus();
    balance.value = '';
    return false;
  }

  deleteAccount(account) {
    const index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
  }

  ngOnInit() {}
}
