import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountComponent } from "./account/account.component";

import { UserLoginComponent } from "./user/user-login.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { IncomeComponent } from "./income/income.component";
import { ExpencesComponent } from "./expences/expences.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    AccountComponent,

    UserLoginComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    IncomeComponent,
    ExpencesComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
