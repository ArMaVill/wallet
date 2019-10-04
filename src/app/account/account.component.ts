import { Component, OnInit } from "@angular/core";
import { ModalService } from "../_services/modal.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  title = "Account";
  accounts = [
    { name: "Billetera", balance: 1120, color: "#009ccc" },
    { name: "Banco", balance: 750000, color: "#ba2402" },
    { name: "Banco Ahorros", balance: 750000, color: "#00cc4e" }
  ];

  constructor(private modalService: ModalService) {}

  addAccount(name, balance, color) {
    const newAccount = {
      name: name.value,
      balance: balance.valum,
      color: color.value
    };
    this.accounts.push(newAccount);
    name.value = "";
    name.focus();
    balance.value = "";
    return false;
  }

  deleteAccount(account) {
    const index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
  }

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
