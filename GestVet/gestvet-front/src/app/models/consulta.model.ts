import {Animal} from './animal.model'
export class Consulta {
    id: number;
    veterinario: any;
    animal: Animal;
    dataMarcada: Date;
    registro: string;
    realizado: Boolean;
    retorno: Boolean;
    consultaOrigem: Consulta;
    procedimento: any;
}