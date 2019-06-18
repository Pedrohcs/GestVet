import { Animal } from './animal.model'
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
    consultaOrigem: Consulta;
    procedimento: Procedimento;
}