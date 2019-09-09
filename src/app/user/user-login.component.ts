import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email = '';
  password = '';
  userList = [];

  getUsers() {
    this.userService.login().subscribe(users => (this.userList = users));
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }
}
