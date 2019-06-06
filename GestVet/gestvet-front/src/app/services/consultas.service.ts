import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Consulta} from '../models/consulta.model';
import { TokenStorage } from './token.storage';

@Injectable()
export class ConsultasService {

  baseUrl = 'http://localhost:8080/api/consultas';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()
  })

  constructor(private http: HttpClient, private token: TokenStorage) {
  }

  getConsultas() {
    return this.http.get<Consulta[]>(this.baseUrl, { headers: this.headers });
  }

  createConsulta(consulta) {
    return this.http.post<Consulta>(this.baseUrl, consulta, { headers: this.headers });
  }

  public findOne(consulta) {
    return this.http.get<Consulta>(this.baseUrl + consulta.id, { headers: this.headers });
  }

  public deleteConsulta(consulta) {
    return this.http.delete(this.baseUrl + consulta.id, { headers: this.headers });
  }

}
