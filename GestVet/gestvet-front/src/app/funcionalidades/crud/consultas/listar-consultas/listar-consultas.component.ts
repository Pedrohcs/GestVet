import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../../../services/consultas.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.scss']
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
