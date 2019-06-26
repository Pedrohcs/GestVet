import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorage } from '../services/token.storage';
import {UsersService} from '../services/users.service';

interface token {
  accessToken: string,
  tokenType: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
    if (token.getToken() !== undefined) {
      router.navigate(['/user']);
    }
  }

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).toPromise().then(
      data => {
        console.log(data);
        this.token.saveToken((data as token).accessToken);
        this.router.navigate(['user']);
      }
    );
  }

}
