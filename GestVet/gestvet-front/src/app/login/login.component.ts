import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorage } from '../services/token.storage';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage, private usersService: UsersService) {
  }

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).toPromise().then(
      data => {
        this.token.saveToken(data.toString());
        this.usersService.userLogged = this.username;
        this.router.navigate(['user']);
      }
    );
  }

}
