import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { LoginComponent } from './user/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.inteceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { MatDialogModule } from '@angular/material';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    DashboardComponent,
    AccountComponent,
    AddAccountComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    IncomeComponent,
    ExpensesComponent,
    RegisterComponent,
    AddExpenseComponent,
    TransferComponent
  ],
  entryComponents: [AddAccountComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
