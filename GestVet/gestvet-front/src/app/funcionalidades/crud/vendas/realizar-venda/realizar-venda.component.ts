import { Component, OnInit } from '@angular/core';
import {VendasService} from '../../../../services/vendas.service';
import {Venda} from '../../../../models/venda.model';
import { Animal } from '../../../../models/animal.model';
import { User } from '../../../../models/user.component';
import { Medicamento } from '../../../../models/medicamento.model';
import { MedicamentoService } from '../../../../services/medicamento.service';
import { AnimaisService } from '../../../../services/animais.service';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './realizar-venda.component.html',
  styleUrls: ['./realizar-venda.component.scss']
})
export class RealizarVendaComponent implements OnInit {

  constructor(private userService: UsersService, private vendasService: VendasService, private medicamentoService: MedicamentoService, private animalService: AnimaisService) {
    this.medicamentoService.getMedicamentos().toPromise().then(medicamentos => {
      console.log(medicamentos);
    });
    this.animalService.getAnimais().toPromise().then(animais => {
      console.log(animais);
    });
    this.userService.getUserLogged().toPromise().then(userLogged => {
      console.log(userLogged);
    });
  }

  ngOnInit() {

  }

  realizarVenda() {
    const venda = new Venda();
    venda.animal = this.animalSelected;
    venda.vendedor = this.user;
    venda.medicamento = this.medicamentoSelected;
    venda.quantidade = this.quantidadeSelected;
    venda.data = new Date();
    this.vendasService.createVenda(venda).toPromise().then(result => {
      console.log(result);
    });
  }

}
