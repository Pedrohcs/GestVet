export enum Procedimento {
  BANHO = 'Banho',
  OUTROS = 'Outros',
  EXAME = 'Exame',
  ORTOPEDICO = 'Ortopédico',
  OFTAMOLOGICO = 'Oftamológico',
  ODONTOLOGICO = 'Odontológico',
  CIRURGICO = 'Cirúrgico',
  AMBULATORIO = 'Ambulatório',
  PARASITOLOGICO = 'Parasitológico',
  BIOQUIMICO = 'Bioquímico',
}

export namespace Procedimento {

  export function values() {
    return Object.keys(Procedimento).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
