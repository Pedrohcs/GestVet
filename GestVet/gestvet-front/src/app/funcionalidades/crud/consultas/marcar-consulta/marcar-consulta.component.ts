import { Component, OnInit } from '@angular/core';
import {VendasService} from '../../../../services/vendas.service';
import {Venda} from '../../../../models/venda.model';
import { Animal } from '../../../../models/animal.model';
import { User } from '../../../../models/user.component';
import { Medicamento } from '../../../../models/medicamento.model';
import { MedicamentoService } from '../../../../services/medicamento.service';
import { AnimaisService } from '../../../../services/animais.service';
import { UsersService } from '../../../../services/users.service';
import {AuthService} from '../../../../services/auth.service';
import {Consulta} from '../../../../models/consulta.model';
import {ConsultasService} from '../../../../services/consultas.service';
import {Procedimento} from '../../../../models/procedimento.model';

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './marcar-consulta.component.html',
  styleUrls: ['./marcar-consulta.component.scss']
})
export class MarcarConsultaComponent implements OnInit {
  user: any;

  animalSelected: Animal;
  animaisDisponiveis: any;
  dateSelected: any;
  consultaSelected: any;
  procedimentoSelected: any;
  procedimentosDisponiveis: any;
  registro: any;
  realizado: any;
  retorno: any;

  historicoConsultas: any;

  isLoading = true;
  finishedCreatingConsulta = true;

  constructor(private authService: AuthService, private vendasService: VendasService,
              private medicamentoService: MedicamentoService, private animalService: AnimaisService,
              private consultaService: ConsultasService) {
    authService.getCurrentUser().subscribe(next => {
      this.user = next;
      console.log(this.user);
    });

    const promises = [];
    promises.push(this.animalService.getAnimais().toPromise());
    //promises.push(this.consultaService.getConsultas().toPromise());
    Promise.all(promises).then(([animais, consultas]) => {
      this.animaisDisponiveis = animais;
      this.historicoConsultas = consultas;
      this.procedimentosDisponiveis = Object.values(Procedimento).filter(object => typeof object === 'string');
      console.log(this.procedimentosDisponiveis);
      this.isLoading = false;
    });
  }
  // consultas.filter(consulta => consulta.animal.id === this.animalSelected.id);

  ngOnInit() {
  }

  marcarConsulta() {
    this.finishedCreatingConsulta = false;
    const consulta = new Consulta();
    consulta.animal = this.animalSelected;
    consulta.dataMarcada = this.dateSelected;
    consulta.consultaOrigem = this.consultaSelected;
    consulta.procedimento = this.procedimentoSelected;
    consulta.registro = this.registro;
    consulta.realizado = this.realizado;
    consulta.retorno = this.retorno;
    consulta.veterinario = this.user;
    this.consultaService.createConsulta(consulta).toPromise().then(() => {
      this.finishedCreatingConsulta = true;
    });
  }

}
