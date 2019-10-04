import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../user/login.component";

import { Router } from "@angular/router";
import { User } from "../models/user";
import { AuthenticationService } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  title: String;
  loading = false;
  user: User[];
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.title = "$ave";
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.loading = true;
    if (this.currentUser) {
      this.userService.user().subscribe(users => {
        this.loading = false;
        this.user = users;
        console.log(this.user);
      });
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  navStatus: boolean = false;
  activateNav() {
    this.navStatus = !this.navStatus;
  }
}
