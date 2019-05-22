import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medicamento} from '../models/medicamento.model';

@Injectable()
export class MedicamentoService {

  baseUrl = 'http://localhost:8080/api/auth/medicamentos/';

  constructor(private http: HttpClient) {
  }

  getMedicamentos() {
    return this.http.get<Medicamento[]>(this.baseUrl );
  }

  createMedicamento(medicamento) {
    return this.http.post<Medicamento>(this.baseUrl, medicamento);
  }

  public findOne(medicamento) {
    return this.http.get<Medicamento>(this.baseUrl + medicamento.id);
  }

  public updateMedicamento(medicamento) {
    return this.http.put(this.baseUrl + medicamento.id, medicamento);
  }

  public deleteMedicamento(medicamento) {
    return this.http.delete(this.baseUrl + medicamento.id);
  }

}
