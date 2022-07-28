import { User } from '../user/model/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = [];
  user : User = {} as User;

  constructor(private rs : UserService) { }

  ngOnInit(): void {
  }

  createUser(data: any) {
    this.user.username = data.username;
    this.user.password = data.password;
    this.user.role = data.role;
    this.rs.create(this.user);
  }

  authenticateUser(data: any) {
    this.user.username = data.username;
    this.user.password = data.password;
    this.user.role = data.role;
    this.rs.authenticate(this.user);
  }
}
