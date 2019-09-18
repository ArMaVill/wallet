import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { AuthenticationService } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  loading = false;
  user: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.user().subscribe(users => {
      this.loading = false;
      this.user = users;
    });
  }
}
