import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../../models/consulta.model';
import { ConsultaService } from '../../../services/consulta.service';
import { UserService } from '../../../services/user.service';
import { AnimaisService } from '../../../services/animais.service';
import { User } from '../../../models/user.model';
import { Animal } from '../../../models/animal.model';
import { DatePipe } from '@angular/common';
import { Procedimento } from '../../../models/procedimento.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  providers: [UserService, AnimaisService, ConsultaService, DatePipe]
})
export class ConsultaComponent implements OnInit {

 
  consultas: Consulta[];
  animais : Animal[];
  veterinarios : User[];
  consulta: Consulta = new Consulta();
  consultaUpdate: Consulta = new Consulta();
  animal : Animal = new Animal();
  user : User = new User();
  Procedimento = Procedimento;
  findOneById: Consulta =  new Consulta();

  constructor(private consultaService: ConsultaService, private userService: UserService, 
    private animaisService: AnimaisService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.consultaService.getConsultas()
      .subscribe(data => {
        this.consultas = data;
    });
    this.animaisService.getAnimais()
      .subscribe(data => {
        this.animais = data;
    });
    this.userService.getUsers()
      .subscribe(data => {
        this.veterinarios = data;
    });
  }

  findOne(consulta: Consulta): void {
    this.findOneById = null;
    this.consultaService.findOne(consulta)
      .subscribe(data => {
        this.findOneById = data;
        this.consultaUpdate = this.findOneById;
      });
  }

  updateConsulta(): void { 
    console.log(this.consultaUpdate)
    this.consultaService.updateConsulta(this.consultaUpdate)
      .subscribe(data => {
        alert('Consulta Editada!');
        location.reload();
      });
  }

  deletarConsulta(consulta: Consulta): void {

    this.consultaService.deleteConsulta(consulta)
      .subscribe(data => {
        this.consultas = this.consultas.filter(u => u !== consulta);
      });
  }

  editar(_consulta: Consulta): void {
    this.findOneById = Object.assign(this.findOneById, _consulta);
    this.consultaUpdate = Object.assign(this.consultaUpdate, _consulta);
    console.log(_consulta);
    console.log(this.findOneById);
    console.log(this.consultaUpdate);
  }
}
