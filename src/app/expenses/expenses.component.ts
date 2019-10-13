import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { MatDialog } from '@angular/material';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@Component({
  selector: 'app-expences',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses = [];
  constructor(
    private accountService: AccountService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.accountService.getExpenses().subscribe(x => (this.expenses = x));
  }

  openDialog(option: any) {
    this.dialog.open(AddExpenseComponent, {
      data: { selectedExpense: option }
    });
  }
}
