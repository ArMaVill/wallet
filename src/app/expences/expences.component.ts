import { Component, OnInit } from "@angular/core";
import { AccountService } from "../_services/account.service";
@Component({
  selector: "app-expences",
  templateUrl: "./expences.component.html",
  styleUrls: ["./expences.component.css"]
})
export class ExpencesComponent implements OnInit {
  expenses = [];
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.expenses = this.accountService.getExpenses();
  }
}
