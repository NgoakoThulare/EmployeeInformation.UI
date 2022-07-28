import { User } from './model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserService {

    constructor(private http : HttpClient) { }

    createEndpoint: string = "https://localhost:44389/api/Beneficiary/List";
    authenticateEndpoint: string = "https://localhost:44389/api/Beneficiary/Create";

    create(user: any) {
        this.http.post(this.createEndpoint, user).subscribe((data)=> {
          return data;
        })
      }

      authenticate(user: any) {
        this.http.post(this.createEndpoint, user).subscribe((data)=> {
          return data;
        })
      }
    
}