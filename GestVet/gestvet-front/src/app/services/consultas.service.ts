import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Consulta} from '../models/consulta.model';

@Injectable()
export class ConsultasService {

  baseUrl = 'http://localhost:8080/api/consultas';

  constructor(private http: HttpClient) {
  }

  getConsultas() {
    return this.http.get<Consulta[]>(this.baseUrl);
  }

  createConsulta(consulta) {
    return this.http.post<Consulta>(this.baseUrl, consulta);
  }

  public findOne(consulta) {
    return this.http.get<Consulta>(this.baseUrl + consulta.id);
  }

  public deleteConsulta(consulta) {
    return this.http.delete(this.baseUrl + consulta.id);
  }

}
