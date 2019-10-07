import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAccountComponent } from './add-account/add-account.component';

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
  accounts = [];
  currentUser: User;

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.accounts = this.accountService.all();
    console.log(this.accountService.all());
  }

  openDialog() {
    this.dialog.open(AddAccountComponent);
  }
}
