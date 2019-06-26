import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.component';

@Injectable()
export class UsersService {

  baseUrl = 'http://localhost:8080/api/auth/';
  userLogged: any = null;

  constructor(private http: HttpClient) {
  }

  getUserLogged() {
    return this.http.get<User[]>(this.baseUrl + 'logged-user');
  }

}
