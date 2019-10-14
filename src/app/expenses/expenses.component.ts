import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { MatDialog } from '@angular/material';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-expences',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses = [];
  onExpenses = new EventEmitter();
  constructor(
    private accountService: AccountService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.accountService.getExpenses().subscribe(x => (this.expenses = x));
  }

  openDialog(option: any) {
    let dialogRef = this.dialog.open(AddExpenseComponent, {
      data: { selectedExpense: option }
    });
    dialogRef.componentInstance.onExpense.subscribe(() => {
      this.accountService.getExpenses().subscribe(x => (this.expenses = x));
      this.accountService.update();
    });
  }
}
