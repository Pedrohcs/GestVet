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

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './realizar-venda.component.html',
  styleUrls: ['./realizar-venda.component.scss']
})
export class RealizarVendaComponent implements OnInit {
  user: any;

  animalSelected: any;
  medicamentoSelected: any;
  quantidadeSelected = 0;

  medicamentosDisponiveis: any;
  animaisDisponiveis: any;

  isLoading = true;
  isRealizandoVenda = false;

  constructor(private authService: AuthService, private vendasService: VendasService, private medicamentoService: MedicamentoService, private animalService: AnimaisService) {
    authService.getCurrentUser().subscribe(next => {
      this.user = next;
      console.log(this.user);
    });
    const promises = [];
    promises.push(this.medicamentoService.getMedicamentos().toPromise());
    promises.push(this.animalService.getAnimais().toPromise());
    Promise.all(promises).then(([medicamentos, animais]) => {
      medicamentos.filter((med) => med.quantidade > 0);
      this.medicamentosDisponiveis = medicamentos;
      this.animaisDisponiveis = animais;
      console.log(medicamentos, animais);
      this.isLoading = false;
    });
    // this.medicamentoService.getMedicamentos().toPromise().then(medicamentos => {
    //   console.log(medicamentos);
    // });
    // this.animalService.getAnimais().toPromise().then(animais => {
    //   console.log(animais);
    // });
    // authService.getCurrentUser().toPromise().then(user => {
    //   console.log(user);
    // });
  }

  ngOnInit() {

  }



  realizarVenda() {
    console.log(this.medicamentoSelected, this.animalSelected);
    console.log(this.quantidadeSelected);
    if(this.medicamentoSelected === 'default' || this.animalSelected === 'default' || this.quantidadeSelected <= 0) {
      alert('Por favor, selecionar medicamento, animal e a quantidade desejada.');
    } else {
      this.isRealizandoVenda = true;
      const venda = new Venda();
      venda.animal = this.animaisDisponiveis.find((animal) => {
        return animal.nome === this.animalSelected;
      });
      venda.vendedor = this.user;
      venda.medicamento = this.medicamentosDisponiveis.find((medicamento) => {
        return medicamento.nome === this.medicamentoSelected;
      });
      venda.quantidade = this.quantidadeSelected;
      venda.data = new Date();
      console.log(venda);
      this.vendasService.createVenda(venda).toPromise().then(result => {
        venda.medicamento.quantidade--;
        this.medicamentoService.updateMedicamento(venda.medicamento).toPromise().then(() => {
          this.isRealizandoVenda = false;
          console.log(venda);
        });
      });
    }

  }

}
