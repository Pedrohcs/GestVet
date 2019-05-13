import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.component';

@Injectable()
export class UsersService {

  baseUrl = 'http://localhost:8080/get-by-username';
  userLogged: any = null;

  constructor(private http: HttpClient) {
  }

  getByUsername(username) {
    return this.http.get<User[]>(this.baseUrl, username);
  }

  public findOne(user) {
    return this.http.get<User>(this.baseUrl + user.id);
  }

}
