import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expenses = [];
  accounts: any;
  expenseForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  onExpense = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  get f() {
    return this.expenseForm.controls;
  }

  ngOnInit() {
    this.accountService.getExpenses().subscribe(x => (this.expenses = x));
    this.accountService.getAccounts().subscribe(x => (this.accounts = x));
    this.expenseForm = this.formBuilder.group({
      account: ['', Validators.required],
      expense: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }
  onSubmit() {
    this.accountService
      .addExpense(
        this.f.account.value,
        this.f.expense.value,
        this.f.amount.value
      )
      .subscribe(() => this.onExpense.emit());
    this.dialogRef.close(false);
  }
}
