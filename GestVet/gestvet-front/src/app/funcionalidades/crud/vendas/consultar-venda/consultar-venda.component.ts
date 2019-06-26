import { Component, OnInit } from '@angular/core';
import {VendasService} from '../../../../services/vendas.service';
import {AuthService} from '../../../../services/auth.service';
import {UsersService} from '../../../../services/users.service';
import {TokenStorage} from '../../../../services/token.storage';

@Component({
  selector: 'app-consultar-venda',
  templateUrl: './consultar-venda.component.html',
  styleUrls: ['./consultar-venda.component.scss']
})
export class ConsultarVendaComponent implements OnInit {

  historicoVendas: any;

  constructor(private vendasService: VendasService, private usersService: UsersService) {
    this.vendasService.getVendas().toPromise().then(vendas => {
      this.historicoVendas = vendas;
      console.log(vendas);
    });
    // this.usersService.getByUsername(this.usersService.userLogged).toPromise().then(users => {
    //   console.log(users);
    // });
  }

  ngOnInit() {

  }

}
