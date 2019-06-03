import { Component, OnInit } from '@angular/core';
import {VendasService} from '../../../../services/vendas.service';
import {AuthService} from '../../../../services/auth.service';
import {UsersService} from '../../../../services/users.service';
import {TokenStorage} from '../../../../services/token.storage';
import {ConsultasService} from '../../../../services/consultas.service';

@Component({
  selector: 'app-consultar-venda',
  templateUrl: './consultar-venda.component.html',
  styleUrls: ['./consultar-venda.component.scss']
})
export class ListarConsultasComponent implements OnInit {

  historicoConsultas: any;

  constructor(private consultasService: ConsultasService) {
    this.consultasService.getConsultas().toPromise().then(consultas => {
      this.historicoConsultas = consultas;
      console.log(consultas);
    });
    // this.usersService.getByUsername(this.usersService.userLogged).toPromise().then(users => {
    //   console.log(users);
    // });
  }

  ngOnInit() {

  }

}
