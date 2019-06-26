import { Medicamento } from "./medicamento.model";
import { Animal } from "./animal.model";
import { User } from "./user.component";

export class Venda {
  id: number;
  medicamento: Medicamento;
  animal: Animal;
  vendedor: User;
  quantidade: number;
  data: Date;
}
