import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Venda} from '../models/venda.model';

@Injectable()
export class VendasService {

  baseUrl = 'http://localhost:8080/api/auth/vendas';

  constructor(private http: HttpClient) {
  }

  getVendas() {
    return this.http.get<Venda[]>(this.baseUrl);
  }

  createVenda(venda) {
    return this.http.post<Venda>(this.baseUrl, venda);
  }

  public findOne(venda) {
    return this.http.get<Venda>(this.baseUrl + venda.id);
  }

  public deleteVenda(venda) {
    return this.http.delete(this.baseUrl + venda.id);
  }

}
