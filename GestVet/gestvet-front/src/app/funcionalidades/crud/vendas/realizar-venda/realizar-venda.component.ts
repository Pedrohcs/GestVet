import { Component, OnInit } from '@angular/core';
import {VendasService} from '../../../../services/vendas.service';
import {Venda} from '../../../../models/venda.model';

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './realizar-venda.component.html',
  styleUrls: ['./realizar-venda.component.scss']
})
export class RealizarVendaComponent implements OnInit {

  constructor(private vendasService: VendasService) {
    const venda = new Venda();
    venda.quantidade = 2;

    venda.animal_id = 1;
    venda.medicamento_id = 1;
    venda.user_id = 1;
    venda.data = new Date();

    // this.vendasService.createVenda(venda).toPromise().then(result => {
    //   console.log(result);
    // });
  }

  ngOnInit() {

  }

}
