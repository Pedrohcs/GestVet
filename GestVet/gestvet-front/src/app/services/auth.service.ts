import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorage } from './token.storage';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  baseUrl: string = 'http://localhost:8080/api/auth';
  userLoged: User = new User();

  constructor(private http: HttpClient, private token: TokenStorage) {
  }

  attemptAuth(username: string, password: string) {
    const credentials = {username: username, password: password};
    return this.http.post(this.baseUrl + '/signin', credentials);
  }

  getCurrentUser() {
    return this.http.get(this.baseUrl + '/user/' + this.token.getToken());
  }

}