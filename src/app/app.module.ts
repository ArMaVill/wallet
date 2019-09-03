import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { IncomeComponent } from "./income/income.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DailyComponent } from "./daily/daily.component";

import { ExpenseComponent } from "./expense/expense.component";
import { AccountComponent } from "./account/account.component";
import { AccountListComponent } from "./account-list/account-list.component";
import { IncomeListComponent } from "./income/income-list.component";
import { ExpenseListComponent } from "./expense/expense-list.component";
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IncomeComponent,
    DashboardComponent,
    DailyComponent,
    ExpenseComponent,
    AccountComponent,
    AccountListComponent,
    IncomeListComponent,
    ExpenseListComponent,
    TransactionComponent,
    UserComponent,
    UserLoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
