import { Component, OnInit } from '@angular/core';

import { Consulta } from '../../../../models/consulta.model';
import { ConsultaService} from '../../../../services/consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
