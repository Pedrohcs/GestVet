import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../services/token.storage';
import { AnimaisService } from '../services/animais.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  animais: Array<Animal> = new Array();

  constructor(private token: TokenStorage, private animaisService: AnimaisService) { }

  ngOnInit() {
  }

  getAnimais() {
    this.animaisService.getAnimais().toPromise().then( animais => {
      this.animais = animais;
    });
  }

  logout() {
    this.token.signOut();
  }

}
