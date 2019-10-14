import { Component, OnInit, Injectable, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAccountComponent } from './add-account/add-account.component';

import { IncomeComponent } from '../income/income.component';
import { TransferComponent } from '../transfer/transfer.component';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title: String;
  loading = false;
  accounts: any[];
  currentUser: User;
  toUpdate = false;

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.updateAccounts();
    this.accountService.change.subscribe(toUpdate => this.updateAccounts());
  }

  updateAccounts() {
    this.accountService.getAccounts().subscribe(x => (this.accounts = x));
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddAccountComponent);
    dialogRef.componentInstance.onAdd.subscribe(() => {
      this.accountService.getAccounts().subscribe(x => (this.accounts = x));
    });
  }

  openIncomeDialog(option) {
    let dialogRef = this.dialog.open(IncomeComponent, {
      data: { selectedAccount: option }
    });
    dialogRef.componentInstance.onIncome.subscribe(() => {
      this.accountService.getAccounts().subscribe(x => (this.accounts = x));
    });
  }

  openTransferDialog(option) {
    let dialogRef = this.dialog.open(TransferComponent, {
      data: { selectedAccount: option }
    });
    dialogRef.componentInstance.onTransfer.subscribe(() => {
      this.accountService.getAccounts().subscribe(x => (this.accounts = x));
    });
  }
}
