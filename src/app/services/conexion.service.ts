import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  url: string;
  api: string;
  constructor(private http: HttpClient) {
    this.api = 'api/v1';
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations
  getCivilizations() {
    return this.http.get(`${this.api}/civilizations`).pipe(map((data: any) => data.civilizations));
  }
  //  https://age-of-empires-2-api.herokuapp.com/api/v1/units
  getUnits() {
    return this.http.get(`${this.api}/units`).pipe(map((data: any) => data.units));
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/structures
  getStructures() {
    return this.http.get(`${this.api}/structures`).pipe(map((data: any) => data.structures));
  }
  // https://age-of-empires-2-api.herokuapp.com/api/v1/technologies
  getTechnologies() {
    return this.http.get(`${this.api}/technologies`).pipe(map((data: any) => data.technologies));
  }
  // Busquedas
  // https://age-of-empires-2-api.herokuapp.com/api/v1/la_seccion_donde_vas_buscar/tu_busqueda
  getSearch(type: string, search: string) {
    return this.http.get(`${this.api}/${type}/${search}`);
  }



}
