import { Consulta } from "./consulta.model";

export class Retorno extends Consulta {

    constructor() {
        super();
        this.realizado = false;
        this.retorno = true;
        this.consultaOrigem = new Consulta();
    }
} 