import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from './token.storage';

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:8080/api/users/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()
  })

  constructor(private http: HttpClient, private token: TokenStorage) {
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl, { headers: this.headers });
  }

  getVeters() {
    return this.http.get<User[]>(this.baseUrl + 'vet', { headers: this.headers });
  }

  createUser(user) {
    return this.http.post<User>(this.baseUrl, user, { headers: this.headers });
  }

  public findOne(user) {
    return this.http.get<User>(this.baseUrl + user.id, { headers: this.headers });
  }

  public updateAnimal(user) {
    return this.http.put(this.baseUrl + user.id, user, { headers: this.headers });
  }

}
