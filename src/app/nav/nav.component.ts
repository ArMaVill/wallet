import { Component, OnInit } from "@angular/core";
import { UserLoginComponent } from "../user/user-login/user-login.component";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  title: String;
  constructor() {
    this.title = "Save";
  }

  login() {
    UserLoginComponent.login();
  }
  ngOnInit() {}
}
