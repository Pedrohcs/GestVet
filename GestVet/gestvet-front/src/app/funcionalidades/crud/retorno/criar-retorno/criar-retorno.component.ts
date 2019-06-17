import { Component, OnInit } from '@angular/core';


import { Consulta } from '../../../../models/consulta.model';
import { ConsultaService} from '../../../../services/consulta.service';

@Component({
  selector: 'app-criar-retorno',
  templateUrl: './criar-retorno.component.html',
  styleUrls: ['./criar-retorno.component.scss']
})
export class CriarRetornoComponent implements OnInit {
  
 animal: Consulta = new Consulta();

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
  }

  createRetorno(): void {
    if(this.consulta.veterinario == null ||
      this.consulta.animal == (null || '') ||
      this.consulta.dataMarcada == (null || '') ||
      this.consulta.registro == (null || '') ||
      this.consulta.realizado == (null || '') ||
      this.consulta.retorno == (null || '') ||
      this.consulta.consultaOrigem == (null || '') ||
      this.consulta.procedimento == (null || '') ) {
      alert('Todos os campos devem ser preenchidos');
      return;
    }

    this.consultaService.createRetorno(this.consulta)
      .subscribe(data => {
        alert("Retorno cadastrado com sucesso.");
        (document.getElementById("formRetorno") as HTMLFormElement).reset();
      });

  }

}
