import { User } from './model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserService {

    constructor(private http : HttpClient) { }

    createEndpoint: string = "https://localhost:44380/User/Create";
    authenticateEndpoint: string = "https://localhost:44380/User/Authenticate";

    create(user: any) {
        this.http.post(this.createEndpoint, user).subscribe((data)=> {
          return data;
        })
      }

      Username: string = "";
      Password: string = "";
      query: string = "?Username=" + this.Username + "&" + "Password" + "=" + this.Password;
      authenticate(username: string, password: string) {
        this.http.post(this.authenticateEndpoint + this.query, "").subscribe((data)=> {
          return data;
        })
      }
}