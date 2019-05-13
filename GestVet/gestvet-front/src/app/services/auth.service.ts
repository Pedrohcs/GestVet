import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(username: string, password: string) {
    const credentials = {username: username, password: password};
    return this.http.post('http://localhost:8080/api/auth/signin', credentials);
  }

}
