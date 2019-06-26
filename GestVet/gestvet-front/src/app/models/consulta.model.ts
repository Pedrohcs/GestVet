import {User} from './user.component';
import {Animal} from './animal.model';
import {Procedimento} from './procedimento.model';

export class Consulta {
  id: number;
  veterinario: User;
  animal: Animal;
  dataMarcada: Date;
  registro: string;
  realizado: boolean;
  retorno: boolean;
  consultaOrigem: Consulta;
  procedimento: Procedimento;
}
