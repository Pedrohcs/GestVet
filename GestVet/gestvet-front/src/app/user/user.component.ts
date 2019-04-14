import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../token.storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private token: TokenStorage) { }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
  }

}
