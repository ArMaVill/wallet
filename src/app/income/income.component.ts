import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  expenses = [];
  accounts: any[];
  incomeForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  get f() {
    return this.incomeForm.controls;
  }

  ngOnInit() {
    this.accountService.getExpenses().subscribe(x => (this.expenses = x));
    this.accountService.getAccounts().subscribe(x => (this.accounts = x));
    this.incomeForm = this.formBuilder.group({
      account: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }
  onSubmit() {
    this.f.account.value,
      this.accountService.addIncome(this.f.account.value, this.f.amount.value);
    this.dialogRef.close(false);
  }
}
