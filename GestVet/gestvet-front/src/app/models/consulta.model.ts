import { Animal } from './animal.model';
import { Procedimento } from './procedimento.model';
import { User } from './user.model';
export class Consulta {
  id: number;
  veterinario: User;
  animal: Animal;
  dataMarcada: Date;
  registro: string;
  realizado: Boolean;
  retorno: Boolean;
  consultaOrigem: any;
  procedimento: Procedimento;

  constructor() {
    this.id = null;
    this.veterinario = new User();
    this.animal = new Animal();
    this.dataMarcada = null;
    this.realizado = false;
    this.registro = null;
    this.retorno = false;
    this.consultaOrigem = null;
    this.procedimento = null;
  }

}
