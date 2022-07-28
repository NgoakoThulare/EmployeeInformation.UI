import { User } from './../user/model/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
