import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../../services/consulta.service';
import { AnimaisService } from '../../../../services/animais.service';
import { UserService } from '../../../../services/user.service';
import { Consulta } from '../../../../models/consulta.model';
import { Procedimento } from '../../../../models/procedimento.model';
import { User } from '../../../../models/user.model';
import { Animal } from '../../../../models/animal.model';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.component.html',
  styleUrls: ['./criar-consulta.component.scss'],
  providers: [UserService, AnimaisService, ConsultaService]
})
export class CriarConsultaComponent implements OnInit {

  consulta: Consulta = new Consulta();
  Procedimento = Procedimento;
  veterinarios : User[];
  animal : number;
  user : number;
  animais : Animal[];
  consultas :  Consulta[];

  constructor(private consultaService: ConsultaService, private userService: UserService, private animaisService: AnimaisService) {}

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

  createConsulta(): void {
    this.consulta.animal.id = this.animal;
    this.consulta.veterinario.id = this.user;
    this.consulta.retorno = false; 
    this.consulta.realizado = false;
    if(this.consulta.veterinario == null ||
    this.consulta.animal == null ||
    this.consulta.dataMarcada == null ||
    this.consulta.registro == (null || '') ||
    this.consulta.realizado == null ||
    this.consulta.procedimento == null ) {
    alert('Todos os campos devem ser preenchidos');
    return;
  }

  
  this.consultaService.createConsulta(this.consulta)
      .subscribe(data => {
        alert("Consulta cadastrada com sucesso.");
        (document.getElementById("formConsulta") as HTMLFormElement).reset();
      });
  }

}
