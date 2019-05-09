import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../models/animal.model';

@Injectable()
export class AnimaisService {

  baseUrl = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {
  }

  getAnimais() {
    return this.http.get<Animal[]>(this.baseUrl + 'animais');
  }

  createAnimal(animal) {
    return this.http.post<Animal>(this.baseUrl, animal);
  }

  public findOne(animal) {
    return this.http.get<Animal>(this.baseUrl + animal.id);
  }

  public updateAnimal(animal) {
    return this.http.put(this.baseUrl + animal.id, animal);
  }

  public deleteAnimal(animal) {
    return this.http.delete(this.baseUrl + animal.id);
  }

}
